import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import img1 from "@/assets/img/pricing/basic.png";
import img2 from "@/assets/img/pricing/standard.png";
import img3 from "@/assets/img/pricing/premium.png";

function pricing() {
  const pricingData = [
    {
      name: "basic",
      price: 30,
      description: "1 hour live session for one student.",
      offerings: [
        "Hands on Training",
        "1 x 1 hour Session",
        "3 Exercises",

        "24/7 Support",
      ],
      variant: "outline",
      purchaseLink: "https://buy.stripe.com/test_fZe16b8pKdeGgVy4gg",
      image: img1,
    },
    {
      name: "standard",
      price: 85,
      description: "3 Sessions, 1 hour each for one student.",
      offerings: [
        "Hands on Training",
        "3 x 1 hour Session",
        "15 Exercises",
        "Supporting Material",
        `Saving ${((5 / (30 * 3)) * 100).toFixed(2)}%`,
        "24/7 Support",
      ],
      purchaseLink: "https://buy.stripe.com/test_6oE2af49u2A2axa4gh",
      image: img2,
    },
    {
      name: "premium",
      price: 140,
      description: "5 Sessions, 1 hour each for one student.",
      offerings: [
        "Hands on Training",
        "5 x 1 hour Session",
        "20 Exercises",
        "Supporting Materials",
        `Saving ${((10 / (30 * 5)) * 100).toFixed(2)}%`,
        "24/7 Support",
      ],
      variant: "outline",
      purchaseLink: "https://buy.stripe.com/test_dR616bbBW5MeeNqeUW",
      image: img3,
    },
  ];

  return (
    <>
      <div className="">
        <div className="text-center">
          <p className="text-xl uppercase text-blue-600 font-semibold tracking-widest mb-3">
            Princing Plan
          </p>
          <h2 className="text-slate-900 font-black text-4xl md:text-6xl">
            Choose Affordable Prices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 py-24 gap-5 px-5">
          {pricingData.map((price, priceIdx) => (
            <Card key={priceIdx} className="flex flex-col hover:drop-shadow-2xl transition-all">
              <CardHeader className="flex flex-row justify-between items-center">
                <div>
                  <span className="capitalize text-slate-600 font-semibold text-xl">
                    {price.name}
                  </span>
                  <div className="flex justify-start items-end">
                    <span className="text-3xl text-slate-500">$</span>
                    <h2 className="text-4xl md:text-6xl font-black text-blue-500">
                      {price.price}
                    </h2>
                  </div>
                </div>
                <div className="w-36">
                  <Image src={price.image} alt="Pricing Image" />
                </div>
              </CardHeader>
              <hr className="w-[90%] mx-auto" />
              <CardContent className="">
                <p className="text-lg text-slate-500 mt-5 mb-12">
                  {price.description}
                </p>
                <div className="flex flex-col gap-3">
                  {price.offerings.map((offer, offerIdx) => (
                    <div className="flex gap-2" key={offerIdx}>
                      <span className="text-blue-500">&#10003;</span>
                      <p key={offerIdx} className="text-slate-800 text-lg">
                        {offer}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-8 items-end">
                <Link href={price.purchaseLink} target="_blank">
                  <Button>Purchase Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default pricing;
