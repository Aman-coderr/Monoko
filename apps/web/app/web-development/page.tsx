import Image from "next/image";
import { websiteDevelopmentData as data } from "./data";

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-[#f3f1ef] text-black">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10">
        {/* Breadcrumb */}
        <div className="mb-10 text-sm md:text-base">
          <span className="text-gray-500">{data.breadcrumb.parent}</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-orange-500">
            {data.breadcrumb.current}
          </span>
        </div>

        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
            {data.hero.title}
          </h1>

          <p className="max-w-md text-sm uppercase leading-relaxed text-gray-700 lg:justify-self-end">
            {data.hero.description}
          </p>
        </section>

        {/* Process */}
        <section className="mt-24">
          <h2 className="mb-14 text-center text-2xl font-medium text-gray-500 md:text-4xl">
            {data.processTitle}
          </h2>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {data.process.map((item) => (
              <div key={item.number} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 font-bold text-black">
                  {item.number}
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-medium">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mt-28">
          <h2 className="mb-14 text-center text-2xl font-medium text-gray-500 md:text-4xl">
            {data.featuredProjectsTitle}
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {data.projects.map((project) => (
              <article key={project.title}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-5 text-3xl font-medium">
                  {project.title}
                </h3>

                <p className="mt-2 max-w-md text-gray-700">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
