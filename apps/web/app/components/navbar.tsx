"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { title: "Brand Identity", href: "/brand-identity" },
  { title: "UI/UX", href: "/ui-ux" },
  { title: "Web Development", href: "/web-development" },
  { title: "AI Automation", href: "/ai-automation" },
];

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const PILL_HEIGHT = 48;
const PILL_RADIUS = 24;
const PANEL_RADIUS = 28;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [panelHeight, setPanelHeight] = useState(PILL_HEIGHT);
  const panelRef = useRef<HTMLDivElement>(null);

  // Panel is always mounted (just faded out), so we can measure its real
  // height at any time — and stay correct across breakpoints via ResizeObserver.
  useLayoutEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const update = () => setPanelHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center">
      <motion.div
        initial={{ height: PILL_HEIGHT, borderRadius: PILL_RADIUS }}
        animate={{
          height: open ? panelHeight : PILL_HEIGHT,
          borderRadius: open ? PANEL_RADIUS : PILL_RADIUS,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 32, mass: 0.6 }}
        className="relative w-[230px] sm:w-[270px] lg:w-[330px] bg-black shadow-lg overflow-hidden"
      >
        {/* Pill — overlaid on top, only visible when closed */}
        <motion.div
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          style={{ pointerEvents: open ? "none" : "auto" }}
          className="absolute inset-0 flex items-center justify-between px-4 h-12"
        >
          <Link href="/" className="flex items-center">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-white">
              MONO<span className="text-orange-500">KO</span>
            </span>
          </Link>

          <button
            aria-label="Open Menu"
            onClick={() => setOpen(true)}
            className="flex items-center justify-center h-8 w-8 rounded-md bg-white text-black transition hover:scale-105"
          >
            <Menu size={16} />
          </button>
        </motion.div>

        {/* Panel — always in normal flow (so its real height is measurable),
            visible only when open. Its height drives `panelHeight` above. */}
        <motion.div
          ref={panelRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2, delay: open ? 0.1 : 0 }}
          style={{ pointerEvents: open ? "auto" : "none" }}
          className="p-5"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-xl font-semibold">
              MONO<span className="text-orange-500">KO</span>
            </h2>

            <button
              aria-label="Close Menu"
              onClick={() => setOpen(false)}
              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black transition hover:scale-105"
            >
              <X size={18} />
            </button>
          </div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate={open ? "show" : "hidden"}
            className="flex flex-col items-start gap-3"
          >
            {menuItems.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="w-[165px] sm:w-[190px]">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block bg-white text-black px-4 sm:px-5 py-1.5 rounded-xl text-base font-medium text-left transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}
