"use client";

import { ChevronDown, Loader2 } from "lucide-react";

interface Props {
  method: string;
  setMethod: (val: string) => void;
  targetColumn: string;
  setTargetColumn: (val: string) => void;
  onRunAnalysis: () => void;
  isAnalyzing: boolean;
}

export default function ModelConfigPanel({
  method,
  setMethod,
  targetColumn,
  setTargetColumn,
  onRunAnalysis,
  isAnalyzing
}: Props) {

  return (
    <div className="flex h-full flex-col rounded-xl border border-outline-variant bg-surface-container-lowest shadow-[0px_4px_20px_rgba(15,23,42,0.08)]">
      <div className="border-b border-outline-variant p-lg">
        <h3 className="font-title-sm text-title-sm text-on-background">
          Model Configuration
        </h3>
      </div>
      <div className="flex-1 space-y-lg p-lg">
        {/* Dropdown */}
        <div className="space-y-sm">
          <label className="block font-label-uppercase text-label-uppercase text-on-surface-variant">
            Statistical Model
          </label>
          <div className="relative">
            <select 
              value={method} 
              onChange={(e) => setMethod(e.target.value)}
              className="w-full appearance-none rounded-lg border border-outline-variant bg-surface px-md py-sm text-body-md text-on-background outline-none transition-all focus:border-tertiary-fixed focus:ring-2 focus:ring-tertiary-fixed"
            >
              <option value="Linear Regression">Linear Regression</option>
              <option value="Multiple Linear Regression">Multiple Linear Regression</option>
              <option value="Classification">Classification</option>
              <option value="Time Series">Time Series</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-md top-1/2 h-5 w-5 -translate-y-1/2 text-on-surface-variant" />
          </div>
        </div>

        {/* Target Column */}
        <div className="space-y-sm pt-2">
          <label className="block font-label-uppercase text-[10px] uppercase tracking-wider text-on-surface-variant">
            Target Variable (Y)
          </label>
          <input 
            type="text" 
            placeholder="e.g. salary (The rest of the columns will be used as X)" 
            value={targetColumn}
            onChange={(e) => setTargetColumn(e.target.value)}
            className="w-full appearance-none rounded-lg border border-outline-variant bg-surface px-md py-sm text-body-sm text-on-background outline-none transition-all focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed" 
          />
        </div>
      </div>
      <div className="rounded-b-xl border-t border-outline-variant bg-surface-container-low p-lg">
        <button 
          onClick={onRunAnalysis}
          disabled={isAnalyzing}
          className="w-full flex justify-center items-center gap-2 rounded-lg bg-primary-container py-md font-title-sm text-title-sm font-medium text-on-primary shadow-sm transition-colors hover:bg-on-primary-fixed-variant disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
          ) : (
            "Run Analysis"
          )}
        </button>
      </div>
    </div>
  );
}
