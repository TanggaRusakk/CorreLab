import type { VariableInfo } from "@/types";

const variables: VariableInfo[] = [
  {
    name: "revenue",
    type: "float64",
    mean: "54,231.40",
    stdDev: "12,405.32",
    missing: "0.3%",
  },
  {
    name: "customer_count",
    type: "int64",
    mean: "1,842",
    stdDev: "467.21",
    missing: "0.0%",
  },
  {
    name: "churn_rate",
    type: "float64",
    mean: "0.042",
    stdDev: "0.018",
    missing: "1.2%",
  },
  {
    name: "avg_order_value",
    type: "float64",
    mean: "89.54",
    stdDev: "23.11",
    missing: "0.8%",
  },
];

export default function VariableMatrix() {
  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">
          Variable Matrix
        </h3>
        <button
          type="button"
          className="text-xs font-medium text-[#38BDF8] hover:underline"
        >
          View Full Table
        </button>
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E2E8F0]">
              <th className="pb-2 text-left text-xs font-medium text-slate-500">
                Variable
              </th>
              <th className="pb-2 text-left text-xs font-medium text-slate-500">
                Type
              </th>
              <th className="pb-2 text-right text-xs font-medium text-slate-500">
                Mean
              </th>
              <th className="pb-2 text-right text-xs font-medium text-slate-500">
                Std. Dev
              </th>
              <th className="pb-2 text-right text-xs font-medium text-slate-500">
                Missing
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {variables.map((v) => (
              <tr key={v.name}>
                <td className="py-2 text-sm font-medium text-slate-900">
                  {v.name}
                </td>
                <td className="py-2 text-sm text-slate-500">{v.type}</td>
                <td className="py-2 text-right text-sm text-slate-700">
                  {v.mean}
                </td>
                <td className="py-2 text-right text-sm text-slate-700">
                  {v.stdDev}
                </td>
                <td className="py-2 text-right text-sm text-slate-500">
                  {v.missing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
