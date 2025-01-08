import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { allProjects } from "@/data/allProjects";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Flame } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function LatestProject({ text }) {
  return (
    <section className="py-28 md:flex md:justify-around md:items-center dark:bg-black">
      <div className="space-y-3 max-md:place-items-center max-md:mb-10">
        <div className="flex gap-4 items-center font-bold">
          <Flame className="text-[#F59E18]" />
          <h1>Latest projects</h1>
        </div>
        <p className="pb-3">
          These projects are made by <br /> React js, Next js and firebase.
        </p>
        {/* conditionaly link to All project and contact page */}
        {text === "All project" ? (
          <>
            <Link href={"/my_Project"}>
              <Button className="rounded-full px-8 bg-[#F59E18] text-lg text-white hover:bg-[#127A88]">
                {text}
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link href={"/contact"}>
              <Button className="rounded-full px-8 bg-[#F59E18] text-lg text-white hover:bg-[#127A88]">
                {text}
              </Button>
            </Link>
          </>
        )}
      </div>

      <div>
        <Carousel className="w-full max-w-[815px] max-md:w-[400px] max-md:mx-auto">
          <CarouselContent className="gap-4 mx-auto w-[815px] max-md:w-[400px]">
            {/* maping latest project */}
            {allProjects.slice(0, 4).map((item) => (
              <Card key={item.id} className="dark:bg-white dark:text-black">
                <CardContent className=" w-[400px]">
                  <Badge className="bg-[#F59E18] text-black dark:text-white hover:bg-[#127A88] hover:text-white mt-3">
                    {item.badge}
                  </Badge>
                  <Image className="my-4" src={item.image} alt="Slider" />
                  <div className="text-center bg-gray-300 py-2 rounded">
                    <span className="text-xl font-semibold">{item.title}</span>
                    <p className="mt-4">{item.description.slice(0, 57)}....</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[#F59E18] hover:bg-[#127A88]" />
          <CarouselNext className="bg-[#F59E18] hover:bg-[#127A88]" />
        </Carousel>
      </div>
    </section>
  );
}
