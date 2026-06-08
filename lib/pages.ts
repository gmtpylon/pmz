export type Section = "plant" | "products" | "services" | "customers" | "other";

export type PageDef = {
  slug: string;
  section: Section;
  titleKey: string;
};

export const PAGES: PageDef[] = [
  { slug: "prokatka", section: "services", titleKey: "mega.services.links.rolling" },
  { slug: "about", section: "plant", titleKey: "mega.plant.links.about" },
  // /history has its own dedicated route (app/[locale]/history/page.tsx)
  // so it is intentionally NOT in the generic [slug] catch-all.
  {
    slug: "rukovodstvo",
    section: "plant",
    titleKey: "mega.plant.links.leadership",
  },
  {
    slug: "socialnaya-otvetstvennost",
    section: "plant",
    titleKey: "mega.plant.links.social",
  },
  {
    slug: "nagrady-sertifikaty",
    section: "plant",
    titleKey: "mega.plant.links.awards",
  },
  { slug: "otk", section: "plant", titleKey: "mega.plant.links.qc" },
  { slug: "kontakty", section: "other", titleKey: "nav.contacts" },
  { slug: "karyera", section: "plant", titleKey: "mega.plant.links.career" },
  { slug: "news", section: "plant", titleKey: "mega.plant.links.press" },

  {
    slug: "ankernye-sistemy",
    section: "products",
    titleKey: "mega.products.links.anchors",
  },
  {
    slug: "vintovye-shtangi",
    section: "products",
    titleKey: "mega.products.links.rods",
  },
  {
    slug: "gruntovye-ankery",
    section: "products",
    titleKey: "mega.products.links.groundAnchors",
  },
  {
    slug: "burovoe-oborudovanie",
    section: "products",
    titleKey: "mega.products.links.drillingEq",
  },
  {
    slug: "shneki-cfa",
    section: "products",
    titleKey: "mega.products.links.cfa",
  },
  {
    slug: "obsadnye-truby",
    section: "products",
    titleKey: "mega.products.links.casing",
  },
  {
    slug: "mashinostroenie-pod-zakaz",
    section: "products",
    titleKey: "mega.products.links.custom",
  },
  {
    slug: "mbgu-200",
    section: "products",
    titleKey: "mega.products.links.mbgu",
  },
  {
    slug: "metallokonstrukcii",
    section: "products",
    titleKey: "mega.products.links.metalwork",
  },

  {
    slug: "mehanicheskaya-obrabotka",
    section: "services",
    titleKey: "mega.services.links.machining",
  },
  {
    slug: "rezka-metalla",
    section: "services",
    titleKey: "mega.services.links.cutting",
  },
  {
    slug: "gibka-valcovka",
    section: "services",
    titleKey: "mega.services.links.bending",
  },
  {
    slug: "svarochnye-raboty",
    section: "services",
    titleKey: "mega.services.links.welding",
  },
  {
    slug: "metalloobrabotka",
    section: "services",
    titleKey: "mega.services.links.metalwork",
  },
  {
    slug: "termodiffuzionnoe-cinkovanie",
    section: "services",
    titleKey: "mega.services.links.galvanizing",
  },
  {
    slug: "termoobrabotka-tvch",
    section: "services",
    titleKey: "mega.services.links.hf",
  },
  {
    slug: "mehanicheskie-ispytaniya",
    section: "services",
    titleKey: "mega.services.links.tests",
  },

  {
    slug: "neftegaz",
    section: "customers",
    titleKey: "mega.customers.links.oilgas",
  },
  {
    slug: "gidrotehnika",
    section: "customers",
    titleKey: "mega.customers.links.hydro",
  },
  {
    slug: "specstroy",
    section: "customers",
    titleKey: "mega.customers.links.spec",
  },
  {
    slug: "dorozhnoe",
    section: "customers",
    titleKey: "mega.customers.links.roads",
  },
  {
    slug: "zhilishnoe",
    section: "customers",
    titleKey: "mega.customers.links.housing",
  },
  {
    slug: "zdravoohranenie",
    section: "customers",
    titleKey: "mega.customers.links.health",
  },
  {
    slug: "rkosmos",
    section: "customers",
    titleKey: "mega.customers.links.space",
  },
  {
    slug: "sport-turizm",
    section: "customers",
    titleKey: "mega.customers.links.sport",
  },
];

PAGES.push({
  slug: "privacy",
  section: "other",
  titleKey: "site.privacy",
});

export const PAGES_BY_SLUG = new Map(PAGES.map((p) => [p.slug, p]));
