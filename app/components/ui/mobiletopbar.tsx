import { useState } from "react";
import { Link } from "@remix-run/react";
import { Menu, User } from "lucide-react"; // Or use react-icons or SVG

export default function MobileTopBar({ onSidebar, onAuth }: { onSidebar: () => void; onAuth: () => void }) {
  return (
    <div className="fixed top-0 left-0 w-full h-12 flex items-center justify-between px-4 z-50 sm:hidden">
      <button
        aria-label="Open sidebar"
        className="text-green-200 text-2xl"
        onClick={onSidebar}
      >
        <Menu size={30} />
      </button>
      <img
        src="/Hades_II_Logo.png"
        alt="Hades II"
        className="h-8 object-contain mx-auto select-none"
        draggable={false}
      />
      <button
        aria-label="Open user menu"
        className="text-green-200 text-2xl"
        onClick={onAuth}
      >
        <User size={28} />
      </button>
    </div>
  );
}