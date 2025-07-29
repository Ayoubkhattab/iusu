export default function DecisionsSelect() {
  return (
    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-3 text-sm text-primary">
      <option defaultValue={""}>النوع</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  );
}
