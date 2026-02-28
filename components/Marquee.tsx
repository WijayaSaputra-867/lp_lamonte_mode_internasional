"use client";

import React from "react";
import { Star, ShieldCheck, Zap, Heart } from "lucide-react";

export default function Marquee() {
  return (
    <section className="py-16 border-y border-secondary/5 bg-white overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap gap-24 items-center">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-24"
          >
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-sans font-black tracking-[0.5em] text-zinc-300 uppercase">Legacy</span>
              <span className="text-2xl md:text-3xl font-serif font-light text-secondary lowercase italic">700+ Partners</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-sans font-black tracking-[0.5em] text-zinc-300 uppercase">Craft</span>
              <span className="text-2xl md:text-3xl font-serif font-light text-secondary lowercase italic">Quality Certified</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-sans font-black tracking-[0.5em] text-zinc-300 uppercase">Flow</span>
              <span className="text-2xl md:text-3xl font-serif font-light text-secondary lowercase italic">Global Distribution</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-sans font-black tracking-[0.5em] text-zinc-300 uppercase">Style</span>
              <span className="text-2xl md:text-3xl font-serif font-light text-secondary lowercase italic">Modern Aesthetics</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
