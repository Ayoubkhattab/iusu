import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroImage from "@/components/Segments/HeroImage";

import DecisionsVerticalSection from "@/app/components/Decisions/DecisionsVerticalSection";
import DecisionsImage from "@/app/components/Decisions/DecisionsImage";
import DecisionsSelect from "@/app/components/Decisions/DecisionsSelect";
import DecisionsListItem from "@/app/components/Decisions/DecisionsListItem";
import Divider from "@/app/components/Divider";

import { DecisionsTypes } from "@/app/_types/DecisionsTypes";
import getDecisions from "@/app/_actions/Decisions";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("DecisionsPage");
  return {
    title: t("title"),
  };
}

type ParamsType = {
  decisionTypeId: number;
  decisionTitle: string;
};
export default async function Decisions({
  params,
  searchParams,
}: {
  params?: { slug: string };
  searchParams: ParamsType;
}) {
  const t = await getTranslations("DecisionsPage");

  const decisionData: Array<DecisionsTypes> = await getDecisions();

  if (!Array.isArray(decisionData)) {
    return <p>لا يوجد بيانات حتى هذه اللحظة.</p>;
  }

  return (
    <main className="bg-neutral-100 pb-10">
      <HeroImage image={"/images/sho3ib.webp"} title={"الأنظمة والقرارات"} />
      <div className="px-5 pt-7 md:px-12">
        <div className="contentx flex flex-row lg:gap-x-10">
          {/* vertical section  */}
          <DecisionsVerticalSection data={decisionData} />

          {/* cards section  */}
          <div className="card-section flex-1 overflow-hidden rounded-lg bg-white px-3 pt-7">
            <DecisionsImage
              image={"/images/sho3ib.webp"}
              title={"قرارات مجلــــس التعليم العالي"}
            />

            <div className="mt-5 grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-4">
              <DecisionsSelect />
              <DecisionsSelect />
              <DecisionsSelect />
              <DecisionsSelect />
            </div>

            <div className="decision-list mt-4">
              <p className="rounded-tl-2xl rounded-tr-2xl bg-gradient-to-l from-[#024059] to-[#0e5875] py-2 text-center text-xl text-white">
                {searchParams["decisionTitle"]}
              </p>
              <div className="list p-2">
                {decisionData.map((item, index) => (
                  <>
                    <DecisionsListItem
                      key={index}
                      decisionDate={item.decisionDate}
                      decisionLink={item.decisionLink}
                      decisionTitle={item.decisionTitle}
                    />
                    <Divider color="bg-red-300" />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
