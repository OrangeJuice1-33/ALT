"use client";

import { Button } from "@/components/button";
import { Menu } from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="w-full h-16 border-b border-zinc-800 bg-black flex items-center px-4 justify-between md:justify-end">
      <Button
        variant="ghost"
        className="md:hidden text-zinc-300"
        onClick={onMenuClick}
      >
        <Menu size={20} />
      </Button>
    </header>
  );
}
