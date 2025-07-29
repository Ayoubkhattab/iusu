type BorderdTextBoxType = {
  text: string;
  icon_src: string | null;
};
import Image from "next/image";
export default function BorderdTextBox({ text, icon_src }: BorderdTextBoxType) {
  return (
    <div className="p-0.5 rounded-3xl   rounded-tr-sm   max-w-full bg-gradient-to-r from-white to-success  shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
      <div className="h-full relative w-full leading-8 md:leading-10   text-wide text-primary inline-block  p-4 text-justify   rounded-3xl rounded-tr-sm md:text-xl bg-gradient-to-r from-zinc-100 to-slate-50  border-zinc-100  border-l-2 shadow-[-10px_0px_4px_#F6F6F6]  ">
        <p
          dangerouslySetInnerHTML={{ __html: text }}
          className="py-1  text-lg"
        ></p>
        {icon_src != null ? (
          <div className="absolute right-0  w-full -top-12 flex flex-row justify-center items-center">
            <Image
              src={icon_src}
              alt=""
              width={"70"}
              height={"70"}
              className="rounded-full p-0"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
