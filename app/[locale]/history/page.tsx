import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BackIcon } from "@/components/icons";
import { ThumbImg } from "@/components/ThumbImg";
import { BreadcrumbsJsonLd } from "@/components/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "historyPage" });
  const tSite = await getTranslations({ locale, namespace: "site" });
  return {
    title: `${t("title")} — ${tSite("title")}`,
    description: t("lead"),
  };
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const t = await getTranslations({ locale, namespace: "historyPage" });
  const crumbs = [
    { name: tNav("home"), href: "/" },
    { name: tNav("plant"), href: "/about" },
    { name: t("title"), href: "/history" },
  ];
  return (
    <>
      <BreadcrumbsJsonLd locale={locale} items={crumbs} />
      <HistoryBody />
    </>
  );
}

type Marker = { yr: string; l: string; x: number; now?: boolean };
type Fact = { yr: string; t: string };
type Chapter = {
  order: string;
  no: string;
  period: string;
  title: string;
  body: string;
  facts: Fact[];
  img?: string;
  alt?: string;
  caption?: string;
  flipped?: boolean;
};

function HistoryBody() {
  const t = useTranslations("historyPage");
  const tNav = useTranslations("nav");
  const markers = t.raw("markers") as Marker[];
  const chapters = t.raw("chapters") as Chapter[];

  return (
    <>
      <section className="hist-page-head">
        <div className="wrap">
          <Link className="back" href="/">
            <BackIcon />
            {tNav("back")}
          </Link>
          <div style={{ marginTop: 28 }}>
            <span className="eyebrow-line">{t("eyebrow")}</span>
          </div>
          <h1>{t("title")}</h1>
          <p>{t("lead")}</p>
        </div>
      </section>

      <section className="history" id="history">
        <div className="hist-grain" />
        <div className="wrap">
          <div className="hist-ribbon reveal" style={{ marginTop: 0 }}>
            <div className="ribbon-rail">
              <div className="ribbon-line" />
              <div className="ribbon-progress" />
              {markers.map((m) => (
                <div
                  key={m.yr}
                  className={`ribbon-marker${m.now ? " now" : ""}`}
                  style={{ ["--x" as string]: `${m.x}%` }}
                >
                  <span className="rm-dot" />
                  <span className="rm-yr">{m.yr}</span>
                  <span className="rm-l">{m.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="chapters">
            {chapters.map((c) => (
              <article
                key={c.no}
                className={`chap reveal${c.flipped ? " flipped" : ""}`}
                data-order={c.order}
              >
                <div className="chap-meta">
                  <span className="chap-no">{c.no}</span>
                  <span className="chap-period">{c.period}</span>
                </div>
                <div className="chap-body">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <ul className="chap-facts">
                    {c.facts.map((f) => (
                      <li key={f.yr + f.t}>
                        <span>{f.yr}</span> {f.t}
                      </li>
                    ))}
                  </ul>
                </div>
                {c.img ? (
                  <figure className="chap-photo">
                    <ThumbImg src={c.img} alt={c.alt || c.title} />
                    {c.caption ? <figcaption>{c.caption}</figcaption> : null}
                  </figure>
                ) : null}
              </article>
            ))}
          </div>

          <div className="hist-coda reveal">
            <span className="coda-rule" />
            <span className="coda-text">{t("coda")}</span>
            <span className="coda-rule" />
          </div>
        </div>
      </section>
    </>
  );
}
