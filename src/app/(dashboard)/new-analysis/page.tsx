import FileUploadZone from "@/components/FileUploadZone";
import ModelConfigPanel from "@/components/ModelConfigPanel";

export default function Page() {
  return (
    <div className="space-y-lg">
      <div className="mb-lg">
        <h2 className="font-headline-md text-headline-md text-on-background">
          Configure New Analysis
        </h2>
        <p className="mt-xs text-body-md text-on-surface-variant">
          Upload datasets and define model parameters.
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-xl">
        {/* Data Input Area */}
        <div className="col-span-2 space-y-lg">
          <FileUploadZone />
        </div>
        
        {/* Configuration Panel */}
        <div className="col-span-1">
          <ModelConfigPanel />
        </div>
      </div>
    </div>
  );
}
