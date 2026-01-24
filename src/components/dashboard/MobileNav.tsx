"use client";

import { Sheet, SheetContent, SheetHeader } from "@/components/sheet";
import { NavLink } from "./NavLink";
import { Settings } from "lucide-react";

interface MobileNavProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export function MobileNav({ open, setOpen }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="p-4 bg-black text-white">
        <SheetHeader>
          <h2 className="text-xl font-semibold">ALT</h2>
        </SheetHeader>

        <nav className="mt-4 flex flex-col gap-2">
          <NavLink href="/dashboard/settings" label="Settings" icon={<Settings size={18} />} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
