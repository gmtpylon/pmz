"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LangSwitcher() {
  const t = useTranslations("lang");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const other: Locale = locale === "ru" ? "en" : "ru";
  const label = other.toUpperCase();

  function switchTo(next: Locale) {
    router.replace(pathname, { locale: next });
  }

  return (
    <button
      type="button"
      className="icon-btn lang-btn"
      aria-label={`${t("label")}: ${label}`}
      title={label}
      onClick={() => switchTo(other)}
    >
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".06em" }}>
        {label}
      </span>
    </button>
  );
}
