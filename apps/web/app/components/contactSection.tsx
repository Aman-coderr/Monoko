"use client";

import SocialLinks from "./socialLinks";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F7F3EF] px-5 md:px-16 py-12 md:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold">
              Let’s talk.
            </h2>

            <p className="text-gray-500 mt-3 max-w-sm text-sm">
              Have a project you’d like to discuss, reach out and
              get back to you.
            </p>

            <SocialLinks className="flex gap-5 mt-10" />
          </div>

          {/* Right */}
          <form className="bg-[#ECEAE6] p-5 rounded-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-3 px-3 py-2 rounded border border-gray-300 bg-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-3 px-3 py-2 rounded border border-gray-300 bg-white"
            />

            <textarea
              rows={5}
              placeholder="Type your message"
              className="w-full mb-4 px-3 py-2 rounded border border-gray-300 bg-white resize-none"
            />

            <button
              type="submit"
              className="w-full bg-white border border-gray-300 rounded py-2 text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
