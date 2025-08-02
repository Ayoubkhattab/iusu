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
      <div className="mb-6">
        {programYears.length > 0 && (
          <DecisionsImage
            image="/images/sho3ib.webp"
            title={programYears[0].title}
          />
        )}
        <div className="m-4 flex max-w-[30%] flex-row overflow-hidden rounded-xl rounded-b-none border border-gray-300">
          <button
            onClick={() => setActiveTab("about")}
            className={`flex-1 rounded-b-none px-4 py-2 text-sm font-medium ${
              activeTab === "about"
                ? "rounded-r-lg bg-[#137DA4] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            عن البرنامج
          </button>
          <button
            onClick={() => setActiveTab("plan")}
            className={`flex-1 border-l border-gray-300 px-4 py-2 text-sm font-medium ${
              activeTab === "plan"
                ? "bg-[#137DA4] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            الخطة الدراسية
          </button>
        </div>
      </div>
      {activeTab === "about" ? (
        <div className="space-y-4 leading-relaxed text-gray-800">
          <h3 className="text-centertext-lg rounded-[16px] bg-gradient-to-r from-[#137DA4] to-[#03A579] p-2 text-center font-semibold text-white">
            الرؤية
          </h3>
          <p>{programIntro.vision}</p>
          <h3 className="rounded-[16px] bg-gradient-to-r from-[#137DA4] to-[#03A579] p-2 text-center text-lg font-semibold text-white">
            الرسالة
          </h3>
          <p>{programIntro.mission}</p>
          <h3 className="rounded-[16px] bg-gradient-to-r from-[#137DA4] to-[#03A579] p-2 text-center text-lg font-semibold text-white">
            الأهداف
          </h3>

          <div className="rounded-[16px] p-4">
            <ul className="list-inside list-decimal">
              {programIntro.goals.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </div>
          <h3 className="rounded-[16px] bg-gradient-to-r from-[#137DA4] to-[#03A579] p-2 text-center text-lg font-semibold text-white">
            البرامج الدراسية
          </h3>
          <ul className="list-inside list-decimal space-y-2">
            {programIntro.subjects.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <h3 className="rounded-[16px] bg-gradient-to-r from-[#137DA4] to-[#03A579] p-2 text-center text-lg font-semibold text-white">
            القيم
          </h3>
          <ul className="font- list-inside list-decimal space-y-2">
            {programIntro.values.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {programYears.map((program, i) => (
            <div key={program.id}>
              {program.semesters.map((sem, j) => (
                <div key={j} className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-800">
                    {program.year} - {sem.name}
                  </h2>
                  <ProgramTable semester={sem} year={program.year} />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
