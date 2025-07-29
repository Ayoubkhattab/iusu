import Link from "next/link";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";

export default function NewsCardButton({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <div>
      <Link
        href={link}
        className="my-2 inline-flex rounded-xl bg-success px-4 py-2 text-center text-sm text-white hover:bg-info"
      >
        {/* <span className="ml-1 hidden rounded-full bg-info bg-opacity-20 p-1 rtl:inline-block">
          <FaAngleRight />
        </span> */}
        <span>{text}</span>
        {/* <span className="ml-1 hidden rounded-full bg-info bg-opacity-20 p-1 ltr:inline-block">
          <FaAngleRight />
        </span> */}
      </Link>
    </div>
  );
}
