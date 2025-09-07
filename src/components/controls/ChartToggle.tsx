type ChartToggleProps = {
  selected: "bar" | "line" | "pie";
  onToggle: (type: "bar" | "line" | "pie") => void;
};

export default function ChartToggle({ selected, onToggle }: ChartToggleProps) {
  return (
    <div className="flex gap-2">
      {["bar", "line", "pie"].map((type) => (
        <button
          key={type}
          onClick={() => onToggle(type as "bar" | "line" | "pie")}
          className={`px-4 py-2 rounded ${
            selected === type ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          {type.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
