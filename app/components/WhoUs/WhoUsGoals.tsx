import Image from "next/image";
import SectionTitle from "../SectionTitle";
import BorderdTextBox from "../BorderdTextBox";
import {
  OneGoalsSection,
  TwoGoalsSection,
  ListGoalsSection,
} from "../../[locale]/texts";
import GoalLine from "../GoalLine";

export default function WhoUsGoals() {
  const padding = "px-5 md:px-12";
  return (
    <div className={`mt-6 bg-[#F5F5F5] pt-7`}>
      {/* title  */}
      <div className={` ${padding}`}>
        <SectionTitle text={"هوية الجامعة الإسلامية"} />

        <div className="mt-3 flex flex-col justify-between md:mt-4 md:flex-row md:gap-y-0">
          <p className="text-justify text-sm leading-8 opacity-60 md:text-lg">
            تتطلع الجامعة الإسلامية إلى تحقيق رؤيا ورسالة طموحة نوجز ملامحها
            الأساسية في الآتي:
          </p>

          <div className="mt-6 self-end lg:ml-40">
            <Image
              src={"/images/stars-up.svg"}
              width={"150"}
              height={"150"}
              alt="logo"
            />
          </div>
        </div>

        <div className="mt-3 flex flex-col items-center justify-center gap-y-10 py-10">
          {/* my Vision */}
          <div className="w-full md:w-[85%] lg:w-[75%]">
            <p className="mb-3 text-lg font-semibold text-success">رؤيتنا:</p>
            <BorderdTextBox text={OneGoalsSection} icon_src={null} />
          </div>
          {/* my message */}
          <div className="w-full md:w-[85%] lg:w-[75%]">
            <p className="mb-3 text-lg font-semibold text-success">رسالتنا:</p>
            <BorderdTextBox text={TwoGoalsSection} icon_src={null} />
          </div>
        </div>
      </div>{" "}
      {/* end padding */}
      {/* goals  */}
      <div className="mt-3 flex flex-col items-center justify-center gap-y-10 px-5 py-10 md:px-12">
        <div className="w-full md:w-[85%] lg:w-[75%]">
          <p className="mb-3 text-lg font-semibold text-success">أهدافنا:</p>
        </div>
      </div>
      <div className="flex flex-col justify-start lg:flex-row">
        <div className=" ">
          <Image
            src={"/images/goals_logo.webp"}
            width={"650"}
            height={"150"}
            alt="logo"
          />
        </div>

        <div className="flex flex-1 flex-col justify-evenly gap-y-5 py-2 lg:gap-y-0 lg:px-2">
          {ListGoalsSection.map((item, idx) => {
            return (
              <GoalLine
                key={idx}
                text={item.text}
                img={`/images/id-bg/${idx + 1}.svg`}
                className="w-full md:my-2 md:w-[80%]"
              />
            );
          })}
        </div>
      </div>
      {/* end goals  */}
      <div className="my-3 hidden self-end lg:mr-40">
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
