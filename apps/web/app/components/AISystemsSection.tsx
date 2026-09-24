import Link from "next/link";

export default function AISystemsSection() {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <h2 className="max-w-xl text-4xl font-medium leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">I BUILD AI</span>
              <span className="block">SYSTEMS THAT</span>

              <span className="mt-2 block text-[#ff5a1f]">
                CALL, CHAT, AND
              </span>

              <span className="block text-[#ff5a1f]">
                CONVERT.
              </span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start lg:items-end">
            <p className="max-w-md text-sm leading-relaxed text-neutral-300 sm:text-base lg:text-right">
              Stop losing leads to slow response times. I design custom AI
              voice agents and automation workflows that replace manual
              follow-ups and scale your operations instantly.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Link
                href="/ai-automation"
                className="rounded-lg border border-neutral-700 px-5 py-3 text-xs font-medium tracking-wider text-white transition hover:border-neutral-500"
              >
                HAVE A LOOK
              </Link>

              <Link
                href="/ai-automation"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-black transition hover:scale-105"
              >
                ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
