import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const MARKERS = [
  { x: 0, year: "1919", key: "founded" },
  { x: 22, year: "1941", key: "war" },
  { x: 35, year: "1953", key: "series" },
  { x: 58, year: "1979", key: "global" },
  { x: 79, year: "2011", key: "modern" },
  { x: 100, year: "2026", key: "today", now: true },
];

const HIGHLIGHTS = [
  {
    year: "1919",
    titleKey: "h1Title",
    textKey: "h1Text",
    img: "/img/factory/hist-1.webp",
    altKey: "h1Alt",
  },
  {
    year: "1943",
    titleKey: "h2Title",
    textKey: "h2Text",
    img: "/img/factory/hist-2.webp",
    altKey: "h2Alt",
    featured: true,
  },
  {
    year: "2026",
    titleKey: "h3Title",
    textKey: "h3Text",
    img: "/img/factory/today.webp",
    altKey: "h3Alt",
  },
];

export function History() {
  const t = useTranslations("home.history");

  return (
    <section className="history" id="history">
      <div className="hist-grain"></div>
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="num">
            <b>{t("eyebrowStrong")}</b> {t("eyebrowTail")}
          </span>
          <h2>{t("title")}</h2>
        </div>

        <div className="hist-ribbon reveal">
          <div className="ribbon-rail">
            <div className="ribbon-line"></div>
            <div className="ribbon-progress"></div>

            {MARKERS.map((m) => (
              <div
                key={m.year}
                className={`ribbon-marker${m.now ? " now" : ""}`}
                style={{ ["--x" as string]: `${m.x}%` }}
              >
                <span className="rm-dot"></span>
                <span className="rm-yr">{m.year}</span>
                <span className="rm-l">{t(`markers.${m.key}`)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hist-highlights reveal">
          {HIGHLIGHTS.map((h) => (
            <Link
              key={h.year}
              className={`hh${h.featured ? " featured" : ""}`}
              href="/history"
            >
              <div className="hh-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={h.img} alt={t(`highlights.${h.altKey}`)} loading="lazy" />
              </div>
              <div className="hh-yr">{h.year}</div>
              <div
                className="hh-title"
                dangerouslySetInnerHTML={{ __html: t(`highlights.${h.titleKey}`) }}
              />
              <div className="hh-text">{t(`highlights.${h.textKey}`)}</div>
            </Link>
          ))}
        </div>

        <div className="hist-cta reveal">
          <Link href="/history" className="btn btn-accent">
            {t("cta")}
            <svg
              className="arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
