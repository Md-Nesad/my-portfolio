"use client";
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
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function LatestProject({ text }) {
  const ref = useRef(null); // Reference for the target div
  const isInView = useInView(ref, { once: true });
  return (
    <section className="py-28 md:flex md:justify-around md:items-center dark:bg-black">
      <div className="space-y-3 max-md:place-items-center text-center max-md:mb-10">
        <motion.div
          ref={ref}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 1.0,
          }}
          className="flex gap-4 items-center font-bold"
        >
          <Flame className="text-[#F59E18]" />
          <h1>Latest projects</h1>
        </motion.div>
        <motion.p
          ref={ref}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 1.0,
          }}
          className="pb-3"
        >
          These projects are made by <br /> React js, Next js and firebase.
        </motion.p>
        {/* conditionaly link to All project and contact page */}
        {text === "All project" ? (
          <motion.div
            ref={ref}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              duration: 1.0,
            }}
          >
            <Link href={"/my_Project"}>
              <Button
                ref={ref}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 1.0,
                }}
                className="rounded-full px-8 bg-[#F59E18] text-lg text-white hover:bg-[#127A88] hover:scale-105 transition"
              >
                {text}
              </Button>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            ref={ref}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              duration: 1.0,
            }}
          >
            <Link href={"/contact"}>
              <Button className="rounded-full px-8 bg-[#F59E18] text-lg text-white hover:bg-[#127A88] hover:scale-105 transition">
                {text}
              </Button>
            </Link>
          </motion.div>
        )}
      </div>

      <div>
        <Carousel className="w-full max-w-[815px] max-md:w-[340px] max-md:mx-auto">
          <CarouselContent className="gap-4 mx-auto w-[815px] max-md:w-[340px]">
            {/* maping latest project */}
            {allProjects.slice(0, 4).map((item) => (
              <Card key={item.id} className="dark:bg-white dark:text-black">
                <CardContent className=" w-[400px] max-md:w-[340px]">
                  <Badge className="bg-[#F59E18] text-black dark:text-white hover:bg-[#127A88] hover:text-white mt-3">
                    {item.badge}
                  </Badge>
                  <Image
                    className="my-4"
                    src={item.image}
                    alt="Slider"
                    priority={true}
                  />
                  <div className="text-center bg-gray-300 py-2 rounded">
                    <span className="text-xl font-semibold">{item.title}</span>
                    <p className="mt-4">{item.description.slice(0, 57)}....</p>
                  </div>
                </CardContent>
                <p className=" hidden max-sm:block text-center">
                  {item.id === 0
                    ? "1 of 4"
                    : item.id === 1
                    ? "2 of 4"
                    : item.id === 2
                    ? "3 of 4"
                    : item.id === 3
                    ? "4 of 4"
                    : ""}
                </p>
              </Card>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[#F59E18] hover:bg-[#127A88] hover:text-white max-sm:hidden" />
          <CarouselNext className="bg-[#F59E18] hover:bg-[#127A88] hover:text-white max-sm:hidden" />
        </Carousel>
      </div>
    </section>
  );
}
