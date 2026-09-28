"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const paragraph =
  "We create experiences that people remember, build brands they never forget, and turn ideas into meaningful experiences.";

const words = paragraph.split(" ");

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const color = useTransform(progress, range, ["#c9c5be", "#000000"]);
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

export default function RevealText() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const revealStart = 0.08;
  const revealEnd = 0.92;
  const span = revealEnd - revealStart;

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="max-w-3xl px-6 sm:px-10 mx-auto text-left">
          <p className="text-[clamp(24px,5vw,52px)] font-bold leading-[1.3] tracking-tight">
            {words.map((word, i) => {
              const start = revealStart + (i / words.length) * span;
              const end = revealStart + ((i + 1) / words.length) * span;
              return (
                <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
