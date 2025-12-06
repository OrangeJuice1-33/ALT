"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

interface SummaryState {
  listingId: string;
  startDate: string;
  endDate: string;
  unit: string;
  pricePerUnit: number;
  excludedDates: string[];
  discounts: { min_units: number; percent: number }[];
  isReady: boolean;
  creating: boolean;
  error: string | null;
}

export default function SummaryPage() {
  const router = useRouter();

  const [showListingForm, setShowListingForm] = useState(true);
  const [state, setState] = useState<SummaryState>({
    listingId: "",
    startDate: "",
    endDate: "",
    unit: "night",
    pricePerUnit: 0,
    excludedDates: [],
    discounts: [],
    isReady: false,
    creating: false,
    error: null,
  });

  // Handle listing details submission
  function handleListingSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!state.listingId.trim()) {
      setState((prev) => ({
        ...prev,
        error: "Please enter a listing ID",
      }));
      return;
    }

    if (!state.startDate || !state.endDate) {
      setState((prev) => ({
        ...prev,
        error: "Please enter start and end dates",
      }));
      return;
    }

    if (new Date(state.startDate) > new Date(state.endDate)) {
      setState((prev) => ({
        ...prev,
        error: "Start date must be before end date",
      }));
      return;
    }

    if (state.pricePerUnit <= 0) {
      setState((prev) => ({
        ...prev,
        error: "Price per unit must be greater than 0",
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      isReady: true,
      error: null,
    }));
    setShowListingForm(false);
  }

  // Calculate units count
  const unitsCount = (() => {
    if (!state.startDate || !state.endDate) return 0;
    const s = new Date(state.startDate);
    const e = new Date(state.endDate);
    const diff =
      Math.round((e.getTime() - s.getTime()) / (24 * 3600 * 1000)) + 1;
    return Math.max(0, diff - state.excludedDates.length);
  })();

  // Calculate pricing
  const subtotal = unitsCount * state.pricePerUnit;
  const applicable = state.discounts.filter(
    (d) => unitsCount >= d.min_units
  );
  const topPercent =
    applicable.length > 0
      ? Math.max(...applicable.map((d) => d.percent))
      : 0;

  const discountAmount = +(subtotal * (topPercent / 100)).toFixed(2);
  const afterDiscount = subtotal - discountAmount;
  const commission = +(afterDiscount * 0.05).toFixed(2);
  const serviceFee = +((afterDiscount + commission) * 0.01).toFixed(2);
  const total = +(afterDiscount + commission + serviceFee).toFixed(2);

  async function handleConfirm() {
    try {
      setState((prev) => ({
        ...prev,
        creating: true,
        error: null,
      }));

      // Get authenticated user
      const { data: authData, error: authError } =
        await supabaseBrowser.auth.getUser();

      if (authError || !authData?.user?.id) {
        throw new Error("User not authenticated. Please log in first.");
      }

      const userId = authData.user.id;

      // Create booking
      const { data: bookingData, error: insertErr } = await supabaseBrowser
        .from("bookings")
        .insert([
          {
            listing_id: state.listingId,
            user_id: userId,
            start_date: state.startDate,
            end_date: state.endDate,
            excluded_dates: state.excludedDates.length
              ? state.excludedDates
              : null,
            unit: state.unit,
            price_per_unit: state.pricePerUnit,
            total_units: unitsCount,
            subtotal,
            discount_amount: discountAmount,
            commission_amount: commission,
            service_fee: serviceFee,
            total_amount: total,
            status: "pending",
          },
        ])
        .select();

      if (insertErr || !bookingData || bookingData.length === 0) {
        throw new Error(insertErr?.message ?? "Failed to create booking");
      }

      const bookingId = bookingData[0].id;

      // Create Razorpay order
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(total * 100),
          currency: "INR",
          bookingId,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json?.message ?? "Failed to create payment order");
      }

      // TODO: Integrate Razorpay checkout here
      // Example: window.Razorpay checkout initialization
      alert(
        "Order created successfully. Integrate Razorpay checkout. Order ID: " +
          json?.id
      );

      setState((prev) => ({
        ...prev,
        creating: false,
      }));
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setState((prev) => ({
        ...prev,
        error: errorMessage,
        creating: false,
      }));
      alert(errorMessage);
    }
  }

  // Show listing details form if not ready
  if (showListingForm) {
    return (
      <div className="min-h-screen p-6 bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white flex items-center justify-center">
        <div className="w-full max-w-2xl bg-[#07102a]/80 p-8 rounded-xl border border-zinc-800 shadow-xl">
          <h2 className="text-3xl font-bold mb-2">Booking Details</h2>
          <p className="text-zinc-400 mb-6">
            Enter your listing details and booking information to proceed.
          </p>

          {state.error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded text-red-200">
              {state.error}
            </div>
          )}

          <form onSubmit={handleListingSubmit} className="space-y-5">
            {/* Listing ID */}
            <div>
              <label className="block text-sm mb-2 text-zinc-300">
                Listing ID <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={state.listingId}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    listingId: e.target.value,
                    error: null,
                  }))
                }
                placeholder="Enter your listing ID"
                className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-md focus:border-zinc-600 focus:outline-none transition"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-zinc-300">
                  Start Date <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  value={state.startDate}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      startDate: e.target.value,
                      error: null,
                    }))
                  }
                  className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-md focus:border-zinc-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-zinc-300">
                  End Date <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  value={state.endDate}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      endDate: e.target.value,
                      error: null,
                    }))
                  }
                  className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-md focus:border-zinc-600 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Unit & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-zinc-300">
                  Unit <span className="text-red-400">*</span>
                </label>
                <select
                  value={state.unit}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      unit: e.target.value,
                    }))
                  }
                  className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-md focus:border-zinc-600 focus:outline-none transition"
                >
                  <option value="night">Per night</option>
                  <option value="hour">Per hour</option>
                  <option value="gig">Per gig</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-zinc-300">
                  Price per {state.unit}{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  min={0}
                  value={state.pricePerUnit}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      pricePerUnit: Number(e.target.value),
                      error: null,
                    }))
                  }
                  placeholder="0"
                  className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-md focus:border-zinc-600 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
              >
                Continue →
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-3 bg-zinc-700 hover:bg-zinc-600 rounded-md transition"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white">
      <div className="max-w-3xl mx-auto bg-[#07102a]/80 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>

        {state.error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded text-red-200">
            {state.error}
          </div>
        )}

        <table className="w-full mb-6 text-sm">
          <tbody className="space-y-2">
            <tr className="border-b border-zinc-700">
              <td className="py-2 text-gray-400">Dates</td>
              <td className="py-2 text-right">
                {state.startDate} → {state.endDate}
                {state.excludedDates.length > 0 && (
                  <span className="text-xs text-gray-500 ml-2">
                    (excluded: {state.excludedDates.join(", ")})
                  </span>
                )}
              </td>
            </tr>
            <tr className="border-b border-zinc-700">
              <td className="py-2 text-gray-400">Units</td>
              <td className="py-2 text-right">
                {unitsCount} {state.unit}(s)
              </td>
            </tr>
            <tr className="border-b border-zinc-700">
              <td className="py-2 text-gray-400">Price / {state.unit}</td>
              <td className="py-2 text-right">
                ₹{state.pricePerUnit.toFixed(2)}
              </td>
            </tr>
            <tr className="border-b border-zinc-700">
              <td className="py-2 text-gray-400">Subtotal</td>
              <td className="py-2 text-right">
                ₹{subtotal.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
            {discountAmount > 0 && (
              <tr className="border-b border-zinc-700">
                <td className="py-2 text-gray-400">Discount</td>
                <td className="py-2 text-right text-green-400">
                  - ₹{discountAmount.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  ({topPercent}%)
                </td>
              </tr>
            )}
            <tr className="border-b border-zinc-700">
              <td className="py-2 text-gray-400">Commission (5%)</td>
              <td className="py-2 text-right">
                ₹{commission.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
            <tr className="border-b border-zinc-700">
              <td className="py-2 text-gray-400">Service Fee (1%)</td>
              <td className="py-2 text-right">
                ₹{serviceFee.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
            <tr className="font-bold text-lg">
              <td className="py-3">Total Amount</td>
              <td className="py-3 text-right text-blue-400">
                ₹{total.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex gap-2">
          <button
            onClick={handleConfirm}
            disabled={state.creating}
            className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:opacity-50 rounded font-medium transition"
          >
            {state.creating ? "Processing…" : "Confirm & Pay"}
          </button>
          <button
            onClick={() => {
              setShowListingForm(true);
              setState((prev) => ({
                ...prev,
                listingId: "",
                startDate: "",
                endDate: "",
                error: null,
              }));
            }}
            disabled={state.creating}
            className="px-4 py-3 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-50 rounded transition disabled:cursor-not-allowed"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}