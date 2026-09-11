// ============================================================
//  components/contact.js — Contact Section
//  Email row (copy-to-clipboard + sparkle), social icon row
//  (hidden per missing platform), and a note form that posts to
//  the portfolio_manager /api/contact endpoint.
// ============================================================

/**
 * renderContact(container, sectionCopy, personal)
 * `container` is the #contact `.wrap.contact-grid` element.
 */
function renderContact(container, sectionCopy, personal) {
  container.innerHTML = `
    <div>
      <div class="eyebrow contact-anim">${escapeHtml(sectionCopy.eyebrow)}</div>
      <h2 class="section-title contact-anim">${escapeHtml(sectionCopy.title)}</h2>
      ${sectionCopy.sub ? `<p class="section-sub contact-anim">${escapeHtml(sectionCopy.sub)}</p>` : ''}
      ${personal.email ? `
        <div class="email-row contact-anim">${escapeHtml(personal.email)} <span class="copy-wrap"><button class="copy-btn" id="copyBtn">copy</button></span></div>
      ` : ''}
      <div class="social-row contact-anim">${buildSocialIcons(personal)}</div>
    </div>
    ${buildNoteForm()}
  `;
}

function buildSocialIcons(personal) {
  const icons = [];
  if (personal.github)   icons.push(iconButton({ href: personal.github, label: 'GitHub', icon: 'github', className: 'icon-fill' }));
  if (personal.linkedin) icons.push(iconButton({ href: personal.linkedin, label: 'LinkedIn', icon: 'linkedin', className: 'icon-fill' }));
  if (personal.twitter)  icons.push(iconButton({ href: personal.twitter, label: 'X / Twitter', icon: 'twitter', fill: false, className: 'icon-line' }));
  return icons.join('');
}

function buildNoteForm() {
  return `
    <form class="note-form contact-anim" id="contactForm">
      <span class="prompt">drop me a note —</span>
      <label for="cname">Name</label>
      <input id="cname" type="text" placeholder="Jane Doe" required>
      <label for="cemail">Email</label>
      <input id="cemail" type="email" placeholder="jane@company.com" required>
      <label for="cmsg">Message</label>
      <textarea id="cmsg" rows="4" placeholder="Tell me a bit about the project..." required></textarea>
      <button type="submit" class="btn-send">Send note →</button>
      <div class="form-msg" id="formMsg"></div>
    </form>`;
}

/**
 * initContactCopy()
 * Copies the email to clipboard (with a document.execCommand
 * fallback) and fires the sparkle burst / "copied!" label
 * immediately, independent of which copy method actually
 * succeeded — so the user always gets feedback.
 */
function initContactCopy(email) {
  const copyBtn = document.getElementById('copyBtn');
  const copyWrap = document.querySelector('.copy-wrap');
  if (!copyBtn) return;

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  function spawnSparkles(container) {
    const count = 8;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'sparkle';
      s.textContent = Math.random() > 0.5 ? '✦' : '✧';
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const dist = 20 + Math.random() * 16;
      s.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
      s.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
      s.style.animationDelay = (Math.random() * 0.06) + 's';
      container.appendChild(s);
      setTimeout(() => s.remove(), 800);
    }
  }

  copyBtn.addEventListener('click', () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
    copyBtn.textContent = 'copied!';
    spawnSparkles(copyWrap);
    setTimeout(() => { copyBtn.textContent = 'copy'; }, 1600);
  });
}

/**
 * initContactForm()
 * Posts the note to portfolio_manager's public /api/contact
 * endpoint. Shows a stamp confirmation on success, an inline
 * error (rate-limited, validation failure, network down) on
 * failure, and leaves the fields filled in so the visitor can
 * retry without retyping.
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn = form.querySelector('.btn-send');
  const msgEl = document.getElementById('formMsg');
  const defaultBtnLabel = submitBtn.textContent;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const message = document.getElementById('cmsg').value.trim();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    msgEl.classList.remove('show', 'error');

    try {
      const res = await fetch(`${CONFIG.API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok || json.success === false) {
        throw new Error(json.error || 'Could not send right now — try again shortly.');
      }

      msgEl.textContent = "noted — thanks, I'll reply within a day.";
      form.reset();
    } catch (err) {
      msgEl.textContent = err.message || 'Could not send right now — try again shortly.';
      msgEl.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = defaultBtnLabel;
      msgEl.classList.add('show');
    }
  });
}
