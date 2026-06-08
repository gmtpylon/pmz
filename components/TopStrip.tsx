import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function TopStrip() {
  const t = useTranslations("topStrip");
  return (
    <div className="topstrip">
      <div className="wrap">
        <div className="row">
          <span>
            <span className="dot" />
            {t("status")}
          </span>
          <span className="spacer" />
          <Link href="/kontakty">{t("address")}</Link>
          <a href={t("phoneHref")}>{t("phone")}</a>
        </div>
      </div>
    </div>
  );
}
