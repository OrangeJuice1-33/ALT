"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface GalleryItem {
  tempUrl: string;
  file: File;
  caption: string;
}

export default function VenueGalleryPage() {
  const router = useRouter();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function addItem(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload images only.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be under 10MB.");
      return;
    }

    setItems((prev) => [
      ...prev,
      { tempUrl: URL.createObjectURL(file), file, caption: "" },
    ]);
    setError(null);
  }

  function updateCaption(index: number, text: string) {
    const copy = [...items];
    copy[index].caption = text;
    setItems(copy);
  }

  function removeItem(index: number) {
    const copy = [...items];
    URL.revokeObjectURL(copy[index].tempUrl);
    copy.splice(index, 1);
    setItems(copy);
  }

  async function uploadToStorage(file: File): Promise<string> {
    const ext = file.name.split(".").pop();
    const filename = `gallery-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${ext}`;

    const { error: uploadError } = await supabaseBrowser.storage
      .from("venue-gallery")
      .upload(filename, file);

    if (uploadError) throw new Error(uploadError.message);

    const { data } = supabaseBrowser.storage
      .from("venue-gallery")
      .getPublicUrl(filename);

    if (!data?.publicUrl) throw new Error("Failed to get public URL.");

    return data.publicUrl;
  }

  async function submitGallery() {
    try {
      setError(null);

      if (items.length < 5) {
        setError("Please upload at least 5 images.");
        return;
      }

      if (items.some((i) => !i.caption.trim())) {
        setError("Every image must have a caption.");
        return;
      }

      setUploading(true);

      for (let item of items) {
        const publicUrl = await uploadToStorage(item.file);

        const { error: insertErr } = await supabaseBrowser
          .from("venue_gallery")
          .insert({
            url: publicUrl,
            caption: item.caption.trim(),
          });

        if (insertErr) throw new Error(insertErr.message);
      }

      setUploading(false);
      router.push("/add-venue/step-6-booking");
    } catch (err) {
      setUploading(false);
      setError(err instanceof Error ? err.message : "Upload failed.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
      <div className="max-w-3xl w-full bg-[#07102a]/90 p-8 rounded-xl border border-zinc-800 shadow-xl">
        <h1 className="text-3xl font-bold mb-4">Venue Gallery</h1>
        <p className="text-zinc-400 mb-4">
          Upload at least 5 images. Each image requires a caption.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-900/40 border border-red-700 rounded text-red-300">
            {error}
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={addItem}
          disabled={uploading}
          className="mb-4 block"
        />

        <div className="max-h-80 overflow-y-auto space-y-4 mb-6">
          {items.map((it, i) => (
            <div key={i} className="bg-zinc-900 p-3 rounded-md">
              <img
                src={it.tempUrl}
                className="w-full h-44 object-cover rounded-md mb-2"
              />

              <input
                type="text"
                value={it.caption}
                onChange={(e) => updateCaption(i, e.target.value)}
                placeholder="Caption required"
                className="w-full bg-zinc-800 border border-zinc-700 p-2 rounded"
              />

              <button
                onClick={() => removeItem(i)}
                className="text-red-400 mt-2 text-sm hover:text-red-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={submitGallery}
          disabled={uploading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-bold"
        >
          {uploading ? "Uploading..." : "Next"}
        </button>
      </div>
    </div>
  );
}