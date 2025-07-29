"use client";

import { useState } from "react";
import ProgramsAccordion from "./ProgramsAccordion";

type Program = {
  id: string;
  title: string;
};

type ProgramsGroup = {
  title: string;
  links: Program[];
};

type Props = {
  onSelectProgram: (id: string) => void;
};

export default function ProgramsVerticalSection({ onSelectProgram }: Props) {
  const programsData: ProgramsGroup[] = [
    {
      title: "برامج الدبلوم",
      links: [
        { id: "bachelor_sunnah", title: "بكالوريوس كلية السنة النبوية" },
        { id: "bachelor_engineering", title: "بكالوريوس الهندسة" },
      ],
    },
    {
      title: "برامج البكالوريوس",
      links: [
        { id: "bachelor_sunnah", title: "بكالوريوس كلية السنة النبوية" },
        { id: "bachelor_engineering", title: "بكالوريوس الهندسة" },
      ],
    },
    {
      title: "برامج الماجستير",
      links: [
        { id: "bachelor_sunnah", title: "بكالوريوس كلية السنة النبوية" },
        { id: "bachelor_engineering", title: "بكالوريوس الهندسة" },
      ],
    },
    // أضف مجموعات أخرى حسب الحاجة
  ];

  return (
    <div className="vertical-section hidden w-80 rounded-lg rounded-tl-2xl rounded-tr-2xl bg-white lg:block">
      <div className="news-list">
        {programsData.map((group, idx) => (
          <ProgramsAccordion
            key={idx}
            data={group}
            isFirst={idx === 0}
            onSelect={onSelectProgram}
          />
        ))}
      </div>
    </div>
  );
}
