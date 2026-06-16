import { Hash, GitBranch, BarChart3, TrendingUp, Cpu, Activity, MinusSquare } from "lucide-react";
import MetricCard from "@/components/ui/MetricCard";
import DynamicChart from "@/components/DynamicChart";
import FeatureImportanceChart from "@/components/FeatureImportanceChart";
import ConfusionMatrix from "@/components/ConfusionMatrix";
import TimeSeriesChart from "@/components/TimeSeriesChart";
import KeyInsights from "@/components/KeyInsights";
import VariableMatrix from "@/components/VariableMatrix";
import prisma from "@/lib/prisma";
import { verifySession } from "@/lib/session";
import { redirect } from "next/navigation";

interface ResultsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  const { id } = await params;
  
  const session = await verifySession();
  if (!session) redirect("/login");

  const analysis = await prisma.analysisHistory.findUnique({
    where: { id }
  });

  if (!analysis) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-outline-variant bg-surface-container-lowest">
        <p className="text-body-lg text-on-surface-variant">Analysis result not found.</p>
      </div>
    );
  }

  // Ensure user owns this analysis
  if (analysis.userId !== session.userId) {
    redirect("/dashboard");
  }

  // Parse results
  let rSquared = "N/A";
  let slope = "N/A";
  let intercept = "N/A";
  let accuracy = "N/A";
  let variablesInfo: any[] = [];
  let chartData: any[] = [];
  let xKey = "X";
  let yKey = "Y";
  let numericSlope = 0;
  let numericIntercept = 0;
  let confusionMatrix: number[][] = [];
  let featureImportance: {feature: string, importance: number}[] = [];
  let classes: any[] = [];
  let historicalData: any[] = [];
  let forecastData: any[] = [];
  let trendDirection = "N/A";

  try {
    const results = JSON.parse(analysis.resultsJson);
    if (results.r_squared !== undefined) rSquared = results.r_squared.toString();
    if (results.slope !== undefined) {
      slope = results.slope.toFixed(4);
      numericSlope = results.slope;
    }
    if (results.intercept !== undefined) {
      intercept = results.intercept.toFixed(4);
      numericIntercept = results.intercept;
    }
    if (results.variables_info) variablesInfo = results.variables_info;
    if (results.chart_data) chartData = results.chart_data;
    if (results.feature_used) xKey = results.feature_used;
    if (results.target_used) yKey = results.target_used;
    
    if (results.accuracy !== undefined) accuracy = results.accuracy.toString();
    if (results.confusion_matrix) confusionMatrix = results.confusion_matrix;
    if (results.feature_importance) featureImportance = results.feature_importance;
    if (results.classes) classes = results.classes;
    if (results.historical_data) historicalData = results.historical_data;
    if (results.forecast_data) forecastData = results.forecast_data;
    if (results.trend_direction) trendDirection = results.trend_direction;
  } catch (e) {
    // Parsing error
  }

  const isClassification = analysis.analysisMethod === "Classification";
  const isTimeSeries = analysis.analysisMethod === "Time Series";
  const isPredictive = analysis.analysisMethod === "Predictive";

  return (
    <div className="mx-auto max-w-5xl">
      {/* Page Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Analysis Results
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Dataset: {analysis.datasetName}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Processed on {new Date(analysis.createdAt).toLocaleString()} using {analysis.analysisMethod}
          </p>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {isClassification ? (
          <MetricCard title="Accuracy" value={accuracy} change="" changeType="neutral" icon={<BarChart3 className="h-4 w-4" />} />
        ) : isTimeSeries ? (
          <MetricCard title="Historical Data" value={`${historicalData.length} steps`} change="" changeType="neutral" icon={<BarChart3 className="h-4 w-4" />} />
        ) : (
          <MetricCard title="R-Squared (R²)" value={rSquared} change="" changeType="neutral" icon={<BarChart3 className="h-4 w-4" />} />
        )}

        {isPredictive && (
          <>
            <MetricCard title="Slope (Coefficient)" value={slope} change="" changeType="neutral" icon={<TrendingUp className="h-4 w-4" />} />
            <MetricCard title="Intercept" value={intercept} change="" changeType="neutral" icon={<MinusSquare className="h-4 w-4" />} />
          </>
        )}

        {isClassification && (
          <>
            <MetricCard title="Features Analysed" value={featureImportance.length.toString()} change="" changeType="neutral" icon={<Hash className="h-4 w-4" />} />
            <MetricCard title="Target Classes" value={classes.length.toString()} change="" changeType="neutral" icon={<GitBranch className="h-4 w-4" />} />
          </>
        )}

        {isTimeSeries && (
          <>
            <MetricCard title="Forecast Horizon" value={`${forecastData.length} steps`} change="" changeType="neutral" icon={<TrendingUp className="h-4 w-4" />} />
            <MetricCard title="Overall Trend" value={trendDirection} change="" changeType={trendDirection === "Up" ? "positive" : "negative"} icon={<Activity className="h-4 w-4" />} />
          </>
        )}

        <MetricCard
          title="Algorithm Used"
          value={isPredictive ? "Linear Regression" : isTimeSeries ? "Exponential Smoothing" : analysis.analysisMethod}
          change="Completed"
          changeType="positive"
          icon={<Cpu className="h-4 w-4" />}
        />
      </div>

      {/* Chart Section */}
      {isClassification ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-900 mb-0.5">Feature Importance</h2>
            <p className="text-xs text-slate-500 mb-4">Which variables contributed most to the model's decisions.</p>
            <FeatureImportanceChart data={featureImportance} />
          </div>
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-900 mb-0.5">Confusion Matrix</h2>
            <p className="text-xs text-slate-500 mb-4">Actual vs Predicted values (Heatmap).</p>
            <ConfusionMatrix matrix={confusionMatrix} classes={classes} />
          </div>
        </div>
      ) : isTimeSeries ? (
        <div className="mb-6 rounded-lg border border-[#E2E8F0] bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Time Series Forecast
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                Historical data points alongside a 10-step forward prediction using Holt's Linear Trend.
              </p>
            </div>
          </div>
          <TimeSeriesChart historicalData={historicalData} forecastData={forecastData} />
        </div>
      ) : (
        <div className="mb-6 rounded-lg border border-[#E2E8F0] bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Regression Line Visualization
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                Visualizing the relationship between your target and feature variables.
              </p>
            </div>
            <select className="rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs text-slate-600 outline-none focus:border-[#38BDF8]">
              <option>Standard View</option>
            </select>
          </div>
          <DynamicChart 
            data={chartData}
            xKey={xKey}
            yKey={yKey}
            slope={numericSlope}
            intercept={numericIntercept}
          />
        </div>
      )}

      {/* Bottom Row: Key Insights + Variable Matrix */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <div className="mb-md flex items-center gap-sm">
            <Activity className="h-5 w-5 text-primary" />
            <h3 className="font-title-md text-title-md text-on-background">Automated Insights</h3>
          </div>
          <ul className="space-y-sm">
            {isClassification ? (
              <>
                <li className="flex items-start gap-sm">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="text-body-sm text-on-surface-variant">
                    The Random Forest Classification model achieved an overall accuracy of <strong>{(parseFloat(accuracy) * 100).toFixed(1)}%</strong>.
                  </p>
                </li>
                {featureImportance.length > 0 && (
                  <li className="flex items-start gap-sm">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <p className="text-body-sm text-on-surface-variant">
                      The most important feature in predicting the class was <strong>{[...featureImportance].sort((a,b)=>b.importance - a.importance)[0]?.feature}</strong>.
                    </p>
                  </li>
                )}
              </>
            ) : isTimeSeries ? (
              <>
                <li className="flex items-start gap-sm">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="text-body-sm text-on-surface-variant">
                    Based on {historicalData.length} historical records, the model forecasts a <strong>{trendDirection}ward</strong> trajectory.
                  </p>
                </li>
                <li className="flex items-start gap-sm">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="text-body-sm text-on-surface-variant">
                    Using Holt's Exponential Smoothing, we projected {forecastData.length} future time steps.
                  </p>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-start gap-sm">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="text-body-sm text-on-surface-variant">
                    The Linear Regression model yielded an R-Squared of <strong>{rSquared}</strong>.
                  </p>
                </li>
                <li className="flex items-start gap-sm">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="text-body-sm text-on-surface-variant">
                    For every 1 unit increase in the feature variable, the target variable changes by exactly <strong>{slope}</strong> units.
                  </p>
                </li>
                <li className="flex items-start gap-sm">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="text-body-sm text-on-surface-variant">
                    The baseline (intercept) when the feature is 0 is <strong>{intercept}</strong>.
                  </p>
                </li>
              </>
            )}
          </ul>
        </div>
        <VariableMatrix variables={variablesInfo} />
      </div>
    </div>
  );
}
