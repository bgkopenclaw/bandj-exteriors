# B&J Exteriors — Marketing Site

Static marketing website for **B and J Exteriors**, a power-washing business serving
Bergen County, NJ. Built with **Astro + Tailwind CSS** for fast load times and easy
deployment to Netlify or Vercel.

---

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build → ./dist
npm run preview    # preview the production build locally
```

Requires Node 18+ (Node 20+ recommended).

---

## Project structure

```
bandj-exteriors/
├── public/                       # static assets served as-is
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── logo-placeholder.svg          ← swap with real B&J logo
│       ├── hero-placeholder.svg          ← swap with real hero photo
│       └── before-after/                 ← swap with real photo pairs
├── src/
│   ├── data/site.ts              # single source of truth (phones, services, towns)
│   ├── layouts/BaseLayout.astro  # <head>, SEO, OG tags, JSON-LD slot
│   ├── components/               # Header, Footer, QuoteForm, BeforeAfter, etc.
│   ├── pages/                    # one file per route (index, services, about, gallery, contact)
│   └── styles/global.css         # Tailwind + brand fonts (Anton + Inter)
├── astro.config.mjs
├── tailwind.config.mjs           # brand colors live here
├── netlify.toml
└── package.json
```

---

## Things you'll want to swap in

### 1. Replace the logo

Drop the real B&J shield logo (the one with the power-washing wand + house roofline)
into `public/images/` and replace the placeholder file:

```bash
# delete the placeholder and add your real file with the same name, e.g.:
public/images/logo-placeholder.svg → public/images/logo.svg
```

Then update the two `<img src="/images/logo-placeholder.svg">` references in:

- `src/components/Header.astro`
- `src/components/Footer.astro`

(Recommended: an SVG or a transparent PNG at ~400×120.)

### 2. Replace placeholder photos

All placeholder images are SVGs labeled with HTML comments like
`<!-- PLACEHOLDER — replace with real ... -->`. The files live in:

- `public/images/hero-placeholder.svg` — homepage hero background
- `public/images/before-after/*.svg` — gallery & home before/after pairs

You can either keep the same filenames (drop in `house-before.jpg` and update the
`src=` paths to `.jpg`) or use new names — just update the matching `src=` attribute
in `src/pages/index.astro`, `src/pages/gallery.astro`, and `src/pages/services.astro`.

Recommended sizes:
- Hero background: 1600–2400px wide
- Before/after gallery photos: 1200×900 (4:3)

### 3. Update business info

All phone numbers, owners, towns, services, and testimonials live in **one file**:

```
src/data/site.ts
```

Edit there once and the change propagates everywhere (header, footer, JSON-LD,
forms, CTAs, schema markup).

### 4. Wire up the quote form

The form (`src/components/QuoteForm.astro`) is configured for **Netlify Forms** by
default and needs **zero setup** if you deploy to Netlify — submissions show up in
your Netlify dashboard under *Forms* after the first deploy.

**To use Formspree instead:** open `src/components/QuoteForm.astro` and follow the
inline `<!-- QUOTE FORM — submission setup -->` comment. You'll:

1. Get a Formspree endpoint from https://formspree.io
2. Change `<form name="quote-request" data-netlify="true" …>` to
   `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
3. Remove the hidden `form-name` input and `bot-field` honeypot block

---

## Deploying

### Netlify (recommended — form submissions work out of the box)

1. Push the repo to GitHub.
2. In Netlify: *Add new site → Import from Git → pick the repo.*
3. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. After the first deploy, hit *Site settings → Forms* to enable email
   notifications for new quote requests.

### Vercel

1. Push the repo to GitHub.
2. In Vercel: *New Project → Import → pick the repo.*
3. Framework preset: **Astro** (auto-detected). Defaults are correct.
4. If staying on Vercel, switch the form to Formspree (see above) since Netlify
   Forms doesn't work on Vercel.

### Custom domain

Point `www.BandJExteriors.com` (and the apex `bandjexteriors.com`) at your host
following their DNS instructions. The site is configured for that domain in
`astro.config.mjs` (`site:` field) — update there if the domain changes, since it
affects canonical URLs and OG tags.

---

## SEO & accessibility (already in place)

- Per-page `<title>` and meta description (set via `BaseLayout` props)
- Open Graph + Twitter Card meta tags
- Canonical URLs
- **LocalBusiness JSON-LD** structured data on the home page (includes both phone
  numbers, service area, and all three services)
- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- Alt text on all images (placeholders included)
- Tap-to-call `tel:` links everywhere phone numbers appear
- Skip-to-content link for keyboard users
- WCAG-conscious color contrast (navy + accent blue + white)
- Sticky header with always-visible "Call Now" CTA on mobile

---

## Brand colors (Tailwind classes)

| Token | Hex | Tailwind |
|---|---|---|
| Navy (base) | `#0A1628` | `bg-navy` / `bg-navy-800` |
| Navy (deep) | `#070F1C` | `bg-navy-900` |
| Navy (panel) | `#15263D` | `bg-navy-600` |
| Accent blue | `#2E6FD6` | `bg-accent` |
| Accent light | `#4A90E2` | `text-accent-light` |
| Silver | `#C8D0DC` | `text-silver` |

Defined in `tailwind.config.mjs` — edit there to tune.

---

## Fonts

- **Headings:** Anton (loaded from Google Fonts), falls back to Archivo Black /
  Impact.
- **Body:** Inter (Google Fonts), falls back to system UI.

Loaded once in `src/styles/global.css`.
