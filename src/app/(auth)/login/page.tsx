"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Loader2, User } from "lucide-react";
import { loginAction, registerAction } from "@/actions/auth";

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

      {errorMsg && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200">
          {errorMsg}
        </div>
      )}

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

      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-px bg-slate-200 flex-1"></div>
        <span className="text-sm text-slate-500 font-medium">or</span>
        <div className="h-px bg-slate-200 flex-1"></div>
      </div>

      <button className="w-full mt-6 bg-white border border-slate-300 text-slate-700 font-semibold py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
        </svg>
        Continue with Google
      </button>
    </>
  );
}
