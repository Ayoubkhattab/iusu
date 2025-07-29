export type ProgramLink = {
  title: string;
  id: number;
};

export type ProgramsData = {
  title: string;
  links: Array<ProgramLink>;
};

export type ProgramsAccordionType = {
  data: ProgramsData;
  isFirst: boolean;
};
