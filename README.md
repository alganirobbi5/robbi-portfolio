# Robbi Al Gani — Portfolio

Professional portfolio for Robbi Al Gani, an AI Software Builder focused on turning business problems into practical software.

Built with Next.js App Router, React, TypeScript, and Tailwind CSS. Static content only — no backend, database, or CMS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
```

`next build` also runs TypeScript checks.

## Content

All portfolio content lives in `src/data/portfolio.ts`: navigation, projects, services, process steps, tool/stack lists, and contact details.

Product visuals are CSS-only mockups in `src/components/product-preview.tsx`. Replace them there when real screenshots are available.

## Routes

- `/` — homepage
- `/work` — project index
- `/work/nexora`
- `/work/toko-madura`
- `/work/restaurant-system`
- `/work/reasuransi-system`

## Contact

Contact links read from `.env.local`:

```bash
NEXT_PUBLIC_CONTACT_WHATSAPP=628xxxxxxxxxx
NEXT_PUBLIC_CONTACT_EMAIL=email@domain.com
```

WhatsApp takes priority over email. Replace the placeholders with real values; `.env.local` is gitignored. If both are empty, contact CTAs remain disabled.
