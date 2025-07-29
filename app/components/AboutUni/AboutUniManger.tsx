import SectionTitle from "../SectionTitle";
import Image from "next/image";
export default function AboutUniManger() {
  return (
    <div className="mt-6 pb-10 pt-7">
      {/* title  */}
      <div className="flex flex-col justify-center gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0">
        <div className="space-y-8 px-5 md:px-12 lg:space-y-20">
          <SectionTitle text={"نبذة عن رئيس الجامعة"} />
          <p className="max-w-xl text-justify text-sm leading-8 opacity-60 md:text-xl lg:text-2xl">
            كادر متميز من الداخل والخارج
          </p>
          <p className="max-w-xl text-sm leading-8 text-primary md:text-xl lg:text-2xl">
            العربى.... هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
            تم توليد هذا النص من مولد النص العربى.... هذا النص هو مثال لنص يمكن
            أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
          </p>
        </div>

        <div className="mx-auto w-[300px] max-w-[500px] lg:mx-0 lg:w-[500px]">
          <Image
            src={"/images/uni-manger.png"}
            alt="University Manger"
            layout="responsive"
            width={"30"}
            height={"40"}
          />
        </div>
      </div>
    </div>
  );
}
