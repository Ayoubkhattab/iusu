// Types
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

export const programsDetails: Record<string, ProgramDetailsType[]> = {
  hadith: [
    {
      id: "bachelor_sunnah_year1",
      title: "كلية السنة النبوية",
      year: "السنة الأولى",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "القرآن الكريم (1)", hours: 2 },
            { id: 2, title: "مصطلح الحديث (1)", hours: 3 },
            { id: 3, title: "تاريخ السنة", hours: 2 },
            { id: 4, title: "تاريخ الفقه", hours: 2 },
            { id: 5, title: "تاريخ التفسير", hours: 2 },
            { id: 6, title: "التجويد", hours: 2 },
            { id: 7, title: "النحو (1)", hours: 3 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "مصطلح الحديث (2)", hours: 3 },
            { id: 2, title: "الأصول التسعة (1)", hours: 3 },
            { id: 3, title: "العقيدة (1)", hours: 3 },
            { id: 4, title: "السيرة النبوية", hours: 2 },
            { id: 5, title: "الفقه (1)", hours: 3 },
            { id: 6, title: "علوم القرآن", hours: 2 },
            { id: 7, title: "الأخلاق والآداب", hours: 2 },
          ],
        },
      ],
    },
    {
      id: "bachelor_sunnah_year2",
      title: "كلية السنة النبوية",
      year: "السنة الثانية",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "القرآن الكريم (2)", hours: 2 },
            { id: 2, title: "فقه الحديث (1)", hours: 3 },
            { id: 3, title: "الجرح والتعديل", hours: 3 },
            { id: 4, title: "التاريخ الإسلامي", hours: 2 },
            { id: 5, title: "أصول التفسير", hours: 3 },
            { id: 6, title: "أصول الفقه (1)", hours: 3 },
            { id: 7, title: "النحو (2)", hours: 3 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "الحديث الموضوعي (2)", hours: 3 },
            { id: 2, title: "التخريج", hours: 3 },
            { id: 3, title: "الأصول التسعة (2)", hours: 3 },
            { id: 4, title: "الاتصال والانقطاع", hours: 3 },
            { id: 5, title: "الفقه (2)", hours: 3 },
            { id: 6, title: "أصول الفقه (2)", hours: 3 },
            { id: 7, title: "العقيدة (2)", hours: 3 },
          ],
        },
      ],
    },
    {
      id: "bachelor_sunnah_year3",
      title: "كلية السنة النبوية",
      year: "السنة الثالثة",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "القرآن الكريم (3)", hours: 2 },
            { id: 2, title: "فقه الحديث (2)", hours: 3 },
            { id: 3, title: "حجية السنة والدفاع عنها", hours: 3 },
            { id: 4, title: "الشمائل النبوية", hours: 2 },
            { id: 5, title: "الحديث الموضوعي (2)", hours: 3 },
            { id: 6, title: "الصرف", hours: 3 },
            { id: 7, title: "اللغة الأجنبية", hours: 2 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "الطبقات والرجال (1)", hours: 3 },
            { id: 2, title: "نقد المتون في السنة النبوية", hours: 3 },
            { id: 3, title: "دراسة الأسانيد", hours: 3 },
            { id: 4, title: "الأصول التسعة (3)", hours: 3 },
            { id: 5, title: "الفقه (3)", hours: 3 },
            { id: 6, title: "الأديان والفرق", hours: 2 },
            { id: 7, title: "السياسة الشرعية", hours: 2 },
          ],
        },
      ],
    },
    {
      id: "bachelor_sunnah_year4",
      title: "كلية السنة النبوية",
      year: "السنة الرابعة",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "القرآن الكريم (4)", hours: 2 },
            { id: 2, title: "العلل (1)", hours: 3 },
            { id: 3, title: "الطبقات والرجال (2)", hours: 3 },
            { id: 4, title: "الناسخ والمنسوخ", hours: 3 },
            { id: 5, title: "مناهج المحدثين (1)", hours: 3 },
            { id: 6, title: "البلاغة", hours: 2 },
            { id: 7, title: "أصول التربية", hours: 2 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "الحديث التحليلي (2)", hours: 3 },
            { id: 2, title: "العلل (2)", hours: 3 },
            { id: 3, title: "الأصول التسعة (4)", hours: 3 },
            { id: 4, title: "مناهج المحدثين (2)", hours: 3 },
            { id: 5, title: "البلاغة النبوية", hours: 2 },
            { id: 6, title: "مناهج بحث", hours: 2 },
            { id: 7, title: "مذاهب فكرية معاصرة", hours: 2 },
          ],
        },
      ],
    },
  ],

  quran: [
    {
      id: "bachelor_quran_year1",
      title: "كلية القرآن الكريم",
      year: "السنة الأولى",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "التجويد (1)", hours: 3 },
            { id: 2, title: "علوم القرآن (1)", hours: 3 },
            { id: 3, title: "تاريخ التفسير", hours: 2 },
            { id: 4, title: "تاريخ الفقه", hours: 2 },
            { id: 5, title: "تاريخ السنة", hours: 2 },
            { id: 6, title: "النحو (1)", hours: 3 },
            { id: 7, title: "أخلاق وآداب", hours: 2 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "التجويد (2)", hours: 3 },
            { id: 2, title: "علوم القرآن (2)", hours: 3 },
            { id: 3, title: "علوم القراءات", hours: 3 },
            { id: 4, title: "أصول الفقه (1)", hours: 3 },
            { id: 5, title: "السيرة (1)", hours: 2 },
            { id: 6, title: "الفقه (1)", hours: 3 },
            { id: 7, title: "مصطلح الحديث", hours: 2 },
          ],
        },
      ],
    },
    {
      id: "bachelor_quran_year2",
      title: "كلية القرآن الكريم",
      year: "السنة الثانية",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "القرآن الكريم (1)", hours: 2 },
            { id: 2, title: "رسم وضبط المصحف", hours: 3 },
            { id: 3, title: "أصول التفسير (1)", hours: 3 },
            { id: 4, title: "التاريخ الإسلامي", hours: 2 },
            { id: 5, title: "أصول الفقه (2)", hours: 3 },
            { id: 6, title: "النحو (2)", hours: 3 },
            { id: 7, title: "الحديث الشريف", hours: 2 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "القرآن الكريم (2)", hours: 2 },
            { id: 2, title: "عد الآي", hours: 2 },
            { id: 3, title: "أصول التفسير (2)", hours: 3 },
            { id: 4, title: "إعجاز القرآن", hours: 2 },
            { id: 5, title: "الفقه (2)", hours: 3 },
            { id: 6, title: "العقيدة (1)", hours: 3 },
            { id: 7, title: "السياسة الشرعية", hours: 2 },
          ],
        },
      ],
    },
    {
      id: "bachelor_quran_year3",
      title: "كلية القرآن الكريم",
      year: "السنة الثالثة",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "القرآن الكريم (3)", hours: 2 },
            { id: 2, title: "مهارات التفسير (1)", hours: 3 },
            { id: 3, title: "الانتصار للقرآن", hours: 2 },
            { id: 4, title: "تدبر القرآن", hours: 2 },
            { id: 5, title: "القواعد الفقهية", hours: 3 },
            { id: 6, title: "الصرف", hours: 3 },
            { id: 7, title: "العقيدة (2)", hours: 3 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "القرآن الكريم (4)", hours: 2 },
            { id: 2, title: "مهارات التفسير (2)", hours: 3 },
            { id: 3, title: "مناهج المفسرين (1)", hours: 3 },
            { id: 4, title: "التفسير الموضوعي", hours: 3 },
            { id: 5, title: "الفقه (3)", hours: 3 },
            { id: 6, title: "الأديان والفرق", hours: 2 },
            { id: 7, title: "لغة أجنبية", hours: 2 },
          ],
        },
      ],
    },
    {
      id: "bachelor_quran_year4",
      title: "كلية القرآن الكريم",
      year: "السنة الرابعة",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "القرآن الكريم (5)", hours: 2 },
            { id: 2, title: "التفسير التحليلي (1)", hours: 3 },
            { id: 3, title: "مناهج المفسرين (2)", hours: 3 },
            { id: 4, title: "الناسخ والمنسوخ", hours: 3 },
            { id: 5, title: "الوقف والابتداء", hours: 2 },
            { id: 6, title: "البلاغة", hours: 2 },
            { id: 7, title: "أصول التربية", hours: 2 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "القرآن الكريم (6)", hours: 2 },
            { id: 2, title: "التفسير التحليلي (2)", hours: 3 },
            { id: 3, title: "توجيه القراءات", hours: 3 },
            { id: 4, title: "البلاغة القرآنية", hours: 2 },
            { id: 5, title: "مهارات أدائية", hours: 2 },
            { id: 6, title: "مناهج بحث", hours: 2 },
            { id: 7, title: "مذاهب فكرية معاصرة", hours: 2 },
          ],
        },
      ],
    },
  ],

  dawah: [
    {
      id: "bachelor_dawah_year1",
      title: "كلية الدعوة",
      year: "السنة الأولى",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "أصول الدعوة", hours: 3 },
            { id: 2, title: "فقه السيرة 1", hours: 3 },
            { id: 3, title: "عقيدة 1", hours: 3 },
            { id: 4, title: "قرآن 1", hours: 2 },
            { id: 5, title: "تفسير 1", hours: 3 },
            { id: 6, title: "علوم القرآن", hours: 2 },
            { id: 7, title: "فقه 1", hours: 3 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "دعوة الرسل", hours: 3 },
            { id: 2, title: "صفات ومقومات الداعية", hours: 3 },
            { id: 3, title: "تاريخ الفقه وقواعده", hours: 2 },
            { id: 4, title: "حديث 1", hours: 2 },
            { id: 5, title: "مصطلح", hours: 2 },
            { id: 6, title: "أخلاق", hours: 2 },
            { id: 7, title: "لغة عربية1", hours: 3 },
            { id: 8, title: "تاريخ الثورة", hours: 2 },
          ],
        },
      ],
    },
    {
      id: "bachelor_dawah_year2",
      title: "كلية الدعوة",
      year: "السنة الثانية",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "أصناف المدعوين", hours: 3 },
            { id: 2, title: "فقه السيرة 2", hours: 3 },
            { id: 3, title: "حضارة إسلامية", hours: 2 },
            { id: 4, title: "قرآن 2", hours: 2 },
            { id: 5, title: "تفسير 2", hours: 3 },
            { id: 6, title: "لغة عربية2", hours: 3 },
            { id: 7, title: "فقه 2", hours: 3 },
            { id: 8, title: "عقيدة2", hours: 3 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "مناهج الدعوة وخصائصها", hours: 3 },
            { id: 2, title: "خطابة 1", hours: 3 },
            { id: 3, title: "أصول الفقه", hours: 3 },
            { id: 4, title: "حديث 2", hours: 2 },
            { id: 5, title: "فن الحوار وأصول المناظرة", hours: 3 },
            { id: 6, title: "تزكية", hours: 2 },
            { id: 7, title: "لغة عربية3", hours: 3 },
            { id: 8, title: "فقه السيرة 3", hours: 2 },
          ],
        },
      ],
    },
    {
      id: "bachelor_dawah_year3",
      title: "كلية الدعوة",
      year: "السنة الثالثة",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "سير الدعاة", hours: 3 },
            { id: 2, title: "فرق وأديان", hours: 3 },
            { id: 3, title: "فقه الإمامة وأحكام المسجد", hours: 3 },
            { id: 4, title: "قرآن 3", hours: 2 },
            { id: 5, title: "تفسير 3", hours: 3 },
            { id: 6, title: "تاريخ إسلامي 1", hours: 2 },
            { id: 7, title: "فقه 3", hours: 3 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "خطابة2", hours: 3 },
            { id: 2, title: "ميادين الدعوة ومجالاتها", hours: 3 },
            { id: 3, title: "وسائل الدعوة وتقنياتها", hours: 3 },
            { id: 4, title: "حديث 3", hours: 2 },
            { id: 5, title: "نظام الحكم والسياسة الشرعية", hours: 3 },
            { id: 6, title: "فقه الإختلاف الدعوي", hours: 3 },
            { id: 7, title: "لغة عربية4", hours: 3 },
            { id: 8, title: "تاريخ إسلامي 2", hours: 2 },
          ],
        },
      ],
    },
    {
      id: "bachelor_dawah_year4",
      title: "كلية الدعوة",
      year: "السنة الرابعة",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "الحسبة", hours: 3 },
            { id: 2, title: "الدعوة الأسرية", hours: 3 },
            { id: 3, title: "بحث علمي", hours: 3 },
            { id: 4, title: "قرآن 4", hours: 2 },
            { id: 5, title: "تفسير 4", hours: 3 },
            { id: 6, title: "حاضر العالم الإسلامي", hours: 2 },
            { id: 7, title: "فقه 4", hours: 3 },
            { id: 8, title: "لغة أجنبية", hours: 2 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "مقومات الفكر الإسلامي", hours: 3 },
            { id: 2, title: "قضايا ونوازل معاصرة", hours: 3 },
            { id: 3, title: "علم النفس الدعوي", hours: 3 },
            { id: 4, title: "حديث 4", hours: 2 },
            { id: 5, title: "أصول التربية وطرائق التدريس", hours: 3 },
            { id: 6, title: "مذاهب وتيارات", hours: 2 },
            { id: 7, title: "لغة عربية5", hours: 3 },
            { id: 8, title: "تاريخ العالم المعاصر", hours: 2 },
          ],
        },
      ],
    },
  ],

  qraat: [
    {
      id: "diploma_quran_year1",
      title: "المعهد التخصصي للقراءات وعلوم القرآن",
      year: "السنة الأولى",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "التجويد (1)", hours: 3 },
            { id: 2, title: "علوم القرآن الكريم", hours: 3 },
            { id: 3, title: "النحو (1)", hours: 3 },
            { id: 4, title: "الفقه وعلومه (1)", hours: 3 },
            { id: 5, title: "العقيدة", hours: 2 },
            { id: 6, title: "آداب طالب العلم", hours: 2 },
            { id: 7, title: "عرض القرآن الكريم (1)", hours: 2 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "التجويد (2)", hours: 3 },
            { id: 2, title: "رسم المصحف وضبطه", hours: 3 },
            { id: 3, title: "أصول التفسير", hours: 3 },
            { id: 4, title: "الفقه وعلومه (2)", hours: 3 },
            { id: 5, title: "الفكر", hours: 2 },
            { id: 6, title: "النحو (2)", hours: 3 },
            { id: 7, title: "عرض القرآن الكريم (2)", hours: 2 },
          ],
        },
      ],
    },
    {
      id: "diploma_quran_year2",
      title: "المعهد التخصصي للقراءات وعلوم القرآن",
      year: "السنة الثانية",
      semesters: [
        {
          name: "الفصل الأول",
          courses: [
            { id: 1, title: "الوقف والابتداء", hours: 3 },
            { id: 2, title: "التفسير (1)", hours: 3 },
            { id: 3, title: "علم النفس التربوي", hours: 2 },
            { id: 4, title: "إعجاز القرآن", hours: 2 },
            { id: 5, title: "تقنيات التعليم", hours: 2 },
            { id: 6, title: "السيرة النبوية", hours: 2 },
            { id: 7, title: "عرض القرآن الكريم (3)", hours: 2 },
          ],
        },
        {
          name: "الفصل الثاني",
          courses: [
            { id: 1, title: "المدخل إلى علم القراءات", hours: 3 },
            { id: 2, title: "التفسير (2)", hours: 3 },
            { id: 3, title: "التربية العملية", hours: 2 },
            { id: 4, title: "البلاغة", hours: 2 },
            { id: 5, title: "طرائق التدريس", hours: 3 },
            { id: 6, title: "الحديث وعلومه", hours: 2 },
            { id: 7, title: "عرض القرآن الكريم (4)", hours: 2 },
          ],
        },
      ],
    },
  ],
};

