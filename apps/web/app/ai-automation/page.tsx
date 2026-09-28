import {
  ArrowUpRight,
  Bot,
  Mail,
  MessageSquare,
  Workflow,
} from "lucide-react";
import PageHero from "../components/PageHero";

const services = [
  {
    icon: MessageSquare,
    title: "AI CHATBOTS & CUSTOMER SUPPORT",
    description:
      "AI-powered assistants that answer questions, support customers, and capture leads 24/7.",
  },
  {
    icon: Bot,
    title: "AI LEAD GENERATION & QUALIFICATION",
    description:
      "Find, engage, and qualify potential customers automatically so your team focuses on the best leads.",
  },
  {
    icon: Mail,
    title: "AI SALES & EMAIL AUTOMATION",
    description:
      "Automate personalized outreach, follow-ups, and email sequences to improve your sales process.",
  },
  {
    icon: Workflow,
    title: "AI WORKFLOW & BUSINESS PROCESS AUTOMATION",
    description:
      "Connect your tools and automate repetitive tasks, saving time and reducing manual work.",
  },
];

const testimonials = [
  {
    text: "We replaced 3 support VAs with the Voice Agent. Response times became instant and customers received answers without waiting hours.",
    name: "Sarah Jenkins",
    role: "E-commerce Founder",
  },
  {
    text: "Finally, a developer who understands business logic. The workflows are the backbone of the agency now.",
    name: "Michael Ross",
    role: "Agency Owner",
  },
  {
    text: "The speed-to-lead system doubled our appointment bookings in the first week. Massive improvement.",
    name: "David Liu",
    role: "Real Estate Broker",
  },
];

const steps = [
  {
    number: "1",
    title: "AUDIT & LOGIC DESIGN",
    description:
      "We map your current manual processes, identify the conversation flow, and define the system architecture before writing code.",
  },
  {
    number: "2",
    title: "BUILD & INTEGRATION",
    description:
      "Connecting APIs, tools, CRMs, voice systems, and LLM prompts to match your business objectives.",
  },
  {
    number: "3",
    title: "TESTING WITH REAL DATA",
    description:
      "Rigorous testing to ensure the AI handles objections, edge cases, and real-world scenarios correctly.",
  },
  {
    number: "4",
    title: "DEPLOYMENT & HANDOFF",
    description:
      "Production deployment, monitoring setup, documentation, and complete handoff of the system.",
  },
];

export default function AIAutomationPage() {
  return (
    <main className="bg-[#f3f1ef] text-black">
      <PageHero
        current="AI AUTOMATION"
        layoutClassName="lg:grid-cols-[1.3fr_0.7fr]"
        titleWidthClassName="max-w-none"
        right={
          <div className="flex flex-col items-start lg:items-end lg:pb-2">
            <p className="max-w-lg text-base leading-relaxed text-neutral-700 lg:text-right">
              Stop losing leads to slow response times. I design custom AI
              voice agents and automation workflows that replace manual
              follow-ups and scale your operations instantly.
            </p>

            <button className="mt-6 flex items-center gap-3 rounded-full border border-black px-5 py-3 text-sm transition hover:bg-black hover:text-white">
              CONTACT US
              <ArrowUpRight size={16} />
            </button>
          </div>
        }
        title={
          <>
            <span className="block">
              <span className="text-orange-500">BUILD AI</span> SYSTEMS
            </span>

            <span className="block">THAT CALL, CHAT</span>

            <span className="block">
              AND <span className="text-orange-500">CONVERT.</span>
            </span>
          </>
        }
      >
        {/* Services */}
        <section className="mt-6 md:mt-8">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-medium text-neutral-500 md:text-5xl">
              CORE AUTOMATION SERVICES
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 md:text-base">
              I don't just use AI. I architect robust infrastructure that
              handles communication and data processing for you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-neutral-200 bg-[#f3f1ef] p-6"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mb-4 text-lg font-medium">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-6 md:mt-8 bg-[#ECECEC] py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <h2 className="mb-14 text-center text-3xl font-medium text-neutral-500 md:text-5xl">
              WHAT CLIENTS SAY
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-3xl border border-neutral-200 bg-white p-8"
                >
                  <p className="mb-8 text-sm leading-relaxed text-neutral-700">
                    "{testimonial.text}"
                  </p>

                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pt-6 pb-6 md:pt-8 md:pb-8">
          <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-5xl font-medium leading-tight md:text-6xl">
                HOW I BUILD
                <br />
                <span className="text-orange-500">YOUR SYSTEM</span>
              </h2>

              <p className="mt-8 max-w-md text-lg text-neutral-700">
                A transparent, engineering-focused approach. No magic, just
                logic.
              </p>

              <button className="mt-8 flex items-center gap-3 rounded-full border border-black px-5 py-3 text-sm transition hover:bg-black hover:text-white">
                CONTACT US
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 hidden h-full w-px bg-neutral-300 md:block" />

              <div className="space-y-12 md:space-y-20">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex gap-6"
                  >
                    <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg font-semibold text-white">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="mb-3 text-2xl font-medium text-neutral-600">
                        {step.title}
                      </h3>

                      <p className="max-w-xl text-neutral-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
              ))}
              </div>
            </div>
          </div>
        </section>
      </PageHero>
    </main>
  );
}
