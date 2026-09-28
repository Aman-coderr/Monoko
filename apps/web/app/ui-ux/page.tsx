"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import PageHero from "../components/PageHero";
import { processSteps } from "./data";

function DesktopCard({
  step,
  index,
  progress,
  total,
}: {
  step: (typeof processSteps)[0];
  index: number;
  progress: any;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(
    progress,
    index === 0 ? [0, 1] : [start, end],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );

  return (
    <motion.div
      style={{
        y,
        zIndex: index + 1,
      }}
      className="absolute inset-0 flex items-start justify-center px-12 pt-20"
    >
      <div className="w-full max-w-6xl rounded-3xl bg-white shadow-lg p-8">
        <div className="flex gap-10 items-center">
          <div className="relative w-[42%] h-[420px] overflow-hidden rounded-2xl">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <span className="text-orange-500 font-semibold text-lg">
              {step.id}
            </span>

            <h2 className="mt-3 text-5xl font-bold">
              {step.title}
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              {step.description}
            </p>

            <ul className="mt-8 space-y-4">
              {step.points.map((point) => (
                <li
                  key={point}
                  className="text-neutral-700"
                >
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WebsiteDevelopmentPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-[#f3f1ef]">
      {/* HERO */}

      <PageHero
        current="UI/UX"
        contentClassName="pb-8"
        breadcrumbClassName="mb-8"
        description="We design thoughtful digital experiences that look great, work seamlessly and deliver results"
        title={
          <>
            DESIGN THAT
            <br />
            <span className="text-orange-500">WORKS</span>
          </>
        }
      />

      {/* DESKTOP STACKING ANIMATION */}

      <section
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{
          height: `${processSteps.length * 100}vh`,
        }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {processSteps.map((step, index) => (
            <DesktopCard
              key={step.id}
              step={step}
              index={index}
              progress={scrollYProgress}
              total={processSteps.length}
            />
          ))}
        </div>
      </section>

      {/* TABLET + MOBILE NORMAL SCROLL */}

      <section className="lg:hidden px-5 pb-20">
        <div className="space-y-8">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-3xl p-5 shadow-sm"
            >
              <div className="relative h-[240px] rounded-2xl overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="text-orange-500 font-semibold block mt-5">
                {step.id}
              </span>

              <h2 className="text-2xl font-bold mt-2">
                {step.title}
              </h2>

              <p className="mt-4 text-neutral-600">
                {step.description}
              </p>

              <ul className="mt-5 space-y-2">
                {step.points.map((point) => (
                  <li key={point}>
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
