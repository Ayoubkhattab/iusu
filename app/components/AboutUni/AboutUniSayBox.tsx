type BorderdTextBoxType = {
  text: string;
  icon_src: string | null;
};
import Image from "next/image";
import GradientButton from "../GradientButton";
export default function AboutUniSayBox({ text, icon_src }: BorderdTextBoxType) {
  return (
    // min-w-[400px] max-w-[700px]
    <div className="relative rounded-3xl rounded-tr-sm bg-gradient-to-r from-white to-success p-0.5 shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
      <div className="text-wide inline-block h-full w-full space-y-6 rounded-3xl rounded-tr-sm border-l-2 border-zinc-100 bg-gradient-to-r from-zinc-100 to-slate-50 p-4 text-justify leading-8 text-primary shadow-[-10px_0px_4px_#F6F6F6] md:text-xl md:leading-10">
        <h2 className="text-3xl font-semibold text-success"> أحمد السيد:</h2>
        <p className="about py-1 text-lg">
          {" "}
           داعية ومفكر سعودي، وباحث ومؤلف، والمشرف العام على أكاديمية الجيل
          الصاعد والبناء المنهجي
        </p>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى.... هذا النص هو مثال لنص يمكن أن يستبدل في
          نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.... هذا النص هو
          مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
          النص{" "}
        </p>
      </div>

      <div className="absolute -top-24 left-0 w-[220px]">
        <Image
          src={"/images/ahmad-say.png"}
          alt="ahmad said"
          width={"70"}
          height={"70"}
          layout="responsive"
        />
      </div>

      <div className="absolute -bottom-8 left-10">
        <GradientButton text="عرض السيرة الذاتية" />
      </div>
    </div>
  );
}
