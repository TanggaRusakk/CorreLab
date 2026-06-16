import type { VariableInfo } from "@/types";

interface Props {
  variables: VariableInfo[];
}

export default function VariableMatrix({ variables = [] }: Props) {
  if (!variables || variables.length === 0) {
    return (
      <div className="rounded-lg border border-[#E2E8F0] bg-white p-5 flex items-center justify-center">
        <p className="text-sm text-slate-500">No variable data available.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">
          Variable Matrix
        </h3>
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
