// ============================================================
//  components/testimonials.js — Testimonials Section
//  Pinned-note cards. The whole section hides itself when
//  data.js → testimonials is empty — nothing renders, no
//  leftover empty grid.
// ============================================================

const TESTIMONIAL_ROTATIONS = [-1.4, 0.8, -0.6, 1.1, -0.9, 0.5]; // deg, cycles for >6 cards

/**
 * renderTestimonials(sectionEl, container, sectionCopy, items)
 * `sectionEl` is the whole <section id="testimonials"> (hidden if
 * `items` is empty); `container` is its `.wrap`.
 */
function renderTestimonials(sectionEl, container, sectionCopy, items) {
  if (!items || items.length === 0) {
    sectionEl.style.display = 'none';
    return;
  }

  container.innerHTML = `
    <div class="eyebrow testi-anim">${escapeHtml(sectionCopy.eyebrow)}</div>
    <h2 class="section-title testi-anim">${escapeHtml(sectionCopy.title)}</h2>
    <div class="testi-grid">
      ${items.map((item, i) => buildTestimonialCard(item, i)).join('')}
    </div>
  `;
}

function buildTestimonialCard(item, index) {
  const rot = TESTIMONIAL_ROTATIONS[index % TESTIMONIAL_ROTATIONS.length];
  return `
    <div class="tcard testi-anim" style="--rot:${rot}deg">
      <p class="q">"${escapeHtml(item.quote)}"</p>
      <div class="who">${escapeHtml(item.name)} — ${escapeHtml(item.context)}</div>
    </div>`;
}
