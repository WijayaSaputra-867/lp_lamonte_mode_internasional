"use client";

import React from "react";
import { Star, TrendingUp } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    name: "Ibu Rahma",
    role: "Agen - Bekasi",
    text: "Dulu bingung mau mulai bisnis apa. Setelah gabung Lamonte, saya dibimbing dari nol. Sekarang penghasilan bulanan sudah jauh melebihi gaji waktu kerja dulu.",
    image: "https://i.pravatar.cc/150?u=rahma",
    stars: 5,
    success: "Profit Rp 25jt+/bln",
  },
  {
    name: "Bapak Surya",
    role: "Distributor - Surabaya",
    text: "Sistem otomatisnya juara! Saya bisa pantau stok dan orderan sambil tetap mengurus hal lain. Support sistemnya juga sangat membantu perkembangan tim saya.",
    image: "https://i.pravatar.cc/150?u=surya",
    stars: 5,
    success: "700+ Reseller Aktif",
  },
  {
    name: "Ibu Maya",
    role: "Reseller - Bandung",
    text: "Kualitas bajunya beneran premium! Pelanggan saya selalu balik lagi buat order. Marketing kit-nya sangat membantu promosi saya di media sosial.",
    image: "https://i.pravatar.cc/150?u=maya",
    stars: 5,
    success: "Repeat Order 80%",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
            Kisah Sukses Mitra Kami
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Bergabunglah dengan ratusan wirausahawan yang telah meraih
            kesuksesan bersama Lamonte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, i) => (
            <div
              key={i}
              className="glass-dark rounded-[2.5rem] p-8 transition-all hover:bg-white border-zinc-200 flex flex-col h-full bg-white/50 relative"
            >
              <div className="absolute top-8 right-8 text-primary/20">
                <Star size={40} fill="currentColor" stroke="none" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-primary"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-zinc-600 text-lg italic leading-relaxed mb-8 grow">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 outfit">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-zinc-500 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-2 text-xs font-bold text-primary">
                <TrendingUp size={14} />
                <span>{testimonial.success}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="glass rounded-3xl p-8 max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-8 border-zinc-100">
            <div className="flex -space-x-4 overflow-hidden">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="inline-block h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-zinc-100"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 40}`}
                    alt="avatar"
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-bold text-zinc-900 outfit">
                Siap Menjadi Kisah Sukses Berikutnya?
              </h4>
              <p className="text-zinc-500">
                Bergabunglah dengan 700+ mitra sukses lainnya di seluruh
                Indonesia.
              </p>
            </div>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20tertarik%20bergabung%20menjadi%20mitra%20setelah%20melihat%20kisah%20sukses."
              className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 glow"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
