"use client";

import { LogOut } from "lucide-react";
import { logoutAction } from "@/actions/auth";

export default function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await logoutAction();
        window.location.href = "/login";
      }}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-error-container py-md font-title-sm text-title-sm text-on-error-container transition-colors hover:bg-error hover:text-on-error"
    >
      <LogOut className="h-5 w-5" />
      Logout
    </button>
  );
}
