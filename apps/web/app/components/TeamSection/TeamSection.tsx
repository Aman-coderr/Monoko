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
      <div className="sticky top-0 flex h-[100svh] flex-col bg-[#F7F3EF] sm:block sm:h-auto lg:flex lg:h-screen lg:flex-row lg:items-center lg:overflow-y-auto">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-4 pt-20 sm:block sm:h-auto sm:px-10 sm:pb-8 sm:pt-24 lg:grid lg:grid-cols-3 lg:gap-20 lg:py-0">

          {/* LEFT — first on mobile/tablet, left on desktop */}

          <AnimatePresence mode="wait">
            <motion.div
              key={member.id + "left"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: .8 }}
              className="shrink-0 lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
                HEY<span className="text-orange-500">!</span>
              </h1>

              <p className="mt-3 text-sm sm:text-xl md:mt-4 md:text-2xl md:leading-tight lg:mt-10 lg:text-3xl font-semibold leading-snug">
                I&rsquo;m {member.name}, a {member.role.toLowerCase()} and co-founder of{" "}
                <span className="text-orange-500">{member.company}</span>.
              </p>

              <p className="mt-3 text-[13px] sm:text-sm md:mt-4 md:text-base md:leading-6 lg:mt-8 lg:text-xl lg:leading-9 leading-5 sm:leading-5 text-neutral-700">
                {member.left}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* IMAGE — second on mobile/tablet, center on desktop */}

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
              className="relative mt-3 flex-1 min-h-[100px] flex justify-center sm:mt-8 md:mt-10 lg:order-2 lg:mt-0"
            >
              <Image
                src={member.image}
                width={420}
                height={477}
                className="absolute inset-0 h-full w-full object-contain rounded-2xl sm:relative sm:inset-auto sm:h-auto sm:w-auto sm:max-h-[30svh] md:max-h-[40svh] lg:static lg:inset-auto lg:h-full lg:w-auto lg:object-contain lg:max-h-none lg:rounded-[32px]"
                alt={member.name}
              />
            </motion.div>
          </AnimatePresence>

          {/* RIGHT — third on mobile/tablet, right on desktop */}

          <AnimatePresence mode="wait">
            <motion.div
              key={member.id + "right"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: .8 }}
              className="mt-3 flex shrink-0 flex-col justify-center sm:mt-8 md:mt-10 lg:order-3 lg:mt-0 lg:justify-end"
            >
              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg leading-5 sm:leading-5 md:leading-6 lg:leading-9 text-neutral-700">
                {member.right}
              </p>

              <p className="mt-3 text-[13px] sm:text-sm md:text-base lg:text-lg leading-5 sm:leading-5 md:leading-6 lg:leading-9 text-neutral-700">
                {member.rightMore}
              </p>

              <div className="mt-6 lg:mt-12 flex gap-3 sm:gap-4">
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
