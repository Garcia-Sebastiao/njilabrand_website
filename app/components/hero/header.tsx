"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { njila_shield } from "@/app/assets/njila-shield";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const header = headerRef.current;

    if (!header) return;

    gsap.fromTo(
      header,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full relative z-999! top-0 left-0 flex py-6 items-center transition-colors duration-300"
    >
      <nav className="w-full flex items-center justify-between max-w-6xl mx-auto">
        <div className="p-1 rounded-full bg-white">
          <div className="w-12 h-12 flex items-center justify-center">
            {njila_shield}
          </div>
        </div>

        <ul className="flex items-center pl-32 gap-x-16">
          <Link href="#" className="text-white text-sm font-semibold">
            Home
          </Link>

          <Link href="#" className="text-white text-sm font-semibold">
            About
          </Link>

          <Link href="#" className="text-white text-sm font-semibold">
            Contact
          </Link>
        </ul>

        <button className="bg-white transition-all hover:brightness-90 cursor-pointer text-sm px-8 py-2 font-bold rounded-full">
          Contact-us
        </button>
      </nav>
    </header>
  );
}
