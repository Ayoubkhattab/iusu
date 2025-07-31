"use client";

import { useState } from "react";
// Updated import path
import { type ProgramIntro, programsIntroData } from "./staticData";
import ProgramTable from "./ProgramTable";
import DecisionsImage from "@/app/components/Decisions/DecisionsImage";

interface Semester {
  name: string;
  courses: { id: string | number; title: string }[];
}

interface ProgramDetailsType {
  id: string;
  title: string;
  year: string;
  semesters: Semester[];
}

interface Props {
  programId: string | null;
  programYears: ProgramDetailsType[];
}

export default function ProgramContent({ programId, programYears }: Props) {
  const [activeTab, setActiveTab] = useState<"about" | "plan">("about");

  const programIntro: ProgramIntro = programId
    ? programsIntroData[programId]
    : {
        id: "",
        title: "البرنامج الأكاديمي",
        description: "لا تتوفر معلومات.",
        vision: "",
        mission: "",
        goals: [],
        values: [],
        subjects: [],
      };

  return (
    <>
      <div className="mb-6 border-b border-gray-300">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "about"
              ? "border-b-2 border-teal-600 text-teal-600"
              : "text-gray-600"
          }`}
        >
          عن البرنامج
        </button>
        <button
          onClick={() => setActiveTab("plan")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "plan"
              ? "border-b-2 border-teal-600 text-teal-600"
              : "text-gray-600"
          }`}
        >
          الخطة الدراسية
        </button>
      </div>
      {activeTab === "about" ? (
        <div className="space-y-4 leading-relaxed text-gray-800">
          <h2 className="text-xl font-bold text-teal-700">
            {programIntro.title}
          </h2>
          <p>{programIntro.description}</p>
          <h3 className="text-lg font-semibold">الرؤية</h3>
          <p>{programIntro.vision}</p>
          <h3 className="text-lg font-semibold">الرسالة</h3>
          <p>{programIntro.mission}</p>
          <h3 className="text-lg font-semibold">الأهداف</h3>
          <ul className="list-inside list-decimal">
            {programIntro.goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold">البرامج الدراسية</h3>
          <ul className="list-inside list-disc">
            {programIntro.subjects.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold">القيم</h3>
          <ul className="list-inside list-disc">
            {programIntro.values.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {programYears.map((program, i) => (
            <div key={program.id}>
              {i === 0 && (
                <DecisionsImage
                  image="/placeholder.svg?height=200&width=800&text=Academic+Program"
                  title={program.title}
                />
              )}
              <div className="my-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  {program.year}
                </h2>
                {program.semesters.map((sem, j) => (
                  <ProgramTable
                    key={j}
                    semester={sem}
                    // semesterIndex={j} // Removed unused prop
                    year={program.year}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
