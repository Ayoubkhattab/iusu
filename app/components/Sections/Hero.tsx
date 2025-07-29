import Image from "next/image";

// bg-green-300 hero text-center pt-20 text-white flex flex-row justify-center items-center gap-3
export default function Hero() {
  return (
    <div className="hero flex w-full flex-col items-center justify-center gap-y-5 pt-20 text-center text-white">
      <h1 className="text-4xl font-semibold leading-9 md:text-5xl lg:text-7xl">
        {" "}
        الجامعة الإسلامية
        <span className="my-7 block"> فـي سـوريـا</span>
      </h1>
      <div className="mt-6 hidden">
        <Image
          src={"/images/in_syria_text.png"}
          width={"230"}
          height={"230"}
          alt="logo"
        />
      </div>
      <p className="mt-6 text-lg md:text-xl">
        صرح علمي يجمع تخصصات فريـدة
        <span className="my-3 block">ضمن بيئة معرفيـة متطورة</span>
      </p>
      <div className="my-8">
        <Image
          src={"/images/logo.svg"}
          width={"150"}
          height={"150"}
          alt="logo"
        />
      </div>
    </div>
  );
}
