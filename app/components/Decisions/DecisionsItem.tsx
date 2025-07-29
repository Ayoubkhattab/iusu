import { DecisionsTypes } from "@/app/_types/DecisionsTypes";
import Link from "next/link";
import { FaRegCalendarDays } from "react-icons/fa6";
export default function DecisionsItem({
  data,
}: {
  data: Pick<DecisionsTypes, "decisionTitle" | "decisionLink" | "decisionDate">;
}) {
  return (
    <Link href={data.decisionLink}>
      <div className="card-item mt-1 flex flex-row">
        <div className="content-text flex flex-1 flex-col justify-between ps-2">
          <p className="font-semibold text-primary">{data.decisionTitle}</p>

          <p className="me-4 flex flex-row items-baseline gap-x-2 text-sm">
            {/* Icon  */}
            <FaRegCalendarDays className="text-info" />
            {/* text  */}
            <span className="text-secondary">{data.decisionDate}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
