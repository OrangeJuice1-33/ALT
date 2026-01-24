// src/components/AuthListener.tsx
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export default function AuthListener() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        const token = await user.getIdToken();
        if (token) {
          // cookie for middleware detection (short lived)
          document.cookie = `firebase-access-token=${token}; path=/; max-age=3600`;
        }

        // Only redirect if on auth pages
        if (pathname?.startsWith("/auth")) {
          // check if profile exists
          const profileRef = doc(db, "profiles", user.uid);
          const profileSnap = await getDoc(profileRef);

          if (!profileSnap.exists()) {
            router.push("/auth/complete-profile");
          } else {
            router.push("/");
          }
        }
      } else {
        // User is signed out
        document.cookie = "firebase-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        
        // Only redirect to auth if trying to access protected routes
        const protectedRoutes = ["/admin", "/auth/complete-profile", "/add-venue"];
        const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route));
        
        if (isProtectedRoute) {
          if (pathname?.startsWith("/add-venue")) {
            router.push("/auth/signup");
          } else {
            router.push("/auth");
          }
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router, pathname]);

  return null;
}
