"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./darkModeToggler";
import { motion } from "motion/react";

const Navbar = () => {
  const currentPath = usePathname();
  const [toggler, setToggler] = useState(false);

  const setToggle = () => {
    setToggler(!toggler);
  };
  return (
    <nav className="z-50 w-full h-fit fixed top-0 overflow-hidden bg-[#127A88] px-10">
      <div className="container flex justify-between h-[12vh] items-center">
        <div className="logo">
          <Link href={"/"}>
            <h4 className="text-2xl text-[#F59E18] tracking-tight font-bold">
              Portfolio <span className=" text-white uppercase">Website</span>
            </h4>
          </Link>
        </div>

        <div className="flex gap-x-10 items-center max-md:hidden">
          <Link
            href={"/"}
            className={
              currentPath === "/"
                ? "text-white font-semibold bg-black px-2 py-1 rounded-sm"
                : "text-white font-semibold hover:scale-110 transition"
            }
          >
            Home
          </Link>
          <Link
            href={"/my_Project"}
            className={
              currentPath === "/my_Project"
                ? "text-white font-semibold bg-black px-2 py-1 rounded-sm"
                : "text-white font-semibold hover:scale-110 transition"
            }
          >
            My Project
          </Link>
          <Link
            href={"/contact"}
            className={
              currentPath === "/contact"
                ? "text-white font-semibold bg-black px-2 py-1 rounded-sm"
                : "text-white font-semibold hover:scale-110 transition"
            }
          >
            Contact me
          </Link>
          <DarkModeToggle />
        </div>
        {/* responsive toggler */}
        <button
          onClick={() => setToggle(!toggler)}
          className="cursor-pointer hidden max-md:block"
        >
          {toggler ? (
            <X className="text-white bg-[#082c31] text-2xl rounded-sm w-9 h-8 hover:scale-110 transition" />
          ) : (
            <Menu className="text-white bg-[#082c31] text-2xl rounded-sm w-9 h-8 hover:scale-110 transition" />
          )}
        </button>
      </div>

      {toggler ? (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-5 space-y-2 slide-in-from-top-14"
        >
          <div className="block bg-[#1d8391] p-3 hover:bg-[#082c31] cursor-pointer transition duration-300">
            <Link
              href={"/"}
              className={
                currentPath === "/"
                  ? "text-white font-semibold bg-black px-2 py-1 rounded-sm"
                  : "text-white font-semibold"
              }
            >
              Home
            </Link>
          </div>
          <div className="block bg-[#1d8391] p-3 hover:bg-[#082c31] cursor-pointer transition duration-300">
            <Link
              href={"/my_Project"}
              className={
                currentPath === "/my_Project"
                  ? "text-white font-semibold bg-black px-2 py-1 rounded-sm"
                  : "text-white font-semibold"
              }
            >
              My Project
            </Link>
          </div>
          <div className="block bg-[#1d8391] p-3 hover:bg-[#082c31] cursor-pointer transition duration-300">
            <Link
              href={"/contact"}
              className={
                currentPath === "/contact"
                  ? "text-white font-semibold bg-black px-2 py-1 rounded-sm"
                  : "text-white font-semibold"
              }
            >
              Contact me
            </Link>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
