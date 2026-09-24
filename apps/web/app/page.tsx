"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "./components/revealtext";
import TeamSection from "./components/TeamSection/TeamSection";
import ServicesSection from "./components/servicerevealtext";
import ServicesCardsSection from "./components/ServicesCardsSection";
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
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <div className="h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width,
            borderRadius,
          }}
          className="h-screen bg-orange-600 flex flex-col items-center justify-center text-center p-6 overflow-hidden"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none mb-6 sm:mb-8">
            <span className="text-zinc-900">
              Forward
            </span>

            <br />

            <span className="text-zinc-900">
              Through{" "}
            </span>

            <span className="text-white">
              Digital
            </span>

            <br />

            <span className="text-white">
              Design
            </span>
          </h1>

          <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-zinc-900 uppercase">
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
