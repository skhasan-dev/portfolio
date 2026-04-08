// ============================================================
//  components/indicators.js — Indicators, Pills & Micro-UI
//  Timeline items, badges, pills, cursor, scroll reveal.
//  All visual output is driven by CSS vars from theme.js.
// ============================================================

// ── TIMELINE ──────────────────────────────────────────────

/**
 * buildTimelineItem(entry)
 * Returns an HTMLElement for one experience/education row.
 *
 * @param {Object} entry — One item from PORTFOLIO_DATA.experience
 * @returns {HTMLElement}
 */
function buildTimelineItem(entry) {
  const el = document.createElement('div');
  el.className = entry.type === 'education' ? 'tl-item education' : 'tl-item';

  const badgeHtml  = entry.badge
    ? `<span class="tl-badge">${_iEsc(entry.badge)}</span>`
    : '';

  const pointsHtml = entry.points && entry.points.length
    ? `<ul class="tl-points">
        ${entry.points.map(p => `<li>${_iEsc(p)}</li>`).join('')}
       </ul>`
    : '';

  el.innerHTML = `
    <p class="tl-date">${_iEsc(entry.period)}</p>
    <p class="tl-role">${_iEsc(entry.role)}${badgeHtml}</p>
    <p class="tl-company">${_iEsc(entry.company)}</p>
    ${pointsHtml}
  `;

  return el;
}

// ── PILLS ──────────────────────────────────────────────────

/**
 * techPill(label)
 * Small monospaced tag for the About tech stack grid.
 */
function techPill(label) {
  return `<span class="tech-pill">${_iEsc(label)}</span>`;
}

/**
 * stackPill(label)
 * Accent-tinted pill for project card tech stacks.
 */
function stackPill(label) {
  return `<span class="stack-pill">${_iEsc(label)}</span>`;
}

// ── SCROLL REVEAL ──────────────────────────────────────────

/**
 * initScrollReveal()
 * Finds every .reveal element in the DOM and watches it with
 * IntersectionObserver. Adding .visible triggers the CSS animation.
 * Call once after all sections have been rendered.
 */
function initScrollReveal() {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ── CUSTOM CURSOR ──────────────────────────────────────────

/**
 * initCursor()
 * Wires up the two-layer custom cursor (dot + lagging ring).
 * Expands the ring when hovering interactive elements.
 * Call once on DOMContentLoaded.
 */
function initCursor() {
  const dot  = document.getElementById('cur-dot');
  const ring = document.getElementById('cur-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function loop() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  // Expand on hover over interactive targets
  const INTERACTIVE = 'a, button, .project-card, .tech-pill, .card-link, .ps-badge';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(INTERACTIVE)) {
      ring.style.width       = '48px';
      ring.style.height      = '48px';
      ring.style.borderColor = 'rgba(0,217,200,0.7)';
    } else {
      ring.style.width       = '32px';
      ring.style.height      = '32px';
      ring.style.borderColor = 'rgba(0,217,200,0.4)';
    }
  });
}

// ── SECTION NUMBER INDICATOR ───────────────────────────────

/**
 * sectionLabel(num, text)
 * Returns the styled "// 01. label" above each section heading.
 *
 * @param {string} num  — e.g. "01"
 * @param {string} text — e.g. "about me"
 */
function sectionLabel(num, text) {
  return `<p class="section-label">// ${_iEsc(num)}. ${_iEsc(text)}</p>`;
}

// ── PRIVATE ESCAPE HELPER ─────────────────────────────────
function _iEsc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
