"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

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
  setIsTierTab: (tab: string) => void;
  allTiers: Tier[];
}

export default function PartnershipTiers({
  isTierTab,
  setIsTierTab,
  allTiers,
}: PartnershipTiersProps) {
  const categories = ["Hemat", "Populer", "Serius", "Strategis"];
  const filteredTiers = allTiers.filter((tier) => tier.category === isTierTab);

  return (
    <section
      id='tiers'
      className='py-40 bg-linear-to-b from-white via-primary/8 to-white'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='text-center mb-28 lg:mb-36'>
          <span className='text-[11px] font-sans font-black tracking-[0.6em] text-primary uppercase mb-8 block'>
            Jalan Menuju Pertumbuhan
          </span>
          <h2 className='text-6xl md:text-9xl font-serif font-light text-secondary leading-tight tracking-tight mb-4'>
            Manifesto <br />{" "}
            <span className='italic text-primary'>Kemitraan.</span>
          </h2>
          <p className='text-lg text-secondary/70 font-serif max-w-2xl mx-auto mb-12'>
            Pilih paket yang tepat untuk memulai perjalanan kesuksesan bisnis
            Anda
          </p>

          <div className='max-w-4xl mx-auto bg-white border-2 border-primary/20 p-4 rounded-2xl flex flex-wrap justify-center gap-4'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setIsTierTab(cat)}
                className={`px-12 py-4 text-[12px] font-sans font-black uppercase tracking-[0.3em] transition-all duration-300 rounded-xl ${
                  isTierTab === cat
                    ? "bg-secondary text-white shadow-xl scale-105"
                    : "text-secondary/60 hover:text-secondary hover:bg-primary/10 border border-secondary/20"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-end px-4'>
          {filteredTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                tier.recommended
                  ? "lg:col-span-2 lg:row-span-1 bg-linear-to-br from-primary/5 to-primary/10 border-3 border-primary shadow-[0_60px_140px_-30px_rgba(244,224,77,0.35)] scale-105 md:scale-110"
                  : "bg-white border-2 border-secondary/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] hover:border-primary/30"
              }`}
              style={tier.recommended ? { minHeight: "600px" } : {}}>
              {tier.recommended && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 z-10'>
                  <div className='relative inline-block'>
                    <div className='absolute inset-0 bg-linear-to-r from-primary to-yellow-300 rounded-full blur-md opacity-75'></div>
                    <div className='relative bg-linear-to-r from-primary to-primary/80 px-10 py-3 text-[11px] font-sans font-black uppercase tracking-widest text-white shadow-2xl rounded-full'>
                      ⭐ Pilihan Terbaik
                    </div>
                  </div>
                </div>
              )}

              <div className={`${tier.recommended ? "p-10 pt-16" : "p-12"}`}>
                <span
                  className={`text-[12px] font-sans font-black tracking-widest uppercase block mb-5 ${
                    tier.recommended ? "text-primary" : "text-primary/70"
                  }`}>
                  {tier.tag}
                </span>
                <h3
                  className={`font-serif font-light text-secondary mb-8 ${
                    tier.recommended ? "text-5xl" : "text-4xl"
                  }`}>
                  {tier.name}
                </h3>

                <div
                  className={`${tier.recommended ? "bg-white/80" : "bg-primary/8"} p-8 rounded-2xl mb-10 border-2 border-primary/20`}>
                  <div className='flex items-baseline gap-3 text-secondary mb-2'>
                    <span
                      className={`font-serif italic font-semibold ${tier.recommended ? "text-xl" : "text-lg"}`}>
                      Rp
                    </span>
                    <span
                      className={`font-serif font-light ${tier.recommended ? "text-6xl" : "text-5xl"}`}>
                      {tier.price}
                    </span>
                  </div>
                  <p
                    className={`${tier.recommended ? "text-base" : "text-sm"} font-serif italic text-secondary/70`}>
                    {tier.summary}
                  </p>
                </div>

                <div
                  className={`grow space-y-5 mb-12 ${tier.recommended ? "pl-4" : ""}`}>
                  <div className='text-[11px] font-sans font-black tracking-[0.3em] text-primary uppercase border-b-2 border-primary/30 pb-4 mb-6'>
                    ✓ Yang Termasuk
                  </div>
                  {tier.perks.map((perk, j) => (
                    <div key={j} className='flex gap-4 group/item'>
                      <div
                        className={`${tier.recommended ? "h-7 w-1.5" : "h-6 w-1"} bg-linear-to-b from-primary to-primary/30 group-hover/item:h-8 transition-all duration-500 rounded-full`}></div>
                      <span
                        className={`${tier.recommended ? "text-base font-medium" : "text-sm"} font-serif italic text-secondary/80`}>
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full flex items-center justify-between group px-8 py-6 rounded-2xl font-sans font-black text-[12px] uppercase tracking-[0.4em] transition-all duration-500 ${
                    tier.recommended
                      ? "bg-linear-to-r from-primary to-yellow-300 text-secondary hover:shadow-2xl hover:scale-105"
                      : "border-2 border-secondary/30 text-secondary hover:bg-secondary hover:text-white hover:border-secondary"
                  }`}>
                  <span>Mulai Sekarang</span>
                  <div
                    className={`h-16 w-16 flex items-center justify-center rounded-full transition-all duration-500 ${
                      tier.recommended
                        ? "bg-secondary group-hover:scale-110"
                        : "border border-current group-hover:bg-current"
                    }`}>
                    <ArrowRight size={22} />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-40 max-w-5xl mx-auto p-16 bg-linear-to-r from-secondary via-secondary to-secondary/95 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-16 shadow-[0_50px_150px_-30px_rgba(0,0,0,0.25)] border-2 border-primary/30'>
          <div className='text-center md:text-left'>
            <h4 className='text-4xl md:text-5xl font-serif font-light italic mb-4 text-white'>
              Belum Menemukan Pilihan Tepat?
            </h4>
            <p className='text-zinc-200 text-lg font-serif italic leading-relaxed'>
              Tim ahli kami siap merancang paket khusus yang sempurna untuk
              kebutuhan bisnis Anda. Mari kita diskusikan visi Anda lebih
              detail.
            </p>
          </div>
          <a
            href='https://wa.me/628111189921'
            className='px-16 py-8 bg-linear-to-r from-primary to-yellow-300 text-secondary text-[13px] font-sans font-black uppercase tracking-[0.4em] hover:shadow-2xl transition-all duration-500 rounded-2xl whitespace-nowrap hover:scale-110 shadow-xl'>
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
