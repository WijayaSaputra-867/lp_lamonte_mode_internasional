"use client";

import React from "react";
import { Star, ShieldCheck, Zap, Heart } from "lucide-react";

export default function Marquee() {
  return (
    <section className="py-14 border-y border-zinc-100 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-16"
          >
            <div className="flex items-center gap-3">
              <Star size={24} className="text-amber-400" fill="currentColor" />
              <span className="text-2xl font-black outfit uppercase tracking-tighter text-zinc-900">
                700+ HAPPY PARTNERS
              </span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={24} className="text-sky-500" fill="currentColor" />
              <span className="text-2xl font-black outfit uppercase tracking-tighter text-zinc-900">
                CERTIFIED QUALITY
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Zap size={24} className="text-amber-500" fill="currentColor" />
              <span className="text-2xl font-black outfit uppercase tracking-tighter text-zinc-900">
                FAST DROP-SHIPPING
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Heart size={24} className="text-pink-500" fill="currentColor" />
              <span className="text-2xl font-black outfit uppercase tracking-tighter text-zinc-900">
                KIDS FAVORITE STYLE
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
