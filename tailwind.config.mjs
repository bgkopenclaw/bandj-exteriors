/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Wet-slate base, cool underneath, warm bone on top.
        // OKLCH-defined; hex values below for Tailwind/legacy compatibility.
        bg:        '#1B2125',  // oklch(0.21 0.012 235)
        'bg-up':   '#252B30',  // oklch(0.26 0.012 235)
        hairline:  '#3D4348',  // oklch(0.35 0.012 235)
        bone:      '#F5EFE3',  // oklch(0.96 0.012 65)
        'bone-soft': '#DDD7CA',// oklch(0.86 0.012 65)
        'bone-mute': '#9C968A',// oklch(0.62 0.010 65)
        marine:    '#1F6A9B',  // oklch(0.55 0.14 230)  — primary CTA only
        'marine-press': '#185576',
        wet:       '#5B9CBF',  // oklch(0.68 0.10 215)  — links / arrow glyphs
      },
      fontFamily: {
        display: ['"Familjen Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Familjen Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Fluid, ratio ~1.333. Display sizes use clamp via arbitrary values too.
        'mono-label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.08em' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.022em',
      },
      maxWidth: {
        'measure': '65ch',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
