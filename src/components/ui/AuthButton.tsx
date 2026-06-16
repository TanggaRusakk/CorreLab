import { Loader2 } from "lucide-react";

interface AuthButtonProps {
  type?: "submit" | "button";
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function AuthButton({
  type = "submit",
  isLoading = false,
  loadingText = "Please wait...",
  children,
  onClick,
}: AuthButtonProps) {
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E293B] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
}
