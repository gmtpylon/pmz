import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BackIcon } from "@/components/icons";
import { BreadcrumbsJsonLd } from "@/components/StructuredData";
import { routing } from "@/i18n/routing";
import { getAllNewsSlugs, getNews, formatNewsDate } from "@/lib/news";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllNewsSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getNews(locale, slug);
  if (!article) return {};
  const tSite = await getTranslations({ locale, namespace: "site" });
  return {
    title: `${article.title} — ${tSite("title")}`,
    description: article.lead,
    openGraph: {
      title: article.title,
      description: article.lead,
      type: "article",
      publishedTime: article.date,
      images: article.img ? [{ url: article.img }] : undefined,
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getNews(locale, slug);
  if (!article) notFound();
  setRequestLocale(locale);
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tNews = await getTranslations({ locale, namespace: "newsPage" });

  const crumbs = [
    { name: tNav("home"), href: "/" },
    { name: tNews("title"), href: "/news" },
    { name: article.title, href: `/news/${slug}` },
  ];

  return (
    <>
      <BreadcrumbsJsonLd locale={locale} items={crumbs} />

      <section className="sub-head">
        <div className="wrap">
          <Link className="back" href="/news">
            <BackIcon />
            {tNews("title")}
          </Link>
          <div>
            <span className="eyebrow-line">
              / {article.tag} · {formatNewsDate(article.date, locale)} · {article.minutes} {tNews("minutes")}
            </span>
          </div>
          <h1>{article.title}</h1>
          <p className="sub-lead">{article.lead}</p>
        </div>
      </section>

      <section className="sub-sect">
        <div className="wrap">
          <article
            className="news-body"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </section>
    </>
  );
}
