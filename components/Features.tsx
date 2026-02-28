"use client";

import React from "react";
import { CheckCircle2, ChevronDown, ChevronUp, LucideProps } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  colors: { bg: string; text: string };
  isLarge: boolean;
}

interface FeaturesProps {
  featuresToRender: Feature[];
  isMobile: boolean;
  visibleCount: number;
  handleLoadMore: () => void;
  shuffledFeaturesLength: number;
}

export default function Features({
  featuresToRender,
  isMobile,
  visibleCount,
  handleLoadMore,
  shuffledFeaturesLength,
}: FeaturesProps) {
  return (
    <section id="features" className="py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
            Mengapa Memilih Mitra Lamonte?
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Kami memberikan ekosistem lengkap agar Anda bisa fokus pada
            penjualan tanpa pusing urusan operasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresToRender.map((feature) => {
            if (feature.isLarge) {
              return (
                <div
                  key={feature.id}
                  className="md:col-span-3 glass-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden transition-all hover:bg-white border-zinc-200 bg-white/50"
                >
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                      <div
                        className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.colors.bg} ${feature.colors.text}`}
                      >
                        <feature.icon size={32} />
                      </div>
                      <h3 className="text-3xl font-bold text-zinc-900 mb-2 outfit">
                        {feature.title}
                      </h3>
                      <p className="text-zinc-500 font-bold text-lg mb-6">
                        {feature.subtitle}
                      </p>
                      <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-2xl">
                        {feature.desc}
                      </p>
                      <div
                        className={`inline-flex items-center gap-2 rounded-xl ${feature.colors.bg} px-6 py-3 text-sm font-bold ${feature.colors.text}`}
                      >
                        <CheckCircle2 size={18} />
                        <span>{feature.badge}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                      {[1, 2, 3, 4].map((k) => (
                        <div
                          key={k}
                          className="aspect-square w-24 md:w-32 rounded-2xl bg-white p-2 border border-zinc-100 shadow-sm hover:shadow-md transition-all"
                        >
                          <img
                            src={`https://picsum.photos/200?random=${k + 20}`}
                            alt="mentoring"
                            className="object-cover w-full h-full rounded-xl"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity bg-linear-to-l from-amber-500 to-transparent"></div>
                </div>
              );
            }

            return (
              <div
                key={feature.id}
                className="glass-dark rounded-[2.5rem] p-8 transition-all hover:bg-white border-zinc-200 flex flex-col h-full bg-white/50 animate-in fade-in zoom-in duration-500"
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.colors.bg} ${feature.colors.text}`}
                >
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-1 outfit">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 font-medium text-sm mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-zinc-600 text-base leading-relaxed mb-8 grow">
                  {feature.desc}
                </p>
                <div
                  className={`mt-auto inline-flex items-center gap-2 rounded-xl ${feature.colors.bg} px-4 py-2 text-xs font-bold ${feature.colors.text}`}
                >
                  <CheckCircle2 size={14} />
                  <span>{feature.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {isMobile && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 rounded-full border-2 border-zinc-200 bg-white px-8 py-3 text-sm font-bold text-zinc-700 transition-all hover:border-primary hover:text-primary active:scale-95 shadow-sm"
            >
              {visibleCount >= shuffledFeaturesLength ? (
                <>
                  Tampilkan Lebih Sedikit <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Muat 1 Mitra Lagi <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
