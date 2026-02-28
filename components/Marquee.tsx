"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Marquee() {
  return (
    <section className="py-12 border-y border-zinc-100 bg-zinc-50 overflow-hidden">
      <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 text-zinc-400 grayscale opacity-60"
          >
            <Star size={24} fill="currentColor" />
            <span className="text-2xl font-bold outfit uppercase tracking-tighter">
              Trusted by 700+ Partners Since 2011
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
