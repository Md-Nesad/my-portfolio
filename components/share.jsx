import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Share() {
  return (
    <div className="flex gap-6 text-[#F59E18]">
      <Link
        href={"https://www.linkedin.com/in/md-nesad-30b5bb286/"}
        target="blank"
        className="hover:scale-125 transition hover:bg-[#127A88] bg-[#F59E18] text-white rounded-full p-2"
      >
        <Linkedin />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/md-nesad-30b5bb286/"}
        target="blank"
        className="hover:scale-125 transition hover:bg-[#127A88] bg-[#F59E18] text-white rounded-full p-2"
      >
        <Facebook />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/md-nesad-30b5bb286/"}
        target="blank"
        className="hover:scale-125 transition hover:bg-[#127A88] bg-[#F59E18] text-white rounded-full p-2"
      >
        <Twitter />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/md-nesad-30b5bb286/"}
        target="blank"
        className="hover:scale-125 transition hover:bg-[#127A88] bg-[#F59E18] text-white rounded-full p-2"
      >
        <Instagram />
      </Link>

      <Link
        href={"https://github.com/Md-Nesad?tab=repositories"}
        target="blank"
        className="hover:scale-125 transition hover:bg-[#127A88] bg-[#F59E18] text-white rounded-full p-2"
      >
        <Github />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/md-nesad-30b5bb286/"}
        target="blank"
        className="hover:scale-125 transition hover:bg-[#127A88] bg-[#F59E18] text-white rounded-full p-2"
      >
        <Youtube />
      </Link>
    </div>
  );
}
