import Image from "next/image";
import Link from "next/link";
import DateIcon from "../DateIcon";
import { NewsCardType } from "@/app/_types/NewsCardType";
export default function NewsItem({
  newsId,
  cardImageLink,
  title,
  newsDate,
  newsTime,
}: Partial<NewsCardType>) {
  return (
    <Link href={`/news/${newsId}`}>
      <div className="card-item mt-1 flex flex-row">
        <div className="relative h-20 w-[140px] max-w-[140px] rounded-xl">
          <Image
            src={`${cardImageLink} `}
            alt={`${title}`}
            fill={true}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="content-text flex flex-1 flex-col justify-between ps-2">
          <p className="font-semibold text-primary">{title}</p>

          <DateIcon date={`${newsDate}`} />
        </div>
      </div>
    </Link>
  );
}
