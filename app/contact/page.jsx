"use client";

import Image from "next/image";
import light from "@/public/illustration-light.svg";
import dark from "@/public/illustration-dark.svg";
import { ArrowRight, Handshake, House, Mail, Phone } from "lucide-react";
import Share from "@/components/share";
import { useState } from "react";
import { AlertDialogDemo } from "@/components/alert";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="mt-20 text-black dark:text-white dark:bg-black">
      {/* top area */}
      <div className="sm:flex pt-20 items-center justify-around max-sm:place-items-center max-sm:space-y-20">
        {/* text */}
        <div className="space-y-4 text-lg">
          <div className="flex gap-3 items-center text-[#F59E18]">
            <ArrowRight />
            <p>Say Hello</p>
            <Handshake />
          </div>
          <h1 className=" leading-10">
            Let's Work <br /> Together.
          </h1>
          <p className="md:w-[300px] sm:w-52 max-sm:w-[300px] leading-6">
            Providing best quality services give me a lot of confident to work
            hard and bring success in my role.
          </p>
        </div>

        {/* image */}
        <div className="max-md:w-[350px]">
          <Image
            className=" dark:hidden"
            src={light}
            alt="contact"
            priority={true}
          />
          <Image
            className=" dark:block hidden"
            src={dark}
            alt="contact"
            priority={true}
          />
        </div>
      </div>

      {/* bottom area */}
      <div className="md:flex pt-36 py-64 md:justify-around md:items-center max-md:place-items-center">
        {/* contact information */}
        <div className="space-y-6 text-xl max-sm:text-lg max-md:mb-10 ">
          <div className="flex gap-4 items-center">
            <Mail className="text-[#F59E18] max-sm:text-xs" />
            <p>nesadm26@gmail.com</p>
          </div>

          <div className="flex gap-4 items-center max-sm:w-[350px]">
            <House className="text-[#F59E18]" />
            <p>5140 Hajipara, Thakurgaon, Bangladesh.</p>
          </div>

          <div className="flex gap-4 items-center">
            <Phone className="text-[#F59E18]" />
            <p>+8801300113023</p>
          </div>
        </div>

        {/* form */}
        <div className="space-y-5 text-xl border dark:text-black">
          <input
            className="w-[450px] max-sm:w-[350px] h-12 pl-5 rounded-full focus:outline-none dark:bg-white dark:placeholder:text-black"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />{" "}
          <br />
          <input
            className="w-[450px] max-sm:w-[350px] h-12 pl-5 rounded-full focus:outline-none dark:bg-white dark:placeholder:text-black"
            type="text"
            placeholder="Email"
          />{" "}
          <br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-[450px] max-sm:w-[350px] pb-20 text-balance whitespace-pre-line pt-4 px-5  rounded-3xl focus:outline-none dark:bg-white dark:placeholder:text-black"
            placeholder="Type your message......"
          />
          <br />
          {/* passing data */}
          <AlertDialogDemo
            name={name}
            setname={setName}
            message={message}
            setmessage={setMessage}
          />
        </div>
      </div>

      <div className="bg-[#127A88] text-white place-items-center py-10 space-y-4 fixed bottom-0 w-full">
        <Share />
        <p>@copyright-Md.Nesad (Front end developer)</p>
      </div>
    </section>
  );
}
