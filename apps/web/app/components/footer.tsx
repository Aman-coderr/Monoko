"use client";

import Link from "next/link";
import SocialLinks from "./socialLinks";
import { menuItems } from "./menuItems";

export default function FooterSection() {
  return (
    <footer className="bg-[#111111] text-white px-5 md:px-16 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div>
            <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center">
              <div className="w-7 h-7 bg-black rounded-full" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="uppercase text-xs tracking-wider text-gray-400 mb-4">
              Quick Links
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Contact", href: "/#contact" },
                ...menuItems.map((item) => ({
                  label: item.title,
                  href: item.href,
                })),
              ].map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[10px] bg-white text-black px-3 py-1 rounded-full transition hover:scale-105 inline-block"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    key={item.label}
                    className="text-[10px] bg-white text-black px-3 py-1 rounded-full"
                  >
                    {item.label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="uppercase text-xs tracking-wider text-gray-400 mb-4">
              Follow Us On
            </h4>

            <SocialLinks className="flex gap-4" />
          </div>
        </div>

        <div className="mt-16 text-[clamp(60px,15vw,140px)] font-bold text-white/5 leading-none select-none">
          MONOKO
        </div>
      </div>
    </footer>
  );
}
