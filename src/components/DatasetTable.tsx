import { Search, Filter, Eye, Download, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { AnalysisHistory } from "@prisma/client";

interface Props {
  data: AnalysisHistory[];
}

export default function DatasetTable({ data }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
      {/* Data Table */}
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-outline-variant bg-surface">
            <th className="px-lg py-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
              Dataset Name
            </th>
            <th className="px-lg py-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
              Date
            </th>
            <th className="px-lg py-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
              Model Used
            </th>
            <th className="px-lg py-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
              Status
            </th>
            <th className="px-lg py-sm text-right font-label-uppercase text-label-uppercase text-on-surface-variant">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-body-sm text-on-background">
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id} className="group border-b border-outline-variant/50 transition-colors hover:bg-surface-container-low">
                <td className="px-lg py-md font-semibold">{item.datasetName}</td>
                <td className="px-lg py-md font-code-mono text-on-surface-variant">
                  {new Date(item.createdAt).toLocaleString()}
                </td>
                <td className="px-lg py-md">{item.analysisMethod}</td>
                <td className="px-lg py-md">
                  <span className="inline-flex items-center gap-xs rounded-full border border-outline-variant/30 bg-surface-container px-sm py-[2px] text-[11px] font-semibold text-on-surface">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary-fixed"></div>{" "}
                    Completed
                  </span>
                </td>
                <td className="px-lg py-md text-right opacity-0 transition-opacity group-hover:opacity-100 flex justify-end gap-2">
                  <Link href={`/results/${item.id}`} className="p-xs text-on-surface-variant hover:text-primary-container">
                    <Eye className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-lg py-xl text-center text-on-surface-variant">
                No analyses found. Go to New Analysis to get started.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
