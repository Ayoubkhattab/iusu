export default function GradientButton({ text }: { text: string }) {
  return (
    <button className="border-1 rounded-[19px] bg-gradient-to-r from-[#137da4] to-[#03a579] px-16 py-2.5 text-center text-white hover:bg-gradient-to-l">
      {text}
    </button>
  );
}
