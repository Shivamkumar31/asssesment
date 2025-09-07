type FilterInputProps = {
  threshold: number | null;
  onThresholdChange: (value: number | null) => void;
};

export default function FilterInput({ threshold, onThresholdChange }: FilterInputProps) {
  return (
    <input
      type="number"
      placeholder="Enter sales threshold"
      value={threshold ?? ""}
      onChange={(e) => onThresholdChange(e.target.value ? Number(e.target.value) : null)}
      className="px-4 py-2 rounded bg-gray-700 text-white"
    />
  );
}
