// src/app/auth/complete-profile/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";
import ProfileImageUploader from "@/components/ProfileImageUploader";

export default function CompleteProfilePage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    supabaseBrowser.auth.getUser().then(({ data }) => {
      if (!mounted) return;
      setUser(data.user ?? null);
      setPhone(data.user?.phone ?? "");
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="p-8 text-white">Loading…</div>;
  if (!user) {
    return (
      <div className="p-8 text-white">
        <p>You are not signed in. Please verify email or sign in first.</p>
        <button onClick={() => router.push("/auth")} className="mt-3 px-4 py-2 bg-blue-600 rounded-md">Go to auth</button>
      </div>
    );
  }

  async function handleComplete(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Validation: username unique
    if (username) {
      const { data: existingUsername } = await supabaseBrowser
        .from("profiles")
        .select("id")
        .eq("username", username)
        .maybeSingle();

      if (existingUsername) {
        alert("Username already taken.");
        setLoading(false);
        return;
      }
    }

    // Validation: email unique
    if (email) {
      const { data: existingEmail } = await supabaseBrowser
        .from("profiles")
        .select("id")
        .eq("email", email)
        .maybeSingle();

      if (existingEmail) {
        alert("Email already registered.");
        setLoading(false);
        return;
      }
    }

    // If user signed up by email & wants credentials set, update user with password/email (if password provided).
    try {
      if (email || password) {
        const { error: updateErr } = await supabaseBrowser.auth.updateUser({
          email: email || undefined,
          password: password || undefined,
        });

        if (updateErr) {
          alert(updateErr.message);
          setLoading(false);
          return;
        }
      }
    } catch (err: any) {
      console.error(err);
    }

    const profile = {
      id: user.id,
      full_name: fullName || null,
      username: username || null,
      email: email || null,
      phone: phone || null,
      profile_image: profileImage || null,
      created_at: new Date().toISOString(),
    };

    const { error } = await supabaseBrowser.from("profiles").upsert(profile, { returning: "minimal" });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
      <div className="max-w-md w-full bg-[#07102a]/80 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Complete your profile</h2>

        <form onSubmit={handleComplete} className="space-y-4">
          <label className="block text-sm text-zinc-300">
            Full name
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-2 w-full rounded-md bg-zinc-900 p-2" />
          </label>

          <label className="block text-sm text-zinc-300">
            Username
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="mt-2 w-full rounded-md bg-zinc-900 p-2" required />
          </label>

          <label className="block text-sm text-zinc-300">
            Email (optional)
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-2 w-full rounded-md bg-zinc-900 p-2" />
          </label>

          <label className="block text-sm text-zinc-300 relative">
            Password (optional - set to enable email/password login)
            <div className="mt-2 relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="w-full rounded-md bg-zinc-900 p-2 pr-10"
                placeholder="Choose a secure password"
              />
              <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400">
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </label>

          <label className="block text-sm text-zinc-300">
            Phone
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full rounded-md bg-zinc-900 p-2" />
          </label>

          <div className="mt-2">
            <ProfileImageUploader userId={user.id} onUpload={(url) => setProfileImage(url)} />
            {profileImage ? <img src={profileImage} alt="avatar" className="mt-3 w-20 h-20 rounded-full object-cover" /> : null}
          </div>

          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-blue-600 rounded-md" type="submit">
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
