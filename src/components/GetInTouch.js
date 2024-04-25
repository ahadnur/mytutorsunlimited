import React from "react";
import Image from "next/image";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import train from "@/assets/img/social-media.png";

function GetInTouch() {
  return (
    <div className="py-20" id="contact">
      <div className="mx-auto px-5">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex-1 -mt-20">
            <Image src={train} alt="train" />
          </div>
          <div className="flex-1 mt-10 lg:mt-0">
            <h2 className="text-center lg:text-left w-full text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900">
              <span className="text-blue-600">Subscribe</span> Our Newsletter
            </h2>
            <p className="text-center lg:text-left text-base md:text-lg my-9 text-slate-600">
              Subscribe to our newsletter for exclusive updates and insider
              access to promotions, courses, and industry insights. Join our
              community today and stay ahead on your learning journey!
            </p>

            <div className="">
              <div className="flex flex-col justify-center gap-5 w-full max-w-lg items-center md:items-start">
                <Input type="email" placeholder="Enter your Email"  />
                <Button type="submit" className="w-full md:w-1/3" >Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
