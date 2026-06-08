import { ORG, SITE_URL } from "@/lib/site";
import { routing } from "@/i18n/routing";

export type BreadcrumbItem = { name: string; href: string };

export function BreadcrumbsJsonLd({
  locale,
  items,
}: {
  locale: string;
  items: BreadcrumbItem[];
}) {
  const prefix =
    locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.href.startsWith("http") ? it.href : `${prefix}${it.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}


export function OrganizationJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: locale === "ru" ? ORG.name : ORG.legalNameEn,
    alternateName: locale === "ru" ? ORG.shortName : ORG.shortNameEn,
    legalName: locale === "ru" ? ORG.legalName : ORG.legalNameEn,
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo-pmz.svg`,
    foundingDate: ORG.founded,
    telephone: ORG.phone,
    email: ORG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        locale === "ru" ? ORG.address.street : ORG.address.streetEn,
      addressLocality:
        locale === "ru" ? ORG.address.locality : ORG.address.localityEn,
      addressRegion:
        locale === "ru" ? ORG.address.region : ORG.address.regionEn,
      postalCode: ORG.address.postalCode,
      addressCountry: ORG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ORG.geo.lat,
      longitude: ORG.geo.lon,
    },
    identifier: [
      { "@type": "PropertyValue", propertyID: "OGRN", value: ORG.ogrn },
      { "@type": "PropertyValue", propertyID: "INN", value: ORG.inn },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
