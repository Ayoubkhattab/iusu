import SectionTitle from "../SectionTitle";
import { getTranslations } from "next-intl/server";
import FaqAccordion from "../Segments/FaqAccordion";
import getFaqs from "@/app/_actions/faq";

export default async function Faq() {
  const t = await getTranslations("sections.faq");
  const faqData = await getFaqs();
  return (
    <div className={`mt-6 bg-[#F5F5F5] px-5 py-7 md:px-12`}>
      {/* title  */}
      <SectionTitle text={t("section_title")} />

      <div className="py-1">
        {/* Faq Accordion component  */}
        <FaqAccordion data={faqData.data} />
        {/* End Faq Accordion component  */}
      </div>
    </div>
  );
}
