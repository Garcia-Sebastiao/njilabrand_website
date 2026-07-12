"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronUp } from "lucide-react";

import { njila_shield } from "@/app/assets/njila-shield";
import { menuItems } from "./header";

import {
  AiFillBehanceSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTikTok,
} from "react-icons/ai";

export function Menu({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const menu = menuRef.current;

    if (!menu) return;

    if (isOpen) {
      gsap.to(menu, {
        yPercent: 0,
        duration: 0.7,
        ease: "power4.out",
        pointerEvents: "auto",
      });

      menuRef.current?.classList.remove("-translate-y-full")
    } else {
      gsap.to(menu, {
        yPercent: -100,
        duration: 0.6,
        ease: "power4.in",
        pointerEvents: "none",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed top-0 left-0 z-999! flex h-dvh w-full -translate-y-full flex-col bg-secondary p-4 lg:p-16 lg:py-10"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-6">
          <button type="button" onClick={onClose}>
            <ChevronUp className="size-16 stroke-1 text-white" />
          </button>

          <button className="cursor-pointer rounded-full border-2 border-white bg-transparent px-8 py-2 text-sm font-bold text-white transition-all hover:brightness-90">
            Contact-us
          </button>
        </div>

        <div className="rounded-full bg-white p-1">
          <div className="flex h-18 w-18 items-center justify-center">
            {njila_shield}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-1 items-center justify-center">
        <ul className="flex flex-col items-center gap-y-8 lg:items-start">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="cursor-pointer text-4xl font-bold text-white transition-all hover:underline"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#"
            className="pt-10 text-2xl font-medium text-white underline lg:text-4xl"
          >
            Subscribe in our newslatter
          </Link>
        </ul>
      </div>

      <div className="flex w-full flex-col-reverse items-center justify-between gap-y-6 lg:flex-row">
        <span className="text-xl font-semibold text-white">
          ©{new Date().getFullYear()} Njilabrand. All rights reserved.
        </span>

        <div className="flex items-center gap-x-4">
          <AiFillInstagram className="size-10 text-white" />
          <AiFillFacebook className="size-10 text-white" />
          <AiFillTikTok className="size-10 text-white" />
          <AiFillBehanceSquare className="size-10 text-white" />
        </div>
      </div>
    </div>
  );
}
