import { Button } from "@/components/ui/button";
import Image from "next/image";
import InnerImage from "@/public/developer.png";
import Link from "next/link";
import Share from "./share";

export default function Header() {
  return (
    <header className="h-[80vh] mt-20 md:p-20 py-10 pl-7 dark:bg-black">
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

          <div className="space-x-2">
            <Link href={"/contact"}>
              <Button>Contact me</Button>
            </Link>
            <Button>Download CV</Button>
          </div>
          <Share />
        </div>

        <div className="hidden sm:block md:dark:ring-1 md:dark:ring-white rounded-md">
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