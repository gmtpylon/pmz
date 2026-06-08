"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";

const SELECTOR = ".reveal, .facade, .geo-rail, .hist-ribbon";

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-scan on every route change. PageTransition swaps the content via
    // React `key` so brand-new DOM nodes appear with their initial `.reveal`
    // state (opacity: 0) — without re-scanning they would stay hidden.
    //
    // A short rAF chain lets the new tree paint before measuring viewport
    // positions, so above-the-fold elements reveal instantly without flicker.
    let cancelled = false;
    let io: IntersectionObserver | null = null;

    const scan = () => {
      if (cancelled) return;
      const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

      if (typeof IntersectionObserver === "undefined") {
        els.forEach((el) => el.classList.add("in"));
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
      );

      const vh = window.innerHeight;
      for (const el of els) {
        if (el.classList.contains("in")) continue; // already revealed
        const rect = el.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          el.classList.add("in");
        } else {
          io.observe(el);
        }
      }
    };

    // Two rAFs: first lets React commit, second lets the browser paint, so
    // we measure correct positions after layout settles.
    const r1 = requestAnimationFrame(() => {
      const r2 = requestAnimationFrame(scan);
      // store inner id on outer closure for cleanup
      cleanup = () => {
        cancelAnimationFrame(r2);
        io?.disconnect();
      };
    });

    let cleanup = () => {
      cancelAnimationFrame(r1);
      io?.disconnect();
    };

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [pathname]);

  return null;
}
