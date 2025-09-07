type YearSelectorProps = {
  selectedYear: string;
  onYearChange: (year: "2022" | "2023" | "2024") => void;
};

export default function YearSelector({ selectedYear, onYearChange }: YearSelectorProps) {
  return (
    <select
      value={selectedYear}
      onChange={(e) => onYearChange(e.target.value as "2022" | "2023" | "2024")}
      className="px-4 py-2 rounded bg-gray-700 text-white"
    >
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
  );
}
