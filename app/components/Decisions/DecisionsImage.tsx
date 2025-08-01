import Image from "next/image";

export default function DecisionsImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="relative h-[280px] max-h-[280px] overflow-hidden rounded-xl">
      <Image
        src={image}
        alt="background transparent image"
        fill
        className="object-cover"
        loading="lazy"
      />

      <Image
        src="/images/decisions_cover.webp"
        alt="cover image"
        fill
        className="object-cover opacity-90"
        loading="lazy"
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1 className="text-center text-4xl font-semibold text-white drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
}
