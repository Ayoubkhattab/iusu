import Image from "next/image";
import Link from "next/link";
import DateIcon from "../DateIcon";
import { DecisionsTypes } from "@/app/_types/DecisionsTypes";

export default function DecisionsListItem({
  decisionTitle,
  decisionLink,
  decisionDate,
}: DecisionsTypes) {
  return (
    <Link href={decisionLink}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <Image
            src="/images/pdf_download_icon.svg"
            alt="download icon"
            width={"30"}
            height={"30"}
          />
          <p className="cursor-pointer select-none hover:text-xl">
            {decisionTitle}
          </p>
        </div>
        <DateIcon date={decisionDate} />
      </div>
    </Link>
  );
}
