"use client";

import { useState } from "react";

import { programsDetails } from "./staticData";
import HeroImage from "@/app/components/Segments/HeroImage";
import ProgramsVerticalSection from "./ProgramsVerticalSection";
import ProgramContent from "./ProgramContent";

// Define interfaces
interface Course {
  id: string | number;
  title: string;
}

interface Semester {
  name: string;
  courses: Course[];
}

interface ProgramDetailsType {
  id: string;
  title: string;
  year: string;
  semesters: Semester[];
}

interface ProgramIntro {
  id: string;
  title: string;
  description: string;
  vision: string;
  mission: string;
  goals: string[];
  values: string[];
  subjects: string[];
}

interface ProgramTableProps {
  semester: Semester;
  semesterIndex: number;
  year: string;
}

// Program Table Component
function ProgramTable({ semester, semesterIndex, year }: ProgramTableProps) {
  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" dir="rtl">
          <thead>
            <tr className="bg-teal-600">
              <th className="border-r border-teal-500 px-4 py-3 text-center text-sm font-bold text-white">
                الرقم
              </th>
              <th className="border-r border-teal-500 px-4 py-3 text-center text-sm font-bold text-white">
                المقرر
              </th>
              <th className="border-r border-teal-500 px-4 py-3 text-center text-sm font-bold text-white">
                السنة
              </th>
              <th className="border-r border-teal-500 px-4 py-3 text-center text-sm font-bold text-white">
                الفصل
              </th>
            </tr>
          </thead>
          <tbody>
            {semester.courses.map((course, index) => (
              <tr
                key={course.id}
                className={`transition-colors duration-150 ${
                  index % 2 === 0
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <td className="border-r border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700">
                  {index + 1}
                </td>
                <td className="border-r border-gray-200 px-4 py-3 text-sm text-gray-800">
                  {course.title}
                </td>
                <td className="border-r border-gray-200 px-4 py-3 text-center text-sm text-gray-600">
                  {year}
                </td>
                <td className="border-r border-gray-200 px-4 py-3 text-center text-sm text-gray-600">
                  {semester.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-teal-600 px-4 py-2">
        <div className="text-center text-sm font-medium text-white">
          إجمالي: {semester.courses.length} مقرر
        </div>
      </div>
    </div>
  );
}

// Program About Section Component
interface ProgramAboutProps {
  programIntro: ProgramIntro;
}

function ProgramAbout({ programIntro }: ProgramAboutProps) {
  return (
    <div className="space-y-6 leading-relaxed text-gray-800">
      <div>
        <h2 className="mb-3 text-2xl font-bold text-teal-700">
          {programIntro.title}
        </h2>
        <p className="text-gray-700">{programIntro.description}</p>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-teal-600">الرؤية</h3>
        <p className="text-gray-700">{programIntro.vision}</p>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-teal-600">الرسالة</h3>
        <p className="text-gray-700">{programIntro.mission}</p>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-teal-600">الأهداف</h3>
        <ul className="list-inside list-decimal space-y-2 text-gray-700">
          {programIntro.goals.map((goal, i) => (
            <li key={i} className="leading-relaxed">
              {goal}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-teal-600">
          البرامج الدراسية
        </h3>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          {programIntro.subjects.map((sub, i) => (
            <li key={i} className="leading-relaxed">
              {sub}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-teal-600">القيم</h3>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          {programIntro.values.map((val, i) => (
            <li key={i} className="leading-relaxed">
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Program Study Plan Component
interface ProgramStudyPlanProps {
  programYears: ProgramDetailsType[];
}

function ProgramStudyPlan({ programYears }: ProgramStudyPlanProps) {
  return (
    <div>
      {programYears.map((program, index) => (
        <div key={program.id}>
          {index === 0 && (
            <div className="mb-4">
              {/* Placeholder for DecisionsImage component */}
            </div>
          )}
          <div className="my-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              {program.year}
            </h2>
          </div>
          {program.semesters.map((semester, idx) => (
            <ProgramTable
              key={idx}
              semester={semester}
              semesterIndex={idx}
              year={program.year}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// Main Component
export default function ProgramsLayout() {
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(
    null,
  );
  const programYears = selectedProgramId
    ? programsDetails[selectedProgramId] || []
    : [];

  return (
    <main className="min-h-screen bg-neutral-100 pb-10 font-sans" dir="rtl">
      <HeroImage
        image="/placeholder.svg?height=400&width=1200&text=Academic+Programs"
        title="البرامج الأكاديمية"
      />
      <div className="px-5 pt-7 md:px-12">
        <div className="flex flex-col gap-8 pt-7 lg:flex-row">
          <div className="lg:w-1/4">
            <ProgramsVerticalSection onSelectProgram={setSelectedProgramId} />
          </div>
          <section className="min-h-[400px] flex-1 rounded-lg bg-white p-6 shadow-lg">
            {!selectedProgramId ? (
              <div className="flex h-64 items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="mb-4 text-6xl text-gray-300">📚</div>
                  <p className="text-lg font-medium text-gray-500">
                    الرجاء اختيار برنامج من القائمة لعرض التفاصيل
                  </p>
                </div>
              </div>
            ) : (
              <ProgramContent
                programYears={programYears}
                programId={selectedProgramId}
              />
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
