import React from "react";
import Link from "next/link";
import Image from "next/image";

import minecraft from "@/assets/img/resources/minecraft.png";
import scratch from "@/assets/img/resources/scratch.png";
import makeCode from "@/assets/img/resources/make$code.png";
import code from "@/assets/img/resources/code.png";
import { Button } from "@/components/ui/button";


function resources() {
  const data = [
    {
      image: scratch,
      title: "Scratch",
      desc: "Scratch is a high-level block-based visual programming language and website aimed primarily at children as an educational tool, with a target audience of ages 8 to 16.",
      link: "https://scratch.mit.edu/",
    },
    {
      image: minecraft,
      title: "Minecraft",
      desc: "Engage students in game-based learning across the curriculum. Minecraft Education is a game-based platform that inspires creative, inclusive learning through play. Explore blocky words that unlock new ways to take on any subject or challenge.",
      link: "https://education.minecraft.net/en-us",
    },
    {
      image: makeCode,
      title: "Make & Code",
      desc: "Microsoft MakeCode is a free online learn-to-code platform where anyone can build games, code devices, and mod Minecraft!",
      link: "https://www.microsoft.com/en-us/makecode",
    },
    {
      image: code,
      title: "Code.org",
      desc: "Code.org® is an education innovation nonprofit dedicated to the vision that every student in every school has the opportunity to learn computer science as part of their core K-12 education.",
      link: "https://code.org/",
    },
  ];
  return (
    <div className="">
      <div className="resources py-14 relative">
        <h1
          style={{ lineHeight: "1.3" }}
          className="text-center w-full md:w-2/3 md:mx-auto text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-3"
        >
          Useful Resources for kid to practice Coding
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {data.map((d, dIdx) => {
            return (
              <div
                key={dIdx}
                className="border rounded-lg bg-white p-5 flex justify-between items-start flex-col hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-full h-72 mb-6">
                    <Image src={d.image} className="w-full h-full object-cover rounded-lg"/>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{d.title}</h2>
                  <p className="mb-4">{d.desc}</p>
                </div>
                <Link
                  href={d.link}
                  className=""
                  aria-label="Visit Site"
                >
                  <Button>Visit Site</Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default resources;
