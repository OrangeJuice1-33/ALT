// src/app/auth/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function AuthPage() {
  const [tab, setTab] = useState<"signin" | "signup-email" | "signup-phone">("signin");
  const [identifier, setIdentifier] = useState(""); // email or username for signin
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function lookupEmailFromUsername(input: string) {
    if (!input) return null;
    if (input.includes("@")) return input;
    const { data: prof } = await supabaseBrowser
      .from("profiles")
      .select("email")
      .eq("username", input)
      .maybeSingle();
    return prof?.email ?? null;
  }

  // SIGN IN (email or username + password)
  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const email = (await lookupEmailFromUsername(identifier)) ?? identifier;
      if (!email || !password) {
        alert("Please provide email/username and password.");
        return;
      }

      const { error } = await supabaseBrowser.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      // successful sign in — AuthListener will redirect to dashboard
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  // SIGN UP via EMAIL (verification required)
  async function handleSignupEmail(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (!signupEmail || !signupPassword) {
        alert("Provide email and password to sign up.");
        return;
      }

      const { error } = await supabaseBrowser.auth.signUp({
        email: signupEmail,
        password: signupPassword,
        options: {
          // IMPORTANT: redirect after verification to local complete-profile page
          // make sure this exact URL is configured in Supabase Redirect URLs
          emailRedirectTo: "http://localhost:3000/auth/complete-profile",
        },
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Verification email sent. Check your inbox (or Supabase Test Emails). After verifying, open the link to continue.");
      // keep user on auth page — after verifying email, the verification link will open /auth/complete-profile
    } finally {
      setLoading(false);
    }
  }

  // SIGN UP via PHONE (OTP) — phone signs in immediately after verification
  async function handleSignupPhone(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (!phone) {
        alert("Enter phone with country code, e.g. +919876543210");
        return;
      }

      const { error } = await supabaseBrowser.auth.signInWithOtp({
        phone,
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("OTP sent to phone. After verification on device you will be signed in and should complete your profile.");
      router.push("/auth/complete-profile");
    } finally {
      setLoading(false);
    }
  }

  // Forgot password (email)
  async function handleForgotPassword() {
    if (!identifier) {
      alert("Enter your email or username to reset password.");
      return;
    }
    const email = identifier.includes("@") ? identifier : await lookupEmailFromUsername(identifier);
    if (!email) {
      alert("No email found for that username.");
      return;
    }

    const { error } = await supabaseBrowser.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/auth",
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Password reset email sent. Check Supabase test emails if SMTP not configured.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
      <div className="w-full max-w-lg bg-[#07102a]/80 border border-zinc-800 rounded-xl p-6 shadow-lg">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("signin")}
            className={`flex-1 py-2 rounded-md ${tab === "signin" ? "bg-blue-600" : "bg-zinc-800"}`}
          >
            Sign in
          </button>
          <button
            onClick={() => setTab("signup-email")}
            className={`flex-1 py-2 rounded-md ${tab === "signup-email" ? "bg-emerald-600" : "bg-zinc-800"}`}
          >
            Sign up (Email)
          </button>
          <button
            onClick={() => setTab("signup-phone")}
            className={`flex-1 py-2 rounded-md ${tab === "signup-phone" ? "bg-amber-600" : "bg-zinc-800"}`}
          >
            Sign up (Phone)
          </button>
        </div>

        {tab === "signin" && (
          <form onSubmit={handleSignIn} className="space-y-4">
            <label className="block text-sm text-zinc-300">
              Email or Username
              <input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="mt-2 w-full rounded-md bg-zinc-900 border border-zinc-700 p-2"
                placeholder="you@example.com or username"
                autoComplete="username"
              />
            </label>

            <label className="block text-sm text-zinc-300 relative">
              Password
              <div className="mt-2 relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-md bg-zinc-900 border border-zinc-700 p-2 pr-10"
                  placeholder="Your password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between">
              <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 rounded-md">
                {loading ? "Signing in…" : "Sign in"}
              </button>

              <button type="button" onClick={handleForgotPassword} className="text-sm text-zinc-400 underline">
                Forgot password?
              </button>
            </div>

            <p className="text-sm text-zinc-400">
              Not registered?{" "}
              <button onClick={() => setTab("signup-email")} className="text-emerald-400 underline">
                Create an account
              </button>
            </p>
          </form>
        )}

        {tab === "signup-email" && (
          <form onSubmit={handleSignupEmail} className="space-y-4">
            <label className="block text-sm text-zinc-300">
              Email
              <input
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="mt-2 w-full rounded-md bg-zinc-900 border border-zinc-700 p-2"
                placeholder="you@example.com"
                autoComplete="email"
                type="email"
                required
              />
            </label>

            <label className="block text-sm text-zinc-300 relative">
              Password
              <div className="mt-2 relative">
                <input
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-md bg-zinc-900 border border-zinc-700 p-2 pr-10"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between">
              <button type="submit" disabled={loading} className="px-4 py-2 bg-emerald-600 rounded-md">
                {loading ? "Sending…" : "Create account"}
              </button>

              <button type="button" onClick={() => setTab("signin")} className="text-sm text-zinc-400 underline">
                Sign in instead
              </button>
            </div>

            <p className="text-sm text-zinc-400">We will send a verification email. Click it to continue account setup.</p>
          </form>
        )}

        {tab === "signup-phone" && (
          <form onSubmit={handleSignupPhone} className="space-y-4">
            <label className="block text-sm text-zinc-300">
              Phone (with country code)
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full rounded-md bg-zinc-900 border border-zinc-700 p-2"
                placeholder="+911234567890"
                inputMode="tel"
                required
              />
            </label>

            <div className="flex items-center justify-between">
              <button type="submit" disabled={loading} className="px-4 py-2 bg-amber-600 rounded-md">
                {loading ? "Sending OTP…" : "Send OTP"}
              </button>

              <button type="button" onClick={() => setTab("signin")} className="text-sm text-zinc-400 underline">
                Sign in with email
              </button>
            </div>

            <p className="text-sm text-zinc-400">After verification you'll complete your profile.</p>
          </form>
        )}
      </div>
    </div>
  );
}