export interface ProgramIntro {
  id: string;
  title: string;
  description: string;
  vision: string;
  mission: string;
  goals: string[];
  values: string[];
  subjects: string[];
}
export const programsIntroData: Record<string, ProgramIntro> = {
  dawah: {
    id: "dawah",
    title: "كلية الدعوة الإسلامية",
    description:
      "كلية الدعوة الإسلامية هي إحدى الكليات التابعة للجامعة الإسلامية، تهدف إلى إعداد الدعاة المؤهلين علمياً وعملياً لحمل رسالة الإسلام وتبليغها للناس بالحكمة والموعظة الحسنة.",
    vision:
      "تسعى كلية الدعوة الإسلامية إلى أن تكون رائدة في إعداد الدعاة المتميزين الذين يجمعون بين العلم الشرعي الأصيل والمهارات الدعوية المعاصرة.",
    mission:
      "تلتزم كلية الدعوة الإسلامية بتقديم تعليم متميز في العلوم الشرعية والدعوية، وإعداد خريجين مؤهلين للعمل في مجال الدعوة والإرشاد.",
    goals: [
      "بناء الشخصية المتوازنة للداعية المسلم",
      "إعداد الداعية المربي القادر على التأثير الإيجابي",
      "تنمية المهارات الدعوية والخطابية",
      "ربط الدراسة النظرية بالتطبيق العملي",
    ],
    values: [
      "الإخلاص: التحلي بالنية الصادقة في طلب العلم والدعوة",
      "الابتكار: تشجيع التجديد في أساليب الدعوة",
      "الاحترافية: السعي نحو التميز في الأداء الدعوي",
      "الوسطية: الالتزام بمنهج الوسطية في الفهم والتطبيق",
    ],
    subjects: ["مواد تأصيلية شرعية", "مواد دعوية تخصصية", "مواد مساعدة"],
  },
  quran: {
    id: "quran",
    title: "كلية القرآن الكريم",
    description:
      "كلية متخصصة ضمن كليات الجامعة الإسلامية، تُعنى بتعليم القرآن الكريم وعلومه، وإعداد المتخصصين في حفظ وتلاوة وتفسير كتاب الله العزيز.",
    vision:
      "أن تكون كلية القرآن الكريم رائدة ومتميزة محلياً وعالمياً في تعليم القرآن الكريم وعلومه وإعداد المتخصصين فيه.",
    mission:
      "تأهيل متخصصين في علوم القرآن الكريم حفظاً وفهماً وتفسيراً وتطبيقاً، وإعداد معلمين مؤهلين لتدريس القرآن الكريم.",
    goals: [
      "تخريج حفظة ومتخصصين في علوم القرآن",
      "تنمية البحث العلمي في الدراسات القرآنية",
      "إعداد الكفاءات المؤهلة لتدريس القرآن",
      "نشر ثقافة القرآن الكريم في المجتمع",
      "استخدام الوسائل الحديثة في تعليم القرآن",
    ],
    values: [
      "الإخلاص لله تعالى في تعلم وتعليم القرآن",
      "الالتزام بالمنهج الوسطي في فهم القرآن",
      "الأمانة العلمية في التفسير والتأويل",
      "التعاون والعمل الجماعي",
      "خدمة المجتمع من خلال القرآن الكريم",
    ],
    subjects: ["مواد تأصيلية شرعية مشتركة", "مواد تخصصية", "مواد مساعدة"],
  },
  hadith: {
    id: "hadith",
    title: "كلية السنة النبوية",
    description:
      "كلية تعنى بتدريس علوم الحديث النبوي، رواية ودراية، وتأهيل الطلاب علمياً وأكاديمياً في مجال السنة النبوية المطهرة.",
    vision:
      "أن تكون كلية السنة مرجعية علمية متميزة في خدمة الحديث النبوي الشريف محلياً وإقليمياً وعالمياً.",
    mission:
      "نشر علوم السنة ورفع كفاءة البحث العلمي فيها، وإعداد متخصصين مؤهلين في علوم الحديث النبوي.",
    goals: [
      "إعداد علماء متخصصين في علوم الحديث",
      "تمييز صحيح الحديث من ضعيفه",
      "تلبية حاجات الأمة من المتخصصين",
      "تطوير البحث العلمي في السنة النبوية",
      "تعزيز القيم المستمدة من السنة النبوية",
    ],
    values: [
      "الأصالة والوسطية العلمية",
      "الأمانة والصدق في التحقيق",
      "خدمة السنة بما يلائم العصر",
      "الانفتاح العلمي المنضبط",
      "منهج الاعتدال والرحمة",
    ],
    subjects: ["مواد تأصيلية شرعية مشتركة", "مواد تخصصية", "مواد مساعدة"],
  },
};
