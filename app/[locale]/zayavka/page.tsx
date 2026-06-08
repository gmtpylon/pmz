import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LeadForm } from "@/components/LeadForm";
import { NumberedSection, SubHead } from "@/components/SubPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "form" });
  return { title: t("title"), description: t("lead") };
}

export default async function ZayavkaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ZayavkaBody />;
}

function ZayavkaBody() {
  const t = useTranslations("form");
  return (
    <>
      <SubHead eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <NumberedSection
        first
        num="/ 01"
        head={t("title")}
        title={t("title")}
      >
        <LeadForm />
      </NumberedSection>
    </>
  );
}
