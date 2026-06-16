import { Globe } from "lucide-react";

interface SocialButtonProps {
  onClick?: () => void;
}

export default function SocialButton({ onClick }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
    >
      <Globe className="h-4 w-4" />
      Continue with Google
    </button>
  );
}
