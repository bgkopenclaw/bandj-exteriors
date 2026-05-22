// Reveal-on-scroll: toggle `.is-visible` on `[data-reveal]` elements when
// they cross 12% into the viewport. Stagger handled via CSS using --idx.
// Self-contained; no framework dependency.

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { rootMargin: '0px 0px -12% 0px', threshold: 0.01 }
);

for (const el of document.querySelectorAll('[data-reveal]')) {
  observer.observe(el);
}

// Sticky header tone change
const header = document.querySelector<HTMLElement>('header[data-header]');
if (header) {
  const onScroll = () => {
    if (window.scrollY > 32) header.dataset.scrolled = 'true';
    else delete header.dataset.scrolled;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
