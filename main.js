// Renders the page from content.js. You shouldn't need to edit this file.
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const hide = (id) => ($(id).hidden = true);

  // Theme toggle (remembered per browser)
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch {}
  $("themeToggle").onclick = () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  };

  // Profile
  const p = S.profile;
  document.title = `${p.name} — ${p.title}`;
  $("brand").textContent = p.name;
  $("heroName").textContent = p.name;
  $("heroPhoto").alt = `Photo of ${p.name}`;
  $("heroPhoto").onerror = function () { this.remove(); }; // no photo.jpg → no broken image
  $("heroTitle").textContent = p.title;
  $("heroTagline").textContent = p.tagline;
  $("heroAvailability").textContent = p.availability || "";
  // "Email me" opens the visitor's mail app AND copies the address, because
  // mailto: links silently do nothing when no default mail app is set up.
  const linkBtns = (primaryEmail) =>
    (primaryEmail && p.email ? `<a class="btn primary email-btn" href="mailto:${esc(p.email)}">Email me</a>` : "") +
    p.links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
  $("heroLinks").innerHTML = linkBtns(true);
  $("contactLinks").innerHTML =
    linkBtns(true) +
    (p.email ? `<p class="email-line">or write to <a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>` : "");

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(p.email); return true; } catch { return false; }
  };
  document.addEventListener("click", async (e) => {
    const b = e.target.closest(".email-btn");
    if (!b) return;
    if (await copyEmail()) {
      b.textContent = "Email copied ✓";
      setTimeout(() => (b.textContent = "Email me"), 2500);
    }
  });
  $("footerText").textContent = `© ${new Date().getFullYear()} ${p.name}${p.location ? " · " + p.location : ""}`;

  // Stats
  if (S.stats?.length) {
    $("stats").innerHTML = S.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
  } else hide("stats");

  // About
  $("aboutBody").innerHTML = (S.about || []).map((t) => `<p>${esc(t)}</p>`).join("");

  // Achievements with tag filter
  const items = S.achievements || [];
  if (!items.length) hide("achievements");
  const tags = ["All", ...new Set(items.flatMap((a) => a.tags || []))];
  let active = "All";
  const renderAchievements = () => {
    $("achievementList").innerHTML = items
      .filter((a) => active === "All" || (a.tags || []).includes(active))
      .map(
        (a) => `<li class="milestone">
          <div class="date mono">${esc(a.date)}</div>
          <div>
            <h3>${a.link ? `<a href="${esc(a.link)}" target="_blank" rel="noopener">${esc(a.title)}</a>` : esc(a.title)}</h3>
            ${a.org ? `<p class="org">${esc(a.org)}</p>` : ""}
            ${a.summary ? `<p>${esc(a.summary)}</p>` : ""}
            ${a.impact?.length ? `<ul class="impact">${a.impact.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
            ${a.tags?.length ? `<div class="tags">${a.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
          </div>
        </li>`
      )
      .join("");
    $("filters").innerHTML = tags
      .map((t) => `<button type="button" data-tag="${esc(t)}" aria-pressed="${t === active}">${esc(t)}</button>`)
      .join("");
  };
  $("filters").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) { active = b.dataset.tag; renderAchievements(); }
  });
  if (tags.length <= 2) $("filters").style.display = "none";
  renderAchievements();

  // Experience
  if (S.experience?.length) {
    $("experienceList").innerHTML = S.experience
      .map(
        (r) => `<div class="role">
          <div class="role-head"><h3>${esc(r.role)}</h3><span class="period mono">${esc(r.period)}</span></div>
          <div class="org">${esc(r.org)}</div>
          <p>${esc(r.summary)}</p>
        </div>`
      )
      .join("");
  } else hide("experience");

  // Expertise
  if (S.expertise?.length) {
    $("expertiseGrid").innerHTML = S.expertise
      .map((g) => `<div class="card"><h3>${esc(g.area)}</h3><div class="chips">${g.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div></div>`)
      .join("");
  } else hide("expertise");

  // Certifications
  if (S.certifications?.length) {
    $("certList").innerHTML = S.certifications.map((c) => `<li><span>${esc(c.name)}</span><span>${esc(c.year)}</span></li>`).join("");
  } else hide("certifications");

  // Writing
  if (S.writing?.length) {
    $("writingList").innerHTML = S.writing
      .map((w) => `<li><span>${w.url ? `<a href="${esc(w.url)}" target="_blank" rel="noopener">${esc(w.title)}</a>` : esc(w.title)}${w.where ? ` — ${esc(w.where)}` : ""}</span><span>${esc(w.year)}</span></li>`)
      .join("");
  } else hide("writing");
})();
