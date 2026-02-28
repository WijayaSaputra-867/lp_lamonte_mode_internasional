"use client";

import React from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const FAQ_DATA = [
  {
    q: "Bagaimana cara menentukan ukuran baju untuk anak?",
    a: "Setiap paket kami menyertakan panduan Size Chart standar internasional (dalam cm). Selain itu, kami memberikan tips cara edukasi pelanggan untuk mengukur lingkar dada dan panjang badan agar tidak salah pilih ukuran.",
  },
  {
    q: "Apakah produk Lamonte bisa ditukar jika ada yang reject?",
    a: "Tentu. Kami menjamin kualitas produk kami. Jika terdapat produk reject (sobek/rusak dari pabrik), Anda dapat melakukan klaim retur maksimal 3 hari setelah barang diterima dengan melampirkan video unboxing.",
  },
  {
    q: "Berapa lama estimasi pengiriman pesanan?",
    a: "Pesanan diproses dalam 1-2 hari kerja. Lamonte bekerja sama dengan berbagai ekspedisi (JNE, J&T, Sicepat, Indah Cargo) untuk memastikan Anda mendapatkan ongkir termurah ke seluruh pelosok Indonesia.",
  },
  {
    q: "Apakah saya bebas menentukan harga jual sendiri?",
    a: "Kami menyediakan Harga Eceran Tertinggi (HET) dan Harga Jual Minimum sebagai rekomendasi agar persaingan antar mitra tetap sehat. Namun, Anda tetap memiliki fleksibilitas untuk menyesuaikan harga sesuai biaya operasional lokal.",
  },
  {
    q: "Apa perbedaan koleksi Import dan Lokal di Lamonte?",
    a: "Koleksi Import kami fokus pada tren fashion terkini (Korean/US style) dengan bahan pilihan. Sementara koleksi Lokal diproduksi di pabrik kami sendiri dengan fokus pada bahan katun adem yang sangat cocok untuk iklim Indonesia.",
  },
  {
    q: "Apakah ada biaya pendaftaran atau iuran bulanan?",
    a: "Tidak ada biaya pendaftaran (Registration Fee) maupun iuran bulanan. Investasi awal Anda sepenuhnya ditukarkan dengan stok produk fisik sesuai paket yang Anda pilih dan akses penuh ke ekosistem dukungan kami.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] opacity-30"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-6 py-2 text-xs font-black text-zinc-900 uppercase tracking-[0.3em] shadow-sm">
              <MessageCircle size={16} className="text-primary" /> Support Center
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl outfit leading-none mb-8">
              Got <br /> <span className="sky-gradient">Questions?</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-10">
              Everything you need to know about the Lamonte partnership program. If you need more help, our tea is always here.
            </p>
            <a href="https://wa.me/6281234567890" className="inline-flex items-center gap-3 text-lg font-black text-zinc-900 hover:text-primary transition-colors group">
              Still confused? Chat with Admin 
              <span className="h-10 w-10 flex items-center justify-center rounded-2xl bg-primary text-zinc-900 group-hover:bg-primary-hover transition-colors ml-2 shadow-lg shadow-primary/20">
                <MessageCircle size={18} />
              </span>
            </a>
          </div>

          <div className="lg:w-2/3 space-y-6">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group rounded-[2rem] bg-surface hover:bg-white border-2 border-zinc-50 hover:border-primary/20 p-8 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-6 text-zinc-900">
                  <h3 className="text-xl md:text-2xl font-black outfit leading-tight">{faq.q}</h3>
                  <div className="shrink-0 h-12 w-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-primary group-open:bg-primary group-open:text-zinc-900 transition-all shadow-sm">
                    <Plus size={24} className="group-open:hidden" />
                    <Minus size={24} className="hidden group-open:block" />
                  </div>
                </summary>
                <p className="mt-6 leading-relaxed text-zinc-500 font-medium text-lg lg:pr-10">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
