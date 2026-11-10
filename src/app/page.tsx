import Link from "next/link";
import { ProductPreview } from "@/components/product-preview";
import { ProjectCard, ProjectFeature } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import {
  aiTools,
  devStack,
  getContactHref,
  processSteps,
  projectAreas,
  projects,
  services,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <Reveal>
        <SelectedWork />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <AiApproach />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}

function Hero() {
  return (
    <section className="hero-atmosphere relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-9 px-5 pb-10 pt-12 sm:gap-12 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-12 lg:pb-20 lg:pt-24">
        <div>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            AI Software Builder
          </p>

          <h1 className="mt-5 max-w-2xl text-balance text-[2.5rem] font-medium leading-[1.04] tracking-[-0.045em] sm:mt-6 sm:text-6xl lg:text-[4.25rem]">
            I turn business problems into software.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
            I build websites, internal business systems, and AI-powered solutions
            designed to help businesses operate faster and smarter.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
            <Link
              href="/work"
              className="inline-flex h-11 items-center rounded-lg bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-ink/85"
            >
              View My Work
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-11 items-center rounded-lg border border-line bg-white px-5 text-sm font-medium transition-colors hover:border-ink/25"
            >
              Start a Project
            </Link>
          </div>

          <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted sm:mt-8">
            <span>Business Websites</span>
            <span aria-hidden="true">•</span>
            <span>POS &amp; Management Systems</span>
            <span aria-hidden="true">•</span>
            <span>AI Automation</span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative">
            <div
              className="absolute -inset-2.5 rounded-[1.8rem] border border-line/80 bg-white/40"
              aria-hidden="true"
            />

            <div className="relative h-[300px] sm:h-[390px] lg:h-[410px]">
              <ProductPreview
                variant="nexora"
                className="shadow-[0_28px_70px_-38px_rgba(21,21,20,0.4)]"
              />
            </div>

            <div
              className="relative -mt-5 hidden grid-cols-[1.15fr_0.85fr] gap-3 px-4 lg:grid"
              aria-hidden="true"
            >
              <div className="h-[150px] rounded-2xl border border-line bg-white p-2 shadow-[0_18px_45px_-28px_rgba(21,21,20,0.38)]">
                <ProductPreview variant="pos" />
              </div>
              <div className="h-[150px] rounded-2xl border border-line bg-white p-2 shadow-[0_18px_45px_-28px_rgba(21,21,20,0.38)]">
                <ProductPreview variant="restaurant" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Portfolio
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            Selected Work
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            Real projects focused on practical business workflows, financial tools,
            and operational software.
          </p>
        </div>

        <div className="mt-10 space-y-6 sm:mt-12">
          <ProjectFeature project={projects[0]} layout="featured" />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(1, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <ProjectFeature project={projects[3]} layout="wide" />
        </div>

        <div className="mt-8 sm:mt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            View all work
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            What I Build
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            Focused solutions for businesses that want a better digital presence,
            smoother operations, or smarter workflows.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 sm:mt-12 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.tier}
              className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                service.emphasis
                  ? "border-accent/30 bg-white shadow-[0_18px_50px_-36px_rgba(20,92,70,0.5)]"
                  : "border-line bg-white/60"
              }`}
            >
              <div className="flex min-h-6 items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {service.tier}
                </span>
                {service.emphasis && (
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-medium text-accent">
                    Core offering
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-xl font-medium tracking-[-0.02em]">
                {service.name}
              </h3>

              <p className="mt-5">
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Starting from
                </span>
                <span className="mt-1.5 block text-xl font-medium tracking-[-0.02em] text-ink sm:text-2xl">
                  {service.price}
                </span>
              </p>

              <p className="mt-4 text-sm leading-6 text-muted">{service.description}</p>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {service.listLabel}
              </p>
              <ul className="mt-3 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {service.examples && (
                <div className="mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Examples
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {service.examples.map((example) => (
                      <li
                        key={example}
                        className="rounded-full border border-line bg-canvas px-2.5 py-1 text-[11px] text-muted"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto pt-8">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  {service.cta}
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Process
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            How I Work
          </h2>
        </div>

        <ol className="mt-10 border-l border-line sm:mt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10 lg:border-l-0">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="relative pb-8 pl-6 last:pb-0 lg:border-t lg:border-line lg:pb-0 lg:pl-0 lg:pt-5"
            >
              <span
                className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-canvas bg-accent lg:hidden"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-medium tracking-[-0.01em] sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AiApproach() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-20">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Approach
          </p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            Built with AI. Engineered with judgment.
          </h2>
          <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-muted">
            <p>
              I use modern AI development tools to move faster, prototype ideas,
              analyze problems, and accelerate implementation.
            </p>
            <p>
              But software still requires understanding the problem, designing the
              workflow, making technical decisions, testing the product, and shipping
              something people can actually use.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white/60 p-6 sm:p-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              AI tools
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {aiTools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-ink"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 border-t border-line pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Development stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {devStack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            About
          </p>
          <h2 className="mt-4 max-w-lg text-balance text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            Building software around real problems.
          </h2>
        </div>

        <div>
          <div className="max-w-xl space-y-4 text-base leading-7 text-muted">
            <p>
              I&apos;m Robbi Al Gani, an AI Software Builder focused on practical
              software for real business workflows. I work across business websites,
              internal systems, and AI-assisted products, starting from the problem
              and building the simplest solution that fits.
            </p>
            <p>
              AI accelerates the workflow. Product decisions, implementation,
              testing, and delivery stay deliberate.
            </p>
          </div>

          <div className="mt-7 border-t border-line pt-6">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Project areas
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {projectAreas.map((area) => (
                <li key={area} className="flex items-center gap-2.5 text-sm text-ink">
                  <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactHref = getContactHref();

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 pb-12 pt-12 sm:px-8 sm:pb-20 sm:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-white/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full border border-white/5"
            aria-hidden="true"
          />

          <div className="relative max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              Contact
            </p>
            <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Have a business problem worth simplifying?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
              Tell me what is slowing your workflow down, and let&apos;s see if
              software can make it simpler.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              {contactHref ? (
                <a
                  href={contactHref}
                  className="inline-flex h-11 items-center rounded-lg bg-white px-5 text-sm font-medium text-ink transition-colors hover:bg-white/90"
                >
                  Start a Project
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-label="Contact coming soon"
                  title="Contact coming soon"
                  className="inline-flex h-11 cursor-not-allowed items-center rounded-lg bg-white/10 px-5 text-sm font-medium text-white/45"
                >
                  Start a Project
                </button>
              )}
              <Link
                href="/work"
                className="inline-flex h-11 items-center rounded-lg border border-white/20 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                View My Work
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
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
      className="size-3.5"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
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
