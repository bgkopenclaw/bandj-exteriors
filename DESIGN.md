# B and J Exteriors — Design

Aesthetic lane: **photo-led product brand applied to a trade**. Reference shape: a Field Mag feature, an Aesop product page, a Nordic outdoor brand. Not editorial-typographic. Not SaaS dashboard. Not contractor-template.

## Color (OKLCH-derived)

Strategy: **Restrained, dark-direction**. Tinted neutrals doing most of the work; one deliberate marine moment for the primary CTA. Surface temperature: cool slate underneath, warm bone on top. The mismatch is the voice.

| Token | OKLCH | Hex | Use |
|---|---|---|---|
| `bg` | `oklch(0.21 0.012 235)` | `#1B2125` | Page background |
| `bg-up` | `oklch(0.26 0.012 235)` | `#252B30` | Elevated surfaces, sparingly |
| `hairline` | `oklch(0.35 0.012 235)` | `#3D4348` | 1px dividers |
| `bone` | `oklch(0.96 0.012 65)` | `#F5EFE3` | Display type |
| `bone-soft` | `oklch(0.86 0.012 65)` | `#DDD7CA` | Body type |
| `bone-mute` | `oklch(0.62 0.010 65)` | `#9C968A` | Labels, metadata |
| `marine` | `oklch(0.55 0.14 230)` | `#1F6A9B` | Single dedicated accent — primary CTA only |
| `wet` | `oklch(0.68 0.10 215)` | `#5B9CBF` | Reserved for links / arrow glyphs |

Hard ban: `#000`, `#fff`, the SaaS-blue range around hue 245–260, and any purple. No gradient text. No glow shadows. No glass blur.

## Typography

One family does the heavy lifting; one mono carries technical labels. Deliberate, not timid.

- **Familjen Grotesk** (Pangram Pangram, free; on Google Fonts). Wide grotesque with material weight. Used at 400–700 with strong scale contrast.
- **Geist Mono** (Vercel, free; on Google Fonts). Used at small sizes for metadata, phone numbers as data, timestamps, "N° 0X" labels.

Scale (clamp, fluid). Ratio ~1.333.
- Display 01: `clamp(3rem, 6vw + 1rem, 6.5rem)` — hero / page heads
- Display 02: `clamp(2rem, 3.5vw + 0.75rem, 4rem)` — section heads
- Display 03: `clamp(1.5rem, 1.5vw + 0.875rem, 2.25rem)` — sub-heads
- Body: `clamp(1rem, 0.25vw + 0.95rem, 1.125rem)`, line-height 1.6
- Small: `0.875rem`
- Mono label: `0.75rem`, letter-spacing 0.04em, uppercase

Tracking: display uses `letter-spacing: -0.02em`. Mono labels use `letter-spacing: 0.08em` and uppercase.

Line length: body capped at 65ch.

Light-on-dark line-height bump: body line-height 1.65 (vs. 1.55 for dark-on-light).

## Layout

- **Asymmetric by default.** 12-col with intentional offsets. Type doesn't center under headings; it sits left or hangs into the margin.
- **Single dominant idea per fold.** Each major section earns 100vh worth of attention.
- **Spacing rhythm:** intentional alternation between generous (clamp 8–14rem) section breaks and tight (1rem) grouping. Not uniform.
- **No card grids.** Where the current site uses 3-up cards, replace with vertical narrative blocks or a single dominant element.
- **Container:** max 1440px, but break out for full-bleed imagery whenever the design wants it.
- **Mobile:** strict single-column collapse, generous padding, full-bleed images.

## Imagery

- **The site is photo-led.** Hero, services, before/after, about — all expect real photos.
- **Placeholders for now** are atmospheric SVGs that read as art-directed proofs (wet stone surfaces, motion-blurred water, slate gradients with noise). Each is clearly commented for swap.
- Comments live next to every `<img>` describing the kind of shot needed and the exact dimensions.

## Motion

- **Pure CSS** (the site is Astro; zero JS by default). A tiny IntersectionObserver script enables reveal-on-scroll.
- **Easing:** ease-out-quart `cubic-bezier(0.165, 0.84, 0.44, 1)`. No bounce.
- **Reveals:** opacity 0→1, translateY 14→0, duration 720ms, ease-out-quart. Staggered via `--idx` CSS variable, 80ms apart.
- **Hover:** color shifts only, 200ms. Never animate layout properties.
- **Sticky header:** subtle backdrop change at >40px scroll.

## Components (philosophy)

- **No reusable card with icon + heading + paragraph.** That pattern is banned.
- **Phone number is a typographic element**, not a button — except where it's the primary CTA in the hero/footer, where it gets the marine moment.
- **Before/after:** vertical pair, equal weight, no decorative chrome. Caption as set-in mono label.
- **CTA:** one button style only. Marine fill. Single icon (arrow up-right). Tactile press state via `translateY(1px)`.
- **Forms:** labels above inputs, mono-label small caps, 1px hairline borders, no rounded card around the form.

## What we keep from the previous build

- Astro + Tailwind stack
- Single source of truth: `src/data/site.ts`
- Netlify Forms wiring on the quote form
- Calendly inline embed via `is:inline` script
- JSON-LD LocalBusiness, OG tags, canonicals
- Tap-to-call `tel:` links throughout
- Five-page IA: home / services / about / gallery / contact

Everything else gets redrawn.
