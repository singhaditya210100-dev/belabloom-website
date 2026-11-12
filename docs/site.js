// Site-wide behaviour, loaded on every page through the head block from tools/seo.mjs:
//   1. On pages with a full-screen hero, the nav is see-through until the visitor scrolls.
//   2. Blocks below the first screen fade and sharpen into view as they are scrolled to.
// Everything is visible without this script; it only adds the motion.
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var nav = document.querySelector('.site-nav');
    if (nav && document.querySelector('.hero')) {
      var setNav = function () { nav.classList.toggle('at-top', window.scrollY < 40); };
      setNav();
      window.addEventListener('scroll', setNav, { passive: true });
    }

    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still || !('IntersectionObserver' in window)) return;

    var blocks = document.querySelectorAll([
      '.trio-card', '.band', '.values > div', '.explore-left', '.explore-links',
      '.feature-img', '.feature-text', '.cards-title', '.card-item',
      '.section-eyebrow', '.section-title', '.stat-cell', '.service-row',
      '.svc-point', '.process-step', '.locality', '.pest-link', '.zone-grid > div',
      '.prose > *', '.faq details', '.split > *',
      '.cta-bleed h2', '.cta-sub', '.cta-actions', '.cta-info > div',
    ].join(','));

    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        seen.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    var fold = window.innerHeight * 0.92;
    var row = 0;
    var lastTop = null;
    blocks.forEach(function (el) {
      // Reveal the outermost matching block only, and leave the first screen alone so nothing flashes.
      if (el.parentElement && el.parentElement.closest('.reveal')) return;
      var top = el.getBoundingClientRect().top;
      if (top < fold) return;
      // Blocks on the same row come in one after another.
      row = lastTop !== null && Math.abs(top - lastTop) < 4 ? row + 1 : 0;
      lastTop = top;
      el.style.transitionDelay = Math.min(row, 4) * 90 + 'ms';
      el.classList.add('reveal');
      seen.observe(el);
    });
  });
})();
