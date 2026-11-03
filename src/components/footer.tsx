import Link from "next/link";
import { navItems } from "@/data/portfolio";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-sm font-medium tracking-tight"
            >
              <span
                className="grid size-7 place-items-center rounded-md bg-ink font-mono text-[10px] text-white"
                aria-hidden="true"
              >
                RA
              </span>
              Robbi Al Gani
            </Link>
            <p className="mt-2 pl-[38px] text-sm text-muted">AI Software Builder</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Robbi Al Gani. All rights reserved.</p>
          <p>Designed and built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
