import SectionTitle from "../SectionTitle";
import PolygonShape from "../PolygonShape";
export default function WhoUsIntro() {
  return (
    <div className="mt-6 px-5 pb-10 pt-7 md:px-12">
      {/* title  */}
      <div className="flex flex-col justify-center gap-y-10 lg:flex-row lg:justify-between lg:gap-y-0">
        <div className="space-y-8 lg:space-y-20">
          <SectionTitle text={"التعريف بالجامعة الإسلامية"} />
          <p className="max-w-xl text-justify text-sm leading-8 opacity-60 md:text-xl lg:text-2xl">
            مؤسسة وقفية أكاديمية خاصة غير ربحية أنشئت بمساهمات الواقفين
            وتبرعاتهم برعاية وزارة الأوقاف مركزها مدينة إدلب السورية .
          </p>
          <p className="max-w-xl text-sm leading-8 text-primary md:text-xl lg:text-2xl">
            نظراً لوجود حاجةٍ لنقل التعليم الشرعي الأكاديمي إلى مرحلةٍ متقدمة
            أكثرَ عُمقاً وتخصصا، وتقديمِ قيمةٍ نوعيةٍ تحفظ مكانةَ الشامِ في
            محافل أكاديمية محليةٍ ودولية وفق تخصصات دقيقة.
          </p>
        </div>

        <div className="mx-auto mb-3 mt-10 w-[300px] max-w-[500px] lg:mx-0 lg:w-[500px]">
          <PolygonShape image="/images/cc.png" />
        </div>
      </div>
    </div>
  );
}
