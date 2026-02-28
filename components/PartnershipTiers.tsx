"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Tier {
  category: string;
  name: string;
  price: string;
  tag: string;
  desc: string;
  summary: string;
  perks: string[];
  recommended: boolean;
}

interface PartnershipTiersProps {
  isTierTab: string;
  setIsTierTab: (cat: string) => void;
  allTiers: Tier[];
}

export default function PartnershipTiers({
  isTierTab,
  setIsTierTab,
  allTiers,
}: PartnershipTiersProps) {
  return (
    <section id="tiers" className="py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
            Pilih Paket Kemitraan Anda
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Tentukan langkah awal Anda sesuai dengan modal dan target profit
            yang Anda inginkan.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {/* Kategori Tab */}
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-4">
            {["Hemat", "Populer", "Serius", "Strategic"].map((cat) => (
              <button
                key={cat}
                onClick={() => setIsTierTab(cat)}
                className={`px-4 py-3 md:px-6 rounded-2xl text-xs md:text-sm font-bold transition-all w-full md:w-auto ${
                  isTierTab === cat
                    ? "bg-primary text-white shadow-lg shadow-amber-500/20"
                    : "bg-white text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200"
                }`}
              >
                {cat === "Hemat" && "Paket Hemat"}
                {cat === "Populer" && "Paket Populer"}
                {cat === "Serius" && "Paket Serius"}
                {cat === "Strategic" && "Paket Strategic"}
              </button>
            ))}
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 -mx-6 px-6 pt-12 pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:pt-0 hide-scrollbar">
            {allTiers
              .filter((t) => t.category === isTierTab)
              .map((tier, i) => (
                <div
                  key={i}
                  className={`w-[280px] md:w-auto md:min-w-0 shrink-0 snap-center relative group rounded-3xl p-5 md:p-6 transition-all hover:-translate-y-2 ${
                    tier.recommended
                      ? "bg-white border-2 border-primary shadow-2xl shadow-amber-500/10"
                      : "bg-white border border-zinc-200 shadow-sm hover:shadow-xl"
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-amber-500/30 z-10 whitespace-nowrap">
                      Pilihan Terbaik
                    </div>
                  )}

                  {/* Package Image Placeholder / Tag */}
                  <div className="mb-4 aspect-[16/10] rounded-2xl bg-zinc-100 overflow-hidden relative border border-zinc-100">
                    <img
                      src={`https://picsum.photos/400/250?random=${i + 100}`}
                      alt={tier.name}
                      className="h-full w-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-md text-white px-2 py-1 rounded-lg text-[10px] font-bold">
                      {tier.tag}
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-zinc-900 mb-0.5 outfit">
                    {tier.name}
                  </h3>
                  <p className="text-[10px] text-zinc-400 mb-3 font-bold uppercase tracking-widest">
                    {tier.desc}
                  </p>

                  <div className="mb-4 md:mb-5">
                    <span className="text-xl md:text-2xl font-extrabold text-zinc-900 outfit">
                      Rp {tier.price}
                    </span>
                    <p className="mt-1 text-xs text-zinc-500 leading-relaxed min-h-8">
                      {tier.summary}
                    </p>
                  </div>

                  <div className="space-y-2 md:space-y-2.5 mb-6 md:mb-8">
                    {tier.perks.map((perk, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-xs md:text-sm text-zinc-700 font-medium"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-primary shrink-0"
                        />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20tertarik%20dengan%20${tier.name}.`}
                    className={`block w-full text-center py-2.5 md:py-3 rounded-xl text-sm font-bold transition-all ${
                      tier.recommended
                        ? "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-amber-500/20"
                        : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                    }`}
                  >
                    Ambil Paket Ini
                  </a>
                </div>
              ))}
          </div>

          <div className="flex md:hidden justify-center items-center gap-2 text-xs text-zinc-400 font-medium animate-pulse">
            <ArrowRight size={14} className="rotate-180" />
            <span>Geser untuk lihat paket lain</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
