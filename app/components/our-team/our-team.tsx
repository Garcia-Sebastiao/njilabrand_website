import { NjilaIllustration } from "@/app/assets/njila-illustration";
import { teamShape } from "@/app/assets/team-shape";

/* eslint-disable @next/next/no-img-element */
export function OurTeam() {
  return (
    <div className="w-full flex flex-col items-start gap-y-20 mx-auto max-w-6xl">
      <div className="w-full flex gap-x-12 items-center">
        <h2 className="text-6xl text-nowrap font-black text-primary">
          Our <span className="text-secondary">Team</span>
        </h2>

        <div className="h-1 bg-blue-shade-dark w-44" />

        <p className="text-blue-shade-dark">
          We are a team of passionate professionals dedicated to delivering
          exceptional results for our clients.
        </p>
      </div>

      <div className="w-full">
        {Array.from({ length: 4 }).map((_, index) => {
          const reverse = index % 2 === 1;

          return (
            <div key={index} className="grid grid-cols-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="grid grid-cols-2">
                  <div
                    className={`col-span-1 flex items-center justify-center p-6 ${
                      reverse ? "order-2" : "order-1"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <h2 className="text-blue-shade-dark font-black text-2xl">
                        Crisvan
                      </h2>
                      <span className="text-blue-shade-dark text-lg">
                        CEO & Founder
                      </span>
                    </div>
                  </div>

                  <div
                    className={`col-span-1 flex overflow-hidden  items-center justify-center relative h-80 rounded-3xl   ${
                      reverse ? "order-1" : "order-2"
                    }`}
                  >
                    <div
                      className={`w-full h-full flex items-center ${i > 0 ? "[&>svg_*]:fill-primary" : "[&>svg_*]:fill-secondary"}`}
                    >
                      {teamShape}
                    </div>

                    <div className="absolute opacity-30 [&>svg_*]:fill-white [&>svg_*]:stroke-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [&>svg]:size-100 rotate-45">
                      {NjilaIllustration}
                    </div>

                    <img
                      src="/images/model-01.png"
                      alt="Person"
                      className="w-full absolute top-10  left-0 z-10"
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
