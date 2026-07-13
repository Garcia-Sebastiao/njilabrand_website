import { NjilaIllustration } from "@/app/assets/njila-illustration";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "./service-item";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    color: "blue-shade-dark",
    className: "bg-blue-shade-dark",
  },
  {
    id: "branding",
    title: "Branding",
    color: "blue-shade",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    color: "secondary",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    color: "primary",
  },
];

export function OurServices() {
  return (
    <div id="services" className="w-full relative px-4">
      <div className="absolute -top-100 -right-50 [&>svg]:size-200 opacity-10">
        {NjilaIllustration}
      </div>

      <div className="w-full relative flex flex-col items-center gap-y-10 lg:gap-y-20 z-1 max-w-6xl mx-auto">
        <div className="flex w-full justify-between flex-col lg:flex-row items-center gap-x-12">
          <h2 className="text-4xl lg:text-6xl text-center text-nowrap font-black text-secondary">
            Our <span className="text-primary">Services</span>
          </h2>

          <button 
            className={`transition-all cursor-pointer hover:brightness-90 hidden lg:flex items-center gap-x-3 px-8 py-3 font-semibold rounded-full bg-blue-shade text-white`}
          >
            Discover more
            <ArrowRight className="size-6 -rotate-45 text-white" />
          </button>
        </div>

        <div className="w-full flex flex-col gap-y-6">
          {services.map((service) => (
            <ServiceItem
              color={service?.color}
              key={service?.id}
              title={service?.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
