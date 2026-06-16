"use client";

import { useCallback, useState } from "react";
import { Upload, Table } from "lucide-react";

export default function FileUploadZone() {
  const [isDragging, setIsDragging] = useState(false);

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
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      console.log("Dropped files:", e.dataTransfer.files);
      // Trigger file processing...
    }
  }, []);

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
      <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-surface-variant transition-colors group-hover:bg-tertiary-fixed/20">
        <Upload className="h-8 w-8 text-secondary" />
      </div>
      
      <p className="mb-xs font-title-sm text-title-sm text-on-background">
        Drop CSV or Excel files here
      </p>
      <p className="mb-lg text-body-sm text-on-surface-variant">
        or click to browse from your computer
      </p>
      
      <div className="flex gap-md">
        <button className="flex items-center gap-sm rounded-lg bg-primary-container px-lg py-md font-body-sm text-body-sm text-on-primary shadow-sm transition-colors hover:bg-primary-container/90">
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
