"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";

export default function VenueGalleryPage() {
  const router = useRouter();
  const params = useSearchParams();
  const venueId = params.get("id"); // passed from previous step

  const [items, setItems] = useState<
    { tempUrl: string; file: File | null; caption: string }[]
  >([]);
  const [uploading, setUploading] = useState(false);

  async function uploadToStorage(file: File) {
    const filename = `${venueId}-${Date.now()}.${file.name.split(".").pop()}`;
    const { error } = await supabaseBrowser.storage
      .from("venue-gallery")
      .upload(filename, file);

    if (error) throw error;

    const { data } = supabaseBrowser.storage
      .from("venue-gallery")
      .getPublicUrl(filename);

    return data.publicUrl;
  }

  async function addItem(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const temp = URL.createObjectURL(file);
    setItems([...items, { tempUrl: temp, file, caption: "" }]);
  }

  async function submitGallery() {
    if (items.length < 5) {
      alert("Upload at least 5 images.");
      return;
    }
    setUploading(true);

    for (const it of items) {
      const publicUrl = await uploadToStorage(it.file!);

      const { error } = await supabaseBrowser.from("venue_gallery").insert({
        venue_id: venueId,
        url: publicUrl,
        caption: it.caption,
      });

      if (error) {
        alert("Upload failed: " + error.message);
        setUploading(false);
        return;
      }
    }

    // mark listing step-5 complete
    await supabaseBrowser
      .from("venue_listings")
      .update({ step: 6 }) // progress tracker
      .eq("id", venueId);

    setUploading(false);
    router.push(`/add-venue/step-6-booking`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
      <div className="max-w-3xl w-full bg-[#07102a]/90 p-8 rounded-xl border border-zinc-800 shadow-xl">
        <h1 className="text-3xl font-bold mb-4">Venue Gallery</h1>
        <p className="text-zinc-400 mb-4">
          Upload minimum 5 pictures. Each picture requires a caption.
        </p>

        <input type="file" accept="image/*" onChange={addItem} className="mb-4" />

        <div className="space-y-4 max-h-64 overflow-y-auto mb-6">
          {items.map((it, i) => (
            <div key={i} className="bg-zinc-900 p-3 rounded-md">
              <img src={it.tempUrl} className="w-full h-44 object-cover rounded-md mb-2" />
              <input
                value={it.caption}
                onChange={(e) => {
                  const copy = [...items];
                  copy[i].caption = e.target.value;
                  setItems(copy);
                }}
                placeholder="Caption"
                className="w-full bg-zinc-800 border border-zinc-700 p-2 rounded-md"
              />
            </div>
          ))}
        </div>

        <button
          className="px-6 py-2 bg-green-600 rounded-md font-semibold w-full"
          onClick={submitGallery}
          disabled={uploading}
        >
          {uploading ? "Submitting..." : "Next"}
        </button>
      </div>
    </div>
  );
}
