"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ServiceItem({
  title,
  color,
}: {
  title: string;
  className?: string;
  color: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      className={`flex relative rounded-full overflow-hidden group/card p-6 items-center justify-center flex-col lg:flex-row gap-y-4 lg:justify-between bg-${color} transition-all`}
    >
      <h2 className="text-2xl text-center lg:text-left lg:text-4xl lg:pl-8 font-black text-white">
        {title}
      </h2>

      <button
        className={` flex lg:hidden transition-all cursor-pointer items-center gap-x-3 font-semibold rounded-full text-white`}
      >
        Discover more
        <ArrowRight className="size-6 transition-all -rotate-45 text-white" />
      </button>
      <button className="w-16 h-16 border-2 border-white group-hover/card:bg-white rounded-full hidden lg:flex items-center justify-center transition-all">
        <ArrowRight
          className={`size-10 group-hover:rotate-4 transition-all ${isHovered ? `text-${color} -rotate-45` : "text-white"}`}
        />
      </button>
    </Link>
  );
}
