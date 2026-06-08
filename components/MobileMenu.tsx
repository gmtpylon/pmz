"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

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
        <Link href="/about" onClick={onClose}>
          {tNav("plant")}
        </Link>
        <Link href="/#directions" onClick={onClose}>
          {tNav("products")}
        </Link>
        <Link href="/#services" onClick={onClose}>
          {tNav("services")}
        </Link>
        <Link href="/#projects" onClick={onClose}>
          {tNav("customers")}
        </Link>
        <Link href="/nagrady-sertifikaty" onClick={onClose}>
          ISO 9001
        </Link>
        <Link href="/history" onClick={onClose}>
          {tNav("history")}
        </Link>
        <Link href="/zayavka" onClick={onClose}>
          {tNav("buy")}
        </Link>
        <Link href="/kontakty" onClick={onClose}>
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
