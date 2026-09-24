"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  Workflow,
} from "lucide-react";

const cards = [
  {
    title: "Website",
    subtitle: "Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: ArrowUpRight,
    className: "bg-[#ff6338]",
    rotation: -7,
    y: [-12, 22, -4, 16, -12],
    rotate: [-8, -5, -9, -4, -8],
    duration: 2.8,
    delay: 0,
  },
  {
    title: "Workflow",
    subtitle: "Automation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Workflow,
    className: "bg-[#55acee]",
    rotation: 0,
    y: [18, -8, 14, -18, 18],
    rotate: [1, -2, 3, -1, 1],
    duration: 2.53,
    delay: 0.6,
  },
  {
    title: "AI",
    subtitle: "Integration",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Bot,
    className: "bg-[#ffd12f]",
    rotation: 7,
    y: [-18, 8, -22, 4, -18],
    rotate: [6, 10, 5, 9, 6],
    duration: 3.07,
    delay: 0.25,
  },
  {
    title: "Business",
    subtitle: "Systems",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Boxes,
    className: "bg-[#e3aa8c]",
    rotation: 0,
    y: [14, -20, 5, -12, 14],
    rotate: [-1, 3, -2, 4, -1],
    duration: 2.67,
    delay: 0.85,
  },
];
export default function ServicesCardsSection() {
  return (
    <section className="relative overflow-hidden bg-[#171717] px-6 pt-24 pb-8 sm:px-10 sm:pb-10 md:px-12 md:pb-12 lg:px-16 lg:min-h-screen lg:py-20">

      {/* HEADING */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-[24px] sm:text-[27px] md:text-[31px] lg:text-[clamp(32px,5vw,68px)] font-medium uppercase leading-[1.05] tracking-[-0.05em] text-white">
          Reach the right{" "}
          <span className="text-[#ff5a1f]">
            audience.
          </span>
          <br />

          <span className="text-[#ff5a1f]">
            Drive real results.
          </span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="mx-auto mt-[30px] grid max-w-[1400px] grid-cols-2 items-center gap-8 sm:mt-9 sm:grid-cols-2 md:mt-10 lg:mt-24 lg:grid-cols-4 lg:gap-10">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              animate={{
                y: card.y,
                rotate: [
                  card.rotation - 1.5,
                  card.rotation + 1.5,
                  card.rotation - 1.5,
                ],
              }}
              transition={{
                duration: card.duration,
                delay: card.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto w-full max-w-[330px]"
            >
              <div
                className={`${card.className} relative aspect-[0.78/1] overflow-hidden rounded-[14px] p-4 text-[#171717] shadow-xl sm:p-6 lg:rounded-[20px] lg:p-7`}
              >
                {/* ICON */}
                <div className="flex h-[42%] items-start">
                  <Icon
                    strokeWidth={2.5}
                    className="h-20 w-20 text-white sm:h-24 sm:w-24"
                  />
                </div>

                {/* TEXT */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8">
                  <h3 className="text-[18px] sm:text-[21px] md:text-[23px] lg:text-[clamp(25px,2.5vw,38px)] font-semibold uppercase leading-[0.95] tracking-[-0.04em]">
                    {card.title}
                    <br />
                    {card.subtitle}
                  </h3>

                  <p className="mt-5 max-w-[240px] text-[9px] font-medium leading-[1.35] sm:text-[10px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
