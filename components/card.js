// ============================================================
//  components/card.js — Project Card Component
//  Builds and returns a DOM node for one project entry.
//  All styling via CSS classes in style.css + theme vars.
// ============================================================

/**
 * buildProjectCard(project, index)
 *
 * @param {Object} project  — One entry from PORTFOLIO_DATA.projects
 * @param {number} index    — Position in the array (used for stagger delay)
 * @returns {HTMLElement}   — A fully built .project-card div
 */
function buildProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  card.style.transitionDelay = `${(index % 3) * 0.1}s`;

  card.innerHTML = `
    ${buildAccentBar(project.accent)}
    ${buildImageZone(project)}
    ${buildCardBody(project)}
  `;

  return card;
}

// ── SUB-BUILDERS ──────────────────────────────────────────

function buildAccentBar(accent) {
  return `<div class="card-bar" style="height:3px; background:var(--accent-${esc(accent || 'teal')});"></div>`;
}

function buildImageZone(project) {
  let inner;

  if (project.image) {
    // User has provided a promo screenshot
    inner = `<img src="${esc(project.image)}" alt="${esc(project.name)} screenshot" loading="lazy">`;
  } else {
    // Placeholder with logo or emoji fallback
    const iconHtml = project.logo
      ? `<img class="card-img-logo" src="${esc(project.logo)}" alt="${esc(project.name)} logo" loading="lazy">`
      : `<div class="card-img-icon"><span style="font-size:24px" role="img">${project.emoji || '📱'}</span></div>`;

    inner = `
      <div class="card-img-placeholder">
        ${iconHtml}
        <p class="card-img-caption">Add promo screenshot in data.js → image field</p>
      </div>
      <span class="img-hint">ADD IMG</span>`;
  }

  return `<div class="card-img">${inner}</div>`;
}

function buildCardBody(project) {
  return `
    <div class="card-body">
      <p class="card-name">${esc(project.name)}</p>
      <p class="card-tagline">${esc(project.tagline)}</p>
      <p class="card-desc">${esc(project.description)}</p>
      <div class="stack-pills">
        ${(project.stack || []).map(s => `<span class="stack-pill">${esc(s)}</span>`).join('')}
      </div>
      <div class="card-actions">
        ${buildCardActions(project)}
      </div>
    </div>`;
}

function buildCardActions(project) {
  let actions = '';

  if (project.playStoreUrl) {
    actions += `
      <a href="${esc(project.playStoreUrl)}" target="_blank" rel="noopener noreferrer"
          aria-label="Get ${esc(project.name)} on Google Play">
        <image src="assets/playstore.png" alt="Google Play Store" height="40">
      </a>`;
  }

    if (project.indusUrl) {
    actions += `
      <a href="${esc(project.indusUrl)}" target="_blank" rel="noopener noreferrer"
          aria-label="Get ${esc(project.name)} on Google Play">
        <image src="assets/indus.png" alt="Google Play Store" height="40">
      </a>`;
  }

  if (project.githubUrl) {
    actions += `<a href="${esc(project.githubUrl)}" target="_blank" rel="noopener noreferrer"
       class="card-link">GitHub →</a>`;
  }

  if (project.demoUrl) {
    actions += `<a href="${esc(project.demoUrl)}" target="_blank" rel="noopener noreferrer"
       class="card-link">Live Demo →</a>`;
  }

  if (!actions) {
    actions = `<span class="card-link" style="opacity:0.4; cursor:default;">Coming Soon</span>`;
  }

  return actions;
}

// ── ESCAPE HELPER (local copy so component is self-contained) ──
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
