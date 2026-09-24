"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = ["We", "create", "experiences", "That", "people", "remember"];

function getKeyframes(index: number) {
  const count = words.length;
  const start = index / count;
  const end = (index + 1) / count;
  const easeStart = Math.max(0, start - 0.06);
  const easeEnd = Math.min(1, end + 0.06);
  return [easeStart, start + 0.02, end - 0.02, easeEnd];
}

export default function RevealText() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const k0 = getKeyframes(0);
  const k1 = getKeyframes(1);
  const k2 = getKeyframes(2);
  const k3 = getKeyframes(3);
  const k4 = getKeyframes(4);
  const k5 = getKeyframes(5);

  const o0 = useTransform(scrollYProgress, k0, [0, 1, 1, 1]);
  const o1 = useTransform(scrollYProgress, k1, [0, 1, 1, 1]);
  const o2 = useTransform(scrollYProgress, k2, [0, 1, 1, 1]);
  const o3 = useTransform(scrollYProgress, k3, [0, 1, 1, 1]);
  const o4 = useTransform(scrollYProgress, k4, [0, 1, 1, 1]);
  const o5 = useTransform(scrollYProgress, k5, [0, 1, 1, 1]);

  const b0 = useTransform(useTransform(scrollYProgress, k0, [8, 0, 0, 0]), (v) => `blur(${v}px)`);
  const b1 = useTransform(useTransform(scrollYProgress, k1, [8, 0, 0, 0]), (v) => `blur(${v}px)`);
  const b2 = useTransform(useTransform(scrollYProgress, k2, [8, 0, 0, 0]), (v) => `blur(${v}px)`);
  const b3 = useTransform(useTransform(scrollYProgress, k3, [8, 0, 0, 0]), (v) => `blur(${v}px)`);
  const b4 = useTransform(useTransform(scrollYProgress, k4, [8, 0, 0, 0]), (v) => `blur(${v}px)`);
  const b5 = useTransform(useTransform(scrollYProgress, k5, [8, 0, 0, 0]), (v) => `blur(${v}px)`);

  const y0 = useTransform(scrollYProgress, k0, [20, 0, 0, 0]);
  const y1 = useTransform(scrollYProgress, k1, [20, 0, 0, 0]);
  const y2 = useTransform(scrollYProgress, k2, [20, 0, 0, 0]);
  const y3 = useTransform(scrollYProgress, k3, [20, 0, 0, 0]);
  const y4 = useTransform(scrollYProgress, k4, [20, 0, 0, 0]);
  const y5 = useTransform(scrollYProgress, k5, [20, 0, 0, 0]);

  const opacities = [o0, o1, o2, o3, o4, o5];
  const blurFilters = [b0, b1, b2, b3, b4, b5];
  const ys = [y0, y1, y2, y3, y4, y5];

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center bg-white overflow-hidden">
        <div className="max-w-5xl px-6 text-center uppercase font-black tracking-tight sm:px-10">
          <p className="mb-6 text-[clamp(28px,8vw,96px)] sm:mb-12">
            {words.slice(0, 3).map((word, i) => (
              <motion.span
                key={i}
                style={{
                  opacity: opacities[i],
                  filter: blurFilters[i],
                  y: ys[i],
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <p className="text-[clamp(28px,8vw,96px)] text-black">
            {words.slice(3).map((word, i) => (
              <motion.span
                key={i + 3}
                style={{
                  opacity: opacities[i + 3],
                  filter: blurFilters[i + 3],
                  y: ys[i + 3],
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
