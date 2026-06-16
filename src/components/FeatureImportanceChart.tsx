"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface FeatureImportanceProps {
  data: { feature: string; importance: number }[];
}

export default function FeatureImportanceChart({ data }: FeatureImportanceProps) {
  if (!data || data.length === 0) return null;

  // Sort data by importance descending
  const sortedData = [...data].sort((a, b) => b.importance - a.importance);

  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
          <XAxis type="number" hide />
          <YAxis 
            dataKey="feature" 
            type="category" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748B', fontSize: 12 }} 
            width={120}
          />
          <Tooltip 
            formatter={(value: number) => [`${(value * 100).toFixed(2)}%`, 'Importance']}
            cursor={{ fill: '#F1F5F9' }}
            contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="importance" fill="#38BDF8" radius={[0, 4, 4, 0]} barSize={24} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
