import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"


import { BiGroup } from "react-icons/bi";
import {
  GoHome,
  GoStopwatch,
  GoSmiley,
  GoTrophy,
  GoBroadcast,
} from "react-icons/go";


function OurService() {
  const classesInfo = [
    {
      type: "Group classes or 1:1",
      description: "Choose what's the best for you",
      icon: <BiGroup />,
    },
    {
      type: "Teacher",
      description: "Choose your personal Guru from 500+ available mentors",
      icon: <GoSmiley />,
    },
    {
      type: "Online-class",
      description:
        "Classes are live and take place virtually; attend from anywhere",
      icon: <GoBroadcast />,
    },
    {
      type: "Schedule",
      description:
        "Classes happen 2-3 times per week, class duration is 60 min",
      icon: <GoStopwatch />,
    },
    {
      type: "24/7 Support",
      description: "We have tutors from different continents and different timezones. ",
      icon: <GoHome />,
    },
    {
      type: "Competition",
      description:
        "Take part in our hosted events to skill up and earn rewards",
      icon: <GoTrophy />,
    },
  ];
  return (
    <div className="mt-20 mb-48 py-10">

      <div className={`container mx-auto px-5 z-10`}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {classesInfo.map((info, infoIdx) => {
            return (
              <Card
                key={infoIdx}
                className="border p-5 flex flex-col md:flex-row justify-start items-start gap-6 bg-white shadow-xl rounded-md"
              >
                <CardHeader className="bg-slate-200 rounded-full p-3">
                  <span className="text-2xl font-extrabold text-slate-700">
                    {info.icon}
                  </span>
                </CardHeader>
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-slate-900">{info.type}</h3>
                  <p>{info.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurService;
