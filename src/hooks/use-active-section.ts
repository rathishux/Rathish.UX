import { useEffect, useState } from "react";

// How far from the top of the viewport counts as "reading position" —
// matches the sidebar's sticky offset, so the highlighted section is
// whichever heading has most recently scrolled past that line.
const READING_LINE_PX = 170;
// How close to the bottom of the page counts as "at the bottom" — accounts
// for sub-pixel rounding in scrollY/innerHeight/scrollHeight.
const BOTTOM_SLACK_PX = 4;

// Position-based rather than IntersectionObserver-based: a narrow
// intersection band can be skipped entirely by a fast or jumped scroll,
// leaving nothing highlighted. Checking every heading's position directly
// on scroll is slower in theory but only runs over a handful of elements
// and is immune to that.
export function useActiveSection(slugs: string[]): string | null {
  const [active, setActive] = useState<string | null>(slugs[0] ?? null);
  // slugs is rebuilt fresh on every render — depend on this joined string,
  // not the array reference, or the scroll listener gets torn down and
  // recreated on every active-section change.
  const slugsKey = slugs.join("|");

  useEffect(() => {
    if (slugs.length === 0) return;

    function update() {
      const elements = slugs
        .map((slug) => ({ slug, el: document.getElementById(slug) }))
        .filter((s): s is { slug: string; el: HTMLElement } => s.el !== null);
      if (elements.length === 0) return;

      // The last heading often doesn't have enough page below it to ever
      // scroll up past the reading line — a short final section followed
      // straight by the page footer, say. Without this, the last item in
      // the nav can never become active no matter how far you scroll.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - BOTTOM_SLACK_PX;
      if (atBottom) {
        setActive(elements[elements.length - 1].slug);
        return;
      }

      let current = elements[0].slug;
      for (const { slug, el } of elements) {
        if (el.getBoundingClientRect().top <= READING_LINE_PX) {
          current = slug;
        }
      }
      setActive(current);
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [slugsKey]);

  return active;
}
