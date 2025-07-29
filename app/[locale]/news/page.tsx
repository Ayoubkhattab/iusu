import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import HeroImage from "@/components/Segments/HeroImage";
import NewsCard from "@/app/components/News/NewsCard";
import PaginationControl from "@/app/components/PaginationControl";
import Visuals from "@/app/components/Sections/Visuals";
import NewsVerticalSection from "@/app/components/News/NewsVerticalSection";
import getNews from "@/app/_actions/news";
import { NewsCardType } from "@/app/_types/NewsCardType";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NewsPage");
  return {
    title: t("title"),
  };
}

type Params = {
  keyword?: string;
};
export default async function News({
  params,
  searchParams,
}: {
  params?: { slug: string };
  searchParams: Params;
}) {
  const t = await getTranslations("NewsPage");

  const apiResponse: any = await getNews(searchParams.keyword);
  const NewsData: Array<NewsCardType> = apiResponse.data.data;

  if (!Array.isArray(NewsData)) {
    return <p>لا يوجد بيانات حتى هذه اللحظة.</p>;
  }
  return (
    <main className="bg-neutral-100">
      <HeroImage image={"/images/sho3ib.webp"} title={"الأخبار"} />
      <div className="px-5 pt-7 md:px-12">
        <div className="contentx flex flex-row lg:gap-x-10">
          {/* vertical section  */}
          <NewsVerticalSection data={NewsData} />

          {/* cards section  */}
          <div className="card-section flex-1 overflow-hidden rounded-lg bg-white px-3 pt-7">
            <div className="cards-list grid grid-cols-1 gap-1 md:grid-cols-2">
              {NewsData.map((card: NewsCardType, index: number) => (
                <div
                  className="one first:odd:col-span-2"
                  key={`news-card-${index}`}
                >
                  <NewsCard
                    title={card.title}
                    newsDate={`${card.newsDate} : ${card.newsTime}`}
                    // cardImageLink={`${card.cardImageLink}`}
                    cardImageLink={"https://placehold.co/600x400"}
                    newsLink={`news/${card.newsId}`}
                    newsBodyText={card.newsBodyText}
                    views={card.views}
                    newsId={card.newsId}
                  />
                </div>
              ))}
            </div>
            {/* pagiantion control  */}
            <div className="pagination-control my-6 flex flex-row justify-center overflow-hidden">
              <PaginationControl />
            </div>
          </div>
        </div>
      </div>

      {/* <Visuals /> */}
    </main>
  );
}
