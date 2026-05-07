// Mobile menu toggle. Opens a full-width sheet at <768px.
// Locks body scroll while open, closes on Esc or backdrop click.

function setup() {
  const btn = document.querySelector(".nav__menu");
  const sheet = document.getElementById("mobile-menu");
  if (!btn || !sheet || sheet.dataset.bound === "true") return;
  sheet.dataset.bound = "true";

  const close = () => {
    btn.setAttribute("aria-expanded", "false");
    sheet.setAttribute("hidden", "");
    document.body.style.overflow = "";
  };

  const open = () => {
    btn.setAttribute("aria-expanded", "true");
    sheet.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  };

  btn.addEventListener("click", () => {
    if (btn.getAttribute("aria-expanded") === "true") close();
    else open();
  });

  sheet.querySelector(".nav__sheet-close")?.addEventListener("click", close);

  // Close when any link inside the sheet is clicked
  sheet.querySelectorAll("a").forEach(a => a.addEventListener("click", close));

  // Close on backdrop click (clicks on the sheet itself, not the inner panel)
  sheet.addEventListener("click", e => {
    if (e.target === sheet) close();
  });

  // Close on Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") close();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setup);
} else {
  setup();
}

if (typeof import.meta !== "undefined" && import.meta.hot) {
  import.meta.hot.accept(() => setup());
}
