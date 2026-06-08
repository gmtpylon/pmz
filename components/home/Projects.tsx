import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Card = {
  key: string;
  href: string;
  img?: string;
  hero?: boolean;
};

const CARDS: Card[] = [
  { key: "vostochny", href: "/rkosmos", img: "/img/project-cosmodrome.jpg", hero: true },
  { key: "southStream", href: "/neftegaz", img: "/img/project-oilgas.jpg" },
  { key: "rogun", href: "/gidrotehnika", img: "/img/project-port.jpg" },
  { key: "krasnayaPolyana", href: "/sport-turizm", img: "/img/project-ski.jpg" },
  { key: "whsd", href: "/dorozhnoe", img: "/img/project-bridge.jpg" },
];

export function Projects() {
  const t = useTranslations("home.projects");

  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="num">
            <b>{t("num")}</b> — {t("head")}
          </span>
          <h2>{t("title")}</h2>
        </div>

        <p className="proj-intro reveal">{t("intro")}</p>

        <div className="proj-grid reveal">
          {CARDS.map((c) => {
            const hasImg = !!c.img;
            return (
              <Link
                key={c.key}
                className={`proj${c.hero ? " proj-hero" : ""}`}
                href={c.href}
                style={
                  c.hero
                    ? { gridColumn: "span 2", gridRow: "span 2" }
                    : undefined
                }
              >
                <div className={`proj-img${hasImg ? "" : " no-img"}`}>
                  {hasImg && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={c.img}
                      alt={t(`cards.${c.key}.title`)}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="proj-overlay">
                  <span className="proj-tag">{t(`cards.${c.key}.tag`)}</span>
                  <h3>{t(`cards.${c.key}.title`)}</h3>
                  <p>{t(`cards.${c.key}.desc`)}</p>
                  {c.hero && (
                    <div className="proj-meta">
                      <span>{t(`cards.${c.key}.meta1`)}</span>
                      <span>·</span>
                      <span>{t(`cards.${c.key}.meta2`)}</span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
