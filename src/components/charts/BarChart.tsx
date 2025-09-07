"use client";

import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type DataPoint = { month: string; sales: number };

export default function BarChart({ data }: { data: DataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ReBarChart data={data}>
        <XAxis dataKey="month" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="sales" fill="#8884d8" />
      </ReBarChart>
    </ResponsiveContainer>
  );
}