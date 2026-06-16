"use client";

interface ConfusionMatrixProps {
  matrix: number[][];
  classes: (string | number)[];
}

export default function ConfusionMatrix({ matrix, classes }: ConfusionMatrixProps) {
  if (!matrix || matrix.length === 0) return null;

  // Flatten to find max for heatmap color intensity
  const allValues = matrix.flat();
  const maxVal = Math.max(...allValues, 1); // prevent div by zero

  // Heatmap color logic (using Sky Blue base #38BDF8)
  const getColor = (value: number) => {
    if (value === 0) return 'bg-slate-50 text-slate-400';
    const intensity = Math.max(0.1, value / maxVal);
    // rgba(56, 189, 248) is Tailwind's sky-400 (#38BDF8)
    return { backgroundColor: `rgba(56, 189, 248, ${intensity})`, color: intensity > 0.5 ? 'white' : '#0F172A' };
  };

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full text-sm text-center border-collapse">
        <thead>
          <tr>
            <th className="p-2 border border-slate-200 bg-slate-50 text-slate-500 font-medium">Actual \ Predicted</th>
            {classes.map((c, i) => (
              <th key={i} className="p-2 border border-slate-200 bg-slate-50 text-slate-700 font-medium whitespace-nowrap">
                Class {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              <th className="p-2 border border-slate-200 bg-slate-50 text-slate-700 font-medium text-left whitespace-nowrap">
                Class {classes[i]}
              </th>
              {row.map((val, j) => {
                const styleObj = val > 0 ? getColor(val) : {};
                const className = val === 0 ? getColor(val) as string : "";
                return (
                  <td 
                    key={j} 
                    className={`p-4 border border-slate-200 font-semibold ${className}`}
                    style={val > 0 ? styleObj as React.CSSProperties : undefined}
                  >
                    {val}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
