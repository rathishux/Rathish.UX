import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position on navigation — the browser
// keeps wherever the previous page happened to be scrolled to. Without
// this, navigating from deep in one case study to another lands you
// wherever that scroll position happens to fall on the new page instead
// of at its top.
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
