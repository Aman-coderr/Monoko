import Image from "next/image";
import PageHero from "../components/PageHero";
import { websiteDevelopmentData as data } from "./data";

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-[#f3f1ef] text-black">
      <PageHero
        current={data.breadcrumb.current}
        title={data.hero.title}
        description={data.hero.description}
      >
        {/* Process */}
        <section className="mt-6 md:mt-8">
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
        <section className="mt-6 md:mt-8">
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
      </PageHero>
    </main>
  );
}
