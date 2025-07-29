import Image from "next/image";

export default function HeroImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="relative h-[280px] max-h-[280px] overflow-hidden">
      <Image
        src={image}
        alt="background image"
        fill
        className="object-cover"
        loading="lazy"
      />

      <Image
        src="/images/hero_cover.webp"
        alt="cover background"
        fill
        className="object-cover"
        loading="lazy"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-[64px] font-semibold text-white">
          {title}
        </h1>
      </div>
    </div>
  );
}
