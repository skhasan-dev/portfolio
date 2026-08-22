// ============================================================
//  components/about.js — About Section
//  6 number-driven "page" cards. No prose by design — see LAYOUT.md.
// ============================================================

/**
 * renderAbout(container, sectionCopy, items)
 * `container` is the #about `.wrap` element.
 */
function renderAbout(container, sectionCopy, items) {
  container.innerHTML = `
    <div class="eyebrow about-anim">${escapeHtml(sectionCopy.eyebrow)}</div>
    <h2 class="section-title about-anim">${escapeHtml(sectionCopy.title)}</h2>
    ${sectionCopy.sub ? `<p class="section-sub about-anim">${escapeHtml(sectionCopy.sub)}</p>` : ''}
    <div class="about-pages">
      ${items.map((item, i) => buildPageCard(item, i)).join('')}
    </div>
  `;
}

function buildPageCard(item, index) {
  const pgTag = 'pg. ' + String(index + 1).padStart(2, '0');
  return `
    <div class="page-card about-anim">
      <span class="pg-tag">${pgTag}</span>
      <span class="pg-num">${escapeHtml(item.number)}</span>
      <span class="pg-label"><span class="hl">${escapeHtml(item.highlight)}</span> ${escapeHtml(item.rest)}</span>
    </div>`;
}
