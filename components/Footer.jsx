import Link from "next/link";
import { Button } from "./ui/button";
import Share from "./share";

export default function Footer() {
  return (
    <footer className="dark:bg-black">
      <div className="text-center font-bold pt-20 pb-32 max-sm:w-[340px] max-sm:mx-auto">
        <h1 className="mb-5 max-sm:text-xl">
          Prepared to turn your ideas into <br /> reality? I'm here to help you
        </h1>

        <Link href={"/contact"}>
          <Button className="bg-[#F59E18] hover:bg-[#127A88] text-lg text-white transition rounded-full hover:scale-105">
            Contact me
          </Button>
        </Link>
      </div>

      <div className="bg-[#127A88] text-white md:flex md:justify-around md:items-center py-7 space-y-3 place-items-center">
        <Share />
        <p className="max-sm:text-sm">
          @copyright-Md.Nesad (Front end developer).
        </p>
      </div>
    </footer>
  );
}
