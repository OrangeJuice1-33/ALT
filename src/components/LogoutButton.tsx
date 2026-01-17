"use client";

import { auth } from "@/lib/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await signOut(auth);
    document.cookie = "firebase-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/auth");
  }

  return (
    <button onClick={logout} className="px-4 py-2 bg-red-600 text-white rounded-md">
      Logout
    </button>
  );
}
