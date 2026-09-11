// ============================================================
//  components/nav.js — Nav Pill Component
//  Monogram + center links (from data.js → navLinks) + icon row
//  (GitHub / LinkedIn / résumé / contact — each hidden if its
//  underlying data field is empty).
// ============================================================

/**
 * renderNav(container, personal, navLinks)
 * Fills the nav-pill container. `container` is the `.nav-pill` element.
 */
function renderNav(container, personal, navLinks) {
  container.innerHTML = `
    <div class="nav-zone nav-left">
      <a href="#home" class="nav-monogram" aria-label="Home">${escapeHtml(personal.initials)}</a>
    </div>
    <div class="nav-zone nav-center">
      <nav class="nav-links">
        ${navLinks.map(l => `<a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a>`).join('')}
      </nav>
    </div>
    <div class="nav-zone nav-right">
      <div class="nav-icons">
        ${buildNavIcons(personal)}
      </div>
    </div>
  `;
}

function buildNavIcons(personal) {
  const icons = [];

  if (personal.github) {
    icons.push(iconButton({ href: personal.github, label: 'GitHub', icon: 'github', className: 'nav-icon-btn' }));
  }
  if (personal.linkedin) {
    icons.push(iconButton({ href: personal.linkedin, label: 'LinkedIn', icon: 'linkedin', className: 'nav-icon-btn' }));
  }
  if (personal.resumePDF) {
    icons.push(iconButton({ href: personal.resumePDF, label: 'Download résumé', icon: 'resume', download: true, className: 'nav-icon-btn' }));
  }
  icons.push(iconButton({ href: '#contact', label: 'Contact', icon: 'contact', className: 'nav-icon-btn' }));

  return icons.join('');
}

/**
 * initNavScroll()
 * Toggles `.scrolled` on the nav header past 20px of scroll —
 * deepens the glass background/shadow per THEME.md.
 */
function initNavScroll() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}
