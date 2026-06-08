"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ThumbImg } from "./ThumbImg";
import { XIcon } from "./icons";
import type { Thumb } from "./SubPage";

export function ThumbGrid({ thumbs }: { thumbs: Thumb[] }) {
  const [active, setActive] = useState<Thumb | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <>
      <div className="thumb-grid">
        {thumbs.map((th) => {
          const body = (
            <>
              <div className="thumb-frame thumb-frame--43">
                {th.img ? (
                  <ThumbImg src={th.img} alt={th.ttl} />
                ) : (
                  <div className="thumb-frame-empty" aria-hidden />
                )}
                {th.img ? (
                  <span className="thumb-zoom" aria-hidden>
                    ⤢
                  </span>
                ) : null}
              </div>
              <span className="thumb-id">{th.id}</span>
              <span className="thumb-ttl">{th.ttl}</span>
              <span className="thumb-cat">{th.cat}</span>
            </>
          );

          return th.img ? (
            <button
              type="button"
              className="thumb-card thumb-card--clickable"
              key={th.id + th.ttl}
              onClick={() => setActive(th)}
            >
              {body}
            </button>
          ) : (
            <article className="thumb-card" key={th.id + th.ttl}>
              {body}
            </article>
          );
        })}
      </div>

      {mounted && active
        ? createPortal(
            <div
              className="cert-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={active.ttl}
              onClick={() => setActive(null)}
            >
              <button
                type="button"
                className="cert-lightbox-close"
                aria-label="Закрыть"
                onClick={() => setActive(null)}
              >
                <XIcon />
              </button>
              <figure
                className="cert-lightbox-fig"
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={active.img} alt={active.ttl} />
                <figcaption>
                  <span className="cert-lightbox-id">{active.id}</span>
                  <span className="cert-lightbox-ttl">{active.ttl}</span>
                  <span className="cert-lightbox-cat">{active.cat}</span>
                </figcaption>
              </figure>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
