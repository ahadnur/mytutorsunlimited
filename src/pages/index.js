import React from "react";

import FadeInOnScroll from "../../lib/FadeInOnScroll";

import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import OurService from "@/components/OurService";
import Review from "@/components/Review";
import Courses from "@/components/Courses";
import GetInTouch from "@/components/GetInTouch";
import FAQ from "@/components/FAQ";


export default function Home() {
  return (
    <div>
      <FadeInOnScroll>
        <Hero />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Banner />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <OurService />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Courses />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Review />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <FAQ />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <GetInTouch />
      </FadeInOnScroll>

    </div>
  );
}
