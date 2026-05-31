"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import DatasetTable from "@/components/DatasetTable";

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="mx-auto max-w-5xl">
      {/* Page Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Your Analyses Archive
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Review past datasets and their associated models.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search datasets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-56 rounded-md border border-[#E2E8F0] bg-white py-2 pl-9 pr-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]"
          />
        </div>
      </div>

      {/* Dataset Table */}
      <DatasetTable searchQuery={searchQuery} />
    </div>
  );
}
