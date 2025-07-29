import Image from "next/image";

export default function MainButton() {
  return (
    <p className="bg-primary p-2  flex flex-row gap-3 justify-center rounded-lg cursor-pointer shadow shadow-info">
      <Image
        src={"/images/mdi_form.svg"}
        width={"20"}
        height={"20"}
        alt="logo"
      />
      <span>اضغط للتسجيل</span>
    </p>
  );
}
