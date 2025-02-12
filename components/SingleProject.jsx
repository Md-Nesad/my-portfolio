"use client";
import React from "react";
import NotFound from "@/app/not-found";
import { allProjects } from "@/data/allProjects";
import { Circle, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SinglePorject() {
  const [more, setMore] = useState("");
  const { project } = useParams();

  const singleProject = allProjects.find((pro) => pro.title === project);
  if (!singleProject) {
    return <NotFound />;
  }
  return (
    <div className="mt-20 pb-36 pt-10 dark:bg-black max-md:place-items-center">
      <h1 className="font-bold text-center max-sm:text-lg max-sm:w-[340px]">
        Review of {singleProject.name}
      </h1>

      <div className="md:flex md:justify-evenly md:items-center mt-20 max-md:space-y-28">
        {/* image */}
        <div className="relative group w-[500px] max-sm:w-[340px] max-sm:mx-auto">
          <Image
            className="h-[350px] max-sm:h-[210px] rounded-md drop-shadow-2xl hover:scale-105 transition opacity-70 hover:opacity-100 dark:opacity-100 scale-110"
            src={singleProject.image}
            alt={singleProject.badge}
            priority={true}
            placeholder="blur"
          />
          <div className=" absolute top-[45%] left-[45%] opacity-0 group-hover:opacity-100 transition-opacity bg-[#F59E18] p-3 rounded-md text-white hover:bg-[#127A88]">
            <Link href={singleProject.link} title="Go live" target="blank">
              <ExternalLink />
            </Link>
          </div>
        </div>

        {/* description */}
        <div className="space-y-3 max-sm:w-[335px] max-sm:mx-auto max-sm:text-base">
          <div className="flex gap-4 items-center">
            <h1 className="border-b-2 font-bold border-gray-400 pb-5 max-sm:text-xl">
              Name: "{singleProject.title}"
            </h1>
          </div>

          <div className="w-96 max-sm:w-[340px] space-y-2">
            <div className="flex gap-4 items-center">
              <Circle
                size={18}
                className="text-orange-400 bg-orange-400 rounded-full"
              />
              <p className="text-xl max-sm:text-xl">Technology used :</p>
            </div>
            <p className="ml-9 text-lg max-sm:text-base dark:text-[#F59E18]">
              {singleProject.language}
            </p>
          </div>

          <div className="w-96 max-md:w-[500px] max-sm:w-[340px] space-y-2">
            <div className="flex gap-4 items-center">
              <Circle
                size={18}
                className="text-orange-400 bg-orange-400 rounded-full"
              />
              <p className="text-xl">Description:</p>
            </div>
            {/* condionaly rendering description here */}
            <p className="ml-9 dark:text-orange-400">
              {singleProject.description.slice(0, 71)}
              {more ? "" : "....."}
              {more &&
                singleProject.description
                  .slice(71)
                  .split("\n")
                  .map((line, i) => (
                    <React.Fragment key={i}>
                      {line.trim()}
                      <br />
                    </React.Fragment>
                  ))}{" "}
              <br />
              <button onClick={() => setMore(!more)} className=" underline">
                {more ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
