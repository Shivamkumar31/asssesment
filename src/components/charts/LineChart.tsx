"use client";

import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type DataPoint = { month: string; sales: number };

export default function LineChart({ data }: { data: DataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ReLineChart data={data}>
        <XAxis dataKey="month" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#82ca9d" strokeWidth={3} />
      </ReLineChart>
    </ResponsiveContainer>
  );
}