// ============================================================
//  components/reveal.js — Shared scroll-entrance system
//  Sitewide standard: elements drop in from above with a bouncy
//  back-ease-out curve (see theme.js → --entrance-easing). Every
//  section registers itself through the one helper below instead
//  of hand-rolling its own IntersectionObserver.
// ============================================================

/**
 * registerSectionEntrance(sectionId, animClass, threshold)
 * Watches #sectionId; once it's `threshold` visible, adds `.in`
 * to every `.animClass` element inside it, then disconnects.
 * Plays once. Safe to call even if the section doesn't exist.
 */
function registerSectionEntrance(sectionId, animClass, threshold = 0.15) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.querySelectorAll('.' + animClass).forEach(el => el.classList.add('in'));
        observer.disconnect();
      }
    });
  }, { threshold });

  observer.observe(section);
}

/**
 * playHeroEntrance()
 * The hero plays its entrance on page load (not scroll) — nav
 * pill plus every `.hero-anim` element inside `.hero-grid`.
 */
function playHeroEntrance() {
  const nav = document.getElementById('siteNav');
  if (nav) nav.classList.add('in');
  document.querySelectorAll('.hero-grid > .hero-anim').forEach(el => el.classList.add('in'));
}
