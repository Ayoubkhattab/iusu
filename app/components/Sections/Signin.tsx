import Image from "next/image";
import SectionTitle from "../SectionTitle";

export default function Signin() {
  return (
    <div className="mt-6 bg-white px-5 pt-7 md:px-12">
      {/* title  */}

      <SectionTitle text={"التسجيل في الجامعة"} />

      <div className="mt-3 flex flex-col justify-between gap-y-4 md:mt-4 md:flex-row md:gap-y-0">
        <div className="flex flex-1 flex-col gap-y-10">
          <div className="text-md text-justify leading-8 opacity-60 lg:text-2xl">
            <div className="mt-5"></div>
            فتح التسجيل لعام 2024-2025
            <div className="mt-3"></div>
            <span className="font-semibold opacity-80">
              سارع بحجز مقعدك في الجامعة الإسلامية
            </span>
          </div>

          <div className="flex flex-row justify-center md:my-6 lg:my-auto">
            <button className="w-[200px] rounded-xl bg-gradient-to-r from-[#137DA4] to-[#03A579] px-4 py-2 text-xs text-white shadow-[0_2px_10px_0_#147CA6] md:text-lg lg:ml-[10%] lg:self-end lg:text-2xl">
              قريباً
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={"/images/chairs_2.svg"} alt="logo" />
        </div>
      </div>
    </div>
  );
}
