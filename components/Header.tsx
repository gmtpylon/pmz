"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ArrowIcon, BarsIcon, XIcon } from "./icons";
import { MobileMenu } from "./MobileMenu";
import { LangSwitcher } from "./LangSwitcher";
import { MEGA_BLUEPRINT, FEAT_HREF, type MegaKey } from "@/lib/nav";

const OPEN_DELAY_MS = 120; // hover-intent: ignore fly-by
const CLOSE_DELAY_MS = 100; // short grace period; close feels snappy

export function Header() {
  const tNav = useTranslations("nav");
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smart "headroom" header: collapse while scrolling down, expand on the way
  // up, always full near the top. rAF-throttled + passive for smooth scrolling.
  useEffect(() => {
    const TOP_GUARD = 80; // always full above this point
    // DELTA must exceed the header's own height change (72→56 = 16px). Toggling
    // compact reflows the sticky header, and scroll anchoring nudges scrollY by
    // ~that amount to keep content stable — a nudge smaller than DELTA can't be
    // mistaken for a user scroll, which is what previously caused the header to
    // oscillate (grow/shrink) with no real scrolling.
    const DELTA = 24;
    // Ignore direction while the height transition (0.28s) settles, so the
    // reflow-induced scroll shift is absorbed as baseline, not read as input.
    const SETTLE_MS = 320;
    let lastY = window.scrollY;
    let current = false; // mirrors the `compact` state, initialised to useState
    let lockUntil = 0;
    let ticking = false;

    function apply(next: boolean) {
      if (next === current) return;
      current = next;
      lockUntil = performance.now() + SETTLE_MS;
      setCompact(next);
    }

    function update() {
      ticking = false;
      const y = window.scrollY;
      if (y < TOP_GUARD) {
        apply(false);
        lastY = y;
        return;
      }
      // During the settle window, keep the baseline current so neither the
      // transition reflow nor its scroll-anchoring correction flips the state.
      if (performance.now() < lockUntil) {
        lastY = y;
        return;
      }
      if (Math.abs(y - lastY) >= DELTA) {
        apply(y > lastY); // scrolling down → compact
        lastY = y;
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMega(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
  }, [mobileOpen]);

  // Close mega-menu and mobile menu whenever the route changes
  useEffect(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(null);
    setMobileOpen(false);
  }, [pathname]);

  function clearTimers() {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  function requestOpen(key: MegaKey) {
    clearTimers();
    // If a panel is already open, switch instantly — feels like one menu with
    // changing content (Stripe/Linear pattern). Otherwise wait OPEN_DELAY_MS
    // so a casual fly-by doesn't trigger.
    if (openMega !== null) {
      setOpenMega(key);
    } else {
      openTimer.current = setTimeout(() => setOpenMega(key), OPEN_DELAY_MS);
    }
  }

  function requestClose() {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMega(null), CLOSE_DELAY_MS);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  function closeImmediately() {
    clearTimers();
    setOpenMega(null);
  }

  return (
    <>
      <header
        className={`header${compact && openMega === null && !mobileOpen ? " is-compact" : ""}`}
        onMouseLeave={requestClose}
        onMouseEnter={cancelClose}
      >
        <div className="wrap">
          <div className="row">
            <Link
              className="brand"
              href="/"
              aria-label="ПМЗ"
              onMouseEnter={closeImmediately}
            >
              <Image
                className="brand-logo brand-logo-light"
                src="/img/logo-pmz.svg"
                alt="ПМЗ"
                width={140}
                height={40}
                priority
              />
              <Image
                className="brand-logo brand-logo-dark"
                src="/img/logo-pmz-dark.svg"
                alt=""
                aria-hidden="true"
                width={140}
                height={40}
              />
            </Link>

            <nav className="nav">
              <MegaItem
                navKey="plant"
                label={tNav("plant")}
                href="/about"
                isOpen={openMega === "plant"}
                onOpen={() => requestOpen("plant")}
              />
              <MegaItem
                navKey="products"
                label={tNav("products")}
                href="/#directions"
                isOpen={openMega === "products"}
                onOpen={() => requestOpen("products")}
              />
              <MegaItem
                navKey="services"
                label={tNav("services")}
                href="/#services"
                isOpen={openMega === "services"}
                onOpen={() => requestOpen("services")}
              />
              <MegaItem
                navKey="customers"
                label={tNav("customers")}
                href="/#projects"
                isOpen={openMega === "customers"}
                onOpen={() => requestOpen("customers")}
              />
              <Link
                href="/history"
                className="nav-link"
                onMouseEnter={closeImmediately}
              >
                {tNav("history")}
              </Link>
              <Link
                href="/zayavka"
                className="nav-link"
                onMouseEnter={closeImmediately}
              >
                {tNav("buy")}
              </Link>
              <Link
                href="/kontakty"
                className="nav-link"
                onMouseEnter={closeImmediately}
              >
                {tNav("contacts")}
              </Link>
            </nav>

            <div className="head-actions" onMouseEnter={closeImmediately}>
              <LangSwitcher />
              <button
                className="icon-btn menu-btn"
                aria-label={tNav("menu")}
                title={tNav("menu")}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <BarsIcon />
                <XIcon />
              </button>
              <Link href="/zayavka" className="btn">
                {tNav("request")}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function MegaItem({
  navKey,
  label,
  href,
  isOpen,
  onOpen,
}: {
  navKey: MegaKey;
  label: string;
  href: string;
  isOpen: boolean;
  onOpen: () => void;
}) {
  const panelId = `mega-${navKey}`;
  return (
    <div
      className={`nav-item${isOpen ? " is-open" : ""}`}
      onMouseEnter={onOpen}
      onFocus={onOpen}
    >
      <Link
        href={href}
        className="nav-link"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {label}
      </Link>
      <MegaPanel navKey={navKey} panelId={panelId} isOpen={isOpen} />
    </div>
  );
}

type Col = { heading: string; items: { label: string; href: string }[] };

function MegaPanel({
  navKey,
  panelId,
  isOpen,
}: {
  navKey: MegaKey;
  panelId: string;
  isOpen: boolean;
}) {
  const t = useTranslations();
  const blueprint = MEGA_BLUEPRINT[navKey];

  const cols: Col[] = blueprint.headings.map((headingKey, i) => ({
    heading: t(`mega.${navKey}.${headingKey}`),
    items: blueprint.items[i].map(([linkKey, href]) => ({
      label: t(`mega.${navKey}.links.${linkKey}`),
      href,
    })),
  }));

  const featClass =
    navKey === "customers" ? "mega-feat mega-feat-gold" : "mega-feat";

  return (
    <div
      id={panelId}
      className="mega"
      data-mega={navKey}
      role="region"
      aria-label={t(`nav.${navKey}`)}
      aria-hidden={!isOpen}
    >
      <div className="mega-inner">
        <div className="mega-cols">
          {cols.map((col) => (
            <div className="mega-col" key={col.heading}>
              <h5>{col.heading}</h5>
              <ul>
                {col.items.map((it, i) => (
                  <li key={it.href + it.label} style={{ ["--i" as string]: i }}>
                    <Link href={it.href}>{it.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link className={featClass} href={FEAT_HREF[navKey]}>
          <span className="mf-tag">{t(`mega.${navKey}.feat.tag`)}</span>
          <span className="mf-yr">{t(`mega.${navKey}.feat.yr`)}</span>
          <span className="mf-title">{t(`mega.${navKey}.feat.title`)}</span>
          <span className="mf-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
