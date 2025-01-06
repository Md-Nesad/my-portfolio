"use client";

import { allProjects } from "@/data/allProjects";
import { Circle } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function SinglePorject() {
  const { project } = useParams();

  const singleProject = allProjects.find((pro) => pro.title === project);
  console.log(singleProject);
  return (
    <div className="mt-20 pb-36 pt-10 dark:bg-black">
      <h1 className="font-bold text-center">Review of {singleProject.name}</h1>

      <div className="flex justify-evenly items-center mt-20 ">
        {/* image */}
        <div>
          <Image
            className="h-[350px] rounded-md drop-shadow-2xl hover:scale-105 transition opacity-70 hover:opacity-100 dark:opacity-100 scale-110"
            src={singleProject.image}
            alt={singleProject.badge}
            width={500}
            priority={true}
          />
        </div>

        {/* description */}
        <div className="space-y-3">
          <div className="flex gap-4 items-center">
            <h1 className="border-b-2 font-bold border-gray-400 pb-5">
              Name: "{singleProject.title}"
            </h1>
          </div>

          <div className="w-96 space-y-2">
            <div className="flex gap-4 items-center">
              <Circle
                size={18}
                className="text-orange-400 bg-orange-400 rounded-full"
              />
              <p className="text-xl">Technology:</p>
            </div>
            <p className="ml-9 dark:text-orange-400">{singleProject.badge}</p>
          </div>

          <div className="w-96 space-y-2">
            <div className="flex gap-4 items-center">
              <Circle
                size={18}
                className="text-orange-400 bg-orange-400 rounded-full"
              />
              <p className="text-xl">Tools and packages:</p>
            </div>
            <p className="ml-9 dark:text-orange-400">{singleProject.badge}</p>
          </div>

          <div className="w-96 space-y-2">
            <div className="flex gap-4 items-center">
              <Circle
                size={18}
                className="text-orange-400 bg-orange-400 rounded-full"
              />
              <p className="text-xl">Description:</p>
            </div>
            <p className="ml-9 dark:text-orange-400">
              {singleProject.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
