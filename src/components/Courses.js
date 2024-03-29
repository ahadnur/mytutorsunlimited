import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

import pythonKid from "@/assets/img/service/python.png";
import scratchKid from "@/assets/img/service/scratch.png";
import bulb from '@/assets/img/bulb.png'


function Courses() {
  const courses = [
    {
      name: "Python Programming",
      desc: "Learn python with our professional instructors.",
      img: pythonKid,
      level: "(Kids, Adult, Elder)",
      back: "#FFFCE5",
      link: "/pricing",
    },
    {
      name: "Elementary Math",
      desc: "Learn math in the easiest way possible..",
      img: scratchKid,
      level: "(Elementary Kids)",
      back: "#E5E2F2",
      link: "/pricing",
    },
  ];
  return (
    <div className="container mx-auto px-5 py-10 relative" id="course">
      <div className="mt-12">
        <div className="mb-10">
          <h1 className="text-center w-full text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-3">
            Awesome <span className="text-blue-600">Courses</span> For you
          </h1>
          <p className="w-full md:w-2/5 mx-auto text-center text-md md:text-lg text-slate-600">
            {" "}
            Ready to embark on a transformative learning journey? We pride
            ourselves on offering a diverse range of courses designed to empower
            and inspire.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          {courses.map((course, courseIdx) => (
            <Card
              key={courseIdx}
              className={`border-[1px] rounded-2xl border-slate-300 cursor-pointer w-full md:max-w-md flex-1`}
            >
              <div>
                <CardHeader className="w-full h-64 p-1">
                  <Image
                    src={course.img}
                    className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover object-center"
                    alt="Course Image"
                  />
                </CardHeader>
                <CardContent className="text-center py-8 px-2">
                  <CardTitle className=" font-bold text-xl text-slate-800 hover:underline">
                    {course.name}
                  </CardTitle>
                  <p className="mb-4 text-slate-600 font-semibold">
                    {course.level}
                  </p>
                  <p className="text-lg text-slate-600">{course.desc}</p>
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                  <Link href={course.link}>
                    <Button className="">Book Now</Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>

        <div className="absolute -top-20 left-1/2 -translate-x-1/2  -z-10">
          <Image src={bulb} />
        </div>
      </div>
    </div>
  );
}

export default Courses;
