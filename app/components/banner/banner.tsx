import { njila_shield } from "@/app/assets/njila-shield";
import { ArrowRight } from "lucide-react";

export function Banner() {
  return (
    <div className="w-full py-24 bg-blue-shade-dark flex items-center justify-center">
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex flex-col items-center">
          <h2 className="text-8xl text-white/90 font-black">YEDIKA</h2>

          <div className="flex items-center gap-x-8">
            <h2 className="text-8xl text-white/90 font-black">
              NJILA <span className="">YE</span>
            </h2>

            <div className="p-1 rounded-full bg-white/90">
              <div className="w-28 h-28  flex items-center justify-center">
                {njila_shield}
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/80 text-lg">
          Start you journey now with Njilabrand and make your life easy.
        </p>

        <button className="bg-white mt-4 text-blue-shade-dark flex items-center gap-x-6 px-3 py-2 font-bold rounded-full">
         <span className="pl-4 text-lg"> Build your Njila!</span>{" "}
          <div className="w-12 h-12 rounded-full bg-blue-shade-dark flex items-center justify-center">
            <ArrowRight className="size-7 text-white -rotate-45" />
          </div>
        </button>
      </div>
    </div>
  );
}
