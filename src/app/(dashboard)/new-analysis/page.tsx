"use client";

import { useState } from "react";
import FileUploadZone from "@/components/FileUploadZone";
import ModelConfigPanel from "@/components/ModelConfigPanel";
import { executeAndSaveAnalysis } from "@/actions/analysis";
import AlertError from "@/components/ui/AlertError";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [dataset, setDataset] = useState<any[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [method, setMethod] = useState("Linear Regression");
  const [targetColumn, setTargetColumn] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRunAnalysis = async () => {
    setErrorMsg("");
    if (dataset.length === 0) {
      setErrorMsg("Please upload a dataset first.");
      return;
    }
    if (!targetColumn) {
      setErrorMsg("Please specify the Target (Y) column.");
      return;
    }

    setIsAnalyzing(true);

    try {
      const res = await executeAndSaveAnalysis(fileName, method, dataset, targetColumn);
      if (res.success && res.analysisId) {
        // Pindah ke halaman hasil yang lebih lengkap!
        router.push(`/results/${res.analysisId}`);
      } else {
        if (res.error === "Sesi telah habis. Silakan login kembali." || res.error?.includes("Unauthorized")) {
          setErrorMsg("Silakan login terlebih dahulu untuk menjalankan analisis.");
          setTimeout(() => router.push("/login"), 2000);
        } else {
          setErrorMsg(res.detail || res.error || res.message || "An error occurred");
          setIsAnalyzing(false); // Reset if error
        }
      }
    } catch (error: any) {
      setErrorMsg(error.message);
      setIsAnalyzing(false);
    }
  };

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
      
      <AlertError message={errorMsg} />

      <div className="grid grid-cols-3 gap-xl">
        {/* Data Input Area */}
        <div className="col-span-2 space-y-lg">
          <FileUploadZone 
            onDataParsed={(data, name) => {
              setDataset(data);
              setFileName(name);
            }} 
            fileName={fileName}
          />
        </div>
        
        {/* Configuration Panel */}
        <div className="col-span-1">
          <ModelConfigPanel 
            method={method}
            setMethod={setMethod}
            targetColumn={targetColumn}
            setTargetColumn={setTargetColumn}
            onRunAnalysis={handleRunAnalysis}
            isAnalyzing={isAnalyzing}
          />
        </div>
      </div>
    </div>
  );
}
