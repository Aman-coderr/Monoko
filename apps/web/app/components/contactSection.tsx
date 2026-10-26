"use client";
import { useState } from "react";
import SocialLinks from "./socialLinks";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      // 🔗 This is what connects directly to functions/api/contact.ts!
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="bg-[#ECEAE6] p-5 rounded-md">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              className="w-full mb-3 px-3 py-2 rounded border border-gray-300 bg-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="w-full mb-3 px-3 py-2 rounded border border-gray-300 bg-white"
            />
            <textarea
              rows={5}
              placeholder="Type your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
              className="w-full mb-4 px-3 py-2 rounded border border-gray-300 bg-white resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white border border-gray-300 rounded py-2 text-sm transition hover:bg-neutral-50 active:bg-neutral-100 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Sending..." : status === "success" ? "Message Sent!" : "Submit"}
            </button>

            {status === "error" && (
              <p className="mt-2 text-xs text-red-500 text-center">
                Failed to send message. Please try again.
              </p>
            )}
            {status === "success" && (
              <p className="mt-2 text-xs text-emerald-600 text-center">
                Message sent successfully to monoko.brandworks@gmail.com!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
