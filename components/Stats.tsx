"use client";

import React from "react";
import { Award, Package, Users, TrendingUp } from "lucide-react";

const STATS_DATA = [
  { label: "Year Established", value: "2011+", icon: Award, color: "text-amber-500", bg: "bg-amber-50" },
  { label: "Products Sold", value: "500K+", icon: Package, color: "text-pink-500", bg: "bg-pink-50" },
  { label: "Active Partners", value: "700+", icon: Users, color: "text-sky-500", bg: "bg-sky-50" },
  { label: "Success Rate", value: "99%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {STATS_DATA.map((stat, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center lg:items-start p-8 rounded-[2.5rem] bg-white border-2 border-zinc-50 shadow-2xl shadow-zinc-200/40 hover:scale-105 transition-transform duration-500 hover:border-zinc-100"
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-3xl ${stat.bg} ${stat.color} shadow-inner group-hover:rotate-12 transition-transform`}>
                <stat.icon size={30} strokeWidth={2.5} />
              </div>
              <div className="text-3xl font-black text-zinc-900 sm:text-5xl outfit leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] text-center lg:text-left">
                {stat.label}
              </div>
              
              {/* Card accent line */}
              <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 w-0 h-1.5 rounded-full bg-current ${stat.color} group-hover:w-12 transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
