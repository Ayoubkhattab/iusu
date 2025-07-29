import Image from "next/image";

export default function WhoUsWhyCard({
  text,
  image,
}: {
  text: string;
  image: string;
}) {
  return (
    <div className="relative h-[200px] w-full text-ellipsis rounded-xl bg-neutral-100 px-3 py-8">
      <Image
        src={image}
        alt="Number icon"
        width={"30"}
        height={"30"}
        className="absolute -top-6"
      />
      <p className="text-center leading-8 text-primary">{text}</p>
    </div>
  );
}
