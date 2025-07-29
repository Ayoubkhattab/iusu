import BorderdTextBox from "../BorderdTextBox";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
export default function AboutUniTeachers() {
  return (
    <div className="mt-6 px-5 pt-7 md:px-12">
      {/* title  */}
      <SectionTitle text={"نبذة عن الكادر التدريسي"} />

      {/* ss  */}
      {/* w-full md:w-[85%] lg:w-[75%] */}
      <div className="mt-3 flex flex-col justify-between md:mt-4 md:flex-row md:gap-y-0">
        <p className="text-justify text-sm leading-8 opacity-60 md:text-lg">
          كادر متميز من الداخل والخارج
        </p>

        <div className="mt-3 self-end lg:ml-40">
          <Image
            src={"/images/stars-up.svg"}
            width={"150"}
            height={"150"}
            alt="logo"
          />
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center justify-center">
        <div className="w-full md:w-[85%] lg:w-[75%]">
          <BorderdTextBox
            text={`العربى.... هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.... هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص  `}
            icon_src={null}
          />
        </div>
      </div>
      <div className="my -3 hidden self-end lg:mr-40">
        <Image
          src={"/images/stars-down.svg"}
          width={"150"}
          height={"150"}
          alt="logo"
        />
      </div>
    </div>
  );
}
