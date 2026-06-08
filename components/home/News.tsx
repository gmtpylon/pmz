import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const NEWS = ["den-mashinostroitelya", "uchebnyy-klass", "80-let-pobedy"];

type Item = {
  date: string;
  read: string;
  tag: string;
  title: string;
  lead: string;
};

export function News() {
  const t = useTranslations("home.news");
  const items = t.raw("items") as Item[];

  return (
    <section id="news" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="num">
            <b>{t("num")}</b> — {t("head")}
          </span>
          <h2>{t("title")}</h2>
        </div>
        <div className="news-grid reveal">
          {items.map((n, i) => {
            const slug = NEWS[i] || NEWS[0];
            return (
              <Link className="news-card" key={i} href={`/news/${slug}`}>
                <span className="news-tag">{n.tag}</span>
                <div className="meta">
                  <span>{n.date}</span>
                  <span>{n.read}</span>
                </div>
                <h3 className="nh">{n.title}</h3>
                <p className="nx">{n.lead}</p>
                <span className="read" aria-hidden="true">
                  {t("readMore")}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-5-5 5 5-5 5" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
        <div className="news-all reveal">
          <Link className="btn btn-ghost" href="/news">
            {t("all")}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
