"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthInput from "@/components/ui/AuthInput";
import AuthButton from "@/components/ui/AuthButton";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Replace with real registration logic (e.g., NextAuth, Supabase Auth)
    router.push("/new-analysis");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Create your account
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Get started with CorreLab — free for 14 days.
        </p>
      </div>

      {/* Register Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <AuthInput
          id="register-name"
          label="Full Name"
          type="text"
          placeholder="Dr. E. Anderson"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          autoComplete="name"
        />
        <AuthInput
          id="register-email"
          label="Email Address"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <AuthInput
          id="register-password"
          label="Password"
          type="password"
          placeholder="Min. 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        {/* Terms */}
        <p className="text-xs leading-relaxed text-slate-400">
          By creating an account, you agree to our{" "}
          <button type="button" className="text-[#38BDF8] hover:underline">
            Terms of Service
          </button>{" "}
          and{" "}
          <button type="button" className="text-[#38BDF8] hover:underline">
            Privacy Policy
          </button>
          .
        </p>

        <AuthButton isLoading={isLoading} loadingText="Creating account...">
          Create Account
        </AuthButton>
      </form>

      {/* Login Link */}
      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-[#38BDF8] hover:underline"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
