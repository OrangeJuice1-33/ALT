"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import { db } from "@/lib/firebase/config";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import {
  differenceInCalendarDays,
  parseISO
} from "date-fns";

interface Listing {
  id: string;
  service_type: string;
  category: string;
  name: string;
  description: string;
  address: {
    address1: string;
    address2?: string;
    country: string;
    state: string;
    city: string;
    pincode: string;
    googlePin?: string;
  };
  images: string[];
  gallery?: { url: string; caption: string }[];
  price_per_unit: number;
  unit: string;
  features?: Record<string, number>;
  discounts?: Array<{ min_units: number; percent: number }>;
  user_id?: string;
  owner_name?: string;
  owner_joined_at?: string | null;
}

export default function ListingDetail() {
  const router = useRouter();
  const params = useParams();
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // ✅ Safe extraction
  const id = typeof params?.id === "string" ? params.id : "";

  const nights = useMemo(() => {
    if (!startDate || !endDate) return 0;
    try {
      return differenceInCalendarDays(parseISO(endDate), parseISO(startDate));
    } catch {
      return 0;
    }
  }, [startDate, endDate]);

  useEffect(() => {
    async function fetchListing() {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const listingRef = doc(db, "listings", id);
        const listingSnap = await getDoc(listingRef);

        if (listingSnap.exists()) {
          const data = listingSnap.data();

          // Fetch basic seller info (no phone or email)
          let ownerName: string | undefined;
          let ownerJoinedAt: string | null = null;

          let galleryItems: { url: string; caption: string }[] = [];

          if (data.user_id) {
            try {
              const userRef = doc(db, "profiles", data.user_id);
              const userSnap = await getDoc(userRef);
              if (userSnap.exists()) {
                const userData = userSnap.data() as any;
                ownerName =
                  userData.full_name ||
                  userData.username ||
                  "ALT Partner";
                ownerJoinedAt = userData.created_at || null;
              }

              // Fetch gallery images + captions for this host / service / category
              const galleryRef = collection(db, "venue_gallery");
              const galleryQuery = query(galleryRef, where("user_id", "==", data.user_id));
              const gallerySnap = await getDocs(galleryQuery);

              galleryItems = gallerySnap.docs
                .map((docSnap) => docSnap.data() as any)
                .filter((g) => {
                  // Match by service type + category when available to avoid mixing categories
                  const serviceMatch = !data.service_type || g.service_type === data.service_type;
                  const categoryMatch = !data.category || g.category === data.category;
                  return serviceMatch && categoryMatch;
                })
                .sort((a, b) => {
                  const da = a.created_at ? new Date(a.created_at).getTime() : 0;
                  const dbT = b.created_at ? new Date(b.created_at).getTime() : 0;
                  return da - dbT;
                })
                .map((g) => ({
                  url: g.url as string,
                  caption: (g.caption as string) || "",
                }));
            } catch (err) {
              console.error("Error fetching seller profile:", err);
            }
          }

          setListing({
            id: listingSnap.id,
            service_type: data.service_type || "",
            category: data.category || "",
            name: data.name || "",
            description: data.description || "",
            address: data.address || {
              address1: "",
              country: "",
              state: "",
              city: "",
              pincode: "",
            },
            images: data.images || [],
            gallery: galleryItems,
            price_per_unit: data.price_per_unit || 0,
            unit: data.unit || "night",
            features: data.features || {},
            discounts: data.discounts || [],
            user_id: data.user_id,
            owner_name: ownerName,
            owner_joined_at: ownerJoinedAt,
          });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching listing:", error);
        setLoading(false);
      }
    }

    fetchListing();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-zinc-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
          <button
            onClick={() => router.push("/search")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const sellerJoinedLabel = listing.owner_joined_at
    ? new Date(listing.owner_joined_at).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Recently joined";

  const imagesWithCaptions =
    listing.gallery && listing.gallery.length > 0
      ? listing.gallery
      : (listing.images || []).map((url) => ({ url, caption: "" }));

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
      
      <button
        onClick={() => router.back()}
        className="text-zinc-300 underline mb-6"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{listing.name}</h1>

      {imagesWithCaptions && imagesWithCaptions.length > 0 ? (
        <div className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
            {imagesWithCaptions.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image.url}
                  alt={`${listing.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.png";
                  }}
                />
                {/* Hover caption overlay */}
                {image.caption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end p-2">
                    <p className="text-[11px] leading-snug text-zinc-100">
                      {image.caption}
                    </p>
                  </div>
                )}
                {index === 5 && imagesWithCaptions.length > 6 && (
                  <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      +{imagesWithCaptions.length - 6}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl h-64 bg-zinc-800 rounded-xl shadow-lg mb-6 flex items-center justify-center text-zinc-400">
          No image available
        </div>
      )}

      {/* Image Modal/Lightbox */}
      {selectedImageIndex !== null && imagesWithCaptions && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-zinc-400"
          >
            ×
          </button>
          {selectedImageIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(selectedImageIndex - 1);
              }}
              className="absolute left-4 text-white text-4xl hover:text-zinc-400"
            >
              ‹
            </button>
          )}
          <img
          src={imagesWithCaptions[selectedImageIndex].url}
            alt={`${listing.name} - Image ${selectedImageIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.png";
            }}
          />
          {/* Caption under large image */}
          {imagesWithCaptions[selectedImageIndex].caption && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 max-w-3xl text-center px-4 text-sm text-zinc-100">
              {imagesWithCaptions[selectedImageIndex].caption}
            </div>
          )}
          {selectedImageIndex < imagesWithCaptions.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(selectedImageIndex + 1);
              }}
              className="absolute right-4 text-white text-4xl hover:text-zinc-400"
            >
              ›
            </button>
          )}
          <div className="absolute bottom-4 text-white text-sm">
            {selectedImageIndex + 1} / {imagesWithCaptions.length}
          </div>
        </div>
      )}

      <p className="text-lg text-zinc-300 max-w-3xl mb-8 leading-relaxed">
        {listing.description}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] max-w-6xl">
        {/* Booking card */}
        <div className="bg-[#07102a]/80 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Book this{" "}
            {listing.service_type
              ? listing.service_type.charAt(0).toUpperCase() +
                listing.service_type.slice(1)
              : "service"}
          </h2>

          <label className="block mb-4">
            <span className="text-zinc-300 text-sm">Start Date</span>
            <input
              type="date"
              className="mt-2 w-full p-3 bg-zinc-900 rounded-md border border-zinc-700"
              value={startDate ?? ""}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label className="block mb-4">
            <span className="text-zinc-300 text-sm">End Date</span>
            <input
              type="date"
              className="mt-2 w-full p-3 bg-zinc-900 rounded-md border border-zinc-700"
              value={endDate ?? ""}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>

          <div className="mt-6 p-4 bg-zinc-900 border border-zinc-700 rounded-md">
            <p className="text-zinc-300 mb-2">
              Price per {listing.unit}: ₹
              {listing.price_per_unit.toLocaleString("en-IN")}
            </p>
            {listing.unit === "night" && (
              <p className="text-zinc-300 mb-2">
                Nights selected: {nights > 0 ? nights : "-"}
              </p>
            )}
            {nights > 0 && listing.unit === "night" && (
              <p className="text-xl font-semibold text-white">
                Total: ₹
                {(nights * listing.price_per_unit).toLocaleString("en-IN")}
              </p>
            )}
          </div>

          <button
            onClick={() => alert("Payment flow coming next…")}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 p-3 rounded-md font-bold"
          >
            Continue →
          </button>

          {/* 📌 REVIEW BUTTON */}
          <button
            onClick={() => router.push(`/search/${id}/review`)}
            className="w-full mt-3 bg-purple-600 hover:bg-purple-700 p-3 rounded-md font-bold"
          >
            ⭐ Leave a Review
          </button>
        </div>

        {/* Seller info card (right side) */}
        <aside className="bg-[#050922]/80 border border-zinc-700 rounded-xl p-5 md:p-6">
          <h2 className="text-lg font-semibold mb-3">About the seller</h2>
          <p className="text-sm text-zinc-300 mb-4">
            Hosted by{" "}
            <span className="font-semibold text-white">
              {listing.owner_name || "ALT Partner"}
            </span>
          </p>

          <div className="space-y-3 text-sm text-zinc-300">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Member since</span>
              <span className="text-zinc-100">{sellerJoinedLabel}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Listing type</span>
              <span className="text-zinc-100 capitalize">
                {listing.service_type || "service"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Location</span>
              <span className="text-zinc-100 text-right">
                {listing.address.city}, {listing.address.state}
              </span>
            </div>
          </div>

          <p className="mt-5 text-xs text-zinc-500 leading-relaxed">
            ALT keeps seller contact details private until a booking is
            confirmed. All hosts agree to our community and safety guidelines.
          </p>
        </aside>
      </div>
    </div>
  );
}
