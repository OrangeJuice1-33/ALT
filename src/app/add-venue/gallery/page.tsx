"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface GalleryItem {
  tempUrl: string;
  file: File | null;
  caption: string;
}

interface GalleryState {
  items: GalleryItem[];
  uploading: boolean;
  error: string | null;
}

export default function VenueGalleryPage() {
  const router = useRouter();

  const [venueId, setVenueId] = useState<string>("");
  const [showVenueIdForm, setShowVenueIdForm] = useState<boolean>(true);
  const [state, setState] = useState<GalleryState>({
    items: [],
    uploading: false,
    error: null,
  });

  // Handle venue ID submission
  async function handleVenueIdSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!venueId.trim()) {
      setState((prev) => ({
        ...prev,
        error: "Please enter a venue ID",
      }));
      return;
    }

    try {
      // Validate venue exists in database
      const { data, error: queryError } = await supabaseBrowser
        .from("venue_listings")
        .select("id")
        .eq("id", venueId.trim())
        .single();

      if (queryError || !data) {
        setState((prev) => ({
          ...prev,
          error: "Venue ID not found. Please check and try again.",
        }));
        return;
      }

      setVenueId(venueId.trim());
      setShowVenueIdForm(false);
      setState((prev) => ({
        ...prev,
        error: null,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err instanceof Error ? err.message : "Failed to validate venue ID",
      }));
    }
  }

  async function uploadToStorage(file: File): Promise<string> {
    try {
      const fileExtension = file.name.split(".").pop();
      const filename = `${venueId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExtension}`;

      const { error: uploadError } = await supabaseBrowser.storage
        .from("venue-gallery")
        .upload(filename, file);

      if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
      }

      const { data } = supabaseBrowser.storage
        .from("venue-gallery")
        .getPublicUrl(filename);

      if (!data?.publicUrl) {
        throw new Error("Failed to get public URL");
      }

      return data.publicUrl;
    } catch (err) {
      throw new Error(
        err instanceof Error ? err.message : "Unknown upload error"
      );
    }
  }

  function addItem(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith("image/")) {
        setState((prev) => ({
          ...prev,
          error: "Please select a valid image file",
        }));
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setState((prev) => ({
          ...prev,
          error: "Image size must be less than 10MB",
        }));
        return;
      }

      setState((prev) => ({
        ...prev,
        items: [
          ...prev.items,
          { tempUrl: URL.createObjectURL(file), file, caption: "" },
        ],
        error: null,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: "Failed to add image",
      }));
    }
  }

  function removeItem(index: number) {
    setState((prev) => {
      const newItems = [...prev.items];
      URL.revokeObjectURL(newItems[index].tempUrl);
      newItems.splice(index, 1);
      return {
        ...prev,
        items: newItems,
      };
    });
  }

  function updateCaption(index: number, caption: string) {
    setState((prev) => {
      const newItems = [...prev.items];
      newItems[index].caption = caption;
      return {
        ...prev,
        items: newItems,
      };
    });
  }

  async function submitGallery() {
    try {
      setState((prev) => ({
        ...prev,
        error: null,
      }));

      // Validate items
      if (state.items.length < 5) {
        setState((prev) => ({
          ...prev,
          error: "Please upload at least 5 images",
        }));
        return;
      }

      // Validate all captions are filled
      const missingCaptions = state.items.some((it) => !it.caption.trim());
      if (missingCaptions) {
        setState((prev) => ({
          ...prev,
          error: "All images must have a caption",
        }));
        return;
      }

      // Validate all files exist
      const missingFiles = state.items.some((it) => !it.file);
      if (missingFiles) {
        setState((prev) => ({
          ...prev,
          error: "Some images are missing files",
        }));
        return;
      }

      setState((prev) => ({
        ...prev,
        uploading: true,
      }));

      // Upload each image
      for (let i = 0; i < state.items.length; i++) {
        const it = state.items[i];

        try {
          const publicUrl = await uploadToStorage(it.file!);

          const { error: insertError } = await supabaseBrowser
            .from("venue_gallery")
            .insert([
              {
                venue_id: venueId,
                url: publicUrl,
                caption: it.caption.trim(),
              },
            ]);

          if (insertError) {
            throw new Error(
              `Failed to save image ${i + 1}: ${insertError.message}`
            );
          }
        } catch (uploadErr) {
          throw new Error(
            uploadErr instanceof Error
              ? uploadErr.message
              : `Failed to upload image ${i + 1}`
          );
        }
      }

      // Mark step complete
      const { error: updateError } = await supabaseBrowser
        .from("venue_listings")
        .update({ step: 6 })
        .eq("id", venueId);

      if (updateError) {
        throw new Error(`Failed to update progress: ${updateError.message}`);
      }

      // Navigate to next step with venue ID
      router.push(`/add-venue/step-6-booking?id=${venueId}`);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setState((prev) => ({
        ...prev,
        error: errorMessage,
        uploading: false,
      }));
    }
  }

  // Show venue ID form if not set
  if (showVenueIdForm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
        <div className="max-w-3xl w-full bg-[#07102a]/90 p-8 rounded-xl border border-zinc-800 shadow-xl">
          <h1 className="text-3xl font-bold mb-2">Enter Venue ID</h1>
          <p className="text-zinc-400 mb-6">
            Please enter your venue ID to proceed with the gallery upload.
          </p>

          {state.error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded text-red-200">
              {state.error}
            </div>
          )}

          <form onSubmit={handleVenueIdSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-zinc-300">
                Venue ID <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={venueId}
                onChange={(e) => setVenueId(e.target.value)}
                placeholder="Enter your venue ID"
                className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-md focus:border-zinc-600 focus:outline-none transition"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
              >
                Continue
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-md font-semibold transition"
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
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
      <div className="max-w-3xl w-full bg-[#07102a]/90 p-8 rounded-xl border border-zinc-800 shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Venue Gallery</h1>
        <p className="text-zinc-400 mb-6">
          Upload minimum 5 pictures. Each picture requires a caption.
        </p>

        {state.error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded text-red-200">
            {state.error}
          </div>
        )}

        <div className="mb-6">
          <label className="block">
            <div className="text-sm text-zinc-300 mb-2">Add images</div>
            <input
              type="file"
              accept="image/*"
              onChange={addItem}
              disabled={state.uploading}
              className="block w-full text-sm text-zinc-400
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-700
                disabled:file:bg-blue-900 disabled:file:opacity-50
                cursor-pointer disabled:cursor-not-allowed"
            />
          </label>
        </div>

        {state.items.length > 0 && (
          <div className="mb-6 p-3 bg-zinc-900/50 rounded text-sm text-zinc-400">
            {state.items.length} image{state.items.length !== 1 ? "s" : ""} uploaded
            {state.items.length < 5 && ` (need ${5 - state.items.length} more)`}
          </div>
        )}

        {state.items.length > 0 && (
          <div className="space-y-4 max-h-96 overflow-y-auto mb-6 border border-zinc-700 p-4 rounded">
            {state.items.map((it, i) => (
              <div key={i} className="bg-zinc-900 p-4 rounded-md">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-zinc-400">Image {i + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeItem(i)}
                    disabled={state.uploading}
                    className="text-xs text-red-400 hover:text-red-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Remove
                  </button>
                </div>

                <img
                  src={it.tempUrl}
                  alt={`Preview ${i + 1}`}
                  className="w-full h-44 object-cover rounded-md mb-3"
                />

                <input
                  type="text"
                  value={it.caption}
                  onChange={(e) => updateCaption(i, e.target.value)}
                  placeholder="Enter image caption (required)"
                  disabled={state.uploading}
                  className="w-full bg-zinc-800 border border-zinc-700 p-2 rounded-md text-sm placeholder-zinc-500 focus:outline-none focus:border-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                />
                {!it.caption.trim() && (
                  <p className="text-xs text-red-400 mt-1">Caption is required</p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <button
            className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:opacity-50 rounded-md font-semibold transition"
            onClick={submitGallery}
            disabled={state.uploading || state.items.length < 5}
          >
            {state.uploading ? "Uploading..." : "Next"}
          </button>

          <button
            onClick={() => {
              setShowVenueIdForm(true);
              setVenueId("");
              setState({
                items: [],
                uploading: false,
                error: null,
              });
            }}
            disabled={state.uploading}
            className="px-6 py-2 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-50 rounded-md font-semibold transition disabled:cursor-not-allowed"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}