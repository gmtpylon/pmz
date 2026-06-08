import { useTranslations } from "next-intl";

const ICONS: Record<string, React.ReactNode> = {
  rolling: (
    <svg
      className="ec-icon"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <circle cx="22" cy="40" r="14" />
      <circle cx="58" cy="40" r="14" />
      <line x1="22" y1="40" x2="58" y2="40" strokeWidth="0.6" opacity="0.5" />
      <rect x="32" y="36" width="16" height="8" fill="currentColor" opacity="0.2" />
      <line x1="6" y1="40" x2="14" y2="40" stroke="var(--gold)" strokeWidth="1.6" />
      <line x1="66" y1="40" x2="74" y2="40" stroke="var(--gold)" strokeWidth="1.6" />
    </svg>
  ),
  machining: (
    <svg
      className="ec-icon"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <rect x="10" y="14" width="60" height="8" />
      <rect x="14" y="22" width="6" height="36" fill="currentColor" opacity="0.12" />
      <rect x="60" y="22" width="6" height="36" fill="currentColor" opacity="0.12" />
      <rect x="28" y="28" width="24" height="20" />
      <line x1="40" y1="48" x2="40" y2="56" />
      <circle cx="40" cy="60" r="4" fill="var(--gold)" opacity="0.4" />
      <rect x="14" y="58" width="52" height="10" />
      <line x1="14" y1="63" x2="66" y2="63" strokeWidth="0.5" opacity="0.5" />
    </svg>
  ),
  cutting: (
    <svg
      className="ec-icon"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M10 50h12l5-12 8 26 6-18 4 8h25" />
      <line x1="10" y1="60" x2="65" y2="60" strokeWidth="0.6" opacity="0.5" />
      <line x1="14" y1="20" x2="22" y2="28" stroke="var(--gold)" strokeWidth="1.6" />
      <circle cx="22" cy="28" r="2" fill="var(--gold)" />
    </svg>
  ),
  welding: (
    <svg
      className="ec-icon"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M20 60 L40 28 L60 60 Z" />
      <line x1="20" y1="60" x2="60" y2="60" strokeWidth="0.6" opacity="0.5" />
      <circle cx="40" cy="28" r="3" fill="var(--gold)" />
      <circle cx="40" cy="28" r="6" fill="var(--gold)" opacity="0.25" />
      <path
        d="M40 16 L42 22 L48 22 L43 26 L45 32 L40 28 L35 32 L37 26 L32 22 L38 22 Z"
        fill="var(--gold)"
        opacity="0.5"
      />
    </svg>
  ),
  bending: (
    <svg
      className="ec-icon"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <rect x="14" y="18" width="52" height="10" />
      <rect x="14" y="52" width="52" height="10" />
      <line x1="20" y1="28" x2="20" y2="52" />
      <line x1="60" y1="28" x2="60" y2="52" />
      <path d="M20 40 Q40 32 60 40" stroke="var(--gold)" strokeWidth="1.5" />
      <line x1="40" y1="32" x2="40" y2="40" stroke="var(--gold)" strokeWidth="1" />
    </svg>
  ),
  special: (
    <svg
      className="ec-icon"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M28 60 a12 12 0 0 1 24 0" />
      <path d="M22 60 a18 18 0 0 1 36 0" />
      <path
        d="M40 14 q-3 6 0 12 q3 6 0 12 q-3 6 0 12"
        stroke="var(--gold)"
        strokeWidth="1.4"
      />
      <path d="M30 22 q-2 4 0 8 q2 4 0 8 q-2 4 0 8" opacity="0.5" />
      <path d="M50 22 q-2 4 0 8 q2 4 0 8 q-2 4 0 8" opacity="0.5" />
    </svg>
  ),
};

const CARDS = [
  { id: "EQ-01", icon: "rolling", key: "rolling" },
  { id: "EQ-02", icon: "machining", key: "machining" },
  { id: "EQ-03", icon: "cutting", key: "cutting" },
  { id: "EQ-04", icon: "welding", key: "welding" },
  { id: "EQ-05", icon: "bending", key: "bending" },
  { id: "EQ-06", icon: "special", key: "special" },
];

export function Equipment() {
  const t = useTranslations("home.equipment");

  return (
    <section id="equipment">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="num">
            <b>{t("num")}</b> — {t("head")}
          </span>
          <h2>{t("title")}</h2>
        </div>

        <p className="equip-intro reveal">{t("intro")}</p>

        <div className="equip-cards reveal">
          {CARDS.map((c) => (
            <article className="ec" key={c.id}>
              <div className="ec-head">
                <span className="ec-id">{c.id}</span>
                <span className="ec-qty">{t(`cards.${c.key}.qty`)}</span>
              </div>
              {ICONS[c.icon]}
              <div className="ec-body">
                <h3>{t(`cards.${c.key}.title`)}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t(`cards.${c.key}.desc`),
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
