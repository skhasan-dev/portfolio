// ============================================================
//  THEME.JS — Design tokens & color system
//  "Field Notes" theme: grayscale notebook palette with a single
//  red-ink accent used only for hand-annotation moments.
//  Change values here to restyle the entire portfolio.
// ============================================================

const THEME = {

  // ── COLOR PALETTE ─────────────────────────────────────────
  // One accent (red) used only as a "checked by hand" mark —
  // never as a general UI color. Everything else is grayscale.
  colors: {
    paper:   '#F6F6F4',                  // page background
    ink:     '#1A1A1A',                  // primary text, headings
    pencil:  '#6B6B6B',                  // secondary/muted text
    rule:    '#D8D8D5',                  // hairlines, borders, dot-grid
    surface: '#FFFFFF',                  // card and form backgrounds
    red:     '#B3453E',                  // accent — annotation only
    redDim:  'rgba(179,69,62,0.10)',     // faint red wash (selection highlight)
  },

  // ── TYPOGRAPHY ────────────────────────────────────────────
  // Google Fonts are loaded in index.html. Change family names
  // here if you switch fonts — CSS variables update automatically.
  fonts: {
    mono:    "'Courier Prime', ui-monospace, monospace",
    serif:   "'Source Serif 4', Georgia, serif",
    display: "'Fraunces', Georgia, serif",
    hand:    "'Caveat', cursive",
  },

  // ── LAYOUT ────────────────────────────────────────────────
  layout: {
    maxWidth: '1320px',
  },

  // ── MOTION ────────────────────────────────────────────────
  // Sitewide entrance curve — every section's reveal uses this
  // exact bouncy back-ease-out. Do not introduce a second curve.
  motion: {
    entranceEasing: 'cubic-bezier(.34,1.56,.64,1)',
  },
};

// ── CSS VARIABLE INJECTION ────────────────────────────────
// Writes every token above into :root as CSS variables at
// runtime, so style.css can reference them without hardcoding.
(function injectCSSVars() {
  const vars = {
    '--paper':   THEME.colors.paper,
    '--ink':     THEME.colors.ink,
    '--pencil':  THEME.colors.pencil,
    '--rule':    THEME.colors.rule,
    '--surface': THEME.colors.surface,
    '--red':     THEME.colors.red,
    '--red-dim': THEME.colors.redDim,

    '--font-mono':    THEME.fonts.mono,
    '--font-serif':   THEME.fonts.serif,
    '--font-display': THEME.fonts.display,
    '--font-hand':    THEME.fonts.hand,

    '--maxw': THEME.layout.maxWidth,

    '--entrance-easing': THEME.motion.entranceEasing,
  };

  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
})();
