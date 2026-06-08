import { useTranslations } from "next-intl";

const CELLS = [
  { v: "6.5", unitKey: "u1", labelKey: "l1", descKey: "d1" },
  { v: "62", unitKey: "u2", labelKey: "l2", descKey: "d2" },
  { v: "4800", unitKey: "u3", labelKey: "l3", descKey: "d3" },
  { v: "280", unitKey: "u4", labelKey: "l4", descKey: "d4" },
];

export function BigNumbers() {
  const t = useTranslations("home.numbers");

  return (
    <section className="numbers" id="plant">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="num">
            <b>{t("num")}</b> — {t("head")}
          </span>
          <h2>{t("title")}</h2>
        </div>
        <div className="big-numbers reveal">
          {CELLS.map((c, i) => (
            <div className="cell" key={i}>
              <div className="v">
                <span>{c.v}</span>
                <span className="unit">{t(`cells.${c.unitKey}`)}</span>
              </div>
              <div className="l">{t(`cells.${c.labelKey}`)}</div>
              <div
                className="d"
                dangerouslySetInnerHTML={{ __html: t(`cells.${c.descKey}`) }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
