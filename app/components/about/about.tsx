/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { AboutItem } from "./about-item";
import { PlayCircle } from "lucide-react";
import { NjilaIllustration } from "@/app/assets/njila-illustration";

const aboutItems = [
  {
    id: "experience",
    title: "Years of Experience",
    description:
      "With over 10 years of experience in the industry, we have honed our skills and expertise to deliver exceptional results for our clients.",
    counter: 10,
  },
  {
    id: "clients",
    title: "Satisfied Clients",
    counter: 50,
    description:
      "We have had the privilege of working with a diverse range of clients, from small startups to large corporations, and have consistently delivered outstanding results.",
  },
  {
    id: "projects",
    title: "Completed Projects",
    counter: 100,
    description:
      "We have successfully completed over 100 projects, ranging from web development and design to digital marketing and branding, and have received numerous accolades for our work.",
  },
  {
    id: "partners",
    title: "Trusted Partners",
    counter: 20,
    description:
      "We have established strong partnerships with leading companies in the industry, allowing us to leverage their expertise and resources to deliver even greater value to our clients.",
  },
];

export function About() {
  const [isOpen, setIsOpen] = useState<string>("experience");

  return (
    <div id="about" className="w-full px-4 relative overflow-hidden bg-secondary pt-10 pb-24">
      <div className="absolute -top-80 -left-50 [&>svg]:size-250 [&_svg_*]:fill-white opacity-10">
        {NjilaIllustration}
      </div>

      <div className="w-full relative z-1 flex flex-col gap-y-14 mt-14 md:mt-24 lg:mt-14 mx-auto max-w-6xl">
        <div className="w-full flex flex-col lg:flex-row gap-x-12 items-start gap-y-6 lg:items-center">
          <h2 className="text-4xl lg:text-6xl text-nowrap font-black text-white/90">
            About Us
          </h2>

          <div className="h-1 bg-white w-44" />

          <p className="text-white/90">
            We are a team of passionate professionals dedicated to delivering
            exceptional results for our clients. We are a team of passionate
            professionals dedicated to delivering exceptional results for our
            clients.
          </p>
        </div>

        <div className="w-full flex-col-reverse lg:flex-row gap-y-6 flex gap-x-3">
          <div className="flex-1 max-w-240 h-148 relative rounded-4xl lg:min-w-140 overflow-hidden bg-gray-100">
            <img
              src="https://images.pexels.com/photos/5439476/pexels-photo-5439476.jpeg"
              alt="Team"
              className="w-full brightness-60 h-full object-cover"
            />

            <PlayCircle className="size-20 absolute stroke-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
          </div>

          <div className="flex flex-col gap-y-2">
            {aboutItems.map((item) => (
              <AboutItem
                isOpen={isOpen === item.id}
                onOpen={() => setIsOpen(item.id)}
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
