import { Button } from "@/components/ui/button";
import Image from "next/image";
import InnerImage from "@/public/developer.png";
import Link from "next/link";
import Share from "./share";

export default function Header() {
  return (
    <header className="h-[60vh] md:h-[80vh] mt-20 md:p-20 py-10 pl-7 dark:bg-black">
      <div className="flex justify-around items-center">
        <div className=" space-y-3 md:space-y-4 ">
          <p>FRONT END DEVELOPER</p>
          <h1 className="sm:text-2xl md:text-3xl font-bold">
            Hello, My name is <br /> Md. Nesad
          </h1>
          <p>
            I am a skilled and professional <br /> Front End Developer with
            basic of backend.
          </p>

          <div className="space-x-4 pb-5 md:flex sm:space-y-2 md:space-y-0">
            <Link href={"/contact"}>
              <Button className="bg-[#F59E18] rounded-full md:text-lg hover:bg-[#127A88] transition dark:text-white hover:scale-105">
                Contact me
              </Button>
            </Link>
            <Button className="bg-[#F59E18] rounded-full md:text-lg hover:bg-[#127A88] transition dark:text-white hover:scale-105">
              Visit my CV
            </Button>
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
