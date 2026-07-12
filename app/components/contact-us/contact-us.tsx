import { njila_shield } from "@/app/assets/njila-shield";
import { ArrowRight } from "lucide-react";

export function ContactUs() {
  return (
    <div className="w-full px-4">
      <div className="w-full relative p-8 lg:p-16 overflow-hidden rounded-4xl  bg-blue-shade-dark max-w-6xl mx-auto">
        <div className="flex items-start gap-y-8 flex-col relative z-1">
          <h2 className="text-5xl lg:text-6xl text-white/90 max-w-130 font-black">
            ARE READY TO GROW?
          </h2>

          <p className="text-white/80 text-lg">
            Contact-us immediately and get ready to boost your business with
            Njila.
          </p>

          <button className="bg-white mt-4 text-blue-shade-dark flex items-center gap-x-6 px-3 py-2 font-bold rounded-full">
            <span className="pl-4 text-lg"> Build your Njila!</span>{" "}
            <div className="w-12 h-12 rounded-full bg-blue-shade-dark flex items-center justify-center">
              <ArrowRight className="size-7 text-white -rotate-45" />
            </div>
          </button>
        </div>

        <div className="w-80 lg:w-120 flex items-center -bottom-54 md:-bottom-34 justify-center h-80 lg:h-120 -right-44 md:-right-20 bg-white p-2 rounded-full absolute ">
          <div className=" flex items-center justify-center w-full h-full">
            {njila_shield}
          </div>
        </div>
      </div>
    </div>
  );
}
