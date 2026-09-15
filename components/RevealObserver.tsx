"use client";

import { useEffect } from "react";

/**
 * One shared IntersectionObserver for every [data-reveal] element on the
 * page. Marks each with data-revealed the first time it scrolls into view;
 * the CSS in globals.css handles the actual motion.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.revealReady = "";

    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not([data-revealed])",
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => (el.dataset.revealed = ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
