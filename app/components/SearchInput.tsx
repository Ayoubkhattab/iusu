import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <div className="relative w-full px-2">
      {/* icon  */}
      <div className="absolute bottom-0 top-0 flex w-14 flex-row justify-center bg-gradient-to-r from-[#137da4] to-[#03a579] pt-2 ltr:right-2 ltr:rounded-br-xl ltr:rounded-tr-xl rtl:left-2 rtl:rounded-bl-xl rtl:rounded-tl-xl">
        <FaSearch className="h-9 w-9 font-normal text-white" />
      </div>
      {/* end icon  */}

      {/* input  */}

      <input
        type="text"
        className="w-full rounded-xl border border-gray-500 py-3 ltr:pl-1 ltr:pr-14 rtl:pl-14 rtl:pr-1"
        placeholder="ابحث عن خبر .."
      />
    </div>
  );
}
