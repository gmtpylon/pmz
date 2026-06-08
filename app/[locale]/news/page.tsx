import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/icons";
import { NumberedSection, SubHead } from "@/components/SubPage";
import { getAllNews, formatNewsDate } from "@/lib/news";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "newsPage" });
  const tSite = await getTranslations({ locale, namespace: "site" });
  return {
    title: `${t("title")} — ${tSite("title")}`,
    description: t("lead"),
  };
}

export default async function NewsListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "newsPage" });
  const items = getAllNews(locale);

  return (
    <>
      <SubHead eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <NumberedSection
        first
        num={t("feed.num")}
        head={t("feed.head")}
        title={t("feed.title")}
      >
        {items.length === 0 ? (
          <p className="sub-body">{t("empty")}</p>
        ) : (
          <div className="news-grid">
            {items.map((n) => (
              <article className="news-card" key={n.slug}>
                <span className="news-tag">{n.tag}</span>
                <div className="meta">
                  <span>{formatNewsDate(n.date, locale)}</span>
                  <span>
                    {n.minutes} {t("minutes")}
                  </span>
                </div>
                <h3 className="nh">{n.title}</h3>
                <p className="nx">{n.lead}</p>
                <Link className="read" href={`/news/${n.slug}`}>
                  {t("read")}
                  <ArrowIcon size={12} />
                </Link>
              </article>
            ))}
          </div>
        )}
      </NumberedSection>
    </>
  );
}
