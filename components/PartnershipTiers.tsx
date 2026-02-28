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
  const categories = ["Hemat", "Populer", "Serius", "Strategic"];
  const filteredTiers = allTiers.filter((tier) => tier.category === isTierTab);

  return (
    <section id="tiers" className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20 lg:mb-32">
          <span className="text-[10px] font-sans font-black tracking-[0.5em] text-zinc-400 uppercase mb-6 block">
            The Path to Growth
          </span>
          <h2 className="text-5xl md:text-8xl font-serif font-light text-secondary leading-tight tracking-tight">
            Partnership <br /> <span className="italic">Manifesto.</span>
          </h2>
          <div className="max-w-2xl mx-auto mt-12 bg-white/50 border border-secondary/5 p-2 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setIsTierTab(cat)}
                className={`px-8 py-3 text-[10px] font-sans font-black uppercase tracking-[0.2em] transition-all ${
                  isTierTab === cat
                    ? "bg-secondary text-white"
                    : "text-zinc-400 hover:text-secondary hover:bg-surface-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-12 bg-white border border-secondary/5 transition-all duration-700 hover:border-primary ${
                tier.recommended ? "shadow-[0_40px_100px_-20px_rgba(244,224,77,0.15)] ring-1 ring-primary/20" : ""
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-2 text-[8px] font-sans font-black uppercase tracking-widest text-secondary shadow-lg">
                  Most Visionary Choice
                </div>
              )}

              <div className="mb-12">
                <span className="text-[10px] font-sans font-black tracking-widest text-zinc-300 uppercase block mb-4">
                  {tier.tag}
                </span>
                <h3 className="text-3xl font-serif font-light text-secondary mb-4">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 text-secondary">
                  <span className="text-sm font-serif italic">IDR</span>
                  <span className="text-5xl font-serif font-light">{tier.price}</span>
                </div>
                <p className="mt-6 text-sm font-serif italic text-secondary/60 leading-relaxed">
                   {tier.summary}
                </p>
              </div>

              <div className="grow space-y-4 mb-12">
                <div className="text-[8px] font-sans font-black tracking-[0.3em] text-zinc-400 uppercase border-b border-secondary/5 pb-2 mb-4">
                   What is Included
                </div>
                {tier.perks.map((perk, j) => (
                  <div key={j} className="flex gap-4 group/item">
                    <div className="h-5 w-px bg-primary group-hover/item:h-full transition-all duration-500"></div>
                    <span className="text-sm font-serif italic text-secondary/70">{perk}</span>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-between group">
                 <span className="text-[10px] font-sans font-black tracking-[0.3em] text-secondary uppercase">
                    Begin Journey
                 </span>
                 <div className="h-12 w-12 flex items-center justify-center border border-secondary/20 rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <ArrowRight size={16} />
                 </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-32 max-w-4xl mx-auto p-12 bg-secondary text-white flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="text-center md:text-left">
              <h4 className="text-2xl font-serif font-light italic mb-2">Belum menemukan yang sesuai?</h4>
              <p className="text-zinc-400 text-sm font-serif italic">Diskusikan visi bisnis Anda secara personal dengan tim ahli kami.</p>
           </div>
           <a
              href="https://wa.me/6281234567890"
              className="px-12 py-5 bg-primary text-secondary text-[10px] font-sans font-black uppercase tracking-[0.3em] hover:bg-white transition-colors"
           >
              Personal Consultation
           </a>
        </div>
      </div>
    </section>
  );
}
