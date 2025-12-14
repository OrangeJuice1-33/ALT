"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface VenueDetailsState {
  service: string;
  category: string;
  name: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  googlePin: string;
}

export default function Step2VenueDetails() {
  const router = useRouter();

  const [formData, setFormData] = useState<VenueDetailsState>({
    service: "",
    category: "",
    name: "",
    address1: "",
    address2: "",
    country: "India",
    state: "",
    city: "",
    pincode: "",
    googlePin: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm(): boolean {
    const newErrors: Record<string, string> = {};

    if (!formData.service) {
      newErrors.service = "Service type is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Venue name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Venue name must be at least 3 characters";
    }

    if (!formData.address1.trim()) {
      newErrors.address1 = "Address line 1 is required";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{5,6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = "Pincode must be 5-6 digits";
    }

    if (formData.googlePin && !isValidUrl(formData.googlePin)) {
      newErrors.googlePin = "Please enter a valid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return url.includes("maps.google.com") || url.includes("google.com/maps");
    } catch {
      return false;
    }
  }

  function handleInputChange(
    field: keyof VenueDetailsState,
    value: string
  ): void {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  }

  function handleNext(e: React.FormEvent): void {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const query = new URLSearchParams({
      service: formData.service,
      category: formData.category,
      name: formData.name.trim(),
      address1: formData.address1.trim(),
      address2: formData.address2.trim(),
      country: formData.country.trim(),
      state: formData.state.trim(),
      city: formData.city.trim(),
      pincode: formData.pincode.trim(),
      googlePin: formData.googlePin.trim(),
    }).toString();

    router.push(`/add-venue/description?${query}`);
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
      <div className="w-full max-w-2xl bg-[#07102a]/80 border border-zinc-800 rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Venue Details</h2>
        <p className="text-center text-zinc-400 mb-8">
          Fill in all the required details below
        </p>

        <form onSubmit={handleNext} className="space-y-5">
          {/* Service */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Service Type <span className="text-red-400">*</span>
            </label>
            <select
              value={formData.service}
              onChange={(e) => handleInputChange("service", e.target.value)}
              className={`w-full bg-zinc-900 rounded-md border p-3 transition ${
                errors.service
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-700 focus:border-zinc-600"
              } focus:outline-none`}
            >
              <option value="">Select a service</option>
              <option value="venue">Venue</option>
              <option value="decorator">Decorator</option>
              <option value="caterer">Caterer</option>
              <option value="dj">DJ</option>
              <option value="photographer">Photographer</option>
            </select>
            {errors.service && (
              <p className="text-xs text-red-400 mt-1">{errors.service}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Category <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
              placeholder="e.g., Luxury, Budget, Premium"
              className={`w-full bg-zinc-900 rounded-md border p-3 transition ${
                errors.category
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-700 focus:border-zinc-600"
              } focus:outline-none`}
            />
            {errors.category && (
              <p className="text-xs text-red-400 mt-1">{errors.category}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Name of venue / service <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className={`w-full bg-zinc-900 rounded-md border p-3 transition ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-700 focus:border-zinc-600"
              } focus:outline-none`}
              placeholder="Ex: Club Alpha, Royal Decorators, Bombay Catering Co."
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              maxLength={100}
            />
            {errors.name && (
              <p className="text-xs text-red-400 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Address 1 */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Address Line 1 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className={`w-full bg-zinc-900 rounded-md border p-3 transition ${
                errors.address1
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-700 focus:border-zinc-600"
              } focus:outline-none`}
              placeholder="Street / Building / Locality"
              value={formData.address1}
              onChange={(e) => handleInputChange("address1", e.target.value)}
              maxLength={100}
            />
            {errors.address1 && (
              <p className="text-xs text-red-400 mt-1">{errors.address1}</p>
            )}
          </div>

          {/* Address 2 */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Address Line 2 <span className="text-zinc-500">(optional)</span>
            </label>
            <input
              type="text"
              className="w-full bg-zinc-900 rounded-md border border-zinc-700 p-3 focus:border-zinc-600 focus:outline-none transition"
              placeholder="Landmark / Area (optional)"
              value={formData.address2}
              onChange={(e) => handleInputChange("address2", e.target.value)}
              maxLength={100}
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Country <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className={`w-full bg-zinc-900 rounded-md border p-3 transition ${
                errors.country
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-700 focus:border-zinc-600"
              } focus:outline-none`}
              placeholder="India"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              maxLength={50}
            />
            {errors.country && (
              <p className="text-xs text-red-400 mt-1">{errors.country}</p>
            )}
          </div>

          {/* State + City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 text-zinc-300">
                State <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className={`w-full bg-zinc-900 rounded-md border p-3 transition ${
                  errors.state
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-700 focus:border-zinc-600"
                } focus:outline-none`}
                placeholder="Ex: Maharashtra"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                maxLength={50}
              />
              {errors.state && (
                <p className="text-xs text-red-400 mt-1">{errors.state}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2 text-zinc-300">
                City <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className={`w-full bg-zinc-900 rounded-md border p-3 transition ${
                  errors.city
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-700 focus:border-zinc-600"
                } focus:outline-none`}
                placeholder="Ex: Mumbai"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                maxLength={50}
              />
              {errors.city && (
                <p className="text-xs text-red-400 mt-1">{errors.city}</p>
              )}
            </div>
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Pincode <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className={`w-full bg-zinc-900 rounded-md border p-3 transition ${
                errors.pincode
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-700 focus:border-zinc-600"
              } focus:outline-none`}
              placeholder="Ex: 400001"
              value={formData.pincode}
              onChange={(e) => handleInputChange("pincode", e.target.value)}
              maxLength={6}
            />
            {errors.pincode && (
              <p className="text-xs text-red-400 mt-1">{errors.pincode}</p>
            )}
          </div>

          {/* Google Pin */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Google Maps Pin URL{" "}
              <span className="text-zinc-500">(optional)</span>
            </label>
            <input
              type="url"
              className={`w-full bg-zinc-900 rounded-md border p-3 transition ${
                errors.googlePin
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-700 focus:border-zinc-600"
              } focus:outline-none`}
              placeholder="https://maps.google.com/..."
              value={formData.googlePin}
              onChange={(e) => handleInputChange("googlePin", e.target.value)}
            />
            {errors.googlePin && (
              <p className="text-xs text-red-400 mt-1">{errors.googlePin}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:opacity-50 rounded-md p-3 text-lg font-semibold transition"
            >
              {isSubmitting ? "Processing..." : "Next →"}
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 bg-zinc-700 hover:bg-zinc-600 rounded-md font-semibold transition"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}