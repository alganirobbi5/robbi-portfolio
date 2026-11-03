"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 rounded-md text-sm font-medium tracking-tight"
        >
          <span
            className="grid size-7 place-items-center rounded-md bg-ink font-mono text-[10px] text-white"
            aria-hidden="true"
          >
            RA
          </span>
          Robbi Al Gani
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="inline-flex h-9 items-center rounded-lg bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-ink/85"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="size-5"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-line bg-canvas md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="mx-auto max-w-6xl px-5 py-4 sm:px-8" aria-label="Mobile">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="mt-3 flex h-11 items-center justify-center rounded-lg bg-ink text-sm font-medium text-white"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
