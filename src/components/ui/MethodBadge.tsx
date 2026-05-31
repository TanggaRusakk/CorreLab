import type { AnalysisMethod } from "@/types";

interface MethodBadgeProps {
  method: AnalysisMethod;
}

const methodStyles: Record<AnalysisMethod, string> = {
  "Time-Series": "bg-emerald-50 text-emerald-600",
  "Survival Analysis": "bg-purple-50 text-purple-600",
  ANOVA: "bg-amber-50 text-amber-600",
  Clustering: "bg-green-50 text-green-600",
  Regression: "bg-red-50 text-red-600",
  Correlation: "bg-blue-50 text-blue-600",
  "Predictive Modeling": "bg-indigo-50 text-indigo-600",
};

export default function MethodBadge({ method }: MethodBadgeProps) {
  const style = methodStyles[method] ?? "bg-slate-50 text-slate-600";

  return (
    <span
      className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${style}`}
    >
      {method}
    </span>
  );
}
