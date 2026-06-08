"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const STORAGE_KEY = "pmz-cookie-consent";
type Consent = "all" | "necessary";

export function CookieBanner() {
  const t = useTranslations("cookie");
  const [shown, setShown] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShown(true);
    } catch {
      // localStorage unavailable (e.g. SSR replay, private mode); skip silently
    }
  }, []);

  function decide(value: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setShown(false);
  }

  if (!shown) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookies">
      <div className="wrap cookie-row">
        <p>
          {t("text")}{" "}
          <Link href="/privacy" className="cookie-link">
            {t("more")} →
          </Link>
        </p>
        <div className="cookie-actions">
          <button
            type="button"
            className="btn btn-ghost cookie-deny"
            onClick={() => decide("necessary")}
          >
            {t("deny")}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => decide("all")}
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
