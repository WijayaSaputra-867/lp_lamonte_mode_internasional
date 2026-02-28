"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-100 text-zinc-500 bg-zinc-50/50">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white border border-zinc-200 shadow-sm">
            <ShoppingBag className="text-primary" size={16} />
          </div>
          <span className="text-lg font-bold tracking-tight outfit text-zinc-900">
            Mitra <span className="text-primary">Lamonte</span>
          </span>
        </div>
        <div className="text-sm font-medium">
          &copy; 2026 PT Lamonte Mode Internasional. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">
            Syarat & Ketentuan
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Kebijakan Privasi
          </a>
        </div>
      </div>
    </footer>
  );
}
