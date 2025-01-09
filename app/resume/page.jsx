import Image from "next/image";
import wordPress from "@/public/wordpress resume.png";

export default function Resume() {
  return (
    <div className="mt-20 dark:bg-black py-20 place-items-center">
      <h1 className="text-center font-bold mb-10">My Resume</h1>

      <Image src={wordPress} alt="wordpress resume" width={900} />
    </div>
  );
}
