export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSection(selector: string, offset = 80) {
  const section = document.querySelector(selector);
  if (!section) return false;

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = section.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });

  return true;
}
