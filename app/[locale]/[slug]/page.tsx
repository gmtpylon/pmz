import { notFound } from "next/navigation";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowIcon, BackIcon } from "@/components/icons";
import { SubPage, type PageData } from "@/components/SubPage";
import { BreadcrumbsJsonLd } from "@/components/StructuredData";
import { PAGES, PAGES_BY_SLUG } from "@/lib/pages";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PAGES.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = PAGES_BY_SLUG.get(slug);
  if (!page) return {};
  const t = await getTranslations({ locale });
  const tSite = await getTranslations({ locale, namespace: "site" });
  const messages = (await getMessages({ locale })) as Record<string, unknown>;
  const pages = messages.pages as Record<string, PageData> | undefined;
  const data = pages?.[slug];
  return {
    title: `${t(page.titleKey)} — ${tSite("title")}`,
    description: data?.lead,
    openGraph: {
      title: t(page.titleKey),
      description: data?.lead,
      type: "website",
    },
  };
}

export default async function PagePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const page = PAGES_BY_SLUG.get(slug);
  if (!page) notFound();
  setRequestLocale(locale);

  const messages = (await getMessages({ locale })) as Record<string, unknown>;
  const pages = messages.pages as Record<string, PageData> | undefined;
  const data = pages?.[slug];
  const ctaCommon = messages.ctaCommon as PageData["cta"] | undefined;
  const t = await getTranslations({ locale });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const sectionCrumb: Record<typeof page.section, { name: string; href: string } | null> = {
    plant: { name: tNav("plant"), href: "/about" },
    products: { name: tNav("products"), href: "/#directions" },
    services: { name: tNav("services"), href: "/#services" },
    customers: { name: tNav("customers"), href: "/#projects" },
    other: null,
  };
  const crumbs = [{ name: tNav("home"), href: "/" }];
  if (sectionCrumb[page.section]) crumbs.push(sectionCrumb[page.section]!);
  crumbs.push({ name: t(page.titleKey), href: `/${slug}` });

  if (data) {
    const ctaNum = `/ ${String((data.sections?.length ?? 0) + 1).padStart(2, "0")}`;
    const dataWithCta: PageData = data.cta
      ? data
      : { ...data, cta: ctaCommon ? { ...ctaCommon, num: ctaNum } : undefined };
    return (
      <>
        <BreadcrumbsJsonLd locale={locale} items={crumbs} />
        <SubPage data={dataWithCta} />
      </>
    );
  }

  return (
    <>
      <BreadcrumbsJsonLd locale={locale} items={crumbs} />
      <Stub titleKey={page.titleKey} section={page.section} />
    </>
  );
}

function Stub({
  titleKey,
  section,
}: {
  titleKey: string;
  section: "plant" | "products" | "services" | "customers" | "other";
}) {
  const t = useTranslations();
  const tStub = useTranslations("stub");
  const tNav = useTranslations("nav");

  const sectionLabel: Record<typeof section, string> = {
    plant: tNav("plant"),
    products: tNav("products"),
    services: tNav("services"),
    customers: tNav("customers"),
    other: "",
  };

  return (
    <>
      <section className="sub-head">
        <div className="wrap">
          <Link className="back" href="/">
            <BackIcon />
            {tNav("back")}
          </Link>
          <div>
            <span className="eyebrow-line">
              / {sectionLabel[section] || tStub("eyebrow")}
            </span>
          </div>
          <h1>{t(titleKey)}</h1>
          <p className="sub-lead">{tStub("lead")}</p>
        </div>
      </section>

      <section className="sub-sect">
        <div className="wrap">
          <div className="sub-cta">
            <div>
              <span className="num">
                <b>/ —</b> {tStub("eyebrow")}
              </span>
              <h2>{tStub("title")}</h2>
            </div>
            <Link className="btn" href="/">
              {tStub("cta")}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
