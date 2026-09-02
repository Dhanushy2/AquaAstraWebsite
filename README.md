# Aqua Astra — Marketing Website

Static marketing site for the **Aqua Astra** shrimp-aquaculture app
(Flutter app lives in `D:\Astra`).

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |

No client-side JavaScript is required — the mobile menu and FAQ accordions use
native `<details>` elements, so every section works with JS disabled.

## Commands

```bash
npm install      # once
npm run dev      # dev server at http://localhost:3000
npm run build    # static build -> ./out
```

`next.config.ts` sets `output: "export"`, so `npm run build` emits a
self-contained `out/` folder. Deploy it to any static host (Netlify, Vercel,
GitHub Pages, S3 + CloudFront, nginx) — no Node runtime needed.

## Structure

```
src/
  app/
    layout.tsx      root shell, metadata, skip link
    page.tsx        composes the one-page site
    globals.css     Tailwind import + brand @theme tokens
  components/       one file per page section
  lib/content.ts    ALL site copy, typed — edit here, not in components
public/
  favicon.svg
```

### Editing copy

Every headline, paragraph, feature, FAQ and footer link lives in
[`src/lib/content.ts`](src/lib/content.ts). Components only lay it out. To
change wording, add a feature or reorder the FAQ, edit that file alone.

To reorder or remove whole sections, edit the list in
[`src/app/page.tsx`](src/app/page.tsx).

### Brand tokens

The palette in `src/app/globals.css` (`@theme` block) mirrors the Flutter app's
`lib/core/theme/app_colors.dart` so the site and app read as one product:

- `--color-teal-deep` `#00695C`, `--color-teal-ink` `#0E6E78`, `--color-teal-brand` `#20B09C`
- `--color-brand-600` `#007ACC` (app primary)
- `--color-ink` / `--color-ink-muted` / `--color-hairline` / `--color-canvas`

Used as ordinary Tailwind utilities: `text-ink`, `bg-canvas`, `border-hairline`,
plus two custom utilities, `bg-brand-gradient` and `text-brand-gradient`.

## Placeholders to replace before launch

- **Contact details** in `src/lib/content.ts` → `site.email`, `site.phone`, `site.location`
- **Highlight band** (`highlights`) — capability claims, not measured metrics
- **Logo** — `src/components/Logo.tsx` is a placeholder mark; swap in the real asset
- **App screenshot** — `src/components/PhoneMockup.tsx` is a CSS recreation of the
  analysis screen; replace with a real device screenshot when the UI is final
- **Store links** in `src/components/GetApp.tsx` currently open an email; point them
  at the Play Store / App Store listings once live
- **Legal pages** in `footerLinks.legal` link to `#` — add real pages

There are deliberately **no testimonials and no adoption statistics** on the
site, since none exist yet for this product.
