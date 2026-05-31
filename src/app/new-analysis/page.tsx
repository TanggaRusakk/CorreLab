import FileUploadZone from "@/components/FileUploadZone";
import ObjectiveSelector from "@/components/ObjectiveSelector";

export default function NewAnalysisPage() {
  return (
    <div className="mx-auto max-w-3xl">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Start New Analysis
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Upload your dataset to begin processing and modeling.
        </p>
      </div>

      {/* File Upload Zone */}
      <div className="mb-8">
        <FileUploadZone />
      </div>

      {/* Guided Auto-Detection */}
      <ObjectiveSelector />
    </div>
  );
}
