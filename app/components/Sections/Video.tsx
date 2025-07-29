import getIntroductoryVideos from "@/app/_actions/IntroVideo";
import SectionTitle from "../SectionTitle";
import { IntroVideoType } from "@/app/_types/IntroVideoType";
export default async function Video() {
  const videoData: Array<IntroVideoType> = await getIntroductoryVideos();

  return (
    <div className="mt-6 bg-white px-5 pt-7 md:px-12">
      {/* title  */}
      <SectionTitle text={"الفيديو التعريفي"} />
      <div className="mt-5 flex flex-row items-center justify-center gap-y-5 lg:px-20">
        <div className="my-2 flex flex-1 flex-row justify-center overflow-hidden rounded-lg">
          <iframe
            className="rounded-xl border-0 outline-0"
            width="853"
            height="480"
            src="https://www.youtube.com/embed/8UYy6yRttYw"
            // src={videoData[0].videoUrl}
            title="المقدمة التعريفية للجامعة الإسلامية"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
