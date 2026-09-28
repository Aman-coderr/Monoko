"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "./components/revealtext";
import TeamSection from "./components/TeamSection/TeamSection";
import ServicesSection from "./components/servicerevealtext";
import AISystemsSection from "./components/AISystemsSection";
import ServicesListSection from "./components/servicesSection";
import ContactSection from "./components/contactSection";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["100%", "85%"]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["0px", "100px"]
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#F7F3EF]"
    >
      {/* HERO */}
      <div className="h-svh flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width,
            borderRadius,
          }}
          className="h-svh bg-orange-600 flex flex-col items-center justify-center text-center p-4 sm:p-6 overflow-hidden"
        >
          <h1 className="text-[2.5rem] min-[375px]:text-[3rem] min-[480px]:text-[3.875rem] sm:text-[4.25rem] md:text-[6rem] xl:text-[6.25rem] 2xl:text-[6.875rem] short-landscape:text-[4.5rem] font-extrabold tracking-tighter uppercase leading-none mb-6 min-[480px]:mb-8 min-[768px]:mb-10 lg:mb-12">
            <span className="text-zinc-900">
              Forward
            </span>

            <br />

            <span className="text-zinc-900">
              Through{" "}
            </span>

            <br className="lg:hidden" />

            <span className="text-white">
              Digital
            </span>

            <br />

            <span className="text-white">
              Design
            </span>
          </h1>

          <p className="text-[13px] min-[360px]:text-[14px] min-[375px]:text-base min-[480px]:text-xl leading-tight font-bold tracking-wider text-zinc-900 uppercase">
            We design your brand without limits, for a fixed price
          </p>
        </motion.div>
      </div>

      <TeamSection />

      <RevealText />

      <ServicesSection />

      <AISystemsSection />

      <ServicesListSection />

      <ContactSection />
    </main>
  );
}
