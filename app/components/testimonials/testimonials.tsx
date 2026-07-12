/* eslint-disable @next/next/no-img-element */
import { TestimonialsShape } from "@/app/assets/testimonials-shape";
import Marquee from "react-fast-marquee";

export function Testimonials() {
  return (
    <div className="w-full relative space-y-10">
      <div className="w-full relative flex flex-col gap-y-8 z-1 max-w-6xl mx-auto">
        <div className="w-full flex gap-x-12 items-center">
          <h2 className="text-6xl text-nowrap font-black text-blue-shade-dark">
            Trusted <span className="text-blue-shade">Clients</span>
          </h2>

          <div className="h-1 bg-blue-shade-dark w-44" />

          <p className="text-blue-shade-dark">
            We are a team of passionate professionals dedicated to delivering
            exceptional results for our clients.
          </p>
        </div>
      </div>

      <Marquee className="h-68! overflow-hidden" pauseOnHover speed={80}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="w-80 hover:scale-105 transition-all mr-4 relative h-54">
            <div
              className={`w-full flex h-full items-center justify-center ${index % 2 !== 0 ? "[&>svg_*]:fill-secondary" : ""}`}
            >
              {TestimonialsShape}
            </div>

            <div className="absolute flex items-center p-6 justify-center top-0 left-0 w-full h-full">
              <div className="flex flex-col gap-y-3 mt-5 items-start">
                <p className="text-white">
                  We are a team of passionate professionals dedicated to
                  delivering exceptional results for our clients.
                </p>

                <div className="flex items-center gap-x-2">
                  <div className="w-9 h-9 rounded-full bg-white p-0.5">
                    <img
                      src="https://images.pexels.com/photos/31735315/pexels-photo-31735315.jpeg"
                      alt="Avatar"
                      className="w-full h-full rounded-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-semibold text-white">
                      Marvin Washington
                    </h3>

                    <span className="text-sm text-white/90">Apple</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
