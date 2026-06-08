import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/pages";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import { getAllNewsSlugs } from "@/lib/news";

const EXTRA_SLUGS = ["news", "zayavka"];

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = [
    "",
    ...PAGES.map((p) => p.slug),
    ...EXTRA_SLUGS,
    ...getAllNewsSlugs().map((s) => `news/${s}`),
  ];

  const now = new Date();
  return slugs.flatMap((slug) =>
    routing.locales.map((locale) => {
      const path =
        locale === routing.defaultLocale ? `/${slug}` : `/${locale}/${slug}`;
      return {
        url: `${SITE_URL}${path.replace(/\/$/, "") || "/"}`,
        lastModified: now,
        changeFrequency: slug === "" ? "weekly" : "monthly",
        priority: slug === "" ? 1 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${SITE_URL}${l === routing.defaultLocale ? `/${slug}` : `/${l}/${slug}`}`.replace(
                /\/$/,
                "",
              ) || `${SITE_URL}/`,
            ]),
          ),
        },
      };
    }),
  );
}
