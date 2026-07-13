"use client";

import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MenuIcon } from "lucide-react";
import { njila_shield } from "@/app/assets/njila-shield";
import { Menu } from "./menu";

gsap.registerPlugin(ScrollTrigger);

export const menuItems = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "services",
    label: "Services",
    href: "#services",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    id: "team",
    label: "Team",
    href: "#team",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    href: "#testimonials",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const floatingHeaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const header = headerRef.current;
    const floatingHeader = floatingHeaderRef.current;

    if (!header || !floatingHeader) return;

    // Header inicial
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

    // Estado inicial do floating header
    gsap.set(floatingHeader, {
      y: -80,
      opacity: 0,
      pointerEvents: "none",
    });

    ScrollTrigger.create({
      start: 80,

      onEnter: () => {
        gsap.to(floatingHeader, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          pointerEvents: "auto",
        });
      },

      onLeaveBack: () => {
        gsap.to(floatingHeader, {
          y: -80,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
          pointerEvents: "none",
        });
      },
    });
  }, []);

  return (
    <Fragment>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <header
        ref={headerRef}
        className="relative top-0 left-0 z-10 flex w-full items-center px-4 py-6"
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div className="rounded-full bg-white p-1">
            <div className="flex h-12 w-12 items-center justify-center">
              {njila_shield}
            </div>
          </div>

          <ul className="hidden items-center gap-x-16 pl-32 lg:flex">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-semibold text-white"
              >
                {item.label}
              </Link>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="lg:hidden"
          >
            <MenuIcon className="size-8 text-white" />
          </button>

          <button className="hidden cursor-pointer rounded-full bg-white px-8 py-2 text-sm font-bold transition-all hover:brightness-90 lg:flex">
            Contact-us
          </button>
        </nav>
      </header>

      {/* Floating Header */}
      <div
        ref={floatingHeaderRef}
        className="fixed left-0 top-10 z-2! flex w-full items-center justify-between px-4 lg:px-16"
      >
        <div className="rounded-full bg-white p-1">
          <div className="flex h-12 w-12 items-center justify-center">
            {njila_shield}
          </div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="cursor-pointer border-4 border-white bg-secondary px-3 lg:px-6 py-2"
        >
          <MenuIcon className="size-6 lg:size-8 text-white" />
        </button>
      </div>
    </Fragment>
  );
}
