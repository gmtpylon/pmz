import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const tSite = useTranslations("site");
  const tFoot = useTranslations("footer");
  const tStrip = useTranslations("topStrip");
  const tMega = useTranslations("mega");

  return (
    <footer id="contacts">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/" aria-label="ПМЗ">
              <Image
                className="brand-logo brand-logo-foot"
                src="/img/logo-pmz.svg"
                alt="ПМЗ"
                width={140}
                height={40}
              />
            </Link>
            <p>{tSite("tagline")}</p>
            <div className="foot-seal">{tSite("seal")}</div>
          </div>

          <div className="foot-col">
            <h4>{tFoot("products")}</h4>
            <ul>
              <li>
                <Link href="/ankernye-sistemy">
                  {tMega("products.links.anchors")}
                </Link>
              </li>
              <li>
                <Link href="/burovoe-oborudovanie">
                  {tMega("products.links.drillingEq")}
                </Link>
              </li>
              <li>
                <Link href="/metallokonstrukcii">
                  {tMega("products.links.metalwork")}
                </Link>
              </li>
              <li>
                <Link href="/mashinostroenie-pod-zakaz">
                  {tMega("products.links.custom")}
                </Link>
              </li>
              <li>
                <Link href="/metalloobrabotka">
                  {tMega("services.links.metalwork")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>{tFoot("company")}</h4>
            <ul>
              <li>
                <Link href="/about">{tMega("plant.links.about")}</Link>
              </li>
              <li>
                <Link href="/history">{tMega("plant.links.history")}</Link>
              </li>
              <li>
                <Link href="/rukovodstvo">
                  {tMega("plant.links.leadership")}
                </Link>
              </li>
              <li>
                <Link href="/nagrady-sertifikaty">
                  {tMega("plant.links.awards")}
                </Link>
              </li>
              <li>
                <Link href="/news">{tFoot("news")}</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>{tFoot("contacts")}</h4>
            <ul>
              <li>
                <a href={tStrip("phoneHref")}>{tStrip("phone")}</a>
              </li>
              <li>
                <a href="mailto:sales@pmz.spb.ru">sales@pmz.spb.ru</a>
              </li>
              <li>
                <Link href="/kontakty">
                  {tFoot("addr")
                    .split("\n")
                    .map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 ? <br /> : null}
                      </span>
                    ))}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>{tSite("since")}</span>
          <span>{tSite("regNumbers")}</span>
          <Link href="/privacy">{tSite("privacy")}</Link>
        </div>
      </div>
    </footer>
  );
}
