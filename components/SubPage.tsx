import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowIcon, BackIcon } from "./icons";
import { ThumbImg } from "./ThumbImg";
import { ThumbGrid } from "./ThumbGrid";

export type SubItem = { ttl: string; dsc: string };
export type Thumb = { id: string; ttl: string; cat: string; img?: string };

export function BackLink() {
  const tNav = useTranslations("nav");
  return (
    <Link className="back" href="/">
      <BackIcon />
      {tNav("back")}
    </Link>
  );
}

import { DIRECTION_D01_SVG } from "./home/svgs/directionD01.svg";
import { DIRECTION_D02_SVG } from "./home/svgs/directionD02.svg";
import { DIRECTION_D03_SVG } from "./home/svgs/directionD03.svg";
import { DIRECTION_D04_SVG } from "./home/svgs/directionD04.svg";
import { D05_SVG } from "./home/svgs/d05-vintovye-shtangi.svg";
import { D06_SVG } from "./home/svgs/d06-gruntovye-ankery.svg";
import { D07_SVG } from "./home/svgs/d07-shneki-cfa.svg";
import { D08_SVG } from "./home/svgs/d08-obsadnye-truby.svg";
import { D09_SVG } from "./home/svgs/d09-mbgu-200.svg";
import { D10_SVG } from "./home/svgs/d10-mashinostroenie.svg";
import { S01_SVG } from "./home/svgs/s01-prokatka.svg";
import { S02_SVG } from "./home/svgs/s02-mehanicheskaya-obrabotka.svg";
import { S03_SVG } from "./home/svgs/s03-rezka-metalla.svg";
import { S04_SVG } from "./home/svgs/s04-gibka-valcovka.svg";
import { S05_SVG } from "./home/svgs/s05-svarochnye-raboty.svg";
import { S06_SVG } from "./home/svgs/s06-metalloobrabotka.svg";
import { S07_SVG } from "./home/svgs/s07-termodiffuzionnoe-cinkovanie.svg";
import { S08_SVG } from "./home/svgs/s08-termoobrabotka-tvch.svg";
import { S09_SVG } from "./home/svgs/s09-mehanicheskie-ispytaniya.svg";
import { I01_SVG } from "./home/svgs/i01-neftegaz.svg";
import { I02_SVG } from "./home/svgs/i02-gidrotehnika.svg";
import { I03_SVG } from "./home/svgs/i03-specstroy.svg";
import { I04_SVG } from "./home/svgs/i04-dorozhnoe.svg";
import { I05_SVG } from "./home/svgs/i05-zhilishnoe.svg";
import { I06_SVG } from "./home/svgs/i06-zdravoohranenie.svg";
import { I07_SVG } from "./home/svgs/i07-rkosmos.svg";
import { I08_SVG } from "./home/svgs/i08-sport-turizm.svg";

const ILLUSTRATIONS: Record<string, string> = {
  D01: DIRECTION_D01_SVG,
  D02: DIRECTION_D02_SVG,
  D03: DIRECTION_D03_SVG,
  D04: DIRECTION_D04_SVG,
  D05: D05_SVG, D06: D06_SVG, D07: D07_SVG, D08: D08_SVG, D09: D09_SVG, D10: D10_SVG,
  S01: S01_SVG, S02: S02_SVG, S03: S03_SVG, S04: S04_SVG, S05: S05_SVG,
  S06: S06_SVG, S07: S07_SVG, S08: S08_SVG, S09: S09_SVG,
  I01: I01_SVG, I02: I02_SVG, I03: I03_SVG, I04: I04_SVG,
  I05: I05_SVG, I06: I06_SVG, I07: I07_SVG, I08: I08_SVG,
};

