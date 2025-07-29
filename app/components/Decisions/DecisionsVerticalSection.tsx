import Divider from "@/app/components/Divider";
import SearchInput from "@/app/components/SearchInput";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import DecisionsItem from "./DecisionsItem";

import {
  DecisionsTypeTypes,
  DecisionsTypes,
} from "@/app/_types/DecisionsTypes";
import getDecisionsTypes from "@/app/_actions/DecisionsTypes";

export default async function DecisionsVerticalSection({
  data,
}: {
  data: Array<DecisionsTypes>;
}) {
  const t = await getTranslations("DecisionsPage");
  const decisionsTypes: Array<DecisionsTypeTypes> = await getDecisionsTypes();

  return (
    <div className="vertical-section hidden w-80 rounded-lg bg-white px-2 pt-7 lg:block">
      {/* search input  */}
      <div className="mb-4">
        <SearchInput />
      </div>

      <Divider color="border-grey-400" />

      {/* latest news list  */}
      <div className="latest-news flex flex-col">
        <p className="text-2xl text-success">{t("latest_decisions")}</p>
        <div className="news-list mt-4 space-y-5">
          {data.map((item, index) => (
            <div key={index}>
              <DecisionsItem data={item} />
            </div>
          ))}
        </div>
      </div>

      <Divider color="border-grey-400" />

      <div className="categories mt-4">
        <p className="text-2xl text-success">{t("categories")}</p>
        <div className="categories-list mt-4 overflow-hidden px-4">
          <ul className="list-disc space-y-4 text-primary">
            {decisionsTypes.map((item, index) => (
              <li className="cursor-pointer" key={index}>
                <Link
                  href={`?decisionTypeId=${item.decisionTypeId}&decisionTitle=${item.decisionTypeName}`}
                >
                  {item.decisionTypeName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Divider color="border-grey-400" />

      <div className="keywords mt-4">
        <p className="text-2xl text-success">{t("keywords")}</p>
        <div className="keywords-list mt-4 grid grid-cols-2 grid-rows-3 gap-2 gap-y-4 p-3">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Link
              href="#"
              className="text-nowrap rounded-[19px] bg-neutral-100 px-1 py-1 text-center text-[#9c9c9c] last:odd:col-span-2 hover:bg-neutral-200"
            >
              الفصل الأول
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
