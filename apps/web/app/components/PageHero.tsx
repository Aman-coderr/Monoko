import type { ReactNode } from "react";

type PageHeroProps = {
  current: string;
  title: ReactNode;
  description?: string;
  right?: ReactNode;
  layoutClassName?: string;
  titleWidthClassName?: string;
  contentClassName?: string;
  breadcrumbClassName?: string;
  children?: ReactNode;
};

export default function PageHero({
  current,
  title,
  description,
  right,
  layoutClassName,
  titleWidthClassName,
  contentClassName,
  breadcrumbClassName,
  children,
}: PageHeroProps) {
  return (
    <div
      className={`mx-auto max-w-7xl px-5 pt-24 lg:px-10 ${
        contentClassName ?? "pb-6 md:pb-8"
      }`}
    >
      <div
        className={`${breadcrumbClassName ?? "mb-10"} text-sm md:text-base`}
      >
        <span className="text-gray-500">HOME</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-orange-500">{current}</span>
      </div>

      <section
        className={`grid gap-10 lg:items-end ${
          layoutClassName ?? "lg:grid-cols-2"
        }`}
      >
        <h1
          className={`text-4xl font-semibold leading-none md:text-6xl ${
            titleWidthClassName ?? "max-w-2xl"
          }`}
        >
          {title}
        </h1>

        {description ? (
          <p className="max-w-md text-base uppercase leading-relaxed text-black font-semibold lg:justify-self-end">
            {description}
          </p>
        ) : (
          right
        )}
      </section>

      {children}
    </div>
  );
}
