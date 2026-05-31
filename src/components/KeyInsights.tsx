import type { InsightItem } from "@/types";

const insights: InsightItem[] = [
  { text: "Strong positive correlation detected" },
  { text: "Revenue trends follow seasonal pattern" },
  { text: "3 outlier data points identified in Q3" },
  { text: "Missing data rate below 2% threshold" },
];

export default function KeyInsights() {
  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">Key Insights</h3>
      <ul className="mt-3 space-y-2.5">
        {insights.map((insight) => (
          <li key={insight.text} className="flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#38BDF8]" />
            <span className="text-sm text-slate-600">{insight.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
