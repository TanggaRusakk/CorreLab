import { Calendar, ChevronDown, TrendingUp, MoreHorizontal } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-lg">
      {/* Hero */}
      <div className="mb-xl flex items-end justify-between">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-background">
            Good morning, Analyzer
          </h2>
          <p className="mt-xs text-body-md text-on-surface-variant">
            Here is your analytical summary for today.
          </p>
        </div>
        <div className="flex items-center gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest px-md py-sm">
          <Calendar className="h-4 w-4 text-on-surface-variant" />
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Today, Oct 24
          </span>
          <ChevronDown className="h-4 w-4 cursor-pointer text-on-surface-variant" />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="mb-xl grid grid-cols-4 gap-lg">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <p className="mb-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
            Total Records Processed
          </p>
          <p className="font-display-lg text-display-lg text-on-background">
            1.2M
          </p>
          <p className="mt-sm flex items-center gap-xs text-body-sm text-on-tertiary-container">
            <TrendingUp className="h-4 w-4" /> +12% this week
          </p>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <p className="mb-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
            Active Models
          </p>
          <p className="font-display-lg text-display-lg text-on-background">12</p>
          <p className="mt-sm text-body-sm text-on-surface-variant">
            2 pending validation
          </p>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <p className="mb-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
            Avg. Correlation
          </p>
          <p className="font-display-lg text-display-lg text-on-background">0.84</p>
          <p className="mt-sm text-body-sm text-on-surface-variant">
            Across top 5 datasets
          </p>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <p className="mb-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
            Processing Power
          </p>
          <p className="font-display-lg text-display-lg text-on-background">88%</p>
          <div className="mt-sm h-2 w-full overflow-hidden rounded-full bg-surface-variant">
            <div className="h-full w-[88%] rounded-full bg-tertiary-fixed-dim"></div>
          </div>
        </div>
      </div>

      {/* Charts & Anomalies Bento */}
      <div className="grid grid-cols-3 gap-lg">
        {/* Chart Area */}
        <div className="col-span-2 flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <div className="mb-lg flex items-center justify-between">
            <h3 className="font-title-sm text-title-sm text-on-background">
              Analytics Overview
            </h3>
            <button className="rounded p-sm text-on-surface-variant transition-colors hover:bg-surface-container-low">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <div className="relative flex min-h-[300px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-outline-variant/50 bg-surface-container-low">
            {/* Placeholder CSS Chart */}
            <div className="absolute bottom-0 left-0 flex h-[80%] w-full items-end justify-between gap-sm px-lg opacity-50">
              <div className="h-[40%] w-full rounded-t-sm bg-primary-container"></div>
              <div className="h-[60%] w-full rounded-t-sm bg-primary-container"></div>
              <div className="h-[30%] w-full rounded-t-sm bg-tertiary-fixed"></div>
              <div className="h-[80%] w-full rounded-t-sm bg-primary-container"></div>
              <div className="h-[50%] w-full rounded-t-sm bg-primary-container"></div>
              <div className="h-[90%] w-full rounded-t-sm bg-tertiary-fixed"></div>
              <div className="h-[70%] w-full rounded-t-sm bg-primary-container"></div>
            </div>
            <span className="relative z-10 rounded bg-surface/80 px-md py-sm font-body-sm text-on-surface-variant">
              Visualization Canvas
            </span>
          </div>
        </div>

        {/* Recent Anomalies */}
        <div className="col-span-1 rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <div className="mb-lg flex items-center justify-between">
            <h3 className="font-title-sm text-title-sm text-on-background">
              Recent Anomalies
            </h3>
            <span className="rounded-full bg-error-container px-sm py-[2px] font-label-uppercase text-[10px] text-on-error-container">
              3 New
            </span>
          </div>
          <ul className="space-y-md">
            <li className="flex items-start gap-md border-b border-outline-variant/30 pb-md">
              <div className="mt-2 h-2 w-2 rounded-full bg-error"></div>
              <div>
                <p className="font-body-sm text-body-sm font-semibold text-on-background">
                  Q3 Revenue Spike
                </p>
                <p className="mt-xs font-body-sm text-body-sm text-on-surface-variant">
                  Deviation &gt; 3σ detected in EMEA region.
                </p>
                <p className="mt-sm font-code-mono text-code-mono text-outline">
                  2 hrs ago
                </p>
              </div>
            </li>
            <li className="flex items-start gap-md border-b border-outline-variant/30 pb-md">
              <div className="mt-2 h-2 w-2 rounded-full bg-tertiary-fixed-dim"></div>
              <div>
                <p className="font-body-sm text-body-sm font-semibold text-on-background">
                  Data Nulls Found
                </p>
                <p className="mt-xs font-body-sm text-body-sm text-on-surface-variant">
                  Missing values in &apos;Customer_Age&apos; column.
                </p>
                <p className="mt-sm font-code-mono text-code-mono text-outline">
                  5 hrs ago
                </p>
              </div>
            </li>
            <li className="flex items-start gap-md">
              <div className="mt-2 h-2 w-2 rounded-full bg-tertiary-fixed-dim"></div>
              <div>
                <p className="font-body-sm text-body-sm font-semibold text-on-background">
                  Model Drift
                </p>
                <p className="mt-xs font-body-sm text-body-sm text-on-surface-variant">
                  Accuracy dropped by 2.4% in RF_Main.
                </p>
                <p className="mt-sm font-code-mono text-code-mono text-outline">
                  1 day ago
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
