import Image from "next/image";
import SectionTitle from "../SectionTitle";
import SliderVideos from "../Segments/SliderVideos";

export default function Visuals() {
  return (
    <div className={`mt-6 bg-[#F5F5F5] pt-7`}>
      {/* title  */}
      <div className={`px-5 md:px-12`}>
        <SectionTitle text={"المرئيات"} />
        <p></p>
        <SliderVideos />
      </div>
    </div>
  );
}
