export default function Divider({ color }: { color: string }) {
  return (
    <div className="relative my-2 flex items-center py-1">
      <div className={`flex-grow border-t ${color} `}></div>
    </div>
  );
}
