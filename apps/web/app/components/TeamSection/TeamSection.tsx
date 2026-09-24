"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { members } from "./data";

export default function TeamSection() {
  const wrapperRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const newIndex = Math.min(
      Math.floor(progress * members.length),
      members.length - 1
    );
    setIndex(newIndex);
  });

  const member = members[index]!;

  return (
    <section
      ref={wrapperRef}
      id="about"
      className="relative scroll-mt-24"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 bg-[#F7F3EF] lg:flex lg:h-screen lg:items-center lg:overflow-y-auto">
        <div className="mx-auto block w-full max-w-7xl px-5 py-8 sm:px-10 sm:py-10 lg:grid lg:grid-cols-3 lg:gap-20 lg:py-0">

          {/* IMAGE — first on mobile, center on desktop */}

          <AnimatePresence mode="wait">
            <motion.div
              key={member.id}
              initial={{
                rotateY: 90,
                opacity: 0,
              }}
              animate={{
                rotateY: 0,
                opacity: 1,
              }}
              exit={{
                rotateY: -90,
                opacity: 0,
              }}
              transition={{
                duration: 1.0,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1200,
              }}
              className="float-right ml-4 mb-4 flex justify-center lg:order-2 lg:float-none lg:ml-0 lg:mb-0"
            >
              <Image
                src={member.image}
                width={420}
                height={560}
                className="rounded-2xl object-cover aspect-[2/4] w-[120px] sm:w-[180px] md:w-[260px] lg:aspect-auto lg:w-full h-auto lg:rounded-[32px]"
                alt={member.name}
              />
            </motion.div>
          </AnimatePresence>

          {/* LEFT — second on mobile, left on desktop */}

          <AnimatePresence mode="wait">
            <motion.div
              key={member.id + "left"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: .8 }}
              className="lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
                HEY<span className="text-orange-500">!</span>
              </h1>

              <p className="mt-3 text-base sm:text-xl md:mt-6 md:text-2xl lg:mt-10 lg:text-3xl font-semibold leading-snug">
                I&rsquo;m {member.name}, a {member.role.toLowerCase()} and co-founder of{" "}
                <span className="text-orange-500">{member.company}</span>.
              </p>

              <p className="mt-3 text-[13px] sm:text-sm md:mt-6 md:text-base md:leading-8 lg:mt-8 lg:text-xl lg:leading-9 leading-5 sm:leading-7 text-neutral-700">
                {member.left}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT — third on mobile, right on desktop */}

          <AnimatePresence mode="wait">
            <motion.div
              key={member.id + "right"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: .8 }}
              className="flex flex-col justify-center lg:order-3"
            >
              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg leading-5 sm:leading-7 md:leading-9 text-neutral-700">
                {member.right}
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex gap-3 sm:gap-4">
                <button className="rounded-full border px-4 py-1.5 text-xs sm:px-6 sm:py-2.5 sm:text-sm lg:px-8 lg:py-3 lg:text-base transition hover:bg-black hover:text-white">
                  CONTACT US
                </button>

                <button className="rounded-full bg-black p-2 sm:p-3 lg:p-4 text-white transition hover:rotate-45">
                  <ArrowUpRight size={18} className="sm:size-5 lg:size-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
