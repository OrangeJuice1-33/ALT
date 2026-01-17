"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

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
  const searchParams = useSearchParams();

  const [showListingForm, setShowListingForm] = useState(true);
  const [listingSaved, setListingSaved] = useState(false);
  const [listingId, setListingId] = useState<string>("");
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

  // Load data from query params and localStorage on mount
  useEffect(() => {
    // Load booking data from query params
    const service = searchParams?.get("service") || "";
    const unit = searchParams?.get("unit") || "night";
    const pricePerUnit = Number(searchParams?.get("pricePerUnit")) || 0;
    const startDate = searchParams?.get("startDate") || "";
    const endDate = searchParams?.get("endDate") || "";
    const excludedDates = searchParams?.get("excludedDates")?.split(",").filter(Boolean) || [];
    const discounts = searchParams?.get("discounts") ? JSON.parse(searchParams.get("discounts")!) : [];

    setState((prev) => ({
      ...prev,
      unit,
      pricePerUnit,
      startDate,
      endDate,
      excludedDates,
      discounts,
    }));
  }, [searchParams]);

  // Auto-populate booking data from query params and show summary
  useEffect(() => {
    const service = searchParams?.get("service");
    const name = searchParams?.get("name");
    const description = localStorage.getItem("venue_description");

    // If we have service data, show summary directly
    if (service && name && description) {
      setShowListingForm(false);
    }
  }, [searchParams]);

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

  async function saveListing() {
    try {
      // Capture current React state before async operations
      const currentState = state;
      
      setState((prev) => ({
        ...prev,
        creating: true,
        error: null,
      }));

      return new Promise<string>((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
          if (!user) {
            reject(new Error("User not authenticated. Please log in first."));
            return;
          }

          const userId = user.uid;

          try {
            // Get data from query params (details page data)
            const service = searchParams?.get("service") || "";
            const category = searchParams?.get("category") || "";
            const name = searchParams?.get("name") || "";
            const address1 = searchParams?.get("address1") || "";
            const address2 = searchParams?.get("address2") || "";
            const country = searchParams?.get("country") || "";
            const addressState = searchParams?.get("state") || "";
            const city = searchParams?.get("city") || "";
            const pincode = searchParams?.get("pincode") || "";
            const googlePin = searchParams?.get("googlePin") || "";

            // Get pricing data from query params (from step-6-booking) or use React state defaults
            const unitFromParams = searchParams?.get("unit") || currentState.unit || "night";
            const pricePerUnitFromParams = Number(searchParams?.get("pricePerUnit")) || currentState.pricePerUnit || 0;
            const discountsFromParams = searchParams?.get("discounts") 
              ? JSON.parse(searchParams.get("discounts")!) 
              : (currentState.discounts || []);
            
            // Get availability dates from query params
            const startDateFromParams = searchParams?.get("startDate") || currentState.startDate || "";
            const endDateFromParams = searchParams?.get("endDate") || currentState.endDate || "";
            const excludedDatesFromParams = searchParams?.get("excludedDates")?.split(",").filter(Boolean) || currentState.excludedDates || [];

            // Get data from localStorage
            const description = localStorage.getItem("venue_description") || "";
            const featuresStr = localStorage.getItem("venue_features") || "{}";
            const features = JSON.parse(featuresStr);

            // Fetch gallery images for this user filtered by service type AND category
            const galleryRef = collection(db, "venue_gallery");
            let galleryQuery;
            let images: string[] = [];
            
            if (category) {
              // First try to get images filtered by both service_type and category
              galleryQuery = query(
                galleryRef, 
                where("user_id", "==", userId),
                where("service_type", "==", service),
                where("category", "==", category)
              );
              const gallerySnap = await getDocs(galleryQuery);
              gallerySnap.docs.forEach((doc) => {
                const data = doc.data();
                if (data.url) {
                  images.push(data.url);
                }
              });
              
              // If no images found with category filter (backward compatibility for old images),
              // fall back to service_type only
              if (images.length === 0) {
                galleryQuery = query(
                  galleryRef, 
                  where("user_id", "==", userId),
                  where("service_type", "==", service)
                );
                const fallbackSnap = await getDocs(galleryQuery);
                fallbackSnap.docs.forEach((doc) => {
                  const data = doc.data();
                  if (data.url) {
                    images.push(data.url);
                  }
                });
              }
            } else {
              // If no category, just filter by service_type
              galleryQuery = query(
                galleryRef, 
                where("user_id", "==", userId),
                where("service_type", "==", service)
              );
              const gallerySnap = await getDocs(galleryQuery);
              gallerySnap.docs.forEach((doc) => {
                const data = doc.data();
                if (data.url) {
                  images.push(data.url);
                }
              });
            }

            if (images.length === 0) {
              throw new Error("Please upload at least one image before submitting.");
            }

            // Save the complete listing
            const listingRef = await addDoc(collection(db, "listings"), {
              service_type: service, // venue, decorator, caterer, dj, photographer
              category,
              name,
              description,
              address: {
                address1,
                address2,
                country,
                state: addressState,
                city,
                pincode,
                googlePin,
              },
              features,
              images,
              unit: unitFromParams,
              price_per_unit: pricePerUnitFromParams,
              discounts: discountsFromParams,
              // Availability dates
              availability_start_date: startDateFromParams || null,
              availability_end_date: endDateFromParams || null,
              excluded_dates: excludedDatesFromParams,
              // Approval status - defaults to false, needs admin approval
              approved: false,
              user_id: userId,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            });

            const newListingId = listingRef.id;
            setListingId(newListingId);
            setListingSaved(true);

            // Clear localStorage after saving
            localStorage.removeItem("venue_description");
            localStorage.removeItem("venue_features");

            resolve(newListingId);
          } catch (err) {
            const errorMessage =
              err instanceof Error ? err.message : "An unexpected error occurred";
            setState((prev) => ({
              ...prev,
              error: errorMessage,
              creating: false,
            }));
            reject(err);
          }
        });
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setState((prev) => ({
        ...prev,
        error: errorMessage,
        creating: false,
      }));
      throw err;
    }
  }

  async function handleConfirm() {
    try {
      setState((prev) => ({
        ...prev,
        creating: true,
        error: null,
      }));

      // First, save the listing if not already saved
      let currentListingId = listingId || state.listingId;
      if (!currentListingId || !listingSaved) {
        currentListingId = await saveListing();
        setState((prev) => ({ ...prev, listingId: currentListingId }));
      }

      // Get authenticated user
      return new Promise<void>((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
          if (!user) {
            reject(new Error("User not authenticated. Please log in first."));
            return;
          }

          const userId = user.uid;

          try {
            // Create booking (optional - only if booking details provided)
            if (state.startDate && state.endDate && state.pricePerUnit > 0) {
              const bookingRef = await addDoc(collection(db, "bookings"), {
                listing_id: currentListingId,
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
                service_type: searchParams?.get("service") || undefined,
                created_at: new Date().toISOString(),
              });

            const bookingId = bookingRef.id;

            // Payment gateway integration is pending
            // Skip payment for now and show message
            alert(
              `Service listing and booking created successfully!\n\n` +
              `Booking ID: ${bookingId}\n` +
              `Total Amount: ₹${total.toLocaleString("en-IN")}\n\n` +
              `Note: Payment gateway integration is yet to be added. Your booking has been saved and will be processed once payment is integrated.`
            );
            } else {
              alert("Service listing created successfully!");
            }

            setState((prev) => ({
              ...prev,
              creating: false,
            }));
            router.push("/");
            resolve();
          } catch (err) {
            const errorMessage =
              err instanceof Error ? err.message : "An unexpected error occurred";
            setState((prev) => ({
              ...prev,
              error: errorMessage,
              creating: false,
            }));
            alert(errorMessage);
            reject(err);
          }
        });
      });
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


  // Get listing data for display
  const service = searchParams?.get("service") || "";
  const category = searchParams?.get("category") || "";
  const name = searchParams?.get("name") || "";
  const description = localStorage.getItem("venue_description") || "";
  const featuresStr = localStorage.getItem("venue_features") || "{}";
  const features = JSON.parse(featuresStr);

  return (
    <div className="min-h-screen p-6 bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white">
      <div className="max-w-3xl mx-auto bg-[#07102a]/80 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-4">Service Listing Summary</h2>
        
        {/* Listing Details */}
        <div className="mb-6 p-4 bg-zinc-900/50 rounded-lg border border-zinc-700">
          <h3 className="text-lg font-semibold mb-3">Listing Details</h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-zinc-400">Service Type: </span>
              <span className="text-white capitalize">{service || "N/A"}</span>
            </div>
            <div>
              <span className="text-zinc-400">Category: </span>
              <span className="text-white">{category || "N/A"}</span>
            </div>
            <div>
              <span className="text-zinc-400">Name: </span>
              <span className="text-white">{name || "N/A"}</span>
            </div>
            {description && (
              <div>
                <span className="text-zinc-400">Description: </span>
                <p className="text-white mt-1">{description}</p>
              </div>
            )}
            {Object.keys(features).length > 0 && (
              <div>
                <span className="text-zinc-400">Features: </span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {Object.entries(features).map(([key, value]) => (
                    <span key={key} className="px-2 py-1 bg-blue-600/30 rounded text-xs">
                      {key} ({value})
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Summary */}
        {(state.startDate || state.endDate || state.pricePerUnit > 0) && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Pricing Information</h3>
          </div>
        )}

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
            {state.creating ? "Saving Listing…" : "Save Listing & Continue"}
          </button>
          <button
            onClick={() => router.back()}
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