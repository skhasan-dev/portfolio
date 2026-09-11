// ============================================================
//  components/skills.js — Skills Section
//  Folder-tab system: one category open at a time.
// ============================================================

/**
 * renderSkills(container, sectionCopy, categories)
 * `container` is the #skills `.wrap` element.
 */
function renderSkills(container, sectionCopy, categories) {
  container.innerHTML = `
    <div class="eyebrow skills-anim">${escapeHtml(sectionCopy.eyebrow)}</div>
    <h2 class="section-title skills-anim">${escapeHtml(sectionCopy.title)}</h2>
    ${sectionCopy.sub ? `<p class="section-sub skills-anim">${escapeHtml(sectionCopy.sub)}</p>` : ''}
    <div class="skill-tabs skills-anim" role="tablist">
      ${categories.map((cat, i) => `
        <button class="skill-tab${i === 0 ? ' active' : ''}" data-panel="panel-${i}">${escapeHtml(cat.tab)}</button>
      `).join('')}
    </div>
    <div class="skill-folder skills-anim">
      ${categories.map((cat, i) => `
        <div class="folder-panel${i === 0 ? ' active' : ''}" data-panel="panel-${i}">
          <span class="folder-tag">${escapeHtml(cat.folderTag)}</span>
          <div class="folder-items">
            ${cat.tools.map(t => `<span class="folder-item">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * initSkillTabs()
 * Wires tab clicks to swap the active folder panel.
 */
function initSkillTabs() {
  const tabs = document.querySelectorAll('.skill-tab');
  const panels = document.querySelectorAll('.folder-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.panel;
      panels.forEach(p => p.classList.toggle('active', p.dataset.panel === target));
    });
  });
}
