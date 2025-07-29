import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroImage from "@/components/Segments/HeroImage";
import AboutUniTeachers from "@/app/components/AboutUni/AboutUniTeachers";
import AboutUniManger from "@/app/components/AboutUni/AboutUniManger";
import SectionTitle from "@/app/components/SectionTitle";
import AboutUniSayBox from "@/app/components/AboutUni/AboutUniSayBox";
import Image from "next/image";
import AboutUniSayBoxContainer from "@/app/components/AboutUni/AboutUniSayBoxContainer";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutUniPage");
  return {
    title: t("title"),
  };
}

export default async function News() {
  const t = await getTranslations("AboutUniPage");
  return (
    <main className="bg-neutral-100 pb-10">
      <HeroImage image={"/images/sho3ib.webp"} title={"عــن الجامعة"} />
      {/* <div className="px-5 pt-7 md:px-12">س</div> */}

      <AboutUniManger />

      <div className="bg-white py-5">
        <AboutUniTeachers />
      </div>

      <div className="mt-10">
        <SectionTitle text={"قالوا عن الجامعة"} />
        <div className="b h-[700px] space-y-40 overflow-scroll">
          <AboutUniSayBoxContainer />
          <AboutUniSayBoxContainer />
        </div>
      </div>
    </main>
  );
}
