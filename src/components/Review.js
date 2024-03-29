import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper/modules";

import img1 from "@/assets/img/pencil.png";

function Review() {
  const reviews = [
    {
      reviewText:
        "Learning to write programs stretches your mind and helps you think better, creates a way of thinking about things that I think is helpful in all domains.",
      reviewHead: "Way of thinking",
      reviewerName: "Bill Gates",
      country: "Founder Microsoft",
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      starCount: 5,
    },
    {
      reviewText:
        "The programmers of tomorrow are the wizards of the future. You're going to look like you have magic powers compared to everybody else.",
      reviewHead: "Wizards of the future",
      reviewerName: "Mark Zuckerberg",
      country: "Founder Facebook",
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      starCount: 4,
    },
    {
      reviewText:
        "Everyone should learn how to program a computer because it teaches you how to think.",
      reviewHead: "Teaches you how to think",
      reviewerName: "Steve Jobs",
      country: "Founder Apple",
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      starCount: 5,
    },
    {
      reviewText:
        "The ability to code and understand the power of computing is crucial to success in today's hyper-connected world.",
      reviewHead: "Power of computing",
      reviewerName: "Sheryl Sandberg",
      country: "COO Meta Platforms",
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      starCount: 5,
    },
    {
      reviewText:
        "Coding has opened up a whole new world for me! I never thought I could create my own games and apps, but with this program, I did. It's like turning my imagination into reality. Coding is not just a skill; it's my superpower!",
      reviewHead: "Tuning my imagination",
      reviewerName: "Emma",
      country: "12 Years Old",
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      starCount: 5,
    },
    {
      reviewText:
        "I used to think computers were just for games, but now I know I can make my own games. Coding is like solving puzzles, and every time I figure something out, it feels awesome! Thanks to this program, I feel like I can do anything.",
      reviewHead: "I can do anything",
      reviewerName: "Alex",
      country: "10 Years Old",
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      starCount: 5,
    },
  ];

  return (
    <div className="container mx-auto relative py-32 px-5">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* <Image src={img1} /> */}
        <h2 className="text-center w-full lg:w-2/3 text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900">
          Inspiring <span className="text-blue-600">Quotes</span> from
          Successful individuals
        </h2>
      </div>
      <div className="slides relative mt-8 gap-5 cursor-pointer">
        <Swiper
          modules={[FreeMode, Navigation, Pagination, Autoplay]}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1921: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className=""
        >
          {reviews.map((review, reviewIdx) => {
            return (
              <SwiperSlide key={reviewIdx} className="py-20">
                <Card className="p-5 hover:drop-shadow-2xl">
                  <CardHeader>
                    <h3 className="review heading text-heading/80 text-2xl mb-2 font-semibold">
                      {review.reviewHead}
                    </h3>
                    <div className="mb-7 flex gap-2">
                      {Array.from({ length: review.starCount }, (_, index) => (
                        <FaStar key={index} className="text-yellow-600" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="text-text text-md mb-6 text-slate-600">
                    {review.reviewText}
                  </CardContent>
                  <CardFooter className="flex items-center gap-4">
                    <div>
                      <Image
                        src={review.image ? `${review.image}` : ""}
                        alt="Psylab Review"
                        height={50}
                        width={50}
                        loading="lazy"
                        className="rounded-full h-18 w-14 object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold">
                        {review.reviewerName}
                      </p>
                      <p className="text-slate-600 text-sm">{review.country}</p>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            );
          })}
          {/* <SwiperNavButtons /> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
