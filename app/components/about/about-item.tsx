"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

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
    <motion.div
      layout
      transition={{
        layout: {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="min-w-100 hover:bg-white/5 cursor-pointer px-6 py-4 flex flex-col gap-y-6 rounded-4xl bg-white/10"
    >
      <div
        onClick={onOpen}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-x-4">
          <motion.h2
            layout
            animate={{
              fontSize: isOpen ? "3.75rem" : "2.25rem", // 60px / 36px
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-black pb-3 text-white"
          >
            {counter}
          </motion.h2>

          <motion.span
            layout
            animate={{
              fontSize: isOpen ? "1.875rem" : "1.25rem",
              lineHeight: isOpen ? "1" : "1.25rem",
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white font-medium max-w-34"
          >
            {title}
          </motion.span>
        </div>

        <motion.button
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ChevronDown className="text-white stroke-1 size-10" />
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.25,
              },
            }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              exit={{ y: 12 }}
              transition={{
                duration: 0.3,
              }}
              className="text-white max-w-100 text-lg"
            >
              {description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
