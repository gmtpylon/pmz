"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export function ScrollTop() {
  const tNav = useTranslations("nav");
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    function update() {
      setShow(window.scrollY > 600);
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scrolltop${show ? " is-visible" : ""}`}
      aria-label={tNav("toTop")}
      title={tNav("toTop")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M12 19V5m-7 7 7-7 7 7" />
      </svg>
    </button>
  );
}
