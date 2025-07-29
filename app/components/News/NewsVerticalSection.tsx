import Divider from "@/app/components/Divider";
import SearchInput from "@/app/components/SearchInput";
import NewsItem from "@/app/components/News/NewsItem";

import { getTranslations } from "next-intl/server";
import { NewsCardType } from "@/app/_types/NewsCardType";
import NewsCatgoriesList from "./NewsCatgoriesList";
import NewsKeywords from "./NewsKeywords";

export default async function NewsVerticalSection({
  data,
}: {
  data: Array<NewsCardType>;
}) {
  const t = await getTranslations("NewsPage");

  return (
    <div className="vertical-section hidden w-80 rounded-lg bg-white px-2 pt-7 lg:block">
      {/* search input  */}
      <div className="mb-4">
        <SearchInput />
      </div>

      <Divider color="border-grey-400" />

      {/* latest news list  */}
      <div className="latest-news flex flex-col">
        <p className="text-2xl text-success">{t("latest_news")}</p>
        <div className="news-list mt-4 space-y-5">
          {data.map((item, index) => (
            <div key={`news-item-${index}`}>
              <NewsItem
                newsId={item.newsId}
                // cardImageLink={item.cardImageLink}
                cardImageLink={"https://placehold.co/600x400"}
                newsDate={item.newsDate}
                newsTime={item.newsTime}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>

      <Divider color="border-grey-400" />

      <div className="categories mt-4">
        <p className="text-2xl text-success">{t("categories")}</p>
        <NewsCatgoriesList />
      </div>

      <Divider color="border-grey-400" />

      <div className="keywords mt-4">
        <p className="text-2xl text-success">{t("keywords")}</p>
        <NewsKeywords />
      </div>
    </div>
  );
}
