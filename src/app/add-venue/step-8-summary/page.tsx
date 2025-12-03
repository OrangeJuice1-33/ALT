"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function SummaryPage() {
  const router = useRouter();
  const params = useSearchParams();
  const listingId = params.get("id") ?? params.get("listingId");
  const startDate = params.get("startDate")!;
  const endDate = params.get("endDate")!;
  const excluded = (params.get("excludedDates") || "").split(",").filter(Boolean);
  const unit = params.get("unit") || "night";
  const pricePerUnit = Number(params.get("pricePerUnit") || 0);
  const discounts = (() => {
    try { return JSON.parse(params.get("discounts") || "[]"); } catch { return []; }
  })();

  const unitsCount = (() => {
    const s = new Date(startDate); const e = new Date(endDate);
    const diff = Math.round((e.getTime()-s.getTime())/(24*3600*1000)) + 1;
    return Math.max(0, diff - excluded.length);
  })();

  const subtotal = unitsCount * pricePerUnit;
  const applicable = discounts.filter((d:any)=> unitsCount >= d.min_units);
  const topPercent = applicable.length ? Math.max(...applicable.map((d:any)=>d.percent)) : 0;
  const discountAmount = +(subtotal * (topPercent/100));
  const afterDiscount = subtotal - discountAmount;
  const commission = +(afterDiscount * 0.05).toFixed(2);
  const serviceFee = +((afterDiscount + commission) * 0.01).toFixed(2);
  const total = +(afterDiscount + commission + serviceFee).toFixed(2);

  const [creating, setCreating] = useState(false);

  async function handleConfirm() {
    setCreating(true);

    // 1) create booking row in DB (status pending)
    const { error: insertErr } = await supabaseBrowser.from("bookings").insert([{
      listing_id: listingId,
      user_id: (await supabaseBrowser.auth.getUser()).data?.user?.id ?? null,
      start_date: startDate,
      end_date: endDate,
      excluded_dates: excluded.length ? excluded : null,
      unit,
      price_per_unit: pricePerUnit,
      total_units: unitsCount,
      subtotal,
      discount_amount: discountAmount,
      commission_amount: commission,
      service_fee: serviceFee,
      total_amount: total,
      status: "pending"
    }]);

    if (insertErr) {
      alert(insertErr.message);
      setCreating(false);
      return;
    }

    // 2) call server to create razorpay order (placeholder)
    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "content-type":"application/json" },
      body: JSON.stringify({ amount: Math.round(total*100), currency: "INR", bookingId: "TODO" })
    });

    const json = await res.json();
    if (!res.ok) {
      alert(json?.message ?? "Failed to create order");
      setCreating(false);
      return;
    }

    // 3) redirect to Razorpay Checkout (client-side)
    // expected json: { orderId, razorpayKey }
    const { orderId, razorpayKey } = json;
    // open checkout (simple redirect approach)
    // you should integrate Razorpay Checkout script on client and call Razerpay checkout with orderId
    alert("Order created. Now integrate Razorpay Checkout; server returned: " + JSON.stringify(json));
    setCreating(false);
  }

  return (
    <div className="min-h-screen p-6 bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white">
      <div className="max-w-3xl mx-auto bg-[#07102a]/80 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>

        <table className="w-full mb-4">
          <tbody>
            <tr><td>Dates</td><td>{startDate} → {endDate} (excluded: {excluded.join(", ") || "none"})</td></tr>
            <tr><td>Units</td><td>{unitsCount} {unit}(s)</td></tr>
            <tr><td>Price / {unit}</td><td>₹{pricePerUnit.toFixed(2)}</td></tr>
            <tr><td>Subtotal</td><td>₹{subtotal.toFixed(2)}</td></tr>
            <tr><td>Discount</td><td>- ₹{discountAmount.toFixed(2)} ({topPercent}%)</td></tr>
            <tr><td>Commission (5%)</td><td>₹{commission.toFixed(2)}</td></tr>
            <tr><td>Service fee (1%)</td><td>₹{serviceFee.toFixed(2)}</td></tr>
            <tr className="font-bold text-lg"><td>Total</td><td>₹{total.toFixed(2)}</td></tr>
          </tbody>
        </table>

        <div className="flex gap-2">
          <button onClick={handleConfirm} disabled={creating} className="px-4 py-2 bg-blue-600 rounded">
            {creating ? "Processing…" : "Confirm & Pay"}
          </button>
          <button onClick={()=>router.back()} className="px-4 py-2 bg-zinc-700 rounded">Back</button>
        </div>
      </div>
    </div>
  );
}
