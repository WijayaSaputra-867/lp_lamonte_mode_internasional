"use client";

import React from "react";
import { Zap, ArrowRight, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative pt-36 pb-20 md:pt-52 md:pb-40 overflow-hidden bg-surface">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-pink/10 blur-[120px] rounded-full pointer-events-none animate-bounce duration-[10s]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white px-5 py-2 text-xs sm:text-sm font-black text-zinc-900 uppercase tracking-tighter shadow-sm animate-in fade-in slide-in-from-left duration-700">
              <Star size={16} className="text-primary" fill="currentColor" />
              <span>#1 Kids Fashion Partnership in Indonesia</span>
            </div>
            
            <h1 className="text-5xl font-black tracking-tighter text-zinc-900 sm:text-7xl lg:text-8xl outfit leading-[0.9] animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Unlock Your <br />
              <span className="text-gradient">Dream Business</span>
            </h1>
            
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-500 sm:text-xl font-medium animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              Bangun bisnis fashion anak yang menguntungkan dengan model bisnis yang sudah teruji. Kami menyediakan <span className="text-zinc-900 font-bold underline decoration-primary decoration-4">stok produk import & lokal premium</span>, sistem dropship otomatis, hingga mentoring eksklusif untuk membantu Anda meraih profit maksimal.
            </p>
            
            {/* Business Highlights Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 w-full animate-in fade-in slide-in-from-bottom duration-700 delay-250">
              {[
                { label: "Margin Keuntungan", value: "30-50%", detail: "Per Produk" },
                { label: "Koleksi Produk", value: "5000+", detail: "SKU Aktif" },
                { label: "Pengiriman", value: "Everyday", detail: "Seluruh Indonesia" },
                { label: "Update Model", value: "Weekly", detail: "Tren Terbaru" },
              ].map((item, i) => (
                <div key={i} className="bg-white/50 border border-primary/10 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                  <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-xl font-black text-zinc-900 outfit">{item.value}</div>
                  <div className="text-[10px] font-bold text-primary italic">{item.detail}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <a
                href="#tiers"
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-5 text-lg font-black text-zinc-900 transition-all hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-2xl shadow-primary/10 group"
              >
                Get Started Now
                <ArrowRight
                  size={22}
                  className="transition-transform group-hover:translate-x-1 text-zinc-900"
                />
              </a>
              
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-white border-2 border-zinc-100 px-8 py-5 text-lg font-black text-zinc-900 transition-all hover:border-primary bouncy-hover shadow-sm">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-zinc-900">
                  <Play size={16} fill="currentColor" />
                </div>
                Watch Story
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              <div className="flex -space-x-4 overflow-hidden py-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-12 w-12 overflow-hidden rounded-2xl border-4 border-white bg-zinc-100 shadow-lg rotate-3 even:-rotate-3"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 20}`}
                      alt="mitra"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-black text-zinc-400 uppercase tracking-widest">
                Trusted by <span className="text-zinc-900">700+ Partners</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Visual Side */}
          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-400 rounded-[2rem] -rotate-12 opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-400 rounded-full blur-[80px] opacity-30"></div>
            
            <div className="relative rounded-4xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80&w=800"
                alt="Kids Fashion"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f4e04d" stroke="none" />
                  ))}
                </div>
                <p className="text-xl font-black outfit leading-tight">
                  &quot;Best decision for my family <br /> business journey!&quot;
                </p>
                <p className="mt-2 text-sm font-bold opacity-80">— Mrs. Rahma, Bekasi</p>
              </div>
            </div>

            {/* Small Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass rounded-3xl p-5 shadow-2xl animate-bounce duration-[4s] bg-white/90 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">Monthly Profit</div>
                  <div className="text-2xl font-black text-emerald-600 outfit">Rp 25.4M+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
