// Type playground — swap fonts, scales, weights, tracking; export YAML.
// Debug-only. Stripped from production at runtime via Vite's import.meta.env.

if (!import.meta.env.DEV) {
  document.getElementById("dbg")?.remove();
} else {

const SINGLE_FONTS = [
  { name: "Bricolage Grotesque", url: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&display=swap" },
  { name: "Cabinet Grotesk",     url: "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@300,400,500,700,800,900&display=swap" },
  { name: "Switzer",             url: "https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700,800,900&display=swap" },
  { name: "General Sans",        url: "https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap" },
  { name: "Satoshi",             url: "https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" },
  { name: "Onest",               url: "https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700;800;900&display=swap" },
  { name: "Hanken Grotesk",      url: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700;800;900&display=swap" },
  { name: "Geist",               url: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&display=swap" }
];

const PAIRS = [
  {
    name: "Recoleta + Switzer",
    display: "Recoleta",
    body: "Switzer",
    displayUrl: "https://api.fontshare.com/v2/css?f[]=recoleta@300,500,700,800,900&display=swap",
    bodyUrl:    "https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700,800&display=swap"
  },
  {
    name: "Cabinet Grotesk + Switzer",
    display: "Cabinet Grotesk",
    body: "Switzer",
    displayUrl: "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800,900&display=swap",
    bodyUrl:    "https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700&display=swap"
  },
  {
    name: "Stardom + Satoshi",
    display: "Stardom",
    body: "Satoshi",
    displayUrl: "https://api.fontshare.com/v2/css?f[]=stardom@400&display=swap",
    bodyUrl:    "https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
  },
  {
    name: "Erode + General Sans",
    display: "Erode",
    body: "General Sans",
    displayUrl: "https://api.fontshare.com/v2/css?f[]=erode@500,700,800&display=swap",
    bodyUrl:    "https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
  },
  {
    name: "Bricolage + Geist",
    display: "Bricolage Grotesque",
    body: "Geist",
    displayUrl: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700..800&display=swap",
    bodyUrl:    "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&display=swap"
  }
];

// Catalog: which weights each font actually ships.
const FONT_WEIGHTS = {
  "Bricolage Grotesque": [300, 400, 500, 600, 700, 800],
  "Cabinet Grotesk":     [300, 400, 500, 700, 800, 900],
  "Switzer":             [300, 400, 500, 600, 700, 800, 900],
  "General Sans":        [300, 400, 500, 600, 700],
  "Satoshi":             [300, 400, 500, 700, 900],
  "Onest":               [300, 400, 500, 600, 700, 800, 900],
  "Hanken Grotesk":      [300, 400, 500, 600, 700, 800, 900],
  "Geist":               [300, 400, 500, 600, 700, 800, 900],
  "Recoleta":            [300, 500, 700, 800, 900],
  "Stardom":             [400],
  "Erode":               [500, 700, 800]
};

const SCALES = {
  "1.25": {
    "display-xl": "clamp(2.5rem, 5.5vw, 3.875rem)",
    "display-lg": "clamp(2.125rem, 4.5vw, 3.125rem)",
    "display":    "clamp(1.75rem, 3.5vw, 2.5rem)",
    "heading":    "clamp(1.5rem, 2.5vw, 2rem)",
    "title":      "clamp(1.25rem, 1.8vw, 1.625rem)",
    "lead":       "clamp(1.125rem, 1.4vw, 1.25rem)"
  },
  "1.333": {
    "display-xl": "clamp(3.5rem, 8vw, 5.625rem)",
    "display-lg": "clamp(3rem, 6vw, 4.1875rem)",
    "display":    "clamp(2.25rem, 4.5vw, 3.125rem)",
    "heading":    "clamp(1.75rem, 3vw, 2.375rem)",
    "title":      "clamp(1.375rem, 2vw, 1.75rem)",
    "lead":       "clamp(1.125rem, 1.5vw, 1.3125rem)"
  },
  "1.5": {
    "display-xl": "clamp(4.5rem, 8.25vw, 6.75rem)",
    "display-lg": "clamp(3.5rem, 6vw, 4.5rem)",
    "display":    "clamp(2.5rem, 4vw, 3rem)",
    "heading":    "clamp(1.75rem, 2.8vw, 2rem)",
    "title":      "clamp(1.375rem, 1.6vw, 1.5rem)",
    "lead":       "clamp(1.125rem, 1.2vw, 1.25rem)"
  }
};

// Persist state across HMR reloads. Defaults reflect the locked v2 system:
// pair (Recoleta + Switzer), 1.5 scale, 800 display, 400 body, -0.025em tracking.
window.__pbState = window.__pbState || {
  pairing: "pair",
  singleFont: "Bricolage Grotesque",
  pairIndex: 0, // Recoleta + Switzer
  scale: "1.5",
  displayWeight: 800,
  bodyWeight: 400,
  displayTrack: "-0.025em"
};
const state = window.__pbState;

function loadFontUrl(name, url) {
  const id = `dbg-font-${name.replace(/\s+/g, "-").toLowerCase()}`;
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

function activeDisplayFont() {
  return state.pairing === "single" ? state.singleFont : PAIRS[state.pairIndex].display;
}
function activeBodyFont() {
  return state.pairing === "single" ? state.singleFont : PAIRS[state.pairIndex].body;
}

function nearestIn(target, list) {
  if (!list || !list.length) return target;
  return list.reduce((best, w) =>
    Math.abs(w - target) < Math.abs(best - target) ? w : best
  );
}

function applyState() {
  const root = document.documentElement.style;

  if (state.pairing === "single") {
    const f = SINGLE_FONTS.find(x => x.name === state.singleFont);
    if (f) loadFontUrl(f.name, f.url);
    root.setProperty("--font-family", `"${state.singleFont}", system-ui, sans-serif`);
    root.setProperty("--font-display-family", `"${state.singleFont}", system-ui, sans-serif`);
  } else {
    const p = PAIRS[state.pairIndex];
    loadFontUrl(p.display, p.displayUrl);
    loadFontUrl(p.body, p.bodyUrl);
    root.setProperty("--font-family", `"${p.body}", system-ui, sans-serif`);
    root.setProperty("--font-display-family", `"${p.display}", system-ui, sans-serif`);
  }

  const scale = SCALES[state.scale];
  Object.entries(scale).forEach(([key, value]) => {
    root.setProperty(`--text-${key}`, value);
  });

  // Display weight shifts the heavy end (h1/h2 and big numbers).
  root.setProperty("--weight-extrabold", state.displayWeight);
  // Heading weight steps down from display by 100 so hierarchy stays visible.
  root.setProperty("--weight-bold", Math.max(400, state.displayWeight - 100));

  // Body weight shifts ALL body-class text together so hierarchy stays intact:
  // regular = body weight; medium = body + 100 (for leads / emphasized copy);
  // semibold = body + 200 (for partner-strip and other emphasized labels).
  root.setProperty("--weight-regular",  state.bodyWeight);
  root.setProperty("--weight-medium",   Math.min(900, state.bodyWeight + 100));
  root.setProperty("--weight-semibold", Math.min(900, state.bodyWeight + 200));

  root.setProperty("--track-display", state.displayTrack);
}

function syncWeightAvailability(panel) {
  const dispFont = activeDisplayFont();
  const bodyFont = activeBodyFont();
  const dispWeights = FONT_WEIGHTS[dispFont] || [400, 500, 700, 800];
  const bodyWeights = FONT_WEIGHTS[bodyFont] || [400, 500, 700, 800];

  // Auto-snap state to nearest available weight when the active font changes
  if (!dispWeights.includes(state.displayWeight)) {
    state.displayWeight = nearestIn(state.displayWeight, dispWeights);
  }
  if (!bodyWeights.includes(state.bodyWeight)) {
    state.bodyWeight = nearestIn(state.bodyWeight, bodyWeights);
  }

  panel.querySelectorAll("[data-display-weight]").forEach(btn => {
    const w = parseInt(btn.dataset.displayWeight);
    const ok = dispWeights.includes(w);
    btn.disabled = !ok;
    btn.title = ok ? "" : `${dispFont} doesn't ship a ${w} weight`;
  });
  panel.querySelectorAll("[data-body-weight]").forEach(btn => {
    const w = parseInt(btn.dataset.bodyWeight);
    const ok = bodyWeights.includes(w);
    btn.disabled = !ok;
    btn.title = ok ? "" : `${bodyFont} doesn't ship a ${w} weight`;
  });

  // Update available-weights summary
  const dispSummary = panel.querySelector("[data-display-summary]");
  const bodySummary = panel.querySelector("[data-body-summary]");
  if (dispSummary) dispSummary.textContent = `${dispFont} ships: ${dispWeights.join(", ")}`;
  if (bodySummary) {
    if (state.pairing === "pair") {
      bodySummary.textContent = `${bodyFont} ships: ${bodyWeights.join(", ")}`;
      bodySummary.hidden = false;
    } else {
      bodySummary.hidden = true;
    }
  }
}

function syncButtons(panel) {
  panel.querySelectorAll("[data-pairing]").forEach(b => {
    b.setAttribute("aria-pressed", b.dataset.pairing === state.pairing);
  });
  panel.querySelectorAll("[data-scale]").forEach(b => {
    b.setAttribute("aria-pressed", b.dataset.scale === state.scale);
  });
  panel.querySelectorAll("[data-display-weight]").forEach(b => {
    b.setAttribute("aria-pressed", parseInt(b.dataset.displayWeight) === state.displayWeight);
  });
  panel.querySelectorAll("[data-body-weight]").forEach(b => {
    b.setAttribute("aria-pressed", parseInt(b.dataset.bodyWeight) === state.bodyWeight);
  });
  panel.querySelectorAll("[data-display-track]").forEach(b => {
    b.setAttribute("aria-pressed", b.dataset.displayTrack === state.displayTrack);
  });

  panel.querySelector(".dbg__single").hidden = state.pairing !== "single";
  panel.querySelector(".dbg__pair").hidden = state.pairing !== "pair";

  // Reflect current selection in dropdowns
  const singleSel = panel.querySelector("[data-single]");
  if (singleSel) singleSel.value = state.singleFont;
  const pairSel = panel.querySelector("[data-pair]");
  if (pairSel) pairSel.value = String(state.pairIndex);
}

function refresh(panel) {
  syncWeightAvailability(panel);
  syncButtons(panel);
  applyState();
}

function generateYaml() {
  const lines = [];
  lines.push("# Panicbudgie typography settings");
  lines.push(`# Exported ${new Date().toISOString()}`);
  lines.push("");
  lines.push("typography:");
  lines.push("  family:");

  if (state.pairing === "single") {
    const f = SINGLE_FONTS.find(x => x.name === state.singleFont);
    lines.push("    pairing: single");
    lines.push(`    body: "${state.singleFont}"`);
    lines.push(`    display: "${state.singleFont}"`);
    lines.push(`    url: ${f.url}`);
  } else {
    const p = PAIRS[state.pairIndex];
    lines.push("    pairing: pair");
    lines.push(`    body: "${p.body}"`);
    lines.push(`    display: "${p.display}"`);
    lines.push(`    body_url: ${p.bodyUrl}`);
    lines.push(`    display_url: ${p.displayUrl}`);
  }

  lines.push("  scale:");
  lines.push(`    ratio: ${state.scale}`);
  lines.push("    tokens:");
  Object.entries(SCALES[state.scale]).forEach(([k, v]) => {
    lines.push(`      ${k}: "${v}"`);
  });

  lines.push("  weight:");
  lines.push(`    display: ${state.displayWeight}`);
  lines.push(`    body: ${state.bodyWeight}`);

  lines.push("  tracking:");
  lines.push(`    display: ${state.displayTrack}`);
  lines.push("    eyebrow: 0.12em");

  return lines.join("\n");
}

function setupPanel() {
  const panel = document.getElementById("dbg");
  if (!panel) return;
  if (panel.dataset.bound === "true") {
    refresh(panel);
    return;
  }
  panel.dataset.bound = "true";

  panel.querySelector("[data-toggle]").addEventListener("click", () => panel.classList.add("is-open"));
  panel.querySelector("[data-close]").addEventListener("click", () => panel.classList.remove("is-open"));

  panel.querySelectorAll("[data-pairing]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.pairing = btn.dataset.pairing;
      refresh(panel);
    });
  });

  panel.querySelector("[data-single]").addEventListener("change", e => {
    state.singleFont = e.target.value;
    refresh(panel);
  });

  panel.querySelector("[data-pair]").addEventListener("change", e => {
    state.pairIndex = parseInt(e.target.value);
    refresh(panel);
  });

  panel.querySelectorAll("[data-scale]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.scale = btn.dataset.scale;
      refresh(panel);
    });
  });

  panel.querySelectorAll("[data-display-weight]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      state.displayWeight = parseInt(btn.dataset.displayWeight);
      refresh(panel);
    });
  });

  panel.querySelectorAll("[data-body-weight]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      state.bodyWeight = parseInt(btn.dataset.bodyWeight);
      refresh(panel);
    });
  });

  panel.querySelectorAll("[data-display-track]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.displayTrack = btn.dataset.displayTrack;
      refresh(panel);
    });
  });

  panel.querySelector("[data-copy]").addEventListener("click", async () => {
    const yaml = generateYaml();
    const btn = panel.querySelector("[data-copy]");
    const orig = btn.textContent;
    try {
      await navigator.clipboard.writeText(yaml);
      btn.textContent = "Copied to clipboard";
      btn.classList.add("is-copied");
    } catch (e) {
      console.warn("Clipboard write failed; YAML logged instead.");
      console.log(yaml);
      btn.textContent = "See console";
      btn.classList.add("is-copied");
    }
    setTimeout(() => {
      btn.textContent = orig;
      btn.classList.remove("is-copied");
    }, 1800);
  });

  refresh(panel);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupPanel);
} else {
  setupPanel();
}

if (typeof import.meta !== "undefined" && import.meta.hot) {
  import.meta.hot.accept(() => {
    const panel = document.getElementById("dbg");
    if (panel) {
      // Clone-and-replace to drop the old listeners
      const fresh = panel.cloneNode(true);
      panel.parentNode.replaceChild(fresh, panel);
      fresh.dataset.bound = "";
    }
    setupPanel();
  });
}

} // end DEV-only guard
