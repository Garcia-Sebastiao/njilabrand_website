import { njila_shield } from "@/app/assets/njila-shield";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex py-8 items-center">
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

        <button className="bg-white text-sm px-8 py-2 font-bold rounded-full">
          Contact-us
        </button>
      </nav>
    </header>
  );
}
