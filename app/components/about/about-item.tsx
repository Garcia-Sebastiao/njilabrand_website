import { ChevronDown } from "lucide-react";

export function AboutItem({
  title,
  description,
  counter,
  onOpen,
  isOpen,
}: {
  title: string;
  description: string;
  counter: number;
  onOpen: () => void;
  isOpen: boolean;
}) {
  return (
    <div className="min-w-100 hover:bg-white/5 cursor-pointer transition-all px-6 py-4 flex flex-col gap-y-6 rounded-4xl bg-white/10">
      <div
        onClick={onOpen}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-x-4">
          <h2
            className={`font-black pb-3 text-white  ${isOpen ? "text-6xl" : "text-4xl"}`}
          >
            {counter}
          </h2>
          <span
            className={` text-white font-medium max-w-34  ${isOpen ? "text-3xl leading-none" : "text-xl leading-5"}`}
          >
            {title}
          </span>
        </div>

        <button>
          <ChevronDown className="text-white stroke-1 size-10" />
        </button>
      </div>

      {isOpen && <p className="text-white max-w-100 text-lg">{description}</p>}
    </div>
  );
}
