import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroImage from "@/components/Segments/HeroImage";

import ProgramsVerticalSection from "@/components/Programs/ProgramsVerticalSection";
import DecisionsImage from "@/app/components/Decisions/DecisionsImage";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ProgramsPage");
  return {
    title: t("title"),
  };
}

export default async function ProgramsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = await getTranslations("ProgramsPage");

  return (
    <main className="bg-neutral-100 pb-10">
      <HeroImage image={"/images/sho3ib.webp"} title={t("title")} />
      <div className="px-5 pt-7 md:px-12">
        <div className="contentx flex flex-row pt-7 lg:gap-x-10">
          {/* vertical section  */}
          <ProgramsVerticalSection />

          {/* cards section  */}
          <div className="card-section flex-1 overflow-hidden rounded-lg bg-white px-3 pt-7">
            <DecisionsImage
              image={"/images/sho3ib.webp"}
              title={"قرارات مجلــــس التعليم العالي"}
            />

            <div className="mt-5 grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-4">
              {/* select section  */}
            </div>

            <div className="links">
              <Link href={"/programs/a"}>AA</Link>
              <Link href={"/programs/b"}>BB</Link>
            </div>
            <div className="decision-list mt-4">
              <p className="rounded-tl-2xl rounded-tr-2xl bg-gradient-to-l from-[#024059] to-[#0e5875] py-2 text-center text-xl text-white">
                قرارات عامة (متغير حسب الصنف)
              </p>
              <div className="list p-2"> {children}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
