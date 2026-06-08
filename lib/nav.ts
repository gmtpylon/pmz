// Shared navigation blueprint for the primary menu.
// Consumed by both the desktop mega-menu (components/Header.tsx) and the
// mobile accordion (components/MobileMenu.tsx) so the two never drift apart.

export type MegaKey = "plant" | "products" | "services" | "customers";

// Parent link target for each mega section (the label itself stays clickable).
export const MEGA_HREF: Record<MegaKey, string> = {
  plant: "/about",
  products: "/#directions",
  services: "/#services",
  customers: "/#projects",
};

export const MEGA_BLUEPRINT: Record<
  MegaKey,
  {
    headings: [string, string, string];
    items: [string, string][][]; // 3 columns × n items × [linkKey, href]
  }
> = {
  plant: {
    headings: ["company", "quality", "contacts"],
    items: [
      [
        ["about", "/about"],
        ["history", "/history"],
        ["leadership", "/rukovodstvo"],
        ["social", "/socialnaya-otvetstvennost"],
      ],
      [
        ["awards", "/nagrady-sertifikaty"],
        ["qc", "/otk"],
      ],
      [
        ["kontakty", "/kontakty"],
        ["career", "/karyera"],
        ["press", "/news"],
      ],
    ],
  },
  products: {
    headings: ["geotech", "drilling", "machinery"],
    items: [
      [
        ["anchors", "/ankernye-sistemy"],
        ["rods", "/vintovye-shtangi"],
        ["groundAnchors", "/gruntovye-ankery"],
      ],
      [
        ["drillingEq", "/burovoe-oborudovanie"],
        ["cfa", "/shneki-cfa"],
        ["casing", "/obsadnye-truby"],
      ],
      [
        ["custom", "/mashinostroenie-pod-zakaz"],
        ["mbgu", "/mbgu-200"],
        ["metalwork", "/metallokonstrukcii"],
      ],
    ],
  },
  services: {
    headings: ["processing", "forming", "special"],
    items: [
      [
        ["rolling", "/prokatka"],
        ["machining", "/mehanicheskaya-obrabotka"],
        ["cutting", "/rezka-metalla"],
      ],
      [
        ["bending", "/gibka-valcovka"],
        ["welding", "/svarochnye-raboty"],
        ["metalwork", "/metalloobrabotka"],
      ],
      [
        ["galvanizing", "/termodiffuzionnoe-cinkovanie"],
        ["hf", "/termoobrabotka-tvch"],
        ["tests", "/mehanicheskie-ispytaniya"],
      ],
    ],
  },
  customers: {
    headings: ["industry", "infra", "flagship"],
    items: [
      [
        ["oilgas", "/neftegaz"],
        ["hydro", "/gidrotehnika"],
        ["spec", "/specstroy"],
      ],
      [
        ["roads", "/dorozhnoe"],
        ["housing", "/zhilishnoe"],
        ["health", "/zdravoohranenie"],
      ],
      [
        ["space", "/rkosmos"],
        ["sport", "/sport-turizm"],
      ],
    ],
  },
};

export const FEAT_HREF: Record<MegaKey, string> = {
  plant: "/history",
  products: "/#directions",
  services: "/zayavka",
  customers: "/#projects",
};
