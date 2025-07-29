import Image from "next/image";
// bg-green-300 hero text-center pt-20 text-white flex flex-row justify-center items-center gap-3
export default function Hero() {
  return (
    <div className="hero pt-20 text-center w-full bg-red-500 flex flex-col text-white justify-center items-center">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold">
        {" "}
        الجامعة الإسلامية
        <br />
        في سوريا
      </h1>
      <p className="mt-8 text-2xl">
        صرح علمي يجمع التخصصات العلمية
        <br />
        في بيئة معرفية متطورة
      </p>
      <div className="md:ps-16   w-full flex flex-col-reverse md:flex-row  justify-between items-baseline   mt-10 ">
        {/* section 1 */}
        <div className="w-full md:w-1/5  mt-4 md:mt-0 px-8  ">
          <p className="bg-primary p-2  flex flex-row gap-3 justify-center rounded-lg cursor-pointer shadow shadow-info">
            <Image
              src={"/images/mdi_form.svg"}
              width={"20"}
              height={"20"}
              alt="logo"
            />
            <span>اضغط للتسجيل</span>
          </p>
        </div>
        {/* section 2 */}
        <div className="w-full  flex flex-row justify-center  md:ps-16  md:w-1/2 md:ml-auto">
          <Image
            src={"/images/logo.svg"}
            width={"100"}
            height={"100"}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
