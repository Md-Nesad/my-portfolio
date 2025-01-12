"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import InnerImage from "@/public/developer.png";
import Link from "next/link";
import Share from "./share";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, //each element will render after 03 sec.
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Header() {
  const TEXTS = [
    "H",
    "He",
    "Hell",
    "Hello",
    "Hello th",
    "Hello the",
    "Hello there!",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 500);
    //clear interval
    return () => clearInterval(intervalId);
  }, []);
  return (
    <header className="h-[60vh] md:h-[80vh] mt-20 md:p-20 py-10 pl-7 dark:bg-black">
      <div className="flex justify-around items-center">
        <div>
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="show"
            className=" space-y-3 md:space-y-4 "
          >
            <motion.p variants={textItem}>Front end developer</motion.p>
            <motion.h1
              variants={textItem}
              className="sm:text-2xl md:text-3xl font-bold"
            >
              {TEXTS[index]}
            </motion.h1>
            <motion.h1
              variants={textItem}
              className="sm:text-2xl md:text-3xl font-bold"
            >
              This is Md. Nesad.
            </motion.h1>
            <motion.p variants={textItem} className="pb-5">
              I am a skilled and professional <br /> Front End Developer with
              basic of backend.
            </motion.p>
          </motion.div>

          <div className="space-x-4 pb-5 md:flex sm:space-y-2 md:space-y-0">
            <Link href={"/contact"}>
              <Button className="bg-[#F59E18] rounded-full md:text-lg hover:bg-[#127A88] transition dark:text-white hover:scale-105">
                Contact me
              </Button>
            </Link>
            <Link href={"/resume"}>
              <Button className="bg-[#F59E18] rounded-full md:text-lg hover:bg-[#127A88] transition dark:text-white hover:scale-105">
                Visit my CV
              </Button>
            </Link>
          </div>
          <Share />
        </div>

        <div className="hidden sm:block md:dark:ring-1 md:dark:ring-[#ffd18d] rounded-md">
          <Image
            src={InnerImage}
            alt="innerImage"
            width={600}
            priority={true}
          />
        </div>
      </div>
    </header>
  );
}
