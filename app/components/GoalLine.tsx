import Image from "next/image";

type GoalLineProps = {
  img: string;
  text: string;
  className?: string;
};

export default function GoalLine({ img, text, className }: GoalLineProps) {
  return (
    <div className={`flex flex-row gap-x-2  ${className} `}>
      <p className="w-10">
        <Image src={img} width={"37"} height={"37"} alt="logo" />
      </p>
      <p className="flex-1 text-md md:text-xl lg:px-5 text-primary ">{text}</p>
    </div>
  );
}
