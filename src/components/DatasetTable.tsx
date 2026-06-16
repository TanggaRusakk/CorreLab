import { Search, Filter, Eye, Download, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function DatasetTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
      {/* Table Actions */}
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low/50 p-md">
        <div className="relative">
          <Search className="absolute left-sm top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
          <input
            className="w-64 rounded-md border border-outline-variant bg-surface py-xs pl-xl pr-md text-body-sm focus:outline-none focus:ring-1 focus:ring-tertiary-fixed"
            placeholder="Filter datasets..."
            type="text"
          />
        </div>
        <button className="flex items-center gap-xs rounded border border-outline-variant px-sm py-xs text-body-sm text-on-surface-variant transition-colors hover:bg-surface">
          <Filter className="h-4 w-4" /> Filter
        </button>
      </div>

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
          <tr className="group border-b border-outline-variant/50 transition-colors hover:bg-surface-container-low">
            <td className="px-lg py-md font-semibold">Q4 Sales Data.csv</td>
            <td className="px-lg py-md font-code-mono text-on-surface-variant">
              2023-10-24 09:12
            </td>
            <td className="px-lg py-md">Random Forest</td>
            <td className="px-lg py-md">
              <span className="inline-flex items-center gap-xs rounded-full border border-outline-variant/30 bg-surface-container px-sm py-[2px] text-[11px] font-semibold text-on-surface">
                <div className="h-1.5 w-1.5 rounded-full bg-secondary-fixed"></div>{" "}
                Completed
              </span>
            </td>
            <td className="px-lg py-md text-right opacity-0 transition-opacity group-hover:opacity-100">
              <button className="p-xs text-on-surface-variant hover:text-primary-container">
                <Eye className="h-4 w-4" />
              </button>
              <button className="p-xs text-on-surface-variant hover:text-primary-container">
                <Download className="h-4 w-4" />
              </button>
            </td>
          </tr>
          
          <tr className="group border-b border-outline-variant/50 transition-colors hover:bg-surface-container-low">
            <td className="px-lg py-md font-semibold">Customer Churn Log.xlsx</td>
            <td className="px-lg py-md font-code-mono text-on-surface-variant">
              2023-10-23 14:45
            </td>
            <td className="px-lg py-md">XGBoost</td>
            <td className="px-lg py-md">
              <span className="inline-flex items-center gap-xs rounded-full border border-outline-variant/30 bg-surface-container px-sm py-[2px] text-[11px] font-semibold text-on-surface">
                <div className="h-1.5 w-1.5 rounded-full bg-secondary-fixed"></div>{" "}
                Completed
              </span>
            </td>
            <td className="px-lg py-md text-right opacity-0 transition-opacity group-hover:opacity-100">
              <button className="p-xs text-on-surface-variant hover:text-primary-container">
                <Eye className="h-4 w-4" />
              </button>
              <button className="p-xs text-on-surface-variant hover:text-primary-container">
                <Download className="h-4 w-4" />
              </button>
            </td>
          </tr>

          <tr className="group border-b border-outline-variant/50 transition-colors hover:bg-surface-container-low">
            <td className="px-lg py-md font-semibold">Sensor_Readings_EU.csv</td>
            <td className="px-lg py-md font-code-mono text-on-surface-variant">
              2023-10-23 10:05
            </td>
            <td className="px-lg py-md">Linear Regression</td>
            <td className="px-lg py-md">
              <span className="inline-flex items-center gap-xs rounded-full bg-error-container px-sm py-[2px] text-[11px] font-semibold text-on-error-container">
                <div className="h-1.5 w-1.5 rounded-full bg-error"></div> Failed
              </span>
            </td>
            <td className="px-lg py-md text-right opacity-0 transition-opacity group-hover:opacity-100">
              <button className="p-xs text-on-surface-variant hover:text-primary-container">
                <Eye className="h-4 w-4" />
              </button>
            </td>
          </tr>

          <tr className="group border-b border-outline-variant/50 transition-colors hover:bg-surface-container-low">
            <td className="px-lg py-md font-semibold">Q3_Marketing_Spend.xlsx</td>
            <td className="px-lg py-md font-code-mono text-on-surface-variant">
              2023-10-21 16:20
            </td>
            <td className="px-lg py-md">Random Forest</td>
            <td className="px-lg py-md">
              <span className="inline-flex items-center gap-xs rounded-full border border-outline-variant/30 bg-surface-container px-sm py-[2px] text-[11px] font-semibold text-on-surface">
                <div className="h-1.5 w-1.5 rounded-full bg-secondary-fixed"></div>{" "}
                Completed
              </span>
            </td>
            <td className="px-lg py-md text-right opacity-0 transition-opacity group-hover:opacity-100">
              <button className="p-xs text-on-surface-variant hover:text-primary-container">
                <Eye className="h-4 w-4" />
              </button>
              <button className="p-xs text-on-surface-variant hover:text-primary-container">
                <Download className="h-4 w-4" />
              </button>
            </td>
          </tr>

          <tr className="group transition-colors hover:bg-surface-container-low">
            <td className="px-lg py-md font-semibold">User_Engagement_V2.csv</td>
            <td className="px-lg py-md font-code-mono text-on-surface-variant">
              2023-10-20 08:30
            </td>
            <td className="px-lg py-md">K-Means Clustering</td>
            <td className="px-lg py-md">
              <span className="inline-flex items-center gap-xs rounded-full border border-outline-variant/30 bg-surface-container px-sm py-[2px] text-[11px] font-semibold text-on-surface">
                <div className="h-1.5 w-1.5 rounded-full bg-secondary-fixed"></div>{" "}
                Completed
              </span>
            </td>
            <td className="px-lg py-md text-right opacity-0 transition-opacity group-hover:opacity-100">
              <button className="p-xs text-on-surface-variant hover:text-primary-container">
                <Eye className="h-4 w-4" />
              </button>
              <button className="p-xs text-on-surface-variant hover:text-primary-container">
                <Download className="h-4 w-4" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Pagination (Static Placeholder) */}
      <div className="flex items-center justify-end gap-sm border-t border-outline-variant bg-surface-container-lowest p-sm">
        <span className="mr-md flex items-center gap-1 text-body-sm text-on-surface-variant">
          Rows per page: 5 <ChevronDown className="h-4 w-4" />
        </span>
        <span className="text-body-sm text-on-surface-variant">1-5 of 42</span>
        <div className="ml-sm flex gap-xs">
          <button className="cursor-not-allowed p-xs text-outline-variant">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="rounded p-xs text-on-surface-variant hover:bg-surface">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
