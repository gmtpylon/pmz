import { useTranslations } from "next-intl";
import { PUSHKIN_FACADE_SVG } from "./svgs/pushkinFacade.svg";

export function Pushkin() {
  const t = useTranslations("home.pushkin");
  const tStrip = useTranslations("topStrip");

  return (
    <section className="pushkin">
      <div className="wrap">
        <div className="pushkin-grid">
          <div className="pushkin-text">
            <h2>
              {t("titleLead")}{" "}
              <span className="gold-word">{t("titleHighlight")}</span>.
              <br />
              {t("titleTail")}
            </h2>

            <p>{t("lead")}</p>

            <div className="pushkin-facts">
              <div className="fact">
                <div className="fact-v">
                  24
                  <span style={{ fontSize: "0.6em", color: "var(--ink-3)" }}>
                    {" "}
                    {t("facts.km")}
                  </span>
                </div>
                <div
                  className="fact-l"
                  dangerouslySetInnerHTML={{ __html: t("facts.toCenter") }}
                />
              </div>
              <div className="fact">
                <div className="fact-v">М-10</div>
                <div
                  className="fact-l"
                  dangerouslySetInnerHTML={{ __html: t("facts.highway") }}
                />
              </div>
              <div className="fact">
                <div className="fact-v">
                  3
                  <span style={{ fontSize: "0.6em", color: "var(--ink-3)" }}>
                    {" "}
                    {t("facts.min")}
                  </span>
                </div>
                <div
                  className="fact-l"
                  dangerouslySetInnerHTML={{ __html: t("facts.toStation") }}
                />
              </div>
            </div>

            <p className="pushkin-address" style={{ marginTop: "1.4rem" }}>
              <a
                href={`https://yandex.ru/maps/?text=${encodeURIComponent(tStrip("address"))}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gold)" }}
              >
                {tStrip("address")} → {t("directions")}
              </a>
            </p>
          </div>

          <div className="facade reveal">
            <span className="corner tl"></span>
            <span className="corner tr"></span>
            <span className="corner bl"></span>
            <span className="corner br"></span>
            <span className="facade-label">{t("facadeLabel")}</span>

            <div dangerouslySetInnerHTML={{ __html: PUSHKIN_FACADE_SVG }} />

            <span className="facade-scale">{t("facadeScale")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
