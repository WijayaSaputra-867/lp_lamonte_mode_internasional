"use client";

import React from "react";
import { Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0,transparent_70%)] pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
            <Zap size={16} />
            <span>Program Kemitraan Fashion Anak #1 di Indonesia</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl outfit leading-[1.1]">
            Mulai Bisnis Fashion Anak & Raih{" "}
            <span className="amber-gradient">Rp 15-80 Juta/Bulan</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            Bergabunglah dengan 700+ mitra sukses lainnya. Dapatkan produk
            berkualitas premium, sistem otomatis, dan bimbingan eksklusif
            untuk sukses di pasar fashion anak.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#tiers"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 glow-soft group"
            >
              Rekomendasi Paket{" "}
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <div className="flex -space-x-3 overflow-hidden py-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-zinc-100"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="avatar"
                  />
                </div>
              ))}
              <div className="flex items-center pl-6 text-sm font-medium text-zinc-500">
                <span className="text-zinc-900 font-bold mr-1">700+</span>{" "}
                Mitra sudah bergabung
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
