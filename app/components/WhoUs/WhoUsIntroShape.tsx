import Image from "next/image";
import PolygonShape from "@/app/components/PolygonShape";

export default function WhoUsIntroShape() {
  return (
    <div className="relative h-[400px] w-[700px] min-w-[700px]">
      <Image
        src={"/images/stars/a.svg"}
        width={"150"}
        height={"150"}
        alt="logo"
        className="absolute right-0 top-0 z-10"
      />
      <div className="absolute right-2 z-0 w-[300px] lg:h-[400px] lg:w-[600px]">
        <PolygonShape image="/images/cc.png" />
      </div>
      <Image
        src={"/images/stars/a.svg"}
        width={"150"}
        height={"150"}
        alt="logo"
        className="absolute bottom-0 left-28 z-10"
      />
    </div>
  );
}
