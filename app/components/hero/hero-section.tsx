/* eslint-disable @next/next/no-img-element */
import { Header } from "./header";
import { spark } from "@/app/assets/spark";
import Marquee from "react-fast-marquee";
import { NjilaIllustration } from "@/app/assets/njila-illustration";

const services = [
  "UX-UI Design",
  "Branding",
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "SEO Optimization",
  "Content Creation",
  "Social Media Management",
  "E-commerce Solutions",
];

export function Hero() {
  return (
    <div className="w-full">
      <div className="w-full pb-48 overflow-hidden relative bg-primary">
        <Header />

        <div className="mx-auto relative z-10 space-y-12 max-w-6xl mt-10 w-full">
          <div className="flex relative justify-between items-center gap-x-6 w-full">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="font-normal text-white">Happy Customers</span>
              </div>

              <div className="w-20 h-px bg-white" />

              <span className="text-white font-normal max-w-64">
                Our approach is centered around understanding your unique needs
                and delivering tailored solutions that exceed expectations.
              </span>
            </div>

            <h1 className="text-[6.8rem] leading-none font-black text-white text-center">
              NJILA <br /> <span>BRAND</span>
            </h1>

            <div className="flex flex-col gap-y-6">
              <div className="flex py-2 px-3 mt-6 rounded-full border-2 border-white/70 self-start items-center">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-14 h-14 rounded-full overflow-hidden border-4 border-white ${index > 0 ? "-ml-4" : ""}`}
                  >
                    <img
                      src="https://images.pexels.com/photos/9467687/pexels-photo-9467687.jpeg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="ml-6">
                <div className=" [&>svg]:size-16 ml-8 opacity-50">{spark}</div>
                <div className="[&>svg]:size-10 opacity-50">{spark}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1 overflow-hidden h-90 rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3230258/pexels-photo-3230258.jpeg"
                style={{
                  objectPosition: "center 5%",
                }}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 overflow-hidden h-90 rounded-2xl">
              <img
                src="https://images.pexels.com/photos/35931373/pexels-photo-35931373.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute -top-80 -right-50 [&_svg_*]:fill-white opacity-15">
          {NjilaIllustration}
        </div>
      </div>

      <div className="w-full relative">
        <div className="w-[calc(100%+2rem)] absolute bottom-0 h-24 flex items-center justify-center rotate-4 bg-white">
          <Marquee speed={80}>
            {services.map((service, index) => (
              <div key={index} className="flex items-center h-full gap-x-6">
                <span className="font-black text-[#250638]/80 overflow-hidden pl-10 text-5xl">
                  {service}
                </span>

                <div className="[&>svg]:size-10 opacity-50 [&>svg>path]:fill-gray-400/50">
                  {spark}
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="w-full absolute bottom-0 h-25 flex items-center justify-center mt-24 -rotate-2 bg-white">
          <Marquee direction="right" speed={80}>
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-x-6">
                <span className="font-black text-[#250638]/80 overflow-hidden pl-10 text-5xl">
                  {service}
                </span>

                <div className="[&>svg]:size-10 opacity-50 [&>svg>path]:fill-gray-400/50">
                  {spark}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
