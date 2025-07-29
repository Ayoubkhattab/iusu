import Hero from "../components/Sections/Hero";
import Intro from "../components/Sections/Intro";
import Video from "../components/Sections/Video";

import LatestNews from "../components/Sections/LatestNews";
// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Faq from "../components/Sections/Faq";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage");

  return {
    title: t("title"),
    description: "الجامعة الإسلامية في سوريا",
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <LatestNews />
      <Video />
      <Faq />
    </main>
  );
}
