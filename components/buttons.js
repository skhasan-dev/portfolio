// ============================================================
//  components/buttons.js — Generic reusable button/icon builders
//  No content strings live here beyond structural a11y labels.
//  Callers decide whether to render at all (hide-if-empty lives
//  in the section components, not here).
// ============================================================

// ── ICON SET (inline SVG paths, reused across nav/contact/projects) ──
const ICONS = {
  github:   '<path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-1.02-.01-1.85-2.78.5-3.5-.68-3.5-.68-.55-1.02-1.34-1.29-1.34-1.29-.87-.5.07-.62.07-.62.87.06 1.33.87 1.33.87.85 1.45 2.23 1.03 2.77.79.09-.65.36-1.09.66-1.34-2.29-.26-4.68-1.14-4.68-5.06 0-1.12.4-2.03 1.05-2.75-.1-.26-.46-1.31.1-2.72 0 0 .86-.28 2.82 1.05a9.7 9.7 0 0 1 5.12 0c1.96-1.33 2.82-1.05 2.82-1.05.56 1.41.2 2.46.1 2.72.65.72 1.05 1.63 1.05 2.75 0 3.93-2.4 4.8-4.69 5.05.37.32.69.94.69 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>',
  linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3V9zm7 0h3.8v1.71h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z"/>',
  twitter:  '<path d="M4 4l16 16M20 4L4 20"/>',
  resume:   '<path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1zM4 19a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"/>',
  contact:  '<path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13zm2.1.5 6.4 5.1a1 1 0 0 0 1 0L18.9 6H5.1zM19 8.1l-6.09 4.87a2.5 2.5 0 0 1-3.02 0L5 8.1V18h14V8.1z"/>',
  external: '<path d="M7 17L17 7M7 7h10v10"/>',
  chevronLeft:  '<path d="M15 18l-6-6 6-6"/>',
  chevronRight: '<path d="M9 18l6-6-6-6"/>',
};

/**
 * svgIcon(name, { fill })
 * fill: true for solid-fill glyphs (github/linkedin/resume/contact),
 * false for stroke-based glyphs (twitter, chevrons, external).
 */
function svgIcon(name, { fill = true } = {}) {
  const attrs = fill ? '' : ' fill="none" stroke-width="1.8"';
  return `<svg viewBox="0 0 24 24"${attrs}>${ICONS[name] || ''}</svg>`;
}

/**
 * iconButton({ href, label, icon, fill, download, className })
 * A circular icon-only button — used in the nav icon row and the
 * contact social row.
 */
function iconButton({ href, label, icon, fill = true, download = false, className = '' }) {
  const dlAttr  = download ? ' download' : '';
  const extAttr = href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a href="${escapeHtml(href)}" class="${className}" aria-label="${escapeHtml(label)}"${extAttr}${dlAttr}>${svgIcon(icon, { fill })}</a>`;
}

/**
 * pillLink({ href, label, icon, filled })
 * Rounded pill CTA — used for project card links and the résumé
 * download strip. `filled` = solid ink pill (primary); otherwise
 * an outlined ghost pill (secondary).
 */
function pillLink({ href, label, icon, filled = false, className = '' }) {
  const cls = [className, filled ? '' : 'gh-link'].filter(Boolean).join(' ');
  const iconHtml = icon ? svgIcon(icon, { fill: icon === 'github' }) : '';
  return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" class="${cls}">${iconHtml}${escapeHtml(label)}</a>`;
}

/**
 * ctaPrimary({ label, href })
 * Bold underlined text CTA (Hero's "View projects" style).
 */
function ctaPrimary({ label, href }) {
  return `<a href="${escapeHtml(href)}" class="cta-primary">${escapeHtml(label)} <span class="arrow">→</span></a>`;
}

/**
 * ctaSecondary({ label, href })
 * Italic serif text CTA (Hero's "or start a project" style).
 */
function ctaSecondary({ label, href }) {
  return `<a href="${escapeHtml(href)}" class="cta-secondary">${escapeHtml(label)} <span class="arrow">→</span></a>`;
}

/**
 * btnGhost({ label, href, download })
 * Outlined button — used for the résumé download strip.
 */
function btnGhost({ label, href, download = false }) {
  const dlAttr = download ? ' download' : '';
  return `<a href="${escapeHtml(href)}" class="btn btn-ghost"${dlAttr}>${escapeHtml(label)}</a>`;
}
