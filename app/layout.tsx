import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { OrganizationJsonLd } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("site");
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("title"), template: `%s — ${t("title")}` },
    description: t("tagline"),
    openGraph: {
      title: t("title"),
      description: t("tagline"),
      siteName: t("title"),
      type: "website",
      locale: "ru_RU",
      alternateLocale: ["en_US"],
    },
    twitter: { card: "summary_large_image" },
    icons: { icon: "/favicon.ico" },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} data-theme="light">
      <body>
        {children}
        <OrganizationJsonLd locale={locale} />
      </body>
    </html>
  );
}
