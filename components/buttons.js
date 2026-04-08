// ============================================================
//  components/buttons.js — Button & Link Components
//  Returns HTML strings for reusable interactive elements.
//  Styles live in style.css; colors come from theme.js vars.
// ============================================================

/**
 * primaryButton({ label, href, download })
 * Solid filled CTA button.
 */
function primaryButton({ label, href = '#', download = false }) {
  const dlAttr = download ? ' download' : '';
  return `<a href="${_bEsc(href)}" class="btn-primary"${dlAttr}>${_bEsc(label)}</a>`;
}

/**
 * ghostButton({ label, href })
 * Outline/ghost CTA button.
 */
function ghostButton({ label, href = '#' }) {
  return `<a href="${_bEsc(href)}" class="btn-ghost">${_bEsc(label)}</a>`;
}

/**
 * formSubmitButton({ label })
 * Submit-style button inside the contact form.
 */
function formSubmitButton({ label = 'Send Message →' } = {}) {
  return `<button class="form-btn" type="button" onclick="handleContactForm(event)">${_bEsc(label)}</button>`;
}

/**
 * contactLinkItem({ icon, label, value, href })
 * A full-width contact row with icon, label, value, and arrow.
 * Pass href=null for non-clickable rows (e.g. location).
 */
function contactLinkItem({ icon, label, value, href }) {
  const arrow   = href ? `<span class="contact-link-arrow">→</span>` : '';
  const extAttr = href && href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';

  if (href) {
    return `
    <a class="contact-link" href="${_bEsc(href)}"${extAttr}>
      <div class="contact-link-icon">${icon}</div>
      <div>
        <p class="contact-link-label">${_bEsc(label)}</p>
        <p class="contact-link-value">${_bEsc(value)}</p>
      </div>
      ${arrow}
    </a>`;
  }

  return `
    <div class="contact-link" style="cursor:default;">
      <div class="contact-link-icon">${icon}</div>
      <div>
        <p class="contact-link-label">${_bEsc(label)}</p>
        <p class="contact-link-value">${_bEsc(value)}</p>
      </div>
    </div>`;
}

/**
 * backToTopLink()
 * Footer "back to top" anchor.
 */
function backToTopLink() {
  return `<a href="#hero" class="back-top">↑ Back to top</a>`;
}

// ── PRIVATE ESCAPE HELPER ─────────────────────────────────
function _bEsc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
