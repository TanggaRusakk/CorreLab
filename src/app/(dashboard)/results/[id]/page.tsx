import { Hash, GitBranch, BarChart3, TrendingUp } from "lucide-react";
import MetricCard from "@/components/ui/MetricCard";
import ChartPlaceholder from "@/components/ChartPlaceholder";
import KeyInsights from "@/components/KeyInsights";
import VariableMatrix from "@/components/VariableMatrix";

interface ResultsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-5xl">
      {/* Page Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Analysis Results
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Dataset: Q2_Financial_Transactions.csv
          </p>
        </div>
        <button
          type="button"
          className="rounded-md border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          Export Report
        </button>
      </div>

      {/* Metric Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Observations"
          value="142,304"
          change="+2.4%"
          changeType="positive"
          icon={<Hash className="h-4 w-4" />}
        />
        <MetricCard
          title="Variance Explained"
          value="84.2%"
          change="+0.8%"
          changeType="positive"
          icon={<GitBranch className="h-4 w-4" />}
        />
        <MetricCard
          title="R-Squared"
          value="0.912"
          change="-0.01"
          changeType="negative"
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <MetricCard
          title="Confidence Interval"
          value="95%"
          change="Stable"
          changeType="neutral"
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      {/* Chart Section */}
      <div className="mb-6 rounded-lg border border-[#E2E8F0] bg-white p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Correlation Distribution over Time
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">
              Visualizing structural breaks and trend stability.
            </p>
          </div>
          <select className="rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs text-slate-600 outline-none focus:border-[#38BDF8]">
            <option>Last 6 Months</option>
            <option>Last Year</option>
            <option>All Time</option>
          </select>
        </div>
        <ChartPlaceholder />
      </div>

      {/* Bottom Row: Key Insights + Variable Matrix */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <KeyInsights />
        <VariableMatrix />
      </div>
    </div>
  );
}
