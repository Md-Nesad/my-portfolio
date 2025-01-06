import Link from "next/link";
import { Button } from "./ui/button";
import Share from "./share";

export default function Footer() {
  return (
    <footer className="dark:bg-black">
      <div className="text-center font-bold pt-20 pb-32">
        <h1 className="mb-5">
          Prepared to turn your ideas into <br /> reality? I'm here to help you
        </h1>

        <Link href={"/contact"}>
          <Button className="bg-[#F59E18] hover:bg-[#127A88] text-lg transition rounded-full">
            Contact me
          </Button>
        </Link>
      </div>

      <div className="bg-[#127A88] text-white place-items-center py-10 space-y-4">
        <Share />
        <p>@copyright-Md.Nesad (Front end developer)</p>
      </div>
    </footer>
  );
}
