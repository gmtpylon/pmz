import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { Pushkin } from "@/components/home/Pushkin";
import { History } from "@/components/home/History";
import { Directions } from "@/components/home/Directions";
import { Projects } from "@/components/home/Projects";
import { BigNumbers } from "@/components/home/BigNumbers";
import { Equipment } from "@/components/home/Equipment";
import { ServicesSection } from "@/components/home/ServicesSection";
import { News } from "@/components/home/News";
import { CtaForm } from "@/components/home/CtaForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Pushkin />
      <History />
      <Directions />
      <Projects />
      <BigNumbers />
      <Equipment />
      <ServicesSection />
      <News />
      <CtaForm />
    </>
  );
}
