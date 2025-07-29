import Link from "next/link";
import { IdentityIntroSection } from "../../[locale]/texts";
import BorderdTextBox from "../BorderdTextBox";
import GradientButton from "../GradientButton";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
export default function Intro() {
  return (
    <div className="mt-6 px-5 pt-7 md:px-12">
      {/* title  */}
      <SectionTitle text={"التعريف بالجامعة الإسلامية"} />

      {/* ss  */}
      {/* w-full md:w-[85%] lg:w-[75%] */}
      <div className="mt-3 flex flex-col justify-between md:mt-4 md:flex-row md:gap-y-0">
        <p className="text-justify text-sm leading-8 opacity-60 md:text-lg">
          مؤسسة وقفية أكاديمية خاصة غير ربحية أنشئت بمساهمات الواقفين وتبرعاتهم
          برعاية وزارة الأوقاف مركزها مدينة إدلب السورية .
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
          <BorderdTextBox text={IdentityIntroSection} icon_src={null} />
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

      <div className="mt-3 flex flex-row justify-center py-2">
        <Link href={"/who-us"}>
          <GradientButton text="المزيد عن الجامعة" />
        </Link>
      </div>
    </div>
  );
}
