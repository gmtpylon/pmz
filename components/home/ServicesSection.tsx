import { useTranslations } from "next-intl";

const ICONS: Record<string, React.ReactNode> = {
  turning: (
    <svg
      className="svc-icon"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="20" cy="20" r="12" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <path d="M20 4v6M20 30v6M4 20h6M30 20h6M8.5 8.5l4.2 4.2M27.3 27.3l4.2 4.2M8.5 31.5l4.2-4.2M27.3 12.7l4.2-4.2" />
    </svg>
  ),
  cutting: (
    <svg
      className="svc-icon"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6 22h6l3-6 5 12 4-10 3 4h7" />
      <line x1="6" y1="32" x2="34" y2="32" strokeWidth="0.8" />
    </svg>
  ),
  galvanizing: (
    <svg
      className="svc-icon"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="6" y="14" width="28" height="12" />
      <line x1="6" y1="10" x2="34" y2="10" />
      <line x1="6" y1="30" x2="34" y2="30" />
      <line x1="6" y1="14" x2="34" y2="26" opacity="0.5" />
      <line x1="34" y1="14" x2="6" y2="26" opacity="0.5" />
    </svg>
  ),
  welding: (
    <svg
      className="svc-icon"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 6v28" />
      <path d="M14 12c4 0 4 4 0 4s-4 4 0 4 4 4 0 4 4 4 0 4" />
      <path d="M26 12c-4 0-4 4 0 4s4 4 0 4-4 4 0 4-4 4 0 4" />
    </svg>
  ),
  bending: (
    <svg
      className="svc-icon"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="20" cy="20" r="14" />
      <line x1="20" y1="6" x2="20" y2="14" />
      <line x1="20" y1="26" x2="20" y2="34" />
      <path d="M14 14c4-2 8-2 12 0M14 26c4 2 8 2 12 0" />
    </svg>
  ),
  repair: (
    <svg
      className="svc-icon"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="6" y="6" width="28" height="28" />
      <line x1="6" y1="14" x2="34" y2="14" />
      <line x1="14" y1="6" x2="14" y2="34" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  ),
};

const ITEMS = [
  { id: "S-01", icon: "turning", key: "turning" },
  { id: "S-02", icon: "cutting", key: "cutting" },
  { id: "S-03", icon: "galvanizing", key: "galvanizing" },
  { id: "S-04", icon: "welding", key: "welding" },
  { id: "S-05", icon: "bending", key: "bending" },
  { id: "S-06", icon: "repair", key: "repair" },
];

export function ServicesSection() {
  const t = useTranslations("home.services");

  return (
    <section id="services" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="num">
            <b>{t("num")}</b> — {t("head")}
          </span>
          <h2>{t("title")}</h2>
        </div>

        <div className="services-list reveal">
          {ITEMS.map((it) => (
            <div className="service" key={it.id}>
              {ICONS[it.icon]}
              <div>
                <div className="svc-title">{t(`items.${it.key}.title`)}</div>
                <div
                  className="svc-desc"
                  dangerouslySetInnerHTML={{
                    __html: t(`items.${it.key}.desc`),
                  }}
                />
              </div>
              <div className="svc-meta">
                <span>{t(`items.${it.key}.tag`)}</span>
                <span>{it.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
