import { Star } from "lucide-react";
import chef from "@/public/avatar-4.png";
import designer from "@/public/avatar-5.png";
import developer from "@/public/avatar-6.png";
import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      id: 0,
      name: "Alina Lupastin",
      title: "Chef",
      image: chef,
      description:
        "Nesad is very good and well skilled to his work. He knows his business and quick to response and deliver",
    },

    {
      id: 1,
      name: "Evelyn Anderson",
      title: "Interior Designer",
      image: designer,
      description:
        "Nesad is very good and well skilled to his work. He knows his business and quick to response and deliver",
    },

    {
      id: 2,
      name: "Richard Thompson",
      title: "Back-end developer",
      image: developer,
      description:
        "Nesad is very good and well skilled to his work. He knows his business and quick to response and deliver",
    },
  ];
  return (
    <section className="pb-28 dark:bg-black">
      <div className="flex gap-4 items-center font-bold pb-32 place-content-center">
        <Star className="text-white bg-[#F59E18] rounded-full" />
        <h1 className="dark:text-white">Reviews</h1>
      </div>

      <div className="md:flex md:items-start md:justify-evenly max-md:space-y-10 place-items-center">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="max-sm:w-[340px] max-md:w-[500px] md:w-[340px] h-[250px] py-8 px-6 rounded-md drop-shadow-xl bg-white dark:text-black"
          >
            <div className="flex items-center gap-3">
              <Image
                className=" ring-[3px] rounded-full ring-[#F59E18]"
                src={review.image}
                alt="reviews"
                width={70}
              />

              <div>
                <h1 className="text-2xl">{review.name}</h1>
                <span className="text-xs text-slate-500 font-bold">
                  {review.title}
                </span>
              </div>
            </div>

            <div className="text-center mt-8">
              <p>{review.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
