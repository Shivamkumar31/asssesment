"use client";

import { useState } from "react";
import { salesData } from "@/lib/mockData";
import YearSelector from "@/components/controls/YearSelector";
import ChartToggle from "@/components/controls/ChartToggle";
import FilterInput from "@/components/controls/FilterInput";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";

export default function DashboardPage() {
  const [year, setYear] = useState<keyof typeof salesData>("2024");
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [threshold, setThreshold] = useState<number | null>(null);

  // Filter data based on sales threshold
  const filteredData = threshold
    ? salesData[year].filter((item) => item.sales >= threshold)
    : salesData[year];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Sales Dashboard ({year})</h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <YearSelector selectedYear={year} onYearChange={setYear} />
        <FilterInput threshold={threshold} onThresholdChange={setThreshold} />
        <ChartToggle selected={chartType} onToggle={setChartType} />
      </div>

      {/* Chart Section */}
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
        {chartType === "bar" && <BarChart data={filteredData} />}
        {chartType === "line" && <LineChart data={filteredData} />}
        {chartType === "pie" && <PieChart data={filteredData} />}
      </div>
    </div>
  );
}
