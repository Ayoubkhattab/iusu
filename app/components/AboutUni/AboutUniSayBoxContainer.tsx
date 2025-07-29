import AboutUniSayBox from "@/app/components/AboutUni/AboutUniSayBox";
import Image from "next/image";

export default function AboutUniSayBoxContainer() {
  return (
    <div className="mx-auto mt-14 flex w-[90%] flex-row justify-evenly">
      <div className="b self-start">
        <Image
          src={"/images/quote_up.svg"}
          alt="qoute mark"
          width={"50"}
          height={"50"}
          layout="responsive"
        />
      </div>
      <div className="w-1/2">
        <AboutUniSayBox text="" icon_src={null} />
      </div>
      <div className="self-end">
        <Image
          src={"/images/quote_down.svg"}
          alt="qoute mark"
          width={"50"}
          height={"50"}
          layout="responsive"
        />
      </div>
    </div>
  );
}
