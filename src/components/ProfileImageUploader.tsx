// src/components/ProfileImageUploader.tsx
"use client";

import { useRef, useState } from "react";
import { storage } from "@/lib/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
    const filePath = `profiles/avatars/${userId}-${Date.now()}.${ext}`;

    try {
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      onUpload(downloadURL);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
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
