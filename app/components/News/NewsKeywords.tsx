import getNewsKeywords from "@/app/_actions/NewsKeywords";
import { NewsKeywordsType } from "@/app/_types/NewsCardType";
import Link from "next/link";

export default async function NewsKeywords() {
  const keywords: Array<NewsKeywordsType> = await getNewsKeywords();
  if (!Array.isArray(keywords)) {
    return <p>لا يوجد بيانات حتى هذه اللحظة.</p>;
  }

  return (
    <div className="keywords-list mt-4 grid grid-cols-2 grid-rows-3 gap-2 gap-y-4 p-3">
      {keywords.map((item, index) => (
        <Link
          key={`news-keyword-${index}`}
          href={`/news?keyword=${item.keyword}`}
          className="text-nowrap rounded-[19px] bg-neutral-100 px-1 py-1 text-center text-[#9c9c9c] last:odd:col-span-2 hover:bg-neutral-200"
        >
          {item.keyword}
        </Link>
      ))}
    </div>
  );
}
