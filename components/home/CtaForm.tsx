import { useTranslations } from "next-intl";
import { LeadForm } from "@/components/LeadForm";

export function CtaForm() {
  const t = useTranslations("home.cta");

  return (
    <section className="cta" id="cta">
      <div className="wrap">
        <div className="cta-grid">
          <div>
            <span className="num">
              <b>{t("num")}</b> — {t("head")}
            </span>
            <h2>{t("title")}</h2>
            <p className="lead">{t("lead")}</p>

            <div className="contact-info">
              <div>
                <div className="ci-l">{t("contact.salesL")}</div>
                <div className="ci-v">
                  {t("contact.salesV")}
                  <small>{t("contact.salesS")}</small>
                </div>
              </div>
              <div>
                <div className="ci-l">{t("contact.emailL")}</div>
                <div className="ci-v">
                  {t("contact.emailV")}
                  <small>{t("contact.emailS")}</small>
                </div>
              </div>
              <div>
                <div className="ci-l">{t("contact.addrL")}</div>
                <div className="ci-v">
                  {t("contact.addrV")}
                  <small>{t("contact.addrS")}</small>
                </div>
              </div>
              <div>
                <div className="ci-l">{t("contact.hoursL")}</div>
                <div className="ci-v">
                  {t("contact.hoursV")}
                  <small>{t("contact.hoursS")}</small>
                </div>
              </div>
            </div>
          </div>

          <div className="form-wrap">
            <h3 className="form-h3">{t("formTitle")}</h3>
            <LeadForm />
            <div className="form-note">{t("formNote")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
