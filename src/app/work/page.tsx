import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Practical software projects focused on business workflows, operations, financial tools, and reporting.",
};

export default function WorkPage() {
  return (
    <main id="main-content" className="flex-1">
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.035em] sm:text-5xl">
          Selected Work
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Practical software built around real business problems — from financial
          tools and point-of-sale workflows to restaurant operations and reporting
          automation.
        </p>

        <h2 className="sr-only">Projects</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
