type SectionTitleProps = {
  text: string;
};
export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-y-1">
      <h1 className="gradient-text py-3.5 text-xl font-bold md:text-4xl">
        {text}
      </h1>
    </div>
  );
}
