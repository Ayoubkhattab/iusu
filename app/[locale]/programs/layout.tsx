"use client";

import { useState } from "react";
import HeroImage from "@/components/Segments/HeroImage";
import ProgramsVerticalSection from "./ProgramsVerticalSection";
import DecisionsImage from "@/app/components/Decisions/DecisionsImage";

type Course = {
  id: number;
  title: string;
  hours?: number | null;
};

type Semester = {
  name: string;
  courses: Course[];
};

type ProgramDetailsType = {
  id: string;
  title: string;
  year: string;
  semesters: Semester[];
};

 const programsDetails: Record<string, ProgramDetailsType> = {
  bachelor_sunnah: {
    id: "bachelor_sunnah",
    title: "برنامج بكالوريوس كلية السنة النبوية",
    year: "السنة الأولى",
    semesters: [
      {
        name: "الفصل الأول",
        courses: [
          { id: 1, title: "القرآن الكريم (1)" },
          { id: 2, title: "مصطلح الحديث (1)" },
          { id: 3, title: "تاريخ السنة" },
          { id: 4, title: "تاريخ الفقه" },
          { id: 5, title: "عقيدة(1)" },
          { id: 6, title: "السيرة النبوية" },
          { id: 7, title: "النحو (1)" },
        ],
      },
      {
        name: "الفصل الثاني",
        courses: [
          { id: 1, title: "مصطلح الحديث (2)" },
          { id: 2, title: "الأصول الستة (1)" },
          { id: 3, title: "العقيدة (2)" },
          { id: 4, title: "التاريخ الإسلامي" },
          { id: 5, title: "الفقه (1)" },
          { id: 6, title: "علوم القرآن" },
          { id: 7, title: "الأخلاق والآداب" },
        ],
      },
    ],
  },
 };

export default function ProgramsLayout() {
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(
    null,
  );
  const program = selectedProgramId ? programsDetails[selectedProgramId] : null;

  return (
    <main className="min-h-screen bg-neutral-100 pb-10">
      <HeroImage image={"/images/sho3ib.webp"} title={"البرامج الأكاديمية"} />
      <div className="px-5 pt-7 md:px-12">
        <div className="flex flex-row gap-8 pt-7">
          {/* sidebar */}
          <ProgramsVerticalSection onSelectProgram={setSelectedProgramId} />

          {/* محتوى البرنامج */}
          <section className="min-h-[400px] flex-1 rounded-lg bg-white p-5 shadow-md">
            {!program && (
              <p className="text-center text-gray-500">
                الرجاء اختيار برنامج من القائمة لعرض التفاصيل
              </p>
            )}

            {program && (
              <>
                <DecisionsImage
                  image={"/images/sho3ib.webp"}
                  title={program.title}
                />
                <h1 className="mb-6 mt-4 text-2xl font-bold">
                  {program.title}
                </h1>
                <h2 className="mb-4 text-xl">{program.year}</h2>

                {program.semesters.map((semester, idx) => (
                  <div key={idx} className="mb-6">
                    <h3 className="mb-3 text-lg font-semibold">
                      {semester.name}
                    </h3>
                    <table className="w-full border-collapse border border-gray-300 text-right">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-300 p-2">م</th>
                          <th className="border border-gray-300 p-2">
                            اسم المقرر
                          </th>
                          <th className="border border-gray-300 p-2">
                            عدد الساعات
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {semester.courses.map((course, index) => (
                          <tr
                            key={course.id}
                            className={
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                          >
                            <td className="border border-gray-300 p-2 text-center">
                              {index + 1}
                            </td>
                            <td className="border border-gray-300 p-2">
                              {course.title}
                            </td>
                            <td className="border border-gray-300 p-2 text-center">
                              {course.hours ?? "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}

                {/* قرارات عامة */}
                <div className="decision-list mt-8">
                  <p className="rounded-tl-2xl rounded-tr-2xl bg-gradient-to-l from-[#024059] to-[#0e5875] py-2 text-center text-xl text-white">
                    قرارات عامة (متغير حسب الصنف)
                  </p>
                  <div className="list p-2">
                    {/* يمكنك وضع محتوى القرارات هنا */}
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
