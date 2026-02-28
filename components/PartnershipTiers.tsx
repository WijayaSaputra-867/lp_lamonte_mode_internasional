"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Star, Zap, Crown, Gift } from "lucide-react";

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
  const categories = ["Hemat", "Populer", "Serius", "Strategic"];

  return (
    <section id="tiers" className="py-24 bg-surface relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] opacity-40"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-sky-100 rounded-full blur-[100px] opacity-40"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-[10px] font-black text-zinc-900 uppercase tracking-[0.2em] shadow-sm">
            Partnership Levels
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl outfit leading-none mb-4">
            Pick Your <span className="amber-gradient">Success Path</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
            Choose the perfect entry point for your business size and target profit.
            Every plan includes expert mentoring.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setIsTierTab(cat)}
                className={`px-6 py-3 rounded-2xl text-xs md:text-sm font-black transition-all shadow-sm border-2 ${
                  isTierTab === cat
                    ? "bg-primary border-primary text-zinc-900 shadow-xl scale-105"
                    : "bg-white border-zinc-100 text-zinc-400 hover:border-primary hover:text-zinc-900"
                }`}
              >
                Paket {cat}
              </button>
            ))}
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 -mx-6 px-6 pt-12 pb-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:pt-0 hide-scrollbar">
            {allTiers
              .filter((t) => t.category === isTierTab)
              .map((tier, i) => (
                <div
                  key={i}
                  className={`w-[300px] md:w-auto md:min-w-0 shrink-0 snap-center relative group rounded-[3rem] p-8 transition-all hover:-translate-y-3 duration-500 ${
                    tier.recommended
                      ? "bg-white border-[3px] border-primary shadow-[0_40px_80px_-20px_rgba(244,224,77,0.3)]"
                      : "bg-white border-2 border-zinc-50 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-zinc-200"
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-xl z-20 flex items-center gap-2">
                      <Crown size={14} /> Most Popular
                    </div>
                  )}

                  <div className="relative mb-8">
                    <div className="aspect-[16/10] rounded-4xl overflow-hidden shadow-2xl shadow-zinc-200 group-hover:rotate-1 transition-transform duration-500">
                      <img
                        src={`https://picsum.photos/600/400?random=${i + 200}`}
                        alt={tier.name}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-6 flex items-center gap-2">
                        <Gift className="text-primary" size={18} />
                        <span className="text-white text-[10px] font-black uppercase tracking-widest">{tier.tag}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-zinc-900 outfit leading-none mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-[0.2em]">
                        {tier.desc}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-zinc-900 outfit tracking-tighter">
                        Rp {tier.price}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                      {tier.summary}
                    </p>

                    <div className="h-px bg-zinc-100 w-full"></div>

                    <div className="space-y-3 py-2">
                      {tier.perks.map((perk, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3"
                        >
                          <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <CheckCircle2
                              size={12}
                              className="text-emerald-600"
                            />
                          </div>
                          <span className="text-sm text-zinc-700 font-bold">{perk}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20tertarik%20dengan%20${tier.name}.`}
                      className={`block w-full text-center py-5 rounded-[1.5rem] text-sm font-black transition-all bouncy-hover ${
                        tier.recommended
                          ? "bg-primary text-zinc-900 shadow-xl shadow-primary/20"
                          : "bg-surface border-2 border-primary/20 text-zinc-900 hover:bg-primary transition-colors"
                      }`}
                    >
                      Start This Journey
                    </a>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex md:hidden justify-center items-center gap-3 text-[10px] text-primary font-black uppercase tracking-widest animate-pulse">
            <ArrowRight size={14} className="rotate-180" />
            <span>Slide to see more paths</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
