// Section scroll-reveal. Adds .is-visible to .reveal elements as they enter
// the viewport. One-shot per element. Sections are pre-marked .reveal in HTML
// and hidden via .js .reveal in CSS, so no-JS users get the full content.

const targets = document.querySelectorAll(".reveal");

if (!targets.length) {
  // nothing to do
} else if (!("IntersectionObserver" in window)) {
  targets.forEach(el => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    // Section's top must enter the upper 75% of viewport before it fades up.
    { rootMargin: "0px 0px -25% 0px", threshold: 0 }
  );

  targets.forEach(el => io.observe(el));
}
