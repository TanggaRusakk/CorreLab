"use client";

import { useCallback, useRef, useState } from "react";
import { CloudUpload } from "lucide-react";

export default function FileUploadZone() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedFile(e.target.files[0]);
      }
    },
    []
  );

  const handleBrowseClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-16 transition-colors ${
        dragActive
          ? "border-[#38BDF8] bg-[#38BDF8]/5"
          : "border-[#E2E8F0] bg-white"
      }`}
    >
      <CloudUpload
        className={`mb-4 h-10 w-10 ${
          dragActive ? "text-[#38BDF8]" : "text-slate-400"
        }`}
      />

      {selectedFile ? (
        <div className="text-center">
          <p className="text-sm font-medium text-slate-900">
            {selectedFile.name}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
          </p>
          <button
            type="button"
            onClick={() => setSelectedFile(null)}
            className="mt-3 text-xs font-medium text-[#38BDF8] hover:underline"
          >
            Remove & re-upload
          </button>
        </div>
      ) : (
        <>
          <p className="text-sm font-medium text-slate-900">
            Drag &amp; drop dataset here
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Supported formats: CSV, TSV, JSON, XLSX (Max size: 5GB)
          </p>
          <button
            type="button"
            onClick={handleBrowseClick}
            className="mt-4 rounded-md border border-[#E2E8F0] bg-white px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            Browse Files
          </button>
        </>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".csv,.tsv,.json,.xlsx,.xls"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}
