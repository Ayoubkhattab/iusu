"use client";

import { FaqAccordionItemType } from "@/app/_types/FaqAccordionItemType";
import { useState } from "react";

function Arrow({ open, index }: { open: any; index: number }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={`mt-1.5 h-5 w-5 flex-shrink-0 text-info transition-transform md:mt-0 ${
        open === index ? "rotate-180 font-semibold text-white" : ""
      }`}
      height="1em"
      width="1em"
      xmlns="http:www.w3.org/2000/svg"
    >
      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
    </svg>
  );
}

export default function FaqAccordion({
  data,
}: {
  data: Array<FaqAccordionItemType>;
}) {
  // State to track which question is open
  const [open, setOpen] = useState(null);

  // Toggle question handler
  const toggleAnswer = (id: any) => {
    setOpen(open === id ? null : id); // Open or close the answer
  };

  const buttonClass =
    "question-btn flex w-full items-start justify-between gap-x-5 rounded-tr-lg rounded-tl-lg  p-1  py-3.5 lg:py-4 text-lg font-bold text-slate-800 focus:outline-none ltr:text-left rtl:text-right";

  if (!Array.isArray(data)) {
    return <p>No FAQ data provided.</p>;
  }
  return (
    <div className="rounded-lg">
      {/* item  */}

      {data.map((item: FaqAccordionItemType, index: number) => {
        return (
          <div key={index} className="mt-6 border-b border-[#0A071B]/10">
            <button
              className={`${buttonClass} ${open === index ? "bg-primary" : "bg-white"}`}
              onClick={() => toggleAnswer(index)}
            >
              {/* title span  */}
              <p
                className={`flex-1 px-1 text-info ${open === index ? "text-white" : ""} `}
              >
                {item.questionText}
              </p>
              <Arrow open={open} index={index} />
            </button>
            {/* text div  */}
            <div
              className={`answer rounded bg-white px-5 pb-5 pt-5 text-sm font-medium leading-8 text-[#343E3A] ${
                open === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
      {/* item  */}
    </div>
  );
}
