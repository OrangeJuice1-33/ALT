"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { MobileNav } from "@/components/dashboard/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-black text-white min-h-screen">
      {/* Sidebar (desktop) */}
      <Sidebar />

      {/* Mobile Drawer */}
      <MobileNav open={open} setOpen={setOpen} />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Topbar onMenuClick={() => setOpen(true)} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
