import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import dashboard from "@/public/dashboard.png";
import movieApp from "@/public/movie App.png";
import ECommerce from "@/public/Ecommerce.png";
import Image from "next/image";
import { Flame } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function LatestProject({ text }) {
  const projects = [
    {
      id: 0,
      badge: "React js",
      image: ECommerce,
      title: "E-commerce APP",
      description:
        "This is a E-commerce. Technology used react js, redux and firebase",
    },
    {
      id: 1,
      badge: "React js",
      image: movieApp,
      title: "Movie APP",
      description: "This is a movie app using an external API called Movie API",
    },

    {
      id: 2,
      badge: "Next js",
      image: dashboard,
      title: "Dashboard APP",
      description:
        "This is a dashboard app with shadcn/ui and server side rendering",
    },
  ];

  return (
    <section className="py-28 flex justify-around items-center dark:bg-black">
      <div className="space-y-3">
        <div className="flex gap-4 items-center">
          <Flame className="text-orange-400" />
          <h1>Latest project</h1>
        </div>
        <p className="pb-3">
          These projects are made by <br /> React js, Next js and firebase.
        </p>
        {/* conditionaly link to All project and contact page */}
        {text === "All project" ? (
          <>
            <Link href={"/my_Project"}>
              <Button className="rounded-full px-8 bg-orange-400">
                {text}
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link href={"/contact"}>
              <Button className="rounded-full px-8 bg-orange-400">
                {text}
              </Button>
            </Link>
          </>
        )}
      </div>

      <div>
        <Carousel className="w-full max-w-[815px] ">
          <CarouselContent className="gap-4 mx-auto w-[815px] ">
            {/* maping latest project */}
            {projects.map((item) => (
              <Card key={item.id} className="dark:bg-white dark:text-black">
                <CardContent className=" w-[400px]">
                  <Badge className="bg-orange-400 mt-3">{item.badge}</Badge>
                  <Image className="my-4" src={item.image} alt="Slider" />
                  <div className="text-center bg-gray-300 py-2 rounded">
                    <span className="text-xl font-semibold">{item.title}</span>
                    <p className="mt-4">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
