"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Loader2, User } from "lucide-react";
import { loginAction, registerAction } from "@/actions/auth";
import AlertError from "@/components/ui/AlertError";

export default function Page() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleAuthSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    let res;

    if (mode === "signin") {
      res = await loginAction(formData);
    } else {
      res = await registerAction(formData);
    }

    setIsLoading(false);

    if (res.success) {
      router.push("/");
    } else {
      setErrorMsg(res.error || "An error occurred");
    }
  };

  return (
    <>
      {/* Auth Toggle */}
      <div className="flex p-1 bg-slate-100 rounded-lg mb-8">
        <button
          type="button"
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${mode === "signin" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
          onClick={() => { setMode("signin"); setErrorMsg(""); }}
        >
          Sign In
        </button>
        <button
          type="button"
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${mode === "signup" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
          onClick={() => { setMode("signup"); setErrorMsg(""); }}
        >
          Create Account
        </button>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-6">
        {mode === "signin" ? "Welcome back" : "Create an account"}
      </h3>

      <AlertError message={errorMsg} />

      <form className="space-y-4" onSubmit={handleAuthSubmit}>
        {mode === "signup" && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="name"
                required={mode === "signup"}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="name@company.com"
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#0F172A] text-white font-semibold py-2.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 mt-6 disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {!isLoading ? (
            <span>{mode === "signin" ? "Sign In" : "Create Account"}</span>
          ) : (
            <Loader2 className="w-5 h-5 animate-spin" />
          )}
        </button>
      </form>

    </>
  );
}
