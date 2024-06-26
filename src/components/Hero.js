import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import img1 from "@/assets/img/hero/hero.png";


function Hero() {
  return (
    <div className=" mx-auto h-[85vh] px-5 py-0 flex flex-col lg:flex-row justify-center items-center gap-5">
      <div className="text-center md:text-left">
        <Badge variant="outline" className="rounded-md text-sm mb-4">Welcome to MyTutorsUnlimited.com</Badge>
        <h1 style={{lineHeight: "1"}} className="text-6xl 2xl:text-8xl text-center md:text-left tracking-tighter leading-none mb-6 text-slate-900 font-black">
        Personalized Online <span className="text-blue-500">Tutoring</span> Services
        </h1>
        <Link href={`#course`} aria-label="Find a Tutor"><Button className="px-10 py-6 text-md lg:text-lg mt-6">Find a Tutor</Button></Link>
      </div>
      <div className="w-full flex justify-center md:justify-end">
          <Image src={img1} alt="hero image" className="w-full max-w-xs md:max-w-md xl:max-w-2xl mt-0 md:-mt-16 lg:-mt-0" />
      </div>
    </div>
  );
}

export default Hero;
