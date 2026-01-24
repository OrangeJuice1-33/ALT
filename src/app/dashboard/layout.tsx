"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { MobileNav } from "@/components/dashboard/MobileNav";
import { Button } from "@/components/button";

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
        <Button
          variant="ghost"
          className="md:hidden fixed top-4 left-4 z-50 text-zinc-300"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </Button>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
