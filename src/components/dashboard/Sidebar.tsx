"use client";

import { Home, BarChart2, Settings } from "lucide-react";
import { NavLink } from "./NavLink";

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen border-r border-zinc-800 bg-black p-4">
      <h1 className="text-white text-xl font-semibold mb-6">ALT</h1>

      <nav className="flex flex-col gap-1">
        <NavLink href="/dashboard" label="Dashboard" icon={<Home size={18} />} />
        <NavLink href="/dashboard/analytics" label="Analytics" icon={<BarChart2 size={18} />} />
        <NavLink href="/dashboard/settings" label="Settings" icon={<Settings size={18} />} />
      </nav>
    </aside>
  );
}
