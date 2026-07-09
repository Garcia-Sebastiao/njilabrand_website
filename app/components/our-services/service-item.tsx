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
      className={`flex rounded-full group/card p-6 items-center justify-between bg-${color}`}
    >
      <h2 className="text-4xl pl-8 font-black text-white">{title}</h2>

      <button className="w-16 h-16 border-2 border-white group-hover/card:bg-white rounded-full flex items-center justify-center">
        <ArrowRight
          className={`size-10 group-hover:rotate-4 ${isHovered ? `text-${color} -rotate-45` : "text-white"}`}
        />
      </button>
    </Link>
  );
}
