import Divider from "@/app/components/Divider";
import SearchInput from "@/app/components/SearchInput";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import ProgramsAccordion from "./ProgramsAccordion";

export default async function DecisionsVerticalSection() {
  const t = await getTranslations("DecisionsPage");
  const fakeLinks: Array<any> = [
    { title: "برنامج رقم ", id: 1 },
    { title: "برنامج رقم ", id: 2 },
    { title: "برنامج رقم ", id: 2 },
    { title: "برنامج رقم ", id: 3 },
    { title: "برنامج رقم ", id: 4 },
    { title: "برنامج رقم ", id: 5 },
  ];
  return (
    <div className="vertical-section hidden w-80 rounded-lg rounded-tl-2xl rounded-tr-2xl bg-white lg:block">
      <div className="news-list">
        {[1, 2].map((item, index) => (
          <div key={index} className="">
            <ProgramsAccordion
              data={{ title: "برامج الدبلوم", links: fakeLinks }}
              isFirst={index === 0 ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
