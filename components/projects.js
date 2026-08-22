// ============================================================
//  components/projects.js — Projects Section
//  Horizontally-scrolling filmstrip: filter row, drag-to-scroll,
//  snap, dynamic prev/next arrows. Cards hide their result stamp,
//  GitHub pill, or primary pill individually when the underlying
//  data field is empty.
// ============================================================

/**
 * renderProjects(container, sectionCopy, filters, projects)
 * `container` is the #projects `.wrap` element.
 */
function renderProjects(container, sectionCopy, filters, projects) {
  container.innerHTML = `
    <div class="eyebrow projects-anim">${escapeHtml(sectionCopy.eyebrow)}</div>
    <h2 class="section-title projects-anim">${escapeHtml(sectionCopy.title)}</h2>
    ${sectionCopy.sub ? `<p class="section-sub projects-anim">${escapeHtml(sectionCopy.sub)}</p>` : ''}
    <div class="filter-row projects-anim" id="filterRow">
      <button class="filter-btn active" data-filter="all">All</button>
      ${filters.map(f => `<button class="filter-btn" data-filter="${escapeHtml(f.id)}">${escapeHtml(f.label)}</button>`).join('')}
    </div>
    <div class="filmstrip-row projects-anim">
      <button class="film-btn prev is-hidden" id="filmPrev" aria-label="Previous projects">${svgIcon('chevronLeft', { fill: false })}</button>
      <button class="film-btn next" id="filmNext" aria-label="Next projects">${svgIcon('chevronRight', { fill: false })}</button>
      <div class="projects-grid" id="projectsGrid">
        ${projects.map(buildProjectCard).join('')}
      </div>
    </div>
  `;
}

function buildProjectCard(project) {
  const badge = project.techBadge && project.techBadge.logo
    ? `<img src="${escapeHtml(project.techBadge.logo)}" alt="${escapeHtml(project.name)} logo" loading="lazy">`
    : escapeHtml((project.techBadge && project.techBadge.text) || '');

  const stampHtml = project.result
    ? `<span class="stamp">${escapeHtml(project.result)}</span>`
    : '';

  const githubHtml = project.githubUrl
    ? pillLink({ href: project.githubUrl, label: 'GitHub', icon: 'github', filled: false })
    : '';

  const primaryHtml = project.primaryLink && project.primaryLink.url
    ? pillLink({ href: project.primaryLink.url, label: project.primaryLink.label, icon: 'external', filled: true })
    : '';

  return `
    <div class="pcard" data-cat="${escapeHtml(project.category)}">
      <div class="pcard-top">
        <div class="pcard-title-row">
          <span class="tech-badge">${badge}</span>
          <h3>${escapeHtml(project.name)}</h3>
        </div>
        ${project.tag ? `<span class="tag">${escapeHtml(project.tag)}</span>` : ''}
      </div>
      <p class="desc">${escapeHtml(project.description)}</p>
      <div class="stack-row">${(project.stack || []).map(s => `<span>${escapeHtml(s)}</span>`).join('')}</div>
      ${stampHtml}
      <div class="plinks">${githubHtml}${primaryHtml}</div>
    </div>`;
}

/**
 * initProjectsFilmstrip()
 * Wires drag-to-scroll, snap-arrow visibility, and category
 * filtering for the projects filmstrip. No-op if the section
 * isn't on the page.
 */
function initProjectsFilmstrip() {
  const filmstrip = document.getElementById('projectsGrid');
  const prevBtn = document.getElementById('filmPrev');
  const nextBtn = document.getElementById('filmNext');
  if (!filmstrip) return;

  function updateFilmButtons() {
    const maxScroll = filmstrip.scrollWidth - filmstrip.clientWidth;
    const noOverflow = maxScroll <= 4;
    const atStart = filmstrip.scrollLeft <= 4;
    const atEnd = filmstrip.scrollLeft >= maxScroll - 4;
    prevBtn?.classList.toggle('is-hidden', noOverflow || atStart);
    nextBtn?.classList.toggle('is-hidden', noOverflow || atEnd);
  }

  let isDown = false, startX, scrollStart;
  filmstrip.addEventListener('mousedown', (e) => {
    isDown = true;
    filmstrip.classList.add('dragging');
    startX = e.pageX;
    scrollStart = filmstrip.scrollLeft;
  });
  window.addEventListener('mouseup', () => { isDown = false; filmstrip.classList.remove('dragging'); });
  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    filmstrip.scrollLeft = scrollStart - (e.pageX - startX);
  });
  filmstrip.addEventListener('scroll', updateFilmButtons);
  window.addEventListener('resize', updateFilmButtons);
  prevBtn?.addEventListener('click', () => filmstrip.scrollBy({ left: -330, behavior: 'smooth' }));
  nextBtn?.addEventListener('click', () => filmstrip.scrollBy({ left: 330, behavior: 'smooth' }));
  requestAnimationFrame(updateFilmButtons);

  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.pcard');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c => c.classList.toggle('hidden', f !== 'all' && c.dataset.cat !== f));
      filmstrip.scrollLeft = 0;
      requestAnimationFrame(updateFilmButtons);
    });
  });
}
