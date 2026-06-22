const COVER_IDS = new Set(["", "cover", "home", "lab-notes"]);
const PRESENTATION_IDS = new Set(["presentation"]);

function normalizedHash() {
  return window.location.hash.replace(/^#/, "");
}

function panelForHash(hash) {
  if (COVER_IDS.has(hash)) return "cover";
  if (PRESENTATION_IDS.has(hash)) return "presentation";
  if (hash.startsWith("slide-")) return "presentation";
  return "cover";
}

function updateTabs(activePanel) {
  document.querySelectorAll("[data-tab-link]").forEach((link) => {
    const isActive = link.dataset.tabLink === activePanel;
    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function updatePanels(activePanel) {
  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.panel !== activePanel;
  });
}

function scrollToHashTarget(hash) {
  if (!hash || hash === "cover" || hash === "presentation") return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const target = document.getElementById(hash);
      if (!target) return;
      target.scrollIntoView({ block: "start", behavior: "auto" });
    });
  });
}

function syncFromHash() {
  const hash = normalizedHash();
  const activePanel = panelForHash(hash);
  updateTabs(activePanel);
  updatePanels(activePanel);
  scrollToHashTarget(hash);
}

window.addEventListener("hashchange", syncFromHash);
window.addEventListener("DOMContentLoaded", syncFromHash);
