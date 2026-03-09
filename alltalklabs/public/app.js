const COVER_IDS = new Set(["", "cover", "home"]);
const PRESENTATION_IDS = new Set(["presentation"]);

function panelForHash(hash) {
  const normalized = hash.replace(/^#/, "");
  if (COVER_IDS.has(normalized)) return "cover";
  if (PRESENTATION_IDS.has(normalized)) return "presentation";
  if (normalized.startsWith("slide-")) return "presentation";
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

function syncFromHash() {
  const activePanel = panelForHash(window.location.hash);
  updateTabs(activePanel);
  updatePanels(activePanel);
}

window.addEventListener("hashchange", syncFromHash);
window.addEventListener("DOMContentLoaded", syncFromHash);
