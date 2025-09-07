"use client";

import { PieChart as RePieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

type DataPoint = { month: string; sales: number };

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c", "#d0ed57", "#8dd1e1"];

export default function PieChart({ data }: { data: DataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RePieChart>
        <Tooltip />
        <Pie
          data={data}
          dataKey="sales"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </RePieChart>
    </ResponsiveContainer>
  );
}
