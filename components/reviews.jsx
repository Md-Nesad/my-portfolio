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
        <Star className="text-white bg-orange-500 rounded-full" />
        <h1 className="dark:text-white">Reviews</h1>
      </div>

      <div className="flex items-start justify-evenly">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-[360px] bg-gray-300 h-[250px] py-8 px-6 rounded-md drop-shadow-xl dark:bg-white dark:text-black"
          >
            <div className="flex items-center gap-3">
              <Image
                className=" ring-[3px] rounded-full ring-orange-300"
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