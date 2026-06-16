import { Calendar, ChevronDown, TrendingUp, MoreHorizontal, FileText } from "lucide-react";
import { verifySession } from "@/lib/session";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { AnalysisHistory } from "@prisma/client";

export default async function Page() {
  const session = await verifySession();
  if (!session) redirect("/login");

  const userHistory = await prisma.analysisHistory.findMany({
    where: { userId: session.userId },
    orderBy: { createdAt: "desc" }
  });

  // Calculate Metrics
  const totalAnalyses = userHistory.length;
  
  // Active Models (unique models used)
  const uniqueModels = new Set(userHistory.map((h: AnalysisHistory) => h.analysisMethod)).size;

  // Avg R-Squared
  let totalRSquared = 0;
  let predictiveCount = 0;
  
  userHistory.forEach((h: AnalysisHistory) => {
    try {
      const results = JSON.parse(h.resultsJson);
      if (results.r_squared !== undefined) {
        totalRSquared += results.r_squared;
        predictiveCount++;
      }
    } catch (e) {
      // Ignore parse errors
    }
  });
  
  const avgRSquared = predictiveCount > 0 ? (totalRSquared / predictiveCount).toFixed(2) : "0.00";

  // Recent activity
  const recentActivity = userHistory.slice(0, 3);

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
      </div>

      {/* Metrics Grid */}
      <div className="mb-xl grid grid-cols-4 gap-lg">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <p className="mb-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
            Total Analyses Run
          </p>
          <p className="font-display-lg text-display-lg text-on-background">
            {totalAnalyses}
          </p>
          <p className="mt-sm flex items-center gap-xs text-body-sm text-on-tertiary-container">
            All time
          </p>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <p className="mb-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
            Active Models
          </p>
          <p className="font-display-lg text-display-lg text-on-background">{uniqueModels}</p>
          <p className="mt-sm text-body-sm text-on-surface-variant">
            Unique methods used
          </p>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <p className="mb-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
            Avg. R-Squared (R²)
          </p>
          <p className="font-display-lg text-display-lg text-on-background">{avgRSquared}</p>
          <p className="mt-sm text-body-sm text-on-surface-variant">
            Across {predictiveCount} predictive models
          </p>
        </div>
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <p className="mb-sm font-label-uppercase text-label-uppercase text-on-surface-variant">
            Processing Power
          </p>
          <p className="font-display-lg text-display-lg text-on-background">100%</p>
          <div className="mt-sm h-2 w-full overflow-hidden rounded-full bg-surface-variant">
            <div className="h-full w-full rounded-full bg-tertiary-fixed-dim"></div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="w-full">
        <div className="col-span-1 rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <div className="mb-lg flex items-center justify-between">
            <h3 className="font-title-sm text-title-sm text-on-background">
              Recent Activity
            </h3>
            <span className="rounded-full bg-primary-container px-sm py-[2px] font-label-uppercase text-[10px] text-on-primary-container">
              {recentActivity.length} New
            </span>
          </div>
          {recentActivity.length > 0 ? (
            <ul className="space-y-md">
              {recentActivity.map((activity: AnalysisHistory, idx: number) => (
                <li key={activity.id} className={`flex items-start gap-md ${idx !== recentActivity.length - 1 ? 'border-b border-outline-variant/30 pb-md' : ''}`}>
                  <div className="mt-1 h-8 w-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-body-sm text-body-sm font-semibold text-on-background truncate max-w-[200px]" title={activity.datasetName}>
                      {activity.datasetName}
                    </p>
                    <p className="mt-xs font-body-sm text-[12px] text-on-surface-variant">
                      {activity.analysisMethod}
                    </p>
                    <p className="mt-sm font-code-mono text-[10px] text-outline">
                      {new Date(activity.createdAt).toLocaleDateString()} {new Date(activity.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex h-32 items-center justify-center text-body-sm text-on-surface-variant">
              No recent activity found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
