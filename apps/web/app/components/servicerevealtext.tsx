"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import uiuxImage from "../../public/ui-ux-design-and-development-concepts-developers-interact-with-cutting-edge-virtual-screens.webp";
import webImage from "../../public/web-development-word-cloud-concept-grey-background-88650624.webp";
import brandImage from "../../public/Brand-Identity-Elements.webp";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
    Each service gets its own part of the scroll.

    0.00 - 0.33  → UI/UX
    0.33 - 0.66  → WEB DEVELOPMENT
    0.66 - 1.00  → BRAND IDENTITY
  */

  // TEXT OPACITY

  const uiOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.30, 0.33],
    [1, 1, 0, 0]
  );

  const webOpacity = useTransform(
    scrollYProgress,
    [0.33, 0.36, 0.60, 0.65, 0.66],
    [0, 1, 1, 0, 0]
  );

  const brandOpacity = useTransform(
    scrollYProgress,
    [0.66, 0.70, 1],
    [0, 1, 1]
  );

  // TEXT VISIBILITY

  const uiVisibility = useTransform(
    scrollYProgress,
    [0, 0.25, 0.30, 0.33],
    ["visible", "visible", "hidden", "hidden"]
  );

  const webVisibility = useTransform(
    scrollYProgress,
    [0.33, 0.36, 0.60, 0.65, 0.66],
    ["hidden", "visible", "visible", "hidden", "hidden"]
  );

  const brandVisibility = useTransform(
    scrollYProgress,
    [0.66, 0.70, 1],
    ["hidden", "visible", "visible"]
  );

  // TEXT Z-INDEX

  const uiZIndex = useTransform(
    scrollYProgress,
    [0, 0.30, 0.33],
    [10, 10, 0]
  );

  const webZIndex = useTransform(
    scrollYProgress,
    [0.33, 0.36, 0.65, 0.66],
    [0, 10, 10, 0]
  );

  const brandZIndex = useTransform(
    scrollYProgress,
    [0.66, 0.70, 1],
    [0, 10, 10]
  );

  // IMAGE OPACITY

  const image1Opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.30, 0.33],
    [1, 1, 0, 0]
  );

  const image2Opacity = useTransform(
    scrollYProgress,
    [0.33, 0.36, 0.60, 0.65, 0.66],
    [0, 1, 1, 0, 0]
  );

  const image3Opacity = useTransform(
    scrollYProgress,
    [0.66, 0.70, 1],
    [0, 1, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] w-full bg-[#f8f7f4]"
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-0 px-4 py-4 sm:px-10 sm:py-5 lg:flex-row lg:items-center lg:gap-0 lg:px-16 lg:py-0">

          {/* LEFT */}
          <div className="relative z-10 w-full lg:w-[50%]">

            {/* STATIC TEXT */}
            <p className="max-w-[420px] text-[10px] font-medium uppercase leading-[1.15] tracking-tight text-black sm:text-xs lg:mb-10 lg:text-sm">
              Designing experiences that help brands
              <br />
              grow through
            </p>

            {/* TEXT CONTAINER */}
            <div className="relative h-[50px] sm:h-[75px] md:h-[90px] lg:h-[105px]">

              {/* UI/UX */}
              <motion.h2
                style={{ opacity: uiOpacity, visibility: uiVisibility, zIndex: uiZIndex }}
                className="absolute left-0 top-0 text-[clamp(24px,5vw,76px)] font-medium uppercase leading-none tracking-[-0.05em] text-[#aaa]"
              >
                UI/UX DESIGN
              </motion.h2>

              {/* WEB DEVELOPMENT */}
              <motion.h2
                style={{ opacity: webOpacity, visibility: webVisibility, zIndex: webZIndex }}
                className="absolute left-0 top-0 text-[clamp(24px,5vw,76px)] font-bold uppercase leading-none tracking-[-0.05em] text-black"
              >
                WEB DEVELOPMENT
              </motion.h2>

              {/* BRAND IDENTITY */}
              <motion.h2
                style={{ opacity: brandOpacity, visibility: brandVisibility, zIndex: brandZIndex }}
                className="absolute left-0 top-0 text-[clamp(24px,5vw,76px)] font-medium uppercase leading-none tracking-[-0.05em] text-[#aaa]"
              >
                BRAND IDENTITY
              </motion.h2>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full lg:w-[50%]">

            <div className="relative aspect-[1.35/1] w-full overflow-hidden rounded-[14px] bg-[#15191c] sm:rounded-[24px] lg:rounded-[28px]">

              {/* IMAGE 1 */}
              <motion.div
                style={{ opacity: image1Opacity }}
                className="absolute inset-0"
              >
                <Image
                  src={uiuxImage}
                  alt="UI UX Design"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* IMAGE 2 */}
              <motion.div
                style={{ opacity: image2Opacity }}
                className="absolute inset-0"
              >
                <Image
                  src={webImage}
                  alt="Web Development"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* IMAGE 3 */}
              <motion.div
                style={{ opacity: image3Opacity }}
                className="absolute inset-0"
              >
                <Image
                  src={brandImage}
                  alt="Brand Identity"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
