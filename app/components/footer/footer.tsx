import { NjilaLogo } from "@/app/assets/njilabrand-logo";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTikTok,
  AiFillBehanceSquare,
} from "react-icons/ai";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full flex flex-col gap-y-4 mt-20  max-w-6xl mx-auto">
      <div className="flex w-full items-center justify-between">
        <div className="[&>svg]:size-44">{NjilaLogo}</div>

        <ul className="flex items-center pl-32 gap-x-16">
          <Link href="#" className="text-blue-shade-dark font-semibold">
            Home
          </Link>
          <Link href="#" className="text-blue-shade-dark font-semibold">
            About
          </Link>
          <Link href="#" className="text-blue-shade-dark font-semibold">
            Contact
          </Link>
        </ul>

        <div className="flex items-center gap-x-4">
          <AiFillInstagram className="size-8 text-blue-shade-dark" />
          <AiFillFacebook className="size-8 text-blue-shade-dark" />
          <AiFillTikTok className="size-8 text-blue-shade-dark" />
          <AiFillBehanceSquare className="size-8 text-blue-shade-dark" />
        </div>
      </div>

      <div className="w-full bg-blue-shade-dark h-px border-b" />

      <div className="w-full py-6 flex items-center justify-between">
        <span className="text-blue-shade-dark text-lg font-semibold">
          ©{new Date().getFullYear().toString()} Njilabrand
        </span>

        <span className="text-blue-shade-dark text-lg font-semibold">
          All rights reserved.
        </span>
      </div>
    </footer>
  );
}
