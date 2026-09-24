"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { title: "Brand Identity", href: "/brand-identity" },
  { title: "UI/UX", href: "/ui-ux" },
  { title: "Web Development", href: "/web-development" },
  { title: "AI Automation", href: "/ai-automation" },
];

// Open: links slide in from the left, top to bottom (after height starts growing).
// Close: links fade out fast, bottom to top, before the box collapses.
const listVariants: Variants = {
  hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12, transition: { duration: 0.12 } },
  show: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const HEADER_HEIGHT = 48;
const PILL_RADIUS = 12;
const PANEL_RADIUS = 16;
const SPRING = { type: "spring", stiffness: 300, damping: 32, mass: 0.6 } as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [fullHeight, setFullHeight] = useState(HEADER_HEIGHT);
  const contentRef = useRef<HTMLDivElement>(null);

  // Content (header + links) is always mounted, so we can measure its full
  // height at any time. ResizeObserver keeps it correct across breakpoints.
  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const update = () => setFullHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <motion.div
        initial={{ height: HEADER_HEIGHT, borderRadius: PILL_RADIUS }}
        animate={{
          height: open ? fullHeight : HEADER_HEIGHT,
          borderRadius: open ? PANEL_RADIUS : PILL_RADIUS,
          // Close: wait for the links to fade out, then collapse.
          transition: open ? SPRING : { ...SPRING, delay: 0.12 },
        }}
        className="w-[75%] lg:w-[330px] bg-black overflow-hidden"
      >
        <div ref={contentRef} className="pb-1">
          {/* Header row — one logo, one button, same size/position in both states */}
          <div className="flex items-center justify-between px-4 h-12">
            <Link href="/" className="text-sm font-semibold tracking-wide text-white">
              MONO<span className="text-orange-500">KO</span>
            </Link>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="flex items-center justify-center h-8 w-8 rounded-[10px] bg-white text-black transition hover:scale-105"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {open ? <X size={16} /> : <Menu size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Links — chips hug their text, aligned with the logo's left edge */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate={open ? "show" : "hidden"}
            aria-hidden={!open}
            style={{ pointerEvents: open ? "auto" : "none" }}
            className="grid w-fit gap-2 mx-4 mt-2 mb-4"
          >
            {menuItems.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Link
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="block bg-white text-black px-4 py-1.5 rounded-[10px] text-sm font-medium transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
