"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ModelConfigPanel() {
  const [confidence, setConfidence] = useState(95);
  const [crossValidation, setCrossValidation] = useState(true);

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
            <select className="w-full appearance-none rounded-lg border border-outline-variant bg-surface px-md py-sm text-body-md text-on-background outline-none transition-all focus:border-tertiary-fixed focus:ring-2 focus:ring-tertiary-fixed">
              <option>Linear Regression</option>
              <option>Random Forest</option>
              <option>XGBoost</option>
              <option>K-Means Clustering</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-md top-1/2 h-5 w-5 -translate-y-1/2 text-on-surface-variant" />
          </div>
        </div>
        {/* Slider */}
        <div className="space-y-sm">
          <div className="flex items-center justify-between">
            <label className="font-label-uppercase text-label-uppercase text-on-surface-variant">
              Confidence Interval
            </label>
            <span className="rounded bg-surface-variant px-sm py-[2px] font-code-mono text-code-mono text-on-background">
              {confidence}%
            </span>
          </div>
          <input
            type="range"
            min="80"
            max="99"
            value={confidence}
            onChange={(e) => setConfidence(Number(e.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-surface-variant accent-tertiary-container"
          />
          <div className="flex justify-between text-[11px] text-body-sm text-outline">
            <span>80%</span>
            <span>99%</span>
          </div>
        </div>
        {/* Toggle */}
        <div className="space-y-sm border-t border-outline-variant/50 pt-md">
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-body-sm text-body-sm font-semibold text-on-background">
                Cross-Validation
              </label>
              <p className="mt-xs text-[12px] text-on-surface-variant">
                Use K-Fold validation to prevent overfitting.
              </p>
            </div>
            <button
              onClick={() => setCrossValidation(!crossValidation)}
              className={`relative h-6 w-10 rounded-full border transition-colors ${
                crossValidation
                  ? "border-tertiary-fixed-dim bg-tertiary-fixed"
                  : "border-outline-variant bg-surface-variant"
              }`}
            >
              <div
                className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full shadow-sm transition-all ${
                  crossValidation
                    ? "right-1 bg-on-tertiary-fixed"
                    : "left-1 bg-on-surface-variant"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-b-xl border-t border-outline-variant bg-surface-container-low p-lg">
        <button className="w-full rounded-lg bg-primary-container py-md font-title-sm text-title-sm font-medium text-on-primary shadow-sm transition-colors hover:bg-on-primary-fixed-variant">
          Run Analysis
        </button>
      </div>
    </div>
  );
}
