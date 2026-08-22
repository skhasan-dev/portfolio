// ============================================================
//  components/hero.js — Hero Section
//  Name is split into per-letter spans at runtime (built from
//  personal.name — never hardcoded), plus the nav-width font-fit
//  and letter hover-ripple interactions from THEME.md → Motion.
// ============================================================

/**
 * renderHero(container, personal)
 * `container` is the hero section's `.wrap` element.
 */
function renderHero(container, personal) {
  container.innerHTML = `
    <span class="page-num">page 01</span>
    <div class="hero-grid">
      <div class="eyebrow hero-anim">${escapeHtml(personal.eyebrowYear)}</div>
      <h1 class="hero-name hero-anim">
        <span class="name-inner">${buildNameLines(personal.name)}</span>
      </h1>
      ${personal.pinNote ? `<div class="hero-pin hero-anim">${escapeHtml(personal.pinNote)}</div>` : ''}
      <p class="hero-role hero-anim">${escapeHtml(personal.role)}</p>
      <p class="lead hero-anim">${escapeHtml(personal.lead)}</p>
      <div class="hero-ctas hero-anim">
        ${ctaPrimary({ label: 'View projects', href: '#projects' })}
        ${ctaSecondary({ label: 'or start a project', href: '#contact' })}
      </div>
    </div>
  `;
}

function buildNameLines(name) {
  return name.trim().split(/\s+/).map(word => {
    const letters = word.split('').map(ch => `<span class="letter">${escapeHtml(ch)}</span>`).join('');
    return `<span class="name-line">${letters}</span>`;
  }).join('');
}

/**
 * fitNameToNav()
 * Scales the hero name's font-size so it visually spans the same
 * width as the nav bar, with a 6% safety margin. Disabled below
 * 760px in favor of the CSS clamp() fallback.
 */
function fitNameToNav() {
  const nav = document.querySelector('.nav-pill');
  const nameEl = document.querySelector('.hero-name');
  const inner = document.querySelector('.name-inner');
  if (!nav || !nameEl || !inner) return;
  if (window.innerWidth < 760) { nameEl.style.fontSize = ''; return; }

  nameEl.style.fontSize = '';
  const targetWidth = nav.getBoundingClientRect().width;
  const baseWidth = inner.getBoundingClientRect().width;
  if (baseWidth === 0) return;
  const baseSize = parseFloat(getComputedStyle(nameEl).fontSize);
  nameEl.style.fontSize = (baseSize * (targetWidth / baseWidth) * 0.94) + 'px';
}

/**
 * initHeroNameFit()
 * Wires fitNameToNav() to load/resize/font-ready.
 */
function initHeroNameFit() {
  window.addEventListener('load', fitNameToNav);
  window.addEventListener('resize', fitNameToNav);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNameToNav);
  fitNameToNav();
}

/**
 * initHeroLetterRipple()
 * Hovering a letter bolds it; its immediate neighbors bold to a
 * lighter weight; everything else stays at base. Respects
 * prefers-reduced-motion.
 */
function initHeroLetterRipple() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  const letters = Array.from(document.querySelectorAll('.hero-name .letter'));
  letters.forEach((el, i) => {
    el.addEventListener('mouseenter', () => {
      letters.forEach((l, j) => {
        const dist = Math.abs(j - i);
        l.style.fontWeight = dist === 0 ? 700 : dist === 1 ? 360 : 50;
      });
    });
    el.addEventListener('mouseleave', () => {
      letters.forEach(l => { l.style.fontWeight = 50; });
    });
  });
}
