"use client";

import { useRouter } from "next/navigation";

export default function KYCPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-6 bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white">
      <div className="max-w-3xl mx-auto bg-[#07102a]/80 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-4">KYC Verification</h2>
        <p className="text-zinc-400 mb-6">
          KYC verification is required to complete your venue listing.
        </p>
        <button
          onClick={() => router.push("/dashboard")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Complete Later
        </button>
      </div>
    </div>
  );
}
