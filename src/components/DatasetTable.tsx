"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, MoreVertical, Search } from "lucide-react";
import MethodBadge from "@/components/ui/MethodBadge";
import type { DatasetEntry } from "@/types";

const mockData: DatasetEntry[] = [
  {
    id: "1",
    fileName: "Q4_Revenue_Forecast.csv",
    dateProcessed: "Oct 12, 2023",
    fileSize: "14.2 MB",
    primaryMethod: "Time-Series",
  },
  {
    id: "2",
    fileName: "User_Retention_Cohort.xlsx",
    dateProcessed: "Oct 10, 2023",
    fileSize: "2.4 MB",
    primaryMethod: "Survival Analysis",
  },
  {
    id: "3",
    fileName: "A_B_Test_Results_V2.json",
    dateProcessed: "Oct 05, 2023",
    fileSize: "8.1 MB",
    primaryMethod: "ANOVA",
  },
  {
    id: "4",
    fileName: "Customer_Segmentation_Raw.csv",
    dateProcessed: "Sep 28, 2023",
    fileSize: "45.8 MB",
    primaryMethod: "Clustering",
  },
  {
    id: "5",
    fileName: "Pricing_Elasticity_Study.csv",
    dateProcessed: "Sep 15, 2023",
    fileSize: "1.2 MB",
    primaryMethod: "Regression",
  },
];

interface DatasetTableProps {
  searchQuery: string;
}

export default function DatasetTable({ searchQuery }: DatasetTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const totalEntries = 24;

  const filteredData = mockData.filter((item) =>
    item.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(totalEntries / pageSize);
  const startEntry = (currentPage - 1) * pageSize + 1;
  const endEntry = Math.min(currentPage * pageSize, totalEntries);

  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-white">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E2E8F0]">
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Dataset Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Date Processed
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                File Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Primary Method
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {filteredData.map((entry) => (
              <tr
                key={entry.id}
                className="transition-colors hover:bg-slate-50"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-slate-400" />
                    <Link
                      href={`/results/${entry.id}`}
                      className="text-sm font-medium text-slate-900 hover:text-[#38BDF8]"
                    >
                      {entry.fileName}
                    </Link>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                  {entry.dateProcessed}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                  {entry.fileSize}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <MethodBadge method={entry.primaryMethod} />
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/results/${entry.id}`}
                      className="rounded-md border border-[#E2E8F0] px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      View Results
                    </Link>
                    <button
                      type="button"
                      className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-[#E2E8F0] px-6 py-3">
        <p className="text-sm text-slate-500">
          Showing {startEntry} to {endEntry} of {totalEntries} entries
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="rounded-md px-3 py-1.5 text-sm text-slate-500 transition-colors hover:bg-slate-50 disabled:opacity-40"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
