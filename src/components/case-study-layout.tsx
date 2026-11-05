import Link from "next/link";
import type { ReactNode } from "react";
import { ProductPreview } from "@/components/product-preview";
import type { Project } from "@/data/portfolio";

export function CaseStudyLayout({
  project,
  previous,
  next,
}: {
  project: Project;
  previous?: Project;
  next?: Project;
}) {
  return (
    <main id="main-content" className="flex-1">
      <article>
        <header className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-16">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <span aria-hidden="true">←</span>
            All work
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {project.category}
              </p>
              <h1 className="mt-3 text-balance text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {project.description}
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              Discuss a similar project
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
          <div className="h-[280px] overflow-hidden rounded-2xl border border-line bg-[#efefeb] p-3 sm:h-[420px] sm:p-6">
            <ProductPreview variant={project.preview} />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
            <div className="space-y-12">
              <section>
                <SectionHeading index="01">The Problem</SectionHeading>
                <p className="mt-4 text-base leading-7 text-ink sm:text-lg sm:leading-8">
                  {project.problem}
                </p>
              </section>

              <section>
                <SectionHeading index="02">The Solution</SectionHeading>
                <p className="mt-4 text-base leading-7 text-ink sm:text-lg sm:leading-8">
                  {project.solution}
                </p>
              </section>

              <section>
                <SectionHeading index="03">Key Features</SectionHeading>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-muted">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading index="04">My Work</SectionHeading>
                <ul className="mt-4 space-y-2.5">
                  {project.myWork.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted">
                      <span
                        className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {project.result && (
                <section>
                  <SectionHeading index="05">Result</SectionHeading>
                  <p className="mt-4 text-base leading-7 text-ink sm:text-lg sm:leading-8">
                    {project.result}
                  </p>
                </section>
              )}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Stack
                </p>
                <h2 className="mt-2 text-xl font-medium tracking-[-0.02em]">
                  Technology
                </h2>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.technology.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-canvas px-3 py-1.5 text-xs text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <nav
            aria-label="Project navigation"
            className="mt-16 border-t border-line pt-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-between">
              <Link
                href="/work"
                className="rounded-xl border border-line bg-white p-5 transition-colors hover:border-ink/25 sm:w-44 sm:shrink-0"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Work
                </span>
                <span className="mt-2 flex items-center gap-1.5 text-sm font-medium">
                  <span aria-hidden="true">←</span>
                  Back to Work
                </span>
              </Link>

              <div className="grid flex-1 gap-3 sm:grid-cols-2">
                {previous ? (
                  <Link
                    href={`/work/${previous.slug}`}
                    className="rounded-xl border border-line bg-white p-5 transition-colors hover:border-ink/25"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      Previous
                    </span>
                    <span className="mt-2 block text-sm font-medium">
                      {previous.title}
                    </span>
                  </Link>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {next ? (
                  <Link
                    href={`/work/${next.slug}`}
                    className="rounded-xl border border-line bg-white p-5 text-left transition-colors hover:border-ink/25 sm:text-right"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      Next Project
                    </span>
                    <span className="mt-2 flex items-center gap-1.5 text-sm font-medium sm:justify-end">
                      {next.title}
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ) : (
                  <div className="hidden sm:block" />
                )}
              </div>
            </div>
          </nav>
        </div>
      </article>
    </main>
  );
}

function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {index}
      </p>
      <h2 className="mt-2 text-xl font-medium tracking-[-0.02em] sm:text-2xl">
        {children}
      </h2>
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 size-3.5 shrink-0 text-accent"
      aria-hidden="true"
    >
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  );
}
