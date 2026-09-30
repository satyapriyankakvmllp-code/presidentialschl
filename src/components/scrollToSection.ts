/** Smoothly scroll to a section by id, accounting for the sticky header. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
