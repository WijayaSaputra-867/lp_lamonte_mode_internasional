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
        <div className='text-center mb-32 lg:mb-40'>
          <span className='text-[12px] font-sans font-black tracking-[0.7em] text-primary uppercase mb-6 block'>
            Pilih Paket Anda
          </span>
          <h2 className='text-6xl md:text-8xl font-serif font-light text-secondary leading-tight tracking-tight mb-6'>
            Solusi <br /> <span className='text-primary font-bold'>PAKET</span>{" "}
            <br />
            <span className='italic'>Sempurna untuk Bisnis Anda</span>
          </h2>
          <p className='text-xl text-secondary font-serif max-w-3xl mx-auto mb-6 leading-relaxed'>
            Mulai dari yang sederhana hingga yang komprehensif — kami punya
            paket yang tepat untuk setiap tahap pertumbuhan bisnis Anda
          </p>
          <div className='w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent mb-12'></div>

          <div className='max-w-5xl mx-auto bg-linear-to-b from-white to-primary/5 border-3 border-primary/40 p-6 rounded-3xl flex flex-wrap justify-center gap-5 shadow-lg'>
            <span className='w-full text-[11px] font-sans font-black tracking-[0.4em] text-primary/70 uppercase mb-4'>
              Pilih Kategori Paket →
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setIsTierTab(cat)}
                className={`px-14 py-5 text-[13px] font-sans font-black uppercase tracking-[0.35em] transition-all duration-400 rounded-2xl border-b-4 relative ${
                  isTierTab === cat
                    ? "text-secondary bg-primary/10 border-b-primary"
                    : "text-secondary border-b-transparent border-b-4 hover:text-secondary hover:bg-primary/5 hover:border-b-primary/50"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch'>
          {filteredTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl ${
                tier.recommended
                  ? "bg-linear-to-br from-primary/5 to-primary/8 border-3 border-primary shadow-[0_40px_120px_-20px_rgba(244,224,77,0.3)] ring-2 ring-primary/30"
                  : "bg-white border-2 border-secondary/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)]"
              }`}>
              {tier.recommended && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 z-20'>
                  <div className='relative inline-block'>
                    <div className='absolute inset-0 bg-linear-to-r from-primary to-yellow-300 rounded-full blur-lg opacity-80 scale-125'></div>
                    <div className='relative bg-linear-to-r from-primary to-primary/80 px-12 py-3 text-[12px] font-sans font-black uppercase tracking-widest text-white shadow-2xl rounded-full'>
                      ⭐ Pilihan Terbaik
                    </div>
                  </div>
                </div>
              )}

              <div className='p-8 lg:p-10 flex flex-col h-full'>
                <span
                  className={`text-[13px] font-sans font-black tracking-widest uppercase block mb-4 ${
                    tier.recommended
                      ? "text-primary font-bold"
                      : "text-primary/70"
                  }`}>
                  {tier.tag}
                </span>
                <h3
                  className={`font-serif font-bold text-secondary mb-2 ${
                    tier.recommended ? "text-4xl" : "text-3xl"
                  }`}>
                  {tier.name}
                </h3>
                <p className='text-sm text-primary/70 font-sans font-semibold tracking-wide mb-6'>
                  {tier.desc}
                </p>
                <p className='text-sm text-primary/70 font-sans font-semibold tracking-wide mb-6'>
                  {tier.desc}
                </p>

                <div
                  className={`${tier.recommended ? "bg-white/60 border-2 border-primary/30" : "bg-primary/5 border-2 border-primary/15"} p-6 lg:p-8 rounded-2xl mb-8`}>
                  <div className='flex items-baseline gap-2 text-secondary mb-2'>
                    <span
                      className={`font-serif italic font-semibold ${tier.recommended ? "text-lg" : "text-base"}`}>
                      Rp
                    </span>
                    <span
                      className={`font-serif font-light ${tier.recommended ? "text-5xl" : "text-4xl"}`}>
                      {tier.price}
                    </span>
                  </div>
                  <p
                    className={`${tier.recommended ? "text-base" : "text-sm"} font-serif italic text-secondary/70 leading-relaxed`}>
                    {tier.summary}
                  </p>
                </div>

                <div className='grow space-y-4 mb-10'>
                  <div className='text-[11px] font-sans font-black tracking-[0.3em] text-primary uppercase border-b-2 border-primary/30 pb-3 mb-5'>
                    ✓ Yang Termasuk
                  </div>
                  {tier.perks.map((perk, j) => (
                    <div key={j} className='flex gap-3 group/item'>
                      <div
                        className={`${tier.recommended ? "w-1.5 h-6" : "w-1 h-5"} bg-linear-to-b from-primary to-primary/40 rounded-full shrink-0`}></div>
                      <span
                        className={`${tier.recommended ? "text-base" : "text-sm"} font-serif italic text-secondary/80`}>
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full flex items-center justify-center gap-3 py-6 lg:py-7 px-6 font-sans font-black text-[13px] uppercase tracking-[0.4em] rounded-2xl transition-all duration-500 transform ${
                    tier.recommended
                      ? "bg-linear-to-r from-primary to-yellow-300 text-secondary hover:shadow-2xl hover:-translate-y-2 ring-4 ring-primary/30"
                      : "border-3 border-secondary/40 text-secondary hover:bg-secondary hover:text-white hover:border-secondary hover:scale-105"
                  }`}>
                  <span>Pilih Paket Ini</span>
                  <ArrowRight size={20} className='shrink-0' />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-40 max-w-5xl mx-auto p-16 bg-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-16 shadow-[0_50px_150px_-30px_rgba(0,0,0,0.25)] border-4 border-primary'>
          <div className='text-center md:text-left'>
            <h4 className='text-5xl md:text-6xl font-serif font-black mb-6 text-primary'>
              Belum Menemukan Paket yang Tepat?
            </h4>
            <p className='text-gray-400 text-xl font-sans font-semibold leading-relaxed max-w-2xl'>
              Tidak ada paket standar yang sesuai dengan kebutuhan unik Anda?
              Tim ahli kami siap merancang paket kustom eksklusif yang perfect
              untuk visi bisnis Anda.
            </p>
          </div>
          <a
            href='https://wa.me/628111189921'
            className='px-10 py-8 bg-linear-to-r from-primary to-yellow-300 text-white text-[15px] font-sans font-black uppercase tracking-[0.5em] hover:shadow-2xl transition-all duration-500 rounded-3xl whitespace-nowrap hover:scale-105 shadow-2xl ring-4 ring-primary/40 shrink-0'>
            Desain Paket
            <br />
            Custom
          </a>
        </div>
      </div>
    </section>
  );
}
