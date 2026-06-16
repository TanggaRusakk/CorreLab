"use client";

import {
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart
} from "recharts";

interface Props {
  data: any[];
  xKey: string;
  yKey: string;
  slope?: number;
  intercept?: number;
}

export default function DynamicChart({ data, xKey, yKey, slope = 0, intercept = 0 }: Props) {
  if (!data || data.length === 0 || !xKey || !yKey) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-[#E2E8F0] bg-[#FAFBFC]">
        <p className="text-sm text-slate-400">No data available for charting</p>
      </div>
    );
  }

  // Find min and max of X to draw the regression line
  const xValues = data.map(d => Number(d[xKey])).filter(v => !isNaN(v));
  const minX = Math.min(...xValues);
  const maxX = Math.max(...xValues);

  // Line endpoints
  const lineData = [
    { [xKey]: minX, lineY: (slope * minX) + intercept },
    { [xKey]: maxX, lineY: (slope * maxX) + intercept }
  ];

  const showRegressionLine = slope !== 0 || intercept !== 0;

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis 
            type="number" 
            dataKey={xKey} 
            name={xKey} 
            domain={['auto', 'auto']}
            tick={{fontSize: 12}}
          />
          <YAxis 
            type="number" 
            dataKey={yKey} 
            name={yKey} 
            domain={['auto', 'auto']}
            tick={{fontSize: 12}}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          
          <Scatter 
            name="Data" 
            data={data} 
            fill="#38BDF8" 
          />
          
          {showRegressionLine && (
            <Line 
              data={lineData} 
              type="monotone" 
              dataKey="lineY" 
              stroke="#0F172A" 
              strokeWidth={2}
              dot={false}
              activeDot={false}
              name="Regression Line"
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
