"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronIcon } from "./icons";
import { MEGA_BLUEPRINT, type MegaKey } from "@/lib/nav";

const SECTIONS: MegaKey[] = ["plant", "products", "services", "customers"];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const tNav = useTranslations("nav");
  const tStrip = useTranslations("topStrip");

  return (
    <div className="mobile-menu" aria-hidden={!open}>
      <nav className="mm-nav">
        {SECTIONS.map((key) => (
          <MobileSection key={key} navKey={key} onClose={onClose} />
        ))}
        <Link className="mm-link" href="/history" onClick={onClose}>
          {tNav("history")}
        </Link>
        <Link className="mm-link" href="/zayavka" onClick={onClose}>
          {tNav("buy")}
        </Link>
        <Link className="mm-link" href="/kontakty" onClick={onClose}>
          {tNav("contacts")}
        </Link>
      </nav>
      <div className="mm-foot">
        <a href={tStrip("phoneHref")} className="mm-phone">
          {tStrip("phone")}
        </a>
        <div className="mm-addr">
          {tStrip("address")
            .split(", ")
            .map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 ? (i === 0 ? <br /> : ", ") : null}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

function MobileSection({
  navKey,
  onClose,
}: {
  navKey: MegaKey;
  onClose: () => void;
}) {
  const t = useTranslations();
  const tNav = useTranslations("nav");
  const [expanded, setExpanded] = useState(false);
  const blueprint = MEGA_BLUEPRINT[navKey];
  const label = tNav(navKey);

  return (
    <div className={`mm-sec${expanded ? " is-open" : ""}`}>
      <button
        type="button"
        className="mm-sec-head"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        <span className="mm-sec-label">{label}</span>
        <span className="mm-toggle">
          <ChevronIcon />
        </span>
      </button>
      <div className="mm-sub">
        <div className="mm-sub-inner">
          {blueprint.headings.map((headingKey, i) => (
            <div className="mm-sub-group" key={headingKey}>
              <h5>{t(`mega.${navKey}.${headingKey}`)}</h5>
              <ul>
                {blueprint.items[i].map(([linkKey, href]) => (
                  <li key={href}>
                    <Link href={href} onClick={onClose}>
                      {t(`mega.${navKey}.links.${linkKey}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
