"use client";

import React from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-[2.5rem] p-12 md:p-20 text-center border border-zinc-100 bg-linear-to-b from-amber-50/50 to-white overflow-hidden shadow-2xl shadow-zinc-200/50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-8 leading-[1.2]">
            Siap Mengubah Finansial Anda dengan <br /> Bisnis Fashion Anak?
          </h2>
          <p className="text-zinc-600 mb-12 text-lg max-w-2xl mx-auto font-medium">
            Kesempatan terbatas! Slot bimbingan intensif bulan ini tersisa{" "}
            <span className="text-primary font-bold">12 orang</span> saja.
            Daftar sekarang sebelum kompetitor Anda mengambil langkah lebih
            dulu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/6281234567890"
              className="flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 sm:px-10 sm:py-5 text-base sm:text-xl font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 shadow-xl shadow-amber-500/30"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" /> Hubungi
              Admin via WhatsApp
            </a>
          </div>
          <p className="mt-8 text-sm text-zinc-500 flex items-center justify-center gap-2 font-medium">
            <ShieldCheck size={16} className="text-emerald-500" /> Data Anda
            Terjamin & Transaksi Aman
          </p>
        </div>
      </div>
    </section>
  );
}
