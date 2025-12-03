// src/components/ProfileImageUploader.tsx
"use client";

import { useRef, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

type Props = {
  userId: string;
  onUpload: (url: string) => void;
};

export default function ProfileImageUploader({ userId, onUpload }: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const filePath = `avatars/${userId}-${Date.now()}.${ext}`;

    const { error } = await supabaseBrowser.storage.from("profiles").upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabaseBrowser.storage.from("profiles").getPublicUrl(filePath);
    onUpload(data.publicUrl);
    setUploading(false);
  }

  return (
    <div>
      <input ref={fileRef} type="file" className="hidden" accept="image/*" onChange={handleUpload} />
      <button type="button" onClick={() => fileRef.current?.click()} className="px-4 py-2 bg-purple-600 rounded-md">
        {uploading ? "Uploading…" : "Upload Profile Picture"}
      </button>
    </div>
  );
}
