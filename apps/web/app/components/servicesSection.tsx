"use client";

const services = [
  {
    title: "Audience Targeting",
    items: [
      "Audience Research",
      "Audience Segmentation",
      "Retargeting Strategies",
    ],
  },
  {
    title: "Paid Media Campaigns",
    items: [
      "Meta & Google Ads",
      "Campaign Optimization",
      "Budget Expansion",
    ],
  },
  {
    title: "Conversion Growth",
    items: [
      "Lead Generation",
      "Conversion Optimization",
      "Funnel Performance",
    ],
  },
  {
    title: "Performance Analytics",
    items: [
      "Real-Time Insights",
      "Performance Reports",
      "A/B Testing",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F4F1ED] px-5 md:px-16 pt-14 md:pt-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] md:text-[48px] font-semibold uppercase leading-none">
          Build A Brand
        </h2>

        <p className="uppercase text-gray-500 text-sm md:text-base mt-1">
          People Remember
        </p>

        <div className="mt-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`py-6 flex flex-col md:flex-row md:items-center justify-between ${index !== services.length - 1
                  ? "border-b border-gray-300"
                  : ""
                }`}
            >
              <h3 className="text-[#ff5c35] font-medium text-sm md:text-base">
                {service.title}
              </h3>

              <div className="flex flex-wrap gap-6 text-[11px] md:text-xs text-gray-400 mt-3 md:mt-0">
                {service.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
