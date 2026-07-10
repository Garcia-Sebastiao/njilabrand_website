import { njila_shield } from "@/app/assets/njila-shield";
import { ArrowRight } from "lucide-react";

export function ContactUs() {
  return (
    <div className="w-full relative p-16 overflow-hidden rounded-4xl flex items-start gap-y-8 flex-col bg-blue-shade-dark max-w-6xl mx-auto">
      <h2 className="text-6xl text-white/90 max-w-130 font-black">
        ARE READY TO GROW?
      </h2>

      <p className="text-white/80 text-lg">
        Contact-us immediately and get ready to boost your business with Njila.
      </p>

      <button className="bg-white mt-4 text-blue-shade-dark flex items-center gap-x-6 px-3 py-2 font-bold rounded-full">
        <span className="pl-4 text-lg"> Build your Njila!</span>{" "}
        <div className="w-12 h-12 rounded-full bg-blue-shade-dark flex items-center justify-center">
          <ArrowRight className="size-7 text-white -rotate-45" />
        </div>
      </button>

      <div className="w-120 flex items-center justify-center h-120 -right-56 bg-white p-2 rounded-full absolute ">
        <div className=" flex items-center justify-center w-full h-full">{njila_shield}</div>
      </div>
    </div>
  );
}
