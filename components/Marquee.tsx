"use client";

import React from "react";
import { Star, ShieldCheck, Zap, Heart } from "lucide-react";

export default function Marquee() {
  return (
    <section className='py-16 border-y border-secondary/5 bg-white overflow-hidden relative'>
      <div className='flex animate-marquee whitespace-nowrap gap-24 items-center'>
        {[...Array(10)].map((_, i) => (
          <div key={i} className='flex items-center gap-24'>
            <div className='flex items-center gap-4'>
              <span className='text-[10px] font-sans font-black tracking-[0.5em] text-zinc-300 uppercase'>
                Warisan
              </span>
              <span className='text-2xl md:text-3xl font-serif font-light text-secondary lowercase italic'>
                700+ Mitra
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-[10px] font-sans font-black tracking-[0.5em] text-zinc-300 uppercase'>
                Kerajinan
              </span>
              <span className='text-2xl md:text-3xl font-serif font-light text-secondary lowercase italic'>
                Kualitas Tersertifikasi
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-[10px] font-sans font-black tracking-[0.5em] text-zinc-300 uppercase'>
                Aliran
              </span>
              <span className='text-2xl md:text-3xl font-serif font-light text-secondary lowercase italic'>
                Distribusi Global
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-[10px] font-sans font-black tracking-[0.5em] text-zinc-300 uppercase'>
                Gaya
              </span>
              <span className='text-2xl md:text-3xl font-serif font-light text-secondary lowercase italic'>
                Estetika Modern
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
