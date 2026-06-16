"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart
} from "recharts";

interface TimeSeriesChartProps {
  historicalData: { time: number; actual: number }[];
  forecastData: { time: number; forecast: number }[];
}

export default function TimeSeriesChart({ historicalData, forecastData }: TimeSeriesChartProps) {
  if (!historicalData || historicalData.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-[#E2E8F0] bg-[#FAFBFC]">
        <p className="text-sm text-slate-400">No time series data available</p>
      </div>
    );
  }

  // Combine data for plotting
  // Recharts handles multiple lines best if they share the same X axis data array.
  // We will merge historical and forecast into a single array.
  const mergedData = [
    ...historicalData.map(d => ({ time: d.time, actual: d.actual, forecast: null })),
    ...forecastData.map(d => ({ time: d.time, actual: null, forecast: d.forecast }))
  ];

  // To connect the lines visually, we can copy the last actual point to the start of the forecast.
  const lastActual = historicalData[historicalData.length - 1];
  if (lastActual) {
    const connectingPoint = mergedData.find(d => d.time === forecastData[0]?.time);
    if (!connectingPoint && forecastData.length > 0) {
      mergedData.push({
        time: lastActual.time,
        actual: null,
        forecast: lastActual.actual
      });
      // Sort by time
      mergedData.sort((a, b) => a.time - b.time);
    }
  }

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={mergedData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis 
            type="number" 
            dataKey="time" 
            name="Time Step" 
            domain={['auto', 'auto']}
            tick={{fontSize: 12}}
          />
          <YAxis 
            type="number" 
            domain={['auto', 'auto']}
            tick={{fontSize: 12}}
          />
          <Tooltip 
            cursor={{ strokeDasharray: '3 3' }} 
            contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          
          <Line 
            type="monotone" 
            dataKey="actual" 
            stroke="#0F172A" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
            name="Historical"
          />
          
          <Line 
            type="monotone" 
            dataKey="forecast" 
            stroke="#38BDF8" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            activeDot={{ r: 6 }}
            name="Forecast"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
