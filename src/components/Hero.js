import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import img1 from "@/assets/img/hero/hero.png";


function Hero() {
  return (
    <div className="mt-[65px] container mx-auto h-screen px-5 py-10 flex flex-col lg:flex-row justify-center items-center gap-5">
      <div className="text-center md:text-left">
        <Badge variant="outline" className="rounded-md text-sm mb-4">Welcome to My Tutors Unlimited</Badge>
        <h1 style={{lineHeight: "1"}} className="text-6xl 2xl:text-8xl text-center md:text-left tracking-tighter leading-none mb-6 bg-clip-text text-transparent bg-slate-900 font-black">
        Personalized Online <span className="text-blue-500">Tutoring</span> Services
        </h1>
        {/* <p className="mb-5 text-slate-700 font-extralight w-full lg:w-3/4 lg:text-lg xl:text-xl text-center md:text-left">
        Embark on coding adventures with us! Fun,interactive lessons empower kids to create, learn, and master programming effortlessly in <strong>PYTHON, C, C++, JAVASCRIPT</strong>.
        </p> */}
        <Link href={`#course`}><Button className="px-10 text-md lg:text-lg mt-6">Find a Tutor</Button></Link>
      </div>
      <div className="w-full flex justify-center md:justify-end">
          <Image src={img1} alt="hero image 1" className="w-full max-w-xs md:max-w-md xl:max-w-2xl mt-0 md:-mt-16 lg:-mt-0" />
      </div>
    </div>
  );
}

export default Hero;
