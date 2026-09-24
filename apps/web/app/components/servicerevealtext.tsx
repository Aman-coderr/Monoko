"use client";

import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import uiuxImage from "../../public/ui-ux-design-and-development-concepts-developers-interact-with-cutting-edge-virtual-screens.webp";
import webImage from "../../public/web-development-word-cloud-concept-grey-background-88650624.webp";
import brandImage from "../../public/Brand-Identity-Elements.webp";

const services = [
  { label: "UI/UX DESIGN", image: uiuxImage, alt: "UI UX Design" },
  { label: "WEB DEVELOPMENT", image: webImage, alt: "Web Development" },
  { label: "BRAND IDENTITY", image: brandImage, alt: "Brand Identity" },
];

const EASE = [0.76, 0, 0.24, 1] as const;

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastActive = useRef(0);
  const curtain = useAnimation();

  const [active, setActive] = useState(0); // which text is highlighted
  const [shown, setShown] = useState(0); // which image is visible

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Scroll picks the active service (thirds of the section)
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.floor(p * services.length);
    setActive(Math.min(services.length - 1, Math.max(0, i)));
  });

  // Yellow curtain: rises over the old image, swaps it, then exits upward
  useEffect(() => {
    if (lastActive.current === active) return;
    lastActive.current = active;
    let cancelled = false;

    (async () => {
      await curtain.start({ y: "0%", transition: { duration: 0.5, ease: EASE } });
      if (cancelled) return;
      setShown(active);
      await curtain.start({ y: "-100%", transition: { duration: 0.5, ease: EASE } });
      if (!cancelled) curtain.set({ y: "100%" });
    })();

    return () => {
      cancelled = true;
    };
  }, [active, curtain]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] w-full bg-[#F7F3EF]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col justify-center gap-8 px-4 sm:px-10 lg:flex-row lg:items-center lg:gap-0 lg:px-16">

          {/* TEXT — top on phone/tablet, left on desktop */}
          <div className="relative w-full lg:flex lg:w-[50%] lg:items-center lg:justify-end lg:self-stretch lg:pr-[8%]">
            <p className="mb-4 whitespace-nowrap text-[clamp(11px,3vw,22px)] font-medium uppercase leading-[1.2] tracking-[-0.01em] text-[#22201e] lg:absolute lg:left-0 lg:top-[10%] lg:mb-0 lg:text-[clamp(14px,1.75vw,32px)]">
              Designing experiences that help brands
              <br />
              grow through
            </p>

            <div className="flex flex-col items-start gap-1 sm:gap-2 lg:items-end">
              {services.map((s, i) => (
                <motion.h2
                  key={s.label}
                  initial={false}
                  animate={{
                    color: i === active ? "#22201e" : "#cbc6c3",
                    scale: i === active ? 1 : 0.86,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="origin-left whitespace-nowrap text-[clamp(24px,7vw,54px)] font-semibold uppercase leading-[1.1] tracking-[-0.04em] lg:origin-right lg:text-[clamp(32px,4.2vw,72px)]"
                >
                  {s.label}
                </motion.h2>
              ))}
            </div>
          </div>

          {/* IMAGE — below text on phone/tablet, right on desktop */}
          <div className="relative w-full lg:w-[50%]">
            <div className="relative aspect-[1.35/1] w-full overflow-hidden rounded-[14px] bg-[#fcec67] sm:rounded-[24px] lg:rounded-[28px]">
              {services.map((s, i) => (
                <div
                  key={s.label}
                  className={`absolute inset-0 ${shown === i ? "opacity-100" : "opacity-0"}`}
                >
                  <Image src={s.image} alt={s.alt} fill className="object-cover" />
                </div>
              ))}

              {/* YELLOW CURTAIN */}
              <motion.div
                initial={{ y: "100%" }}
                animate={curtain}
                className="absolute inset-0 z-10 bg-[#fcec67]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
