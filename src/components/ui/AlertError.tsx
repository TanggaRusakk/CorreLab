import { AlertCircle } from "lucide-react";

interface AlertErrorProps {
  message: string;
}

export default function AlertError({ message }: AlertErrorProps) {
  if (!message) return null;

  return (
    <div className="mb-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 shadow-sm">
      <AlertCircle className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
      <div className="leading-relaxed">
        <p className="font-semibold mb-0.5 text-red-900">Analysis Error</p>
        <p>{message}</p>
      </div>
    </div>
  );
}
