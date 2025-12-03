"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { format, addDays, eachDayOfInterval, isSameDay } from "date-fns";

function dateToISO(d: Date) { return d.toISOString().slice(0,10); }

export default function Step6Booking() {
  const router = useRouter();
  const params = useSearchParams();
  const listingId = params.get("id"); // or passed via query
  const service = params.get("service"); // e.g., "venue" or "dj"

  const today = new Date();
  const [startDate, setStartDate] = useState<string>(dateToISO(today));
  const [endDate, setEndDate] = useState<string>(dateToISO(addDays(today,1)));
  const [excludeMode, setExcludeMode] = useState(false);
  const [excludedDates, setExcludedDates] = useState<string[]>([]);

  // pricing mode
  const defaultUnit = service === "venue" ? "night" : "gig";
  const [unit, setUnit] = useState<string>(defaultUnit);
  const [pricePerUnit, setPricePerUnit] = useState<number>(5000); // sample default
  const [priceSlider, setPriceSlider] = useState<number>(pricePerUnit);

  // discounts list (local UI) — each item {min_units, percent}
  const [discounts, setDiscounts] = useState<{min_units:number, percent:number}[]>([]);

  // derived days between
  const dateRangeDays = useMemo(() => {
    const s = new Date(startDate);
    const e = new Date(endDate);
    if (s > e) return [];
    return eachDayOfInterval({ start: s, end: e }).map(d => dateToISO(d));
  }, [startDate, endDate]);

  // effective units = dateRangeDays.length - excludedDates.length (for nights)
  const effectiveUnits = Math.max(0, dateRangeDays.length - excludedDates.length);

  // helper to toggle excluded date
  function toggleExcluded(dateISO: string) {
    setExcludedDates(prev => prev.some(d => d === dateISO) ? prev.filter(d=>d!==dateISO) : [...prev, dateISO]);
  }

  // discount editor
  const [discUnits, setDiscUnits] = useState<number>(3);
  const [discPercent, setDiscPercent] = useState<number>(5);

  function addDiscount() {
    setDiscounts(prev => [...prev, { min_units: discUnits, percent: discPercent }]);
  }

  // calculate applicable discount amount
  function computeDiscount(subtotal:number) {
    // choose the single best discount (largest percent) that meets min_units
    const applicable = discounts.filter(d => effectiveUnits >= d.min_units);
    if (applicable.length === 0) return 0;
    const top = Math.max(...applicable.map(d => d.percent));
    return (subtotal * top) / 100;
  }

  function handleNext() {
    // basic validation
    if (!startDate || !endDate) return alert("Choose start and end date.");
    if (new Date(startDate) > new Date(endDate)) return alert("Start date must be before end date.");

    // build booking object and go to summary page (redirect with query or create server record first)
    const query = new URLSearchParams({
      id: listingId ?? "",
      unit,
      pricePerUnit: String(pricePerUnit),
      startDate,
      endDate,
      excludedDates: excludedDates.join(","),
      discounts: JSON.stringify(discounts),
    }).toString();

    router.push(`/add-venue/step-8-summary?${query}`);
  }

  const subtotal = effectiveUnits * pricePerUnit;
  const discountAmount = computeDiscount(subtotal);
  const afterDiscount = subtotal - discountAmount;
  const commission = +(afterDiscount * 0.05).toFixed(2);
  const serviceFee = +((afterDiscount + commission) * 0.01).toFixed(2);
  const total = +(afterDiscount + commission + serviceFee).toFixed(2);

  return (
    <div className="min-h-screen p-6 bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white">
      <div className="max-w-4xl mx-auto bg-[#07102a]/80 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-bold mb-4">Booking & Availability</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <label className="block">
            <div className="text-sm text-zinc-300">Start date</div>
            <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)} className="mt-2 p-2 rounded bg-zinc-900" />
          </label>

          <label className="block">
            <div className="text-sm text-zinc-300">End date</div>
            <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)} className="mt-2 p-2 rounded bg-zinc-900" />
          </label>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={excludeMode} onChange={(e)=>setExcludeMode(e.target.checked)} />
            <span className="text-sm text-zinc-300">Exclude specific dates within range</span>
          </label>
        </div>

        {/* Visual list of dates in range - click to toggle exclusion */}
        <div className="mb-6">
          <div className="text-sm text-zinc-300 mb-2">Selected dates</div>
          <div className="flex flex-wrap gap-2">
            {dateRangeDays.map(d => {
              const isExcluded = excludedDates.includes(d);
              return (
                <button
                  key={d}
                  disabled={!excludeMode}
                  onClick={() => toggleExcluded(d)}
                  className={`px-3 py-1 rounded-md ${isExcluded ? "bg-red-600/80" : "bg-blue-600/80"}`}
                >
                  {format(new Date(d), "dd MMM")}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-zinc-300">Unit</label>
            <select value={unit} onChange={(e)=>setUnit(e.target.value)} className="mt-2 p-2 rounded bg-zinc-900">
              <option value="night">Per night</option>
              <option value="hour">Per hour</option>
              <option value="gig">Per gig</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-zinc-300">Price per {unit}</label>
            <input type="number" value={pricePerUnit} onChange={(e)=>{ setPricePerUnit(Number(e.target.value)); setPriceSlider(Number(e.target.value)); }} className="mt-2 p-2 rounded bg-zinc-900" />
          </div>

          <div>
            <label className="text-sm text-zinc-300">Adjust price</label>
            <input type="range" min="0" max="200000" value={priceSlider} onChange={(e)=>{ setPriceSlider(Number(e.target.value)); setPricePerUnit(Number(e.target.value)); }} className="mt-3 w-full" />
            <div className="text-xs text-zinc-400 mt-1">₹{pricePerUnit}</div>
          </div>
        </div>

        {/* Discounts editor */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Discounts</h3>
          <div className="flex gap-2 items-center mb-2">
            <input type="number" value={discUnits} onChange={(e)=>setDiscUnits(Number(e.target.value))} className="p-2 rounded bg-zinc-900" />
            <div className="text-zinc-300">units →</div>
            <input type="number" value={discPercent} onChange={(e)=>setDiscPercent(Number(e.target.value))} className="p-2 rounded bg-zinc-900" />
            <div className="text-zinc-300">%</div>
            <button onClick={addDiscount} className="ml-2 px-3 py-1 bg-green-600 rounded">Add</button>
          </div>

          <div className="bg-zinc-900 p-3 rounded">
            <table className="w-full text-sm">
              <thead className="text-zinc-400">
                <tr><th>Min units</th><th>Discount %</th></tr>
              </thead>
              <tbody>
                {discounts.map((d,i)=>(
                  <tr key={i}><td>{d.min_units}</td><td>{d.percent}%</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary preview */}
        <div className="mb-6 bg-[#021028] p-4 rounded">
          <div className="flex justify-between"><div>Units</div><div>{effectiveUnits}</div></div>
          <div className="flex justify-between"><div>Subtotal</div><div>₹{subtotal.toFixed(2)}</div></div>
          <div className="flex justify-between"><div>Discount</div><div>- ₹{discountAmount.toFixed(2)}</div></div>
          <div className="flex justify-between"><div>Commission (5%)</div><div>₹{commission.toFixed(2)}</div></div>
          <div className="flex justify-between"><div>Service fee (1%)</div><div>₹{serviceFee.toFixed(2)}</div></div>
          <div className="flex justify-between font-bold text-lg"><div>Total</div><div>₹{total.toFixed(2)}</div></div>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 rounded-md" onClick={handleNext}>Next: Summary</button>
          <button className="px-4 py-2 bg-zinc-700 rounded-md" onClick={()=>router.back()}>Back</button>
        </div>
      </div>
    </div>
  );
}
