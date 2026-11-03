import Link from "next/link";
import { ProductPreview } from "@/components/product-preview";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-ink/25"
    >
      <div className="h-[240px] overflow-hidden border-b border-line bg-[#efefeb] p-3 sm:h-[270px] sm:p-4">
        <div className="h-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.015]">
          <ProductPreview variant={project.preview} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>{project.category}</span>
          <span>{project.index}</span>
        </div>

        <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>

        <FeatureChips features={project.features} limit={3} />

        <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-ink">
          View case study
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export function ProjectFeature({
  project,
  layout,
}: {
  project: Project;
  layout: "featured" | "wide";
}) {
  const isFeatured = layout === "featured";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-ink/25 ${
        isFeatured
          ? "lg:grid-cols-[0.82fr_1.18fr]"
          : "lg:grid-cols-[1.12fr_0.88fr]"
      }`}
    >
      <div
        className={`flex flex-col p-6 sm:p-8 ${
          isFeatured ? "lg:p-10" : "lg:p-8"
        }`}
      >
        <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>{project.category}</span>
          <span>{project.index}</span>
        </div>

        <h3
          className={`mt-4 font-medium tracking-[-0.03em] ${
            isFeatured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
          {project.description}
        </p>

        <FeatureChips
          features={project.features}
          limit={isFeatured ? 4 : 3}
        />

        <span className="mt-auto flex items-center gap-1.5 pt-8 text-sm font-medium text-ink">
          View case study
          <ArrowIcon />
        </span>
      </div>

      <div
        className={`h-[260px] overflow-hidden border-t border-line bg-[#efefeb] p-4 sm:h-[340px] sm:p-6 lg:h-auto ${
          isFeatured
            ? "lg:min-h-[420px] lg:border-l lg:border-t-0"
            : "lg:order-first lg:min-h-[320px] lg:border-r lg:border-t-0"
        }`}
      >
        <div className="h-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.01]">
          <ProductPreview variant={project.preview} />
        </div>
      </div>
    </Link>
  );
}

function FeatureChips({
  features,
  limit,
}: {
  features: string[];
  limit: number;
}) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {features.slice(0, limit).map((feature) => (
        <li
          key={feature}
          className="rounded-full border border-line bg-canvas px-2.5 py-1 text-[11px] text-muted"
        >
          {feature}
        </li>
      ))}
      {features.length > limit && (
        <li className="rounded-full border border-line bg-canvas px-2.5 py-1 text-[11px] text-muted">
          +{features.length - limit}
        </li>
      )}
    </ul>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5 transition-transform motion-safe:group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
