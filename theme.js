// ============================================================
//  THEME.JS — Design tokens & color system
//  Change values here to restyle the entire portfolio.
//  Nothing in index.html or style.css contains hardcoded colors.
// ============================================================

const THEME = {

  // ── ACCENT PALETTE ────────────────────────────────────────
  // Each accent is a named color available to project cards,
  // timeline dots, badges, and interactive elements.
  // Add new accents here and reference them by name in data.js.
  accents: {
    teal:   { base: '#00d9c8', glow: 'rgba(0,217,200,0.15)',  soft: 'rgba(0,217,200,0.08)',  border: 'rgba(0,217,200,0.2)'  },
    lime:   { base: '#b5f05a', glow: 'rgba(181,240,90,0.12)', soft: 'rgba(181,240,90,0.08)', border: 'rgba(181,240,90,0.2)' },
    purple: { base: '#9b6dff', glow: 'rgba(155,109,255,0.15)',soft: 'rgba(155,109,255,0.08)',border: 'rgba(155,109,255,0.2)'},
    coral:  { base: '#ff6b6b', glow: 'rgba(255,107,107,0.15)',soft: 'rgba(255,107,107,0.08)',border: 'rgba(255,107,107,0.2)'},
    blue:   { base: '#4db8ff', glow: 'rgba(77,184,255,0.15)', soft: 'rgba(77,184,255,0.08)', border: 'rgba(77,184,255,0.2)' },
    amber:  { base: '#ffb347', glow: 'rgba(255,179,71,0.15)', soft: 'rgba(255,179,71,0.08)', border: 'rgba(255,179,71,0.2)' },
  },

  // ── PRIMARY ACCENT ────────────────────────────────────────
  // Used for: nav logo, hero label, cursor, scroll line,
  //           timeline line, section labels, tech pill hover.
  primaryAccent: 'teal',

  // ── BACKGROUND SCALE ──────────────────────────────────────
  colors: {
    bg:       '#080810',  // page background
    bg2:      '#0e0e1a',  // slightly lifted
    bg3:      '#13131f',  // card image zone bg
    surface:  '#181828',  // cards, form inputs
    surface2: '#1e1e30',  // inner card elements, icon bg
  },

  // ── TEXT SCALE ────────────────────────────────────────────
  text: {
    primary: '#eae8f0',              // headings, card names
    muted:   'rgba(234,232,240,0.5)',// body copy, placeholders
  },

  // ── BORDERS ───────────────────────────────────────────────
  borders: {
    subtle:   'rgba(255,255,255,0.07)',  // default card border
    medium:   'rgba(255,255,255,0.13)',  // hover / input border
  },

  // ── TYPOGRAPHY ────────────────────────────────────────────
  // Google Fonts are loaded in index.html. Change family names
  // here if you switch fonts — CSS variables update automatically.
  fonts: {
    display: "'Syne', sans-serif",
    mono:    "'JetBrains Mono', monospace",
    body:    "'DM Sans', sans-serif",
  },

  // ── SPACING ───────────────────────────────────────────────
  spacing: {
    sectionPadding: '100px 60px',
    navPadding:     '20px 60px',
    cardPadding:    '24px',
  },

  // ── ANIMATION ─────────────────────────────────────────────
  animation: {
    revealDuration:  '0.6s',
    revealEasing:    'ease',
    hoverLift:       'translateY(-6px)',
    transitionSpeed: '0.3s',
  },
};

// ── CSS VARIABLE INJECTION ────────────────────────────────
// Writes every token above into :root as CSS variables at
// runtime, so style.css can reference them without hardcoding.
(function injectCSSVars() {
  const accent = THEME.accents[THEME.primaryAccent];
  const vars = {
    '--bg':               THEME.colors.bg,
    '--bg2':              THEME.colors.bg2,
    '--bg3':              THEME.colors.bg3,
    '--surface':          THEME.colors.surface,
    '--surface2':         THEME.colors.surface2,
    '--text':             THEME.text.primary,
    '--muted':            THEME.text.muted,
    '--border':           THEME.borders.subtle,
    '--border2':          THEME.borders.medium,
    '--accent':           accent.base,
    '--accent-glow':      accent.glow,
    '--accent-soft':      accent.soft,
    '--accent-border':    accent.border,
    '--font-display':     THEME.fonts.display,
    '--font-mono':        THEME.fonts.mono,
    '--font-body':        THEME.fonts.body,
    '--section-padding':  THEME.spacing.sectionPadding,
    '--nav-padding':      THEME.spacing.navPadding,
    '--card-padding':     THEME.spacing.cardPadding,
    '--reveal-duration':  THEME.animation.revealDuration,
    '--reveal-easing':    THEME.animation.revealEasing,
    '--hover-lift':       THEME.animation.hoverLift,
    '--transition-speed': THEME.animation.transitionSpeed,
  };

  // Inject per-accent CSS vars for components/card.js to use
  Object.entries(THEME.accents).forEach(([name, val]) => {
    vars[`--accent-${name}`]        = val.base;
    vars[`--accent-${name}-glow`]   = val.glow;
    vars[`--accent-${name}-soft`]   = val.soft;
    vars[`--accent-${name}-border`] = val.border;
  });

  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
})();
