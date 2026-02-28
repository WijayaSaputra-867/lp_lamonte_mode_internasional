"use client";

import React from "react";
import { Award, Package, Users, TrendingUp } from "lucide-react";

const STATS_DATA = [
  { label: "Tahun Berdiri", value: "2011+", icon: Award },
  { label: "Produk Terjual", value: "500Rb+", icon: Package },
  { label: "Mitra Aktif", value: "700+", icon: Users },
  { label: "Tingkat Kesuksesan", value: "99%", icon: TrendingUp },
];

export default function Stats() {
  return (
    <section className="py-20 bg-zinc-50/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {STATS_DATA.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 text-center md:text-left transition-transform hover:-translate-y-1 hover:shadow-md bg-white"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <stat.icon size={20} />
              </div>
              <div className="text-2xl font-bold text-zinc-900 sm:text-3xl outfit">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
