# AGENTS.md

## Stack
- Next.js 16.4.2 (App Router, Turbopack, Cache Components), React 19, TypeScript, Tailwind CSS 4, ESLint 9, npm.
- Static portfolio only: no backend, database, CMS, auth, contact API, animation library, or component library.
- Server Components by default. The only client component is `src/components/navbar.tsx` (mobile menu).

## Commands
- `npm install`
- `npm run dev` — dev server on `http://localhost:3000`
- `npm run lint` — runs `eslint`
- `npm run build` — production build; also runs TypeScript checks
- `npm start` — serve the production build

Run `npm run lint` then `npm run build` before considering work done. There is no separate typecheck or test script.

## Architecture
- `src/app/` — `/` (`page.tsx`), `/work` (`work/page.tsx`), and `/work/[slug]` case studies.
- Case studies are static: `generateStaticParams` builds the four slugs from `projects` (`nexora`, `toko-madura`, `restaurant-system`, `reasuransi-system`).
- `src/data/portfolio.ts` is the single content source for navigation, projects, services, process steps, tool/stack lists, and contact config. Edit content there.
- `src/app/page.tsx` keeps homepage sections as local functions (Hero, SelectedWork, Services, Process, AiApproach, About, Contact).
- `src/components/project-card.tsx` exports `ProjectCard` (standard grid) and `ProjectFeature` (featured/wide homepage layouts). `ProjectCard` is shared by the homepage and `/work`.
- `src/components/case-study-layout.tsx` is shared by all case studies.
- `src/components/product-preview.tsx` holds the CSS-only dashboard/POS/restaurant/reporting mockups keyed by `PreviewVariant`. Replace these with real screenshots here.
- `src/app/layout.tsx` wraps every page with `Navbar` and `Footer`, plus global metadata.

## Styling
- Tailwind theme tokens are declared in `src/app/globals.css`: `canvas`, `surface`, `ink`, `muted`, `line`, `accent`, `accent-soft`.
- There is no `tailwind.config.*`; Tailwind 4 is configured in CSS and via `next.config.ts`.
- The design is intentionally light-only. Do not add a dark-mode media query.

## Gotchas
- `next.config.ts` enables `cacheComponents`; `new Date()` during prerender throws. The footer year uses a `"use cache"` helper — keep that pattern.
- Do not add `export const dynamicParams` to routes; it is incompatible with `cacheComponents`.
- Contact details are intentionally unset in `src/data/portfolio.ts` (`email`/`whatsapp` are `null`). With no `getContactHref()`, contact CTAs render disabled with a note. Fill these values to enable mailto/WhatsApp links; do not add fake contact info.
- Git remote: `https://github.com/alganirobbi5/robbi-portfolio.git`, branch `main`.
