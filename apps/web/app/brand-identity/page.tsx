"use client";

import { useRef, useState } from "react";
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "RAGHA THATHASTU",
    description:
      `RAGHA THATHASTU RAGA TATHASTU is an Indian luxury interior design studio inspired by the grandeur, heritage, and craftsmanship of royal India.
      The identity combines a rich palette of earthy beige, deep brown, and muted gold with elegant typography and a distinctive monogram,
      creating a sense of timeless luxury and refined Indian heritage.Designed to balance traditional Indian aesthetics with contemporary 
      sophistication, the identity extends across branding, stationery, interiors, and digital touchpoints.
      Royal.Refined.Timeless.`,
    images: [
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/RAGA/Frame%2077064091.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/RAGA/Frame%2077064092.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/RAGA/Group%208849.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/RAGA/Group%208886.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/RAGA/Group%208887.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/RAGA/Group%208888.png",
    ],
  },

  {
    id: "02",
    title: "ECKO",
    description:
      `Ecko
      ECKO is a modern luxury fashion brand built around minimalism, sophistication, and timeless style.
      The identity combines a refined black-and-white palette, elegant typography, and a distinctive minimalist logo to create a 
      bold yet understated luxury aesthetic. Designed for the modern fashion-conscious audience, the identity brings together
      contemporary design and premium elegance across digital, packaging, stationery, and fashion applications. Minimal. Sophisticated. Timeless.`,
    images: [
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/ECKO/app%201.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/ECKO/brand%20logo%20f3%201.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/ECKO/business%20card%201.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/ECKO/color%20palatte%201.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/ECKO/final%20billboard%201.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/ECKO/logo%20img%201.png"
    ],
  },

  {
    id: "03",
    title: "POP STICK",
    description:
      `pop stick
POP STICKS is a playful and energetic ice cream brand built around the idea of “Coolest Bite of Happiness.”
We created a bold visual identity using vibrant orange, cream, yellow, and mint to make the brand feel fresh, youthful, and instantly recognizable.
Expressive typography, simple graphic elements, and a flexible color system
bring the personality to life across packaging, signage, merchandise, and digital platforms. Bold. Colorful. Playful. Made to POP.`,
    images: [
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/POP/10-01.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/POP/2-01.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/POP/ChatGPT%20Image%20Sep%2013%2C%202026%2C%2001_23_20%20PM%201.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/POP/Frame%2077064098.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/POP/Group%208889.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/POP/Group%208890.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/POP/Group%208898.png",
    ],
  },

  {
    id: "04",
    title: "CHURRO STICKS",
    description:
      `churro sticks
Churro Sticks is a playful and vibrant food brand built around the joy of fresh, crispy churros.
A warm palette of orange, peach, and cream creates an inviting and energetic personality, while the custom rounded typography
gives the brand a fun and memorable character. The identity is designed to feel bold, friendly, and modern across packaging,
storefronts, and digital platforms.
Warm. Playful. Crispy. Delicious.`,
    images: [
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/CHURRO/Frame%2077064094.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/CHURRO/Group%208851.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/CHURRO/Group%208853.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/CHURRO/SS.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/CHURRO/cs.png",
      "https://pub-efab5b3be1fd427297b4a94107b488d3.r2.dev/CHURRO/cs2.png",
    ],
  },
];

type Project = (typeof projects)[number];

function MarqueeRow({
  project,
  direction,
  speed,
}: {
  project: Project;
  direction: "left" | "right";
  speed: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || paused || !trackRef.current) return;

    const track = trackRef.current;
    const half = track.scrollWidth / 2;
    const move = (speed * delta) / 1000;

    x.current += direction === "left" ? -move : move;

    if (direction === "left" && x.current <= -half) {
      x.current += half;
    } else if (direction === "right" && x.current >= 0) {
      x.current -= half;
    }

    track.style.transform = `translate3d(${x.current}px, 0, 0)`;
  });

  return (
    <div className="space-y-5 rounded-3xl bg-neutral-200 p-5 md:p-8">
      <div className="px-5 md:px-10">
        <span className="text-xs text-neutral-400">{project.id}</span>
<h2 className="mt-1 text-2xl font-semibold md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
            {project.description}
          </p>
        </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-4 will-change-transform md:gap-6"
        >
          {[...project.images, ...project.images].map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative h-48 w-72 shrink-0 overflow-hidden rounded-2xl md:h-64 md:w-96"
            >
              <Image
                src={image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-200 to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-200 to-transparent md:w-28" />
      </div>
    </div>
  );
}

export default function BrandIdentityPage() {
  return (
    <main className="bg-[#f5f2ed] min-h-screen overflow-hidden">
      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Home / Brand Identity
          </p>

          <h1 className="mt-4 text-4xl font-medium md:text-6xl">
            Brand Identity
          </h1>
        </div>
      </section>

      <section className="mx-auto space-y-12 px-3 py-16 sm:px-4 md:space-y-16 md:px-5 md:py-20">
        {projects.map((project, index) => (
          <MarqueeRow
            key={project.id}
            project={project}
            direction={index % 2 === 0 ? "left" : "right"}
            speed={index % 2 === 0 ? 50 : 70}
          />
        ))}
      </section>
    </main>
  );
}
