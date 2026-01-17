"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, doc, getDoc, query, orderBy, where, updateDoc } from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { Badge } from "@/components/badge";

interface ListingData {
  id: string;
  service_type: string; // venue, decorator, caterer, dj, photographer
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
  features: Record<string, number>;
  images: string[];
  unit: string;
  price_per_unit: number;
  discounts: Array<{ min_units: number; percent: number }>;
  user_id: string;
  created_at: string;
  updated_at: string;
  availability_start_date?: string | null;
  availability_end_date?: string | null;
  excluded_dates?: string[];
  approved?: boolean;
  // Joined data
  user_name?: string;
  user_email?: string;
  user_phone?: string;
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [listings, setListings] = useState<ListingData[]>([]);
  const [expandedListing, setExpandedListing] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/auth");
        return;
      }

      try {
        // Check if user is admin
        const profileRef = doc(db, "profiles", user.uid);
        const profileSnap = await getDoc(profileRef);
        
        if (!profileSnap.exists()) {
          router.push("/");
          return;
        }

        const profileData = profileSnap.data();
        if (profileData.role !== "admin") {
          setIsAdmin(false);
          setCheckingAuth(false);
          setLoading(false);
          return;
        }

        setIsAdmin(true);
        setCheckingAuth(false);

        // Fetch all listings/services
        const listingsRef = collection(db, "listings");
        let listingsQuery;
        try {
          listingsQuery = query(listingsRef, orderBy("created_at", "desc"));
        } catch (error) {
          // If orderBy fails (index might not exist), try without ordering
          console.warn("OrderBy failed, fetching without order:", error);
          listingsQuery = query(listingsRef);
        }
        
        const listingsSnap = await getDocs(listingsQuery);
        console.log("Total listings found:", listingsSnap.docs.length);

        const listingsData: ListingData[] = [];

        // For each listing, fetch user details
        for (const listingDoc of listingsSnap.docs) {
          const listingData = listingDoc.data() as Omit<ListingData, "id" | "user_name" | "user_email" | "user_phone">;
          const listing: ListingData = {
            id: listingDoc.id,
            ...listingData,
            user_name: "N/A",
            user_email: "N/A",
            user_phone: "N/A",
          };

          // Fetch user details
          if (listingData.user_id) {
            try {
              const userRef = doc(db, "profiles", listingData.user_id);
              const userSnap = await getDoc(userRef);
              if (userSnap.exists()) {
                const userData = userSnap.data();
                listing.user_name = userData.full_name || userData.username || "Unknown User";
                listing.user_email = userData.email || "N/A";
                listing.user_phone = userData.phone || "N/A";
              } else {
                console.warn("User profile not found for user_id:", listingData.user_id);
              }
            } catch (error) {
              console.error("Error fetching user:", error);
            }
          }

          listingsData.push(listing);
        }

        console.log("Processed listings:", listingsData.length);
        setListings(listingsData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading admin dashboard:", error);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (checkingAuth || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-zinc-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-zinc-400 mb-4">You do not have admin privileges.</p>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleApproveListing = async (listingId: string, approved: boolean) => {
    try {
      const listingRef = doc(db, "listings", listingId);
      await updateDoc(listingRef, {
        approved: approved,
        updated_at: new Date().toISOString(),
      });
      
      // Update local state
      setListings(prevListings =>
        prevListings.map(listing =>
          listing.id === listingId ? { ...listing, approved } : listing
        )
      );
    } catch (error) {
      console.error("Error updating listing approval:", error);
      alert("Failed to update listing approval status");
    }
  };


  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-zinc-400">All service listings (venues, decorators, caterers, DJs, photographers)</p>
        </div>

        {listings.length === 0 ? (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 text-center">
            <p className="text-zinc-400 text-lg">No service listings found.</p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-zinc-300">
              Total Listings: <span className="font-semibold text-white">{listings.length}</span>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-zinc-800">
                      <TableHead className="text-zinc-300"></TableHead>
                      <TableHead className="text-zinc-300">Listing ID</TableHead>
                      <TableHead className="text-zinc-300">Service Type</TableHead>
                      <TableHead className="text-zinc-300">Category</TableHead>
                      <TableHead className="text-zinc-300">Name</TableHead>
                      <TableHead className="text-zinc-300">Location</TableHead>
                      <TableHead className="text-zinc-300">Price/{""}</TableHead>
                      <TableHead className="text-zinc-300">Owner</TableHead>
                      <TableHead className="text-zinc-300">Contact</TableHead>
                      <TableHead className="text-zinc-300">Images</TableHead>
                      <TableHead className="text-zinc-300">Status</TableHead>
                      <TableHead className="text-zinc-300">Created At</TableHead>
                      <TableHead className="text-zinc-300">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {listings.map((listing) => (
                      <React.Fragment key={listing.id}>
                        <TableRow className="border-zinc-800 hover:bg-zinc-800/50">
                          <TableCell>
                            <button
                              onClick={() => setExpandedListing(expandedListing === listing.id ? null : listing.id)}
                              className="px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded"
                            >
                              {expandedListing === listing.id ? "▼" : "▶"}
                            </button>
                          </TableCell>
                          <TableCell className="font-mono text-xs text-blue-400">
                            {listing.id.slice(0, 8)}...
                          </TableCell>
                          <TableCell className="font-medium">
                            <span className="capitalize">{listing.service_type}</span>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">{listing.category}</div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm font-medium">{listing.name}</div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{listing.address.city}, {listing.address.state}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {formatCurrency(listing.price_per_unit)} / {listing.unit}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div className="font-medium">{listing.user_name}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm space-y-1">
                              <div className="text-blue-400 text-xs">{listing.user_email}</div>
                              {listing.user_phone !== "N/A" && (
                                <div className="text-zinc-500 text-xs">{listing.user_phone}</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {listing.images?.length || 0} image(s)
                            </div>
                          </TableCell>
                          <TableCell>
                            {listing.approved ? (
                              <span className="px-2 py-1 text-xs bg-green-600/30 text-green-400 rounded">Approved</span>
                            ) : (
                              <span className="px-2 py-1 text-xs bg-yellow-600/30 text-yellow-400 rounded">Pending</span>
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-zinc-400">
                            {formatDate(listing.created_at)}
                          </TableCell>
                          <TableCell>
                            {listing.approved ? (
                              <button
                                onClick={() => handleApproveListing(listing.id, false)}
                                className="px-3 py-1 text-xs bg-red-600 hover:bg-red-700 rounded"
                              >
                                Reject
                              </button>
                            ) : (
                              <button
                                onClick={() => handleApproveListing(listing.id, true)}
                                className="px-3 py-1 text-xs bg-green-600 hover:bg-green-700 rounded"
                              >
                                Approve
                              </button>
                            )}
                          </TableCell>
                        </TableRow>
                        {expandedListing === listing.id && (
                          <TableRow>
                            <TableCell colSpan={13} className="bg-zinc-900/70 p-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Images */}
                                {listing.images && listing.images.length > 0 ? (
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Service Images</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                      {listing.images.map((url, idx) => (
                                        <div key={idx} className="relative">
                                          <img
                                            src={url}
                                            alt={`Image ${idx + 1}`}
                                            className="w-full h-40 object-cover rounded-lg border border-zinc-700"
                                            onError={(e) => {
                                              (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Service Images</h3>
                                    <p className="text-zinc-400 text-sm">No images available</p>
                                  </div>
                                )}
                                
                                {/* Listing Details */}
                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Listing Details</h3>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="text-zinc-400">Listing ID: </span>
                                      <span className="text-zinc-200 font-mono text-xs">{listing.id}</span>
                                    </div>
                                    <div>
                                      <span className="text-zinc-400">Service Type: </span>
                                      <span className="text-zinc-200 capitalize">{listing.service_type}</span>
                                    </div>
                                    <div>
                                      <span className="text-zinc-400">Category: </span>
                                      <span className="text-zinc-200">{listing.category}</span>
                                    </div>
                                    <div>
                                      <span className="text-zinc-400">Name: </span>
                                      <span className="text-zinc-200">{listing.name}</span>
                                    </div>
                                    <div>
                                      <span className="text-zinc-400">Description: </span>
                                      <p className="text-zinc-200 text-xs mt-1">{listing.description}</p>
                                    </div>
                                    <div>
                                      <span className="text-zinc-400">Address: </span>
                                      <p className="text-zinc-200 text-xs mt-1">
                                        {listing.address.address1}
                                        {listing.address.address2 && `, ${listing.address.address2}`}
                                        <br />
                                        {listing.address.city}, {listing.address.state}
                                        <br />
                                        {listing.address.country} - {listing.address.pincode}
                                      </p>
                                    </div>
                                    {Object.keys(listing.features || {}).length > 0 && (
                                      <div>
                                        <span className="text-zinc-400">Features: </span>
                                        <div className="mt-1 flex flex-wrap gap-2">
                                          {Object.entries(listing.features).map(([key, value]) => (
                                            <span key={key} className="px-2 py-1 bg-blue-600/30 rounded text-xs">
                                              {key} ({value})
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                    <div>
                                      <span className="text-zinc-400">Pricing: </span>
                                      <span className="text-zinc-200">
                                        {formatCurrency(listing.price_per_unit)} per {listing.unit}
                                      </span>
                                    </div>
                                    {listing.discounts && listing.discounts.length > 0 && (
                                      <div>
                                        <span className="text-zinc-400">Discounts: </span>
                                        <div className="mt-1 text-xs">
                                          {listing.discounts.map((d, idx) => (
                                            <div key={idx} className="text-zinc-200">
                                              {d.min_units}+ units: {d.percent}% off
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                    {(listing.availability_start_date || listing.availability_end_date) && (
                                      <div>
                                        <span className="text-zinc-400">Availability: </span>
                                        <div className="mt-1 text-xs text-zinc-200">
                                          {listing.availability_start_date ? (
                                            <div>
                                              From: {formatDate(listing.availability_start_date)}
                                            </div>
                                          ) : null}
                                          {listing.availability_end_date ? (
                                            <div>
                                              To: {formatDate(listing.availability_end_date)}
                                            </div>
                                          ) : null}
                                          {listing.excluded_dates && listing.excluded_dates.length > 0 && (
                                            <div className="mt-2">
                                              <span className="text-zinc-400">Excluded Dates ({listing.excluded_dates.length}): </span>
                                              <div className="mt-1 flex flex-wrap gap-1">
                                                {listing.excluded_dates.slice(0, 10).map((date, idx) => (
                                                  <span key={idx} className="px-2 py-1 bg-red-600/30 rounded text-xs">
                                                    {formatDate(date)}
                                                  </span>
                                                ))}
                                                {listing.excluded_dates.length > 10 && (
                                                  <span className="px-2 py-1 bg-zinc-700 rounded text-xs">
                                                    +{listing.excluded_dates.length - 10} more
                                                  </span>
                                                )}
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
