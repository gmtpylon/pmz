import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/icons";
import { HeroBlueprint } from "./HeroBlueprint";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="hero" id="top">
      <div className="blueprint" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">{t("eyebrow")}</span>
            <h1>
              {t("titleMain")}
              <br />
              <span className="ital">{t("titleItal")}</span>
            </h1>
            <p className="hero-lead">{t("lead")}</p>
            <div className="hero-cta">
              <Link href="/zayavka" className="btn">
                {t("cta")}
                <ArrowIcon />
              </Link>
              <Link href="/#directions" className="btn btn-ghost">
                {t("second")}
              </Link>
            </div>
          </div>

          <div className="hero-photo">
            <span className="corner-tl" />
            <span className="corner-br" />
            <span className="tag">/ ELEVATION 01 · БУРОВАЯ УСТАНОВКА · МБГУ-200</span>
            <HeroBlueprint />
          </div>
        </div>
      </div>
    </section>
  );
}
