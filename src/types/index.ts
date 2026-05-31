// CorreLab — Global TypeScript Interfaces

export interface DatasetEntry {
  id: string;
  fileName: string;
  dateProcessed: string;
  fileSize: string;
  primaryMethod: AnalysisMethod;
}

export type AnalysisMethod =
  | "Time-Series"
  | "Survival Analysis"
  | "ANOVA"
  | "Clustering"
  | "Regression"
  | "Correlation"
  | "Predictive Modeling";

export interface AnalysisMetric {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

export interface VariableInfo {
  name: string;
  type: string;
  mean: string;
  stdDev: string;
  missing: string;
}

export interface InsightItem {
  text: string;
  color?: string;
}
