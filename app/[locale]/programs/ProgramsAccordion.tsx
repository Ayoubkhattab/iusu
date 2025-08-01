"use client";

import { useState } from "react";

type ProgramLink = {
  id: string;
  title: string;
};

type ProgramsAccordionType = {
  data: {
    title: string;
    links: ProgramLink[];
  };
  isFirst?: boolean;
  onSelect: (id: string) => void; // تمرير البرنامج المختار للأب
};

function Arrow({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={`mt-1.5 h-5 w-5 flex-shrink-0 transition-transform md:mt-0 ${
        isOpen ? "rotate-180 font-semibold text-white" : "text-secondary"
      }`}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
    </svg>
  );
}

export default function ProgramsAccordion({
  data,
  isFirst = false,
  onSelect,
}: ProgramsAccordionType) {
  const [open, setOpen] = useState(false);

  const roundedWhenFirst = isFirst ? "rounded-tl-2xl rounded-tr-2xl" : "";
  const buttonClass = `question-btn flex w-full items-start justify-between gap-x-5 ${roundedWhenFirst} p-1 py-3.5 lg:py-4 text-lg font-bold text-slate-800 focus:outline-none ltr:text-left rtl:text-right`;

  return (
    <div className="w-full">
      <div className="border-b border-[#0A071B]/10">
        <button
          className={`${buttonClass} ${open ? "bg-primary" : "bg-white"}`}
          onClick={() => setOpen(!open)}
          type="button"
        >
          <p
            className={`flex-1 px-1 ${open ? "text-white" : "text-secondary"}`}
          >
            {data.title}
          </p>
          <Arrow isOpen={open} />
        </button>

        <div
          className={`answer rounded bg-white pb-5 pr-5 pt-5 text-sm font-medium leading-8 text-[#343E3A] ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-3">
            {data.links.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer list-disc border-b py-1 text-[#9c9c9c]"
                onClick={() => onSelect(item.id)}
              >
                <span className="text-lg font-semibold text-black hover:text-info">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
