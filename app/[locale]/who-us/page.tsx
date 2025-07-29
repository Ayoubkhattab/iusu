import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import HeroImage from "@/components/Segments/HeroImage";
import WhoUsGoals from "@/components/WhoUs/WhoUsGoals";
import WhoUsWhy from "@/app/components/WhoUs/WhoUsWhy";

import WhoUsIntro from "@/app/components/WhoUs/WhoUsIntro";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("WhoUsPage");
  return {
    title: t("title"),
  };
}

export default async function WhoUs() {
  const t = await getTranslations("WhoUsPage");
  return (
    <main className="bg-neutral-100">
      <HeroImage image={"/images/sho3ib.webp"} title={"مــن نــحــن"} />
      <div>
        <WhoUsIntro />
        <WhoUsWhy />
        <WhoUsGoals />
      </div>
    </main>
  );
}
