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
      >
        <Linkedin />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/md-nesad-30b5bb286/"}
        target="blank"
      >
        <Facebook />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/md-nesad-30b5bb286/"}
        target="blank"
      >
        <Twitter />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/md-nesad-30b5bb286/"}
        target="blank"
      >
        <Instagram />
      </Link>

      <Link
        href={"https://github.com/Md-Nesad?tab=repositories"}
        target="blank"
      >
        <Github />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/md-nesad-30b5bb286/"}
        target="blank"
      >
        <Youtube />
      </Link>
    </div>
  );
}
