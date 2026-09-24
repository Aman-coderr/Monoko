"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    title: "Brand Identity",
    href: "/brand-identity",
  },
  {
    title: "UI/UX",
    href: "/ui-ux",
  },
  {
    title: "Web Development",
    href: "/web-development",
  },
  {
    title: "AI Automation",
    href: "/ai-automation",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center">
      {/* Relative wrapper: both states share this box, so width/position line up exactly */}
      <div className="relative w-[230px] sm:w-[270px] lg:w-[330px]">
        {/* Closed state: the pill trigger. Hidden (not unmounted) when open, so
            it never stacks as a second shape above the panel. */}
        <nav
          className={`
            flex items-center justify-between
            bg-black
            rounded-full
            px-4
            h-12
            w-full
            shadow-lg
            transition-opacity
            duration-200
            ${open ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <Link href="/" className="flex items-center">
            <span
              className="
                text-[10px]
                sm:text-[11px]
                font-semibold
                tracking-wide
                text-white
              "
            >
              MONO
              <span className="text-orange-500">KO</span>
            </span>
          </Link>

          <button
            aria-label="Open Menu"
            onClick={() => setOpen(true)}
            className="
              flex items-center justify-center
              h-8 w-8
              rounded-md
              bg-white
              text-black
              transition
              hover:scale-105
            "
          >
            <Menu size={16} />
          </button>
        </nav>

        {/* Open state: replaces the pill at the same top-left corner and same
            width — no gap, no duplicate header. */}
        <div
          className={`
            absolute
            top-0
            right-0
            w-full
            origin-top-right
            transition-all
            duration-300
            ease-out
            ${open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <div
            className="
              bg-black
              rounded-[32px]
              p-5
              shadow-2xl
            "
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl font-semibold">
                MONO<span className="text-orange-500">KO</span>
              </h2>

              <button
                aria-label="Close Menu"
                onClick={() => setOpen(false)}
                className="
                  w-10 h-10
                  bg-white
                  rounded-xl
                  flex items-center justify-center
                  text-black
                  transition
                  hover:scale-105
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Fixed width sized for the longest label ("Web Development"),
                same on every breakpoint and every item */}
            <div className="flex flex-col items-start gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    bg-white
                    text-black
                    px-4 sm:px-5
                    py-1.5
                    rounded-xl
                    text-base
                    font-medium
                    text-left
                    w-[165px] sm:w-[190px]
                    transition
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
