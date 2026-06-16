"use client";

import { useCallback, useState, useRef } from "react";
import { Upload, Table, CheckCircle2 } from "lucide-react";
import Papa from "papaparse";
import AlertError from "@/components/ui/AlertError";

interface Props {
  onDataParsed: (data: any[], fileName: string) => void;
  fileName: string;
}

export default function FileUploadZone({ onDataParsed, fileName }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setErrorMsg("");
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.csv')) {
        Papa.parse(file, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: function(results) {
            console.log("Parsed CSV:", results.data);
            onDataParsed(results.data, file.name);
          }
        });
      } else {
        setErrorMsg("Format file tidak didukung. Harap unggah file .csv");
      }
    }
  }, [onDataParsed]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.name.endsWith('.csv')) {
        Papa.parse(file, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: function(results) {
            console.log("Parsed CSV:", results.data);
            onDataParsed(results.data, file.name);
          }
        });
      } else {
        setErrorMsg("Format file tidak didukung. Harap unggah file .csv");
      }
    }
  }, [onDataParsed]);

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`group flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-xl transition-colors ${
        isDragging
          ? "border-tertiary-fixed bg-surface-container-low"
          : "border-outline-variant bg-surface-container-lowest hover:border-tertiary-fixed hover:bg-surface-container-low"
      }`}
    >
      {fileName ? (
        <>
          <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-tertiary-fixed-dim/20 transition-colors">
            <CheckCircle2 className="h-8 w-8 text-tertiary-fixed" />
          </div>
          <p className="mb-xs font-title-sm text-title-sm text-on-background">
            File Loaded: {fileName}
          </p>
          <p className="mb-lg text-body-sm text-on-surface-variant">
            Ready for analysis
          </p>
        </>
      ) : (
        <>
          <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-surface-variant transition-colors group-hover:bg-tertiary-fixed/20">
            <Upload className="h-8 w-8 text-secondary" />
          </div>
          
          <p className="mb-xs font-title-sm text-title-sm text-on-background">
            Drop CSV files here
          </p>
          <p className="mb-lg text-body-sm text-on-surface-variant">
            or click to browse from your computer
          </p>
        </>
      )}
      
      <div className="mb-4">
        <AlertError message={errorMsg} />
      </div>

      <div className="flex gap-md">
        <input 
          type="file" 
          accept=".csv" 
          ref={fileInputRef} 
          className="hidden" 
          onChange={handleFileChange} 
        />
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-sm rounded-lg bg-primary-container px-lg py-md font-body-sm text-body-sm text-on-primary shadow-sm transition-colors hover:bg-primary-container/90"
        >
          Browse Files
        </button>
        <button className="flex items-center gap-sm rounded-lg border border-outline-variant bg-surface px-lg py-md font-body-sm text-body-sm text-on-surface transition-colors hover:bg-surface-container-low">
          <Table className="h-4 w-4" />
          Import from Google Sheets
        </button>
      </div>
    </div>
  );
}
