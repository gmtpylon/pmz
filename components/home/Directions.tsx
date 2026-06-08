import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DIRECTION_D01_SVG } from "./svgs/directionD01.svg";
import { DIRECTION_D02_SVG } from "./svgs/directionD02.svg";
import { DIRECTION_D03_SVG } from "./svgs/directionD03.svg";
import { DIRECTION_D04_SVG } from "./svgs/directionD04.svg";

const CARDS = [
  { no: "D-01", href: "/ankernye-sistemy", svg: DIRECTION_D01_SVG },
  { no: "D-02", href: "/burovoe-oborudovanie", svg: DIRECTION_D02_SVG },
  { no: "D-03", href: "/metallokonstrukcii", svg: DIRECTION_D03_SVG },
  { no: "D-04", href: "/mashinostroenie-pod-zakaz", svg: DIRECTION_D04_SVG },
];

function ArrowSmall() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function Directions() {
  const t = useTranslations("home.directions");

  return (
    <section id="directions">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="num">
            <b>{t("num")}</b> — {t("head")}
          </span>
          <h2>{t("title")}</h2>
        </div>

        <div className="dir-grid reveal">
          {CARDS.map((c, i) => {
            const items = t.raw(`cards.${i}.items`) as string[];
            return (
              <Link href={c.href} className="dir" key={c.no}>
                <div className="dir-head">
                  <div>
                    <div className="dir-no">{c.no}</div>
                    <div
                      className="dir-title"
                      dangerouslySetInnerHTML={{
                        __html: t(`cards.${i}.title`),
                      }}
                    />
                  </div>
                  <span className="dir-cta" aria-hidden="true">
                    {t("cta")}
                    <ArrowSmall />
                  </span>
                </div>
                <div
                  className="dir-illus"
                  dangerouslySetInnerHTML={{ __html: c.svg }}
                />
                <ul className="dir-list">
                  {items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
