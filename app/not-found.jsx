import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center dark:bg-black">
      <div className="text-center">
        <h1>Not Found</h1> <br />
        <p className="text-lg">Could not find requested resource</p> <br />
        <Link href="/">
          <Button className="rounded-full px-8 bg-[#F59E18] text-lg text-white hover:bg-[#127A88]">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
