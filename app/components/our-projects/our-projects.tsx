/* eslint-disable @next/next/no-img-element */
"use client";

import { NjilaIllustration } from "@/app/assets/njila-illustration";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const options = [
  {
    id: "design",
    label: "UI/UX Design",
  },
  {
    id: "marketing",
    label: "Marketing",
  },
  {
    id: "development",
    label: "Development",
  },
];

const gallery = [
  "https://cdn.dribbble.com/userupload/48311042/file/362a02c50499a4a085bc2d092100a39b.png?resize=1200x854&vertical=center",
  "https://cdn.dribbble.com/userupload/42761817/file/original-1acf23a713b03333c3928284c3bb423d.jpg?resize=1504x1128&vertical=center",
  "https://images.pexels.com/photos/29708251/pexels-photo-29708251.jpeg",
  "https://images.pexels.com/photos/29422453/pexels-photo-29422453.jpeg",
];

export function OurProjects() {
  const [projectList, setProjectList] = useState("design");

  return (
    <div className="w-full bg-blue-shade-dark overflow-hidden py-24 relative">
      <div className="absolute -top-50 -left-50 [&>svg]:size-280 [&_svg_*]:fill-white opacity-10">
        {NjilaIllustration}
      </div>

      <div className="w-full relative flex flex-col gap-y-8 z-1 max-w-6xl mx-auto">
        <div className="w-full flex gap-x-12 items-center">
          <h2 className="text-6xl text-nowrap font-black text-white/90">
            Our Projects
          </h2>

          <div className="h-1 bg-white w-44" />

          <p className="text-white/90">
            We are a team of passionate professionals dedicated to delivering
            exceptional results for our clients.
          </p>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            {options?.map((item) => (
              <button
                onClick={() => setProjectList(item?.id)}
                key={item?.id}
                className={` flex hover:bg-white hover:text-blue-shade-dark transition-all cursor-pointer items-center gap-x-3 px-8 py-3 font-semibold rounded-full ${item?.id == projectList ? "bg-white/90 text-blue-shade-dark" : "border text-white"}`}
              >
                {item?.label}
              </button>
            ))}
          </div>

          <button
            className={` flex hover:bg-white group hover:text-blue-shade-dark transition-all cursor-pointer items-center gap-x-3 px-8 py-3 font-semibold rounded-full border text-white`}
          >
            Discover more
            <ArrowRight className="size-6 group-hover:text-blue-shade-dark transition-all -rotate-45 text-white" />
          </button>
        </div>

        <div className="grid mt-10 grid-cols-2 gap-3">
          {gallery?.map((item, index) => (
            <div
              key={index}
              className="col-span-1 group cursor-pointer overflow-hidden h-120 rounded-[3.5rem]"
            >
              <img
                src={item}
                style={{
                  objectPosition: "center 5%",
                }}
                alt=""
                className="w-full h-full group-hover:scale-110 transition-all duration-700 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
