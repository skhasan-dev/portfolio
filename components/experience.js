// ============================================================
//  components/experience.js — Experience Section
//  Unified work + education timeline. Chunked collapse/expand is
//  index-based and length-agnostic — adding a 6th or 20th entry
//  to data.js needs no changes here.
// ============================================================

const EXPERIENCE_CHUNK = 3;

/**
 * renderExperience(container, sectionCopy, entries, resumePDF)
 * `container` is the #experience `.wrap` element.
 */
function renderExperience(container, sectionCopy, entries, resumePDF) {
  container.innerHTML = `
    <div class="eyebrow exp-anim">${escapeHtml(sectionCopy.eyebrow)}</div>
    <h2 class="section-title exp-anim">${escapeHtml(sectionCopy.title)}</h2>
    ${sectionCopy.sub ? `<p class="section-sub exp-anim">${escapeHtml(sectionCopy.sub)}</p>` : ''}
    <div class="timeline exp-anim" id="timeline">
      ${entries.map(buildTimelineRow).join('')}
    </div>
    <button class="timeline-toggle exp-anim" id="timelineToggle"><span class="label"></span><span class="arrow">↓</span></button>
    ${resumePDF ? `
      <div class="resume-strip exp-anim">
        <p>Want the short version? A one-page PDF with the same information, formatted for skimming.</p>
        ${btnGhost({ label: 'Download résumé (PDF) ↓', href: resumePDF, download: true })}
      </div>` : ''}
  `;
}

function buildTimelineRow(entry) {
  return `
    <div class="tl-row">
      <span class="tl-period">${escapeHtml(entry.period)}</span>
      <div class="tl-rail"><span class="tl-dot"></span><span class="tl-line"></span></div>
      <div class="tl-content">
        <span class="tl-period-mobile">${escapeHtml(entry.period)}</span>
        <div class="role">${escapeHtml(entry.role)}</div>
        <div class="org">${escapeHtml(entry.org)}</div>
        ${entry.location ? `<span class="loc">${escapeHtml(entry.location)}</span>` : ''}
      </div>
    </div>`;
}

/**
 * initExperienceTimeline()
 * Reveals rows in chunks of EXPERIENCE_CHUNK, manages the
 * connecting-line visibility, and the toggle button's label.
 */
function initExperienceTimeline() {
  const toggle = document.getElementById('timelineToggle');
  const rows = Array.from(document.querySelectorAll('.tl-row'));
  if (!toggle || rows.length === 0) return;

  let visibleCount = Math.min(EXPERIENCE_CHUNK, rows.length);

  function updateLines() {
    rows.forEach((r, i) => {
      const line = r.querySelector('.tl-line');
      if (line) line.style.display = (i === visibleCount - 1) ? 'none' : '';
    });
  }

  /**
   * setRowHidden(row, hidden, animate)
   * Animated collapse/expand needs the row's max-height pinned to its
   * real pixel height (not a fixed guess) before the transition starts —
   * otherwise the row jumps open instantly and the rest of the
   * transition plays out invisibly. The offsetHeight read forces a
   * layout flush so the pinned value actually paints before the target
   * value is set, which is what makes the transition interpolate at all.
   */
  function setRowHidden(row, hidden, animate) {
    const isHidden = row.classList.contains('tl-hidden');
    if (hidden === isHidden) return;

    if (!animate) {
      row.style.maxHeight = '';
      row.classList.toggle('tl-hidden', hidden);
      return;
    }

    if (hidden) {
      row.style.maxHeight = row.scrollHeight + 'px';
      row.offsetHeight;
      row.classList.add('tl-hidden');
      row.style.maxHeight = '0px';
    } else {
      row.classList.remove('tl-hidden');
      row.style.maxHeight = '0px';
      row.offsetHeight;
      row.style.maxHeight = row.scrollHeight + 'px';
    }

    row.addEventListener('transitionend', function onEnd(e) {
      if (e.propertyName === 'max-height') row.style.maxHeight = '';
    }, { once: true });
  }

  function apply(animate) {
    rows.forEach((r, i) => setRowHidden(r, i >= visibleCount, animate));
    updateLines();
    const label = toggle.querySelector('.label');
    const remaining = rows.length - visibleCount;
    if (remaining <= 0) {
      label.textContent = 'Show less';
      toggle.classList.add('expanded');
    } else {
      const next = Math.min(EXPERIENCE_CHUNK, remaining);
      label.textContent = `+ ${next} more entr${next > 1 ? 'ies' : 'y'}`;
      toggle.classList.remove('expanded');
    }
  }

  if (rows.length <= EXPERIENCE_CHUNK) {
    toggle.style.display = 'none';
  } else {
    toggle.addEventListener('click', () => {
      visibleCount = (visibleCount >= rows.length)
        ? Math.min(EXPERIENCE_CHUNK, rows.length)
        : Math.min(visibleCount + EXPERIENCE_CHUNK, rows.length);
      apply(true);
    });
  }
  apply(false);
}
