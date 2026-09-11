// ============================================================
//  components/utils.js — Shared helpers
//  The one place HTML-escaping lives. Every component uses this
//  instead of keeping its own private copy.
// ============================================================

/**
 * escapeHtml(str)
 * Escapes &, <, >, " so interpolated data.js content can never
 * break out of the markup it's injected into.
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
