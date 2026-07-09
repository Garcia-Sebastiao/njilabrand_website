import { NjilaIllustration } from "@/app/assets/njila-illustration";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "./service-item";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    color: "blue-shade-dark",
    className: "blue-shade-dark",
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
    <div className="w-full relative">
      <div className="absolute -top-100 -left-50 [&>svg]:size-200 opacity-10">
        {NjilaIllustration}
      </div>

      <div className="w-full relative flex flex-col gap-y-20 z-10 max-w-6xl mx-auto">
        <div className="flex w-full justify-between items-center gap-x-12">
          <h2 className="text-6xl text-nowrap font-black text-secondary">
            Our <span className="text-primary">Services</span>
          </h2>

          <button className="bg-blue-shade text-white flex items-center gap-x-3 px-6 py-4 font-bold rounded-full">
            Discover more <ArrowRight className="size-6 rotate-3" />
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
