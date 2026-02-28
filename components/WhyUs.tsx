"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Text Content - Editorial Style */}
          <div className="order-2 lg:order-1 max-w-xl">
            <div className="mb-12 inline-flex items-center gap-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-[10px] font-sans font-black tracking-[0.4em] text-secondary uppercase">
                Ethical Philosophy
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-light text-secondary leading-[1.1] mb-10">
              Membangun Masa Depan Melalui <span className="italic">Kualitas.</span>
            </h2>
            
            <div className="space-y-8 font-serif text-lg text-secondary/70 leading-relaxed italic">
              <p>
                Kami percaya bahwa di balik setiap helai pakaian, terdapat cerita tentang dedikasi dan kejujuran. Produksi kami bukan sekadar memenuhi permintaan pasar, tapi menjaga standar yang telah kami bangun selama 13 tahun.
              </p>
              <p>
                Dengan memiliki fasilitas produksi sendiri, kami memastikan setiap tangan yang bekerja mendapatkan apresiasi yang layak, dan setiap produk yang Anda terima adalah perwujudan dari ketelitian yang tulus.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-secondary/10 pt-12">
              <div>
                <span className="block text-4xl font-serif font-light text-secondary mb-2">13th</span>
                <span className="text-[10px] font-sans font-black tracking-[0.2em] text-zinc-400 uppercase">Legacy in Fashion</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-light text-secondary mb-2">100%</span>
                <span className="text-[10px] font-sans font-black tracking-[0.2em] text-zinc-400 uppercase">Original Identity</span>
              </div>
            </div>
            
            <a href="#tiers" className="mt-16 inline-flex items-center gap-4 text-[10px] font-sans font-black uppercase tracking-[0.3em] text-secondary group">
              Join Our Mission
              <div className="h-10 w-10 flex items-center justify-center border border-secondary/20 rounded-full group-hover:bg-secondary group-hover:text-white transition-all">
                <ArrowRight size={14} />
              </div>
            </a>
          </div>

          {/* Image Composition */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-[2s]">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200"
                alt="Our Workshop"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3s]"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-12 -left-12 hidden md:block bg-white p-12 max-w-xs shadow-2xl">
              <span className="text-[8px] font-sans font-black tracking-[0.4em] text-primary uppercase mb-4 block">Craftsmanship</span>
              <p className="text-sm font-serif italic text-secondary/60 leading-relaxed">
                Tangan-tangan ahli yang memastikan setiap detail jahitan adalah bukti nyata dari kasih sayang untuk buah hati Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
