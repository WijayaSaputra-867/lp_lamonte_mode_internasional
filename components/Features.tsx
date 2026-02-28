/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  icon: LucideIcon;
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
    <section
      id='features'
      className='py-32 bg-surface-muted relative overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6 relative z-10'>
        <div className='mb-24 flex flex-col items-center text-center'>
          <span className='text-[10px] font-sans font-black tracking-[0.5em] text-zinc-400 uppercase mb-6'>
            Ekosistem Dukungan
          </span>
          <h2 className='text-5xl md:text-8xl font-serif font-light text-secondary leading-tight tracking-tight'>
            Pemberdayaan <br /> <span className='italic'>Komprehensif.</span>
          </h2>
          <div className='h-16 w-px bg-primary mt-12'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12'>
          {featuresToRender.map((feature, i) => (
            <div
              key={feature.id}
              className={`group flex flex-col ${feature.isLarge ? "lg:col-span-2 lg:flex-row lg:items-center lg:gap-12" : ""}`}>
              <div
                className={`mb-10 lg:mb-0 shrink-0 ${feature.isLarge ? "lg:w-1/2" : "w-full"}`}>
                <div className='relative aspect-square overflow-hidden bg-white grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000'>
                  <div className='absolute inset-x-8 inset-y-8 border border-secondary/5 flex items-center justify-center p-12 text-secondary/10 group-hover:text-primary/20 transition-colors'>
                    <feature.icon size={120} strokeWidth={0.5} />
                  </div>
                  <div className='absolute top-8 left-8 text-[8px] font-sans font-black tracking-widest text-zinc-300 uppercase'>
                    Modul {feature.id}
                  </div>
                </div>
              </div>

              <div className={feature.isLarge ? "lg:w-1/2" : "w-full"}>
                <span className='text-[10px] font-sans font-black tracking-widest text-primary uppercase mb-4 block'>
                  {feature.badge}
                </span>
                <h3 className='text-3xl font-serif font-light text-secondary mb-6 leading-tight'>
                  {feature.title}
                </h3>
                <p className='text-base font-serif italic text-secondary/60 leading-relaxed mb-8'>
                  {feature.desc}
                </p>
                <div className='h-px w-8 bg-secondary/10 group-hover:w-full group-hover:bg-primary transition-all duration-700'></div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && shuffledFeaturesLength > visibleCount && (
          <div className='mt-20 flex justify-center'>
            <button
              onClick={handleLoadMore}
              className='text-[10px] font-sans font-black uppercase tracking-[0.4em] text-secondary border-b border-primary pb-2 hover:text-primary transition-colors'>
              Temukan Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
