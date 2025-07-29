import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroImage from "@/components/Segments/HeroImage";

import NewsVerticalSection from "@/app/components/News/NewsVerticalSection";
import NewsCardExtended from "@/app/components/News/NewsCardExtended";
import Divider from "@/app/components/Divider";
import Image from "next/image";
import NewsItem from "@/app/components/News/NewsItem";
import { NewsCardType } from "@/app/_types/NewsCardType";
import getSingleNews from "@/app/_actions/SingleNews";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NewsPage");

  return {
    title: t("title"),
  };
}

export default async function SingleNews({
  params,
}: {
  params: { id: number };
}) {
  const t = await getTranslations("NewsPage");

  const NewsData: any = await getSingleNews(params.id);
  console.log(NewsData);
  if (NewsData.statusCode == 404) {
    return "لم يتم العثور على هذا الخبر";
  }
  const singleNewsData: NewsCardType = NewsData.data.cardsNews;

  const linkedNewsData: Array<NewsCardType> = NewsData.data.relatedNews;

  return (
    <main className="bg-neutral-100">
      <HeroImage image={"/images/sho3ib.webp"} title={"الأخبار"} />
      <div className="px-5 pt-7 md:px-12">
        <div className="content flex flex-row lg:gap-x-10">
          {/* vertical section  */}
          <NewsVerticalSection data={[singleNewsData]} />

          {/* cards section  */}
          <div className="card-section flex-1 overflow-hidden rounded-lg bg-white px-3 pt-7">
            <div className="w-full">
              <NewsCardExtended
                title={singleNewsData.title}
                newsBodyText={singleNewsData.newsBodyText}
                newsDate={`${singleNewsData.newsDate} : ${singleNewsData.newsTime}`}
                cardImageLink={"https://placehold.co/600x400"}
                // cardImageLink={singleNewsData.cardImageLink}
                views={singleNewsData.views}
              />

              <Divider color="bg-red-300" />

              {/* related media  */}
              <div className="div">
                <p className="text-2xl text-success">{t("related_media")}</p>
                <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                  {singleNewsData.imageNews?.map((item, index) => (
                    // "/images/temp/big-card.png"
                    <div className="rounded-xl">
                      {item.linkType == 1 ? (
                        // <Image
                        //   src={item.link}
                        //   alt="news media"
                        //   layout="responsive"
                        //   width={"50"}
                        //   height={"50"}
                        //   className="rounded-xl"
                        // />
                        <p>image</p>
                      ) : (
                        <iframe
                          className="h-full w-full rounded-xl border-0 outline-0"
                          src="https://www.youtube.com/embed/8UYy6yRttYw"
                          // src={videoData[0].videoUrl}

                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Divider color="bg-red-300" />

              <div className="related-news p-1">
                <p className="text-2xl text-success">{t("related_news")}</p>
                <div className="mt-3 flex flex-col gap-y-5 md:flex-row md:gap-x-5 md:gap-y-0">
                  {Array.isArray(linkedNewsData)
                    ? linkedNewsData.map((item, index) => (
                        <div key={`news-item-${index}`}>
                          <NewsItem
                            newsId={item.newsId}
                            cardImageLink={item.cardImageLink}
                            newsDate={item.newsDate}
                            newsTime={item.newsTime}
                            title={item.title}
                          />
                        </div>
                      ))
                    : "no data"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
