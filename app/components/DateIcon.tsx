import { FaRegCalendarDays } from "react-icons/fa6";
export default function DateIcon({ date }: { date: string }) {
  return (
    <p className="me-4 flex flex-row items-baseline gap-x-2 text-sm">
      {/* Icon  */}
      <FaRegCalendarDays className="text-info" />
      {/* text  */}
      <span className="t text-secondary">{date}</span>
    </p>
  );
}
