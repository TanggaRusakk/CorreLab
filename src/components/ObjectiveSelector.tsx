"use client";

import { useState } from "react";

const objectives = [
  "Identify Correlations",
  "Predictive Modeling",
  "Time-Series Analysis",
  "Clustering",
  "Regression",
  "ANOVA",
  "Survival Analysis",
];

export default function ObjectiveSelector() {
  const [selectedObjective, setSelectedObjective] = useState(objectives[0]);

  const handleAnalyze = () => {
    // TODO: Trigger analysis pipeline via Server Action
    console.log("Analyzing with objective:", selectedObjective);
  };

  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">
        Guided Auto-Detection
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        CorreLab will automatically detect data types, handle missing values, and
        suggest appropriate statistical models.
      </p>

      <div className="mt-6 flex items-end gap-4">
        <div className="flex-1">
          <label
            htmlFor="objective-select"
            className="mb-1.5 block text-sm font-medium text-slate-900"
          >
            Primary Objective
          </label>
          <select
            id="objective-select"
            value={selectedObjective}
            onChange={(e) => setSelectedObjective(e.target.value)}
            className="w-full rounded-md border border-[#E2E8F0] bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition-colors focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]"
          >
            {objectives.map((obj) => (
              <option key={obj} value={obj}>
                {obj}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={handleAnalyze}
          className="rounded-lg bg-slate-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          Analyze Data
        </button>
      </div>
    </div>
  );
}