export function SubHead({
  eyebrow,
  title,
  lead,
  illustrationKey,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  illustrationKey?: string;
}) {
  const svg =
    illustrationKey && ILLUSTRATIONS[illustrationKey]
      ? ILLUSTRATIONS[illustrationKey]
      : null;
  return (
    <section className={`sub-head${svg ? " sub-head--illustrated" : ""}`}>
      <div className="wrap">
        <BackLink />
        <div className="sub-head-grid">
          <div className="sub-head-text">
            <div>
              <span className="eyebrow-line">{eyebrow}</span>
            </div>
            <h1>{title}</h1>
            {lead ? <p className="sub-lead">{lead}</p> : null}
          </div>
          {svg ? (
            <div
              className="sub-head-illus"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function NumberedSection({
  num,
  head,
  title,
  first = false,
  children,
}: {
  num: string;
  head: string;
  title: string;
  first?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="sub-sect" data-first={first || undefined}>
      <div className="wrap">
        <div className="sect-head sect-head--inner">
          <span className="num">
            <b>{num}</b> — {head}
          </span>
          <h2 className="sect-h2">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export function SubItemsList({ items }: { items: SubItem[] }) {
  return (
    <ul className="sub-items">
      {items.map((it) => (
        <li key={it.ttl}>
          <span className="ttl">{it.ttl}</span>
          <span className="dsc">{it.dsc}</span>
        </li>
      ))}
    </ul>
  );
}

export function GridCards({ cards }: { cards: GridCard[] }) {
  return (
    <div className="card-grid">
      {cards.map((c) => (
        <article className="card" key={c.ttl}>
          <h3 className="card-ttl">{c.ttl}</h3>
          <p className="card-body">{c.body}</p>
        </article>
      ))}
    </div>
  );
}

export function LinkCards({ cards }: { cards: LinkCard[] }) {
  return (
    <div className="card-grid">
      {cards.map((c) => (
        <Link className="card card-link" key={c.ttl + c.href} href={c.href}>
          <h3 className="card-ttl">{c.ttl}</h3>
          <p className="card-body">{c.body}</p>
          <span className="card-arrow" aria-hidden>
            →
          </span>
        </Link>
      ))}
    </div>
  );
}

export function SubCta({
  num,
  head,
  title,
  lead,
  btn,
  href = "/zayavka",
}: {
  num: string;
  head: string;
  title: string;
  lead?: string;
  btn: string;
  href?: string;
}) {
  return (
    <section className="sub-sect sub-sect--tight">
      <div className="wrap">
        <div className="sub-cta">
          <div>
            <span className="num">
              <b>{num}</b> — {head}
            </span>
            <h2>{title}</h2>
            {lead ? <p>{lead}</p> : null}
          </div>
          <Link className="btn" href={href}>
            {btn}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export type GridCard = { ttl: string; body: string };
export type LinkCard = { ttl: string; body: string; href: string };
export type ProjectCard = { tag: string; title: string; body: string };
export type PhotoBand = {
  img: string;
  alt?: string;
  capTag?: string;
  capText?: string;
  /** "cover" (default) — fill 16:7 area, crops edges. "contain" — show
   *  entire image (good for diagrams / schemes), fits inside the band. */
  fit?: "cover" | "contain";
};

export type SectionData =
  | { kind: "items"; num: string; head: string; title: string; items: SubItem[] }
  | { kind: "thumbs"; num: string; head: string; title: string; thumbs: Thumb[] }
  | { kind: "text"; num: string; head: string; title: string; body: string }
  | { kind: "grid"; num: string; head: string; title: string; cards: GridCard[] }
  | { kind: "links"; num: string; head: string; title: string; cards: LinkCard[] }
  | {
      kind: "subProject";
      num: string;
      head: string;
      title: string;
      project: ProjectCard;
    }
  | {
      kind: "video";
      num: string;
      head: string;
      title: string;
      youtubeId: string;
      caption?: string;
      durationLabel?: string;
    }
  | {
      kind: "map";
      num: string;
      head: string;
      title: string;
      lat: number;
      lon: number;
      zoom?: number;
      address: string;
      directionsLabel?: string;
      provider?: "yandex" | "google";
    };

export type PageData = {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Optional decorative SVG shown in the hero area. Currently supports the
   *  four direction illustrations from the home page ("D01"..."D04"). */
  /** Key into the ILLUSTRATIONS map in SubPage.tsx. */
  illustrationKey?: string;
  photoBand?: PhotoBand;
  sections: SectionData[];
  cta?: {
    num: string;
    head: string;
    title: string;
    lead?: string;
    btn: string;
  };
};

export function PhotoBandBlock({ band }: { band: PhotoBand }) {
  const figClass = `factory-photo${band.fit === "contain" ? " factory-photo--contain" : ""}`;
  return (
    <section className="photo-band" style={{ paddingTop: 56 }}>
      <div className="wrap">
        <figure className={figClass}>
          <ThumbImg src={band.img} alt={band.alt || ""} />
          {(band.capTag || band.capText) && (
            <figcaption>
              {band.capTag ? (
                <span className="cap-tag">{band.capTag}</span>
              ) : null}
              {band.capText ? (
                <span className="cap-loc">{band.capText}</span>
              ) : null}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}

export function VideoEmbed({
  youtubeId,
  title,
  caption,
  durationLabel,
}: {
  youtubeId: string;
  title: string;
  caption?: string;
  durationLabel?: string;
}) {
  return (
    <div className="video-block">
      <div className="video-wrap">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {(caption || durationLabel) && (
        <div className="video-meta">
          {caption ? <span>{caption}</span> : <span />}
          {durationLabel ? <span>{durationLabel}</span> : null}
        </div>
      )}
    </div>
  );
}

export function MapEmbed({
  lat,
  lon,
  zoom = 16,
  address,
  directionsLabel = "Маршрут →",
  provider = "yandex",
}: {
  lat: number;
  lon: number;
  zoom?: number;
  address: string;
  directionsLabel?: string;
  provider?: "yandex" | "google";
}) {
  const src =
    provider === "yandex"
      ? `https://yandex.ru/map-widget/v1/?ll=${lon},${lat}&z=${zoom}&pt=${lon},${lat},vkbkm&l=map`
      : `https://www.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`;
  const directionsHref =
    provider === "yandex"
      ? `https://yandex.ru/maps/?ll=${lon},${lat}&z=${zoom}&text=${encodeURIComponent(address)}`
      : `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  return (
    <div className="map-block">
      <div className="map-wrap">
        <iframe
          src={src}
          title={address}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="geolocation"
        />
      </div>
      <div className="map-meta">
        <span>{address}</span>
        <a href={directionsHref} target="_blank" rel="noopener noreferrer">
          {directionsLabel}
        </a>
      </div>
    </div>
  );
}

export function SubProjectBlock({ project }: { project: ProjectCard }) {
  return (
    <div className="sub-project">
      <span className="pj-tag">{project.tag}</span>
      <h3>{project.title}</h3>
      <p>{project.body}</p>
    </div>
  );
}

export function SubPage({ data }: { data: PageData }) {
  return (
    <>
      <SubHead
        eyebrow={data.eyebrow}
        title={data.title}
        lead={data.lead}
        illustrationKey={data.illustrationKey}
      />
      {data.photoBand ? <PhotoBandBlock band={data.photoBand} /> : null}
      {data.sections.map((s, i) => (
        <NumberedSection
          key={`${s.kind}-${i}`}
          num={s.num}
          head={s.head}
          title={s.title}
          first={i === 0 && !data.photoBand}
        >
          {s.kind === "items" ? <SubItemsList items={s.items} /> : null}
          {s.kind === "thumbs" ? <ThumbGrid thumbs={s.thumbs} /> : null}
          {s.kind === "text" ? <p className="sub-body">{s.body}</p> : null}
          {s.kind === "grid" ? <GridCards cards={s.cards} /> : null}
          {s.kind === "links" ? <LinkCards cards={s.cards} /> : null}
          {s.kind === "subProject" ? (
            <SubProjectBlock project={s.project} />
          ) : null}
          {s.kind === "video" ? (
            <VideoEmbed
              youtubeId={s.youtubeId}
              title={s.title}
              caption={s.caption}
              durationLabel={s.durationLabel}
            />
          ) : null}
          {s.kind === "map" ? (
            <MapEmbed
              lat={s.lat}
              lon={s.lon}
              zoom={s.zoom}
              address={s.address}
              provider={s.provider}
            />
          ) : null}
        </NumberedSection>
      ))}
      {data.cta ? (
        <SubCta
          num={data.cta.num}
          head={data.cta.head}
          title={data.cta.title}
          lead={data.cta.lead}
          btn={data.cta.btn}
        />
      ) : null}
    </>
  );
}
