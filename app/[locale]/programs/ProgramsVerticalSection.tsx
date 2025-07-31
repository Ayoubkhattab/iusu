"use client";

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
      links: [{ id: "dawah", title: "دبلوم الدعوة الإسلامية" }],
    },
    {
      title: "برامج البكالوريوس",
      links: [
        { id: "quran", title: "كلية القرآن الكريم" },
        { id: "hadith", title: "كلية السنة النبوية" },
      ],
    },
    {
      title: "برامج الماجستير",
      links: [{ id: "qraat", title: "المعهد التخصصي للقراءات وعلوم القرآن" }],
    },
  ];

  return (
    <div className="vertical-section w-full rounded-lg bg-white shadow-lg lg:block">
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
