export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://pmz.example";

export const ORG = {
  name: "ООО «Пушкинский машиностроительный завод»",
  legalName: "ООО «Пушкинский машиностроительный завод»",
  legalNameEn: "Pushkin Machine-Building Plant LLC",
  shortName: "ПМЗ",
  shortNameEn: "PMZ",
  founded: "1919",
  ogrn: "1027810231142",
  inn: "7820300041",
  phone: "+78126407995",
  phoneDisplay: "+7 (812) 640-79-95",
  email: "sales@pmz.spb.ru",
  address: {
    street: "Новодеревенская ул., 17",
    streetEn: "17 Novoderevenskaya str.",
    locality: "г. Пушкин",
    localityEn: "Pushkin",
    region: "Санкт-Петербург",
    regionEn: "Saint Petersburg",
    postalCode: "196608",
    country: "RU",
  },
  geo: { lat: 59.7, lon: 30.42 },
} as const;
