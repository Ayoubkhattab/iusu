import { NewsCardType } from "@/app/_types/NewsCardType";
import SectionTitle from "../SectionTitle";
import NewsCard from "../News/NewsCard";
import GradientButton from "../GradientButton";
import getNews from "@/app/_actions/news";
import Link from "next/link";

const TempString: string = `            في رحاب الإيمان، تنمو الأرواح وتسمو القلوب بالتقوى والصلاح. نستنير
            بنور الهداية من كتاب الله وسنة نبيه الكريم، نسعى للخير ونغرس بذور
            المحبة والرحمة في قلوبنا.`;

const latestNews: Array<any> = [
  {
    id: 1,
    title: "اجراء الاختبارات الفصلية",
    body: TempString,
    date: "2024-05-02",
    image: "/images/bg.webp",
    class: "flex justify-center",
    link: "#",
  },
  {
    id: 2,
    title: "اجراء الاختبارات الفصلية",
    body: TempString,
    date: "2024-05-02",
    image: "/images/bg.webp",
    class: "flex justify-center",
    link: "#",
  },
  {
    id: 3,
    title: "اجراء الاختبارات الفصلية",
    body: TempString,
    date: "2024-05-02",
    image: "/images/bg.webp",
    class: "flex justify-center md:col-span-2 lg:col-span-1",
    link: "#",
  },
];

export default async function LatestNews() {
  const cardsNewsData: Array<NewsCardType> = await getNews();
  // const cardsNewsData: Array<NewsCardType> = latestNews;
  if (!Array.isArray(cardsNewsData)) {
    return <p>No data provided.</p>;
  }
  return (
    <div className="mb-3 mt-6 bg-[#F5F5F5] px-5 pb-3 pt-7 md:px-12">
      {/* title  */}
      <SectionTitle text={"آخر الأخبار"} />
      <div className="mt-5 grid grid-cols-1 justify-center gap-y-4 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-0 lg:px-20">
        {cardsNewsData.map((card) => {
          return (
            <div key={card.newsId} className={`${card.class} shrink-1`}>
              <NewsCard
                title={card.title}
                description={card.description}
                newsDate={`${card.newsDate} : ${card.newsTime}`}
                cardImageLink={`${card.cardImageLink}`}
                newsLink={`news/${card.newsId}`}
                newsBodyText=""
                views={card.views}
                hideShareIcon
              />
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-row justify-center py-2">
        <Link href={"/news"}>
          <GradientButton text="المزيد من الأخبار" />
        </Link>
      </div>
    </div>
  );
}
