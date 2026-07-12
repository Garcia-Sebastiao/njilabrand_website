import { NjilaIllustration } from "@/app/assets/njila-illustration";
import { teamShape } from "@/app/assets/team-shape";

/* eslint-disable @next/next/no-img-element */
export function OurTeam() {
  return (
    <div className="w-full px-4 flex flex-col items-start gap-y-10 lg:gap-y-20 mx-auto max-w-6xl">
      <div className="w-full flex flex-col lg:flex-row gap-y-6 lg:gap-x-12 items-start lg:items-center">
        <h2 className="text-4xl lg:text-6xl text-nowrap font-black text-primary">
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

          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2">
              {Array.from({ length: 2 }).map((_, i) => {
                const desktopReverse = index % 2 === 1;
                const mobileReverse = i % 2 === 1;

                const descriptionOrder = mobileReverse
                  ? desktopReverse
                    ? "order-2 md:order-2"
                    : "order-2 md:order-1"
                  : desktopReverse
                    ? "order-1 md:order-2"  
                    : "order-1 md:order-1";

                const imageOrder = mobileReverse
                  ? desktopReverse
                    ? "order-1 md:order-1"
                    : "order-1 md:order-2"
                  : desktopReverse
                    ? "order-2 md:order-1"
                    : "order-2 md:order-2";

                return (
                  <div key={i} className="grid grid-cols-2">
                    <div
                      className={`col-span-1 flex items-center justify-center lg:p-6 ${descriptionOrder}`}
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
                      className={`col-span-1 group relative flex h-64 md:h-72 lg:h-80 items-center justify-center overflow-hidden rounded-3xl ${imageOrder}`}
                    >
                      <div
                        className={`flex h-full w-full items-center ${
                          i > 0
                            ? "[&>svg_*]:fill-primary"
                            : "[&>svg_*]:fill-secondary"
                        }`}
                      >
                        {teamShape}
                      </div>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-30 transition-transform duration-1000 group-hover:animate-spin [&>svg]:size-100 [&>svg_*]:fill-white [&>svg_*]:stroke-5">
                        {NjilaIllustration}
                      </div>

                      <img
                        src="/images/model-01.png"
                        alt="Person"
                        className="absolute top-10 left-0 z-10 w-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
