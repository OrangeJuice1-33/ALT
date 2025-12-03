// src/components/AuthListener.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function AuthListener() {
  const router = useRouter();

  useEffect(() => {
    const { data: sub } = supabaseBrowser.auth.onAuthStateChange(
      async (event, session) => {
        // When user signs in (including after email verification), set cookie for middleware and route appropriately
        if (event === "SIGNED_IN") {
          const token = session?.access_token;
          if (token) {
            // cookie for middleware detection (short lived)
            document.cookie = `sb-access-token=${token}; path=/; max-age=3600`;
          }

          const user = session?.user;
          if (!user) return;

          // check if profile exists
          const { data: profile } = await supabaseBrowser
            .from("profiles")
            .select("id")
            .eq("id", user.id)
            .maybeSingle();

          if (!profile) {
            router.push("/auth/complete-profile");
          } else {
            router.push("/dashboard");
          }
        }

        if (event === "SIGNED_OUT") {
          // clear cookie and redirect to auth
          document.cookie = "sb-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
          router.push("/auth");
        }
      }
    );

    return () => {
      sub.subscription.unsubscribe();
    };
  }, [router]);

  return null;
}
