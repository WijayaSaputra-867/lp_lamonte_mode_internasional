"use client";

import React from "react";

const FAQ_DATA = [
  {
    q: "Bagaimana cara mendaftar menjadi mitra?",
    a: "Anda bisa langsung klik tombol 'Daftar Sekarang' atau hubungi admin via WhatsApp untuk mendapatkan formulir pendaftaran dan informasi lebih lanjut.",
  },
  {
    q: "Apakah ada biaya pendaftaran?",
    a: "Biaya pendaftaran bervariasi tergantung paket mitra yang Anda pilih. Untuk Dropshipper, kami menawarkan opsi pendaftaran dengan modal yang sangat terjangkau.",
  },
  {
    q: "Apakah saya harus menyetok barang?",
    a: "Tidak harus. Jika Anda memilih paket Dropshipper, Anda tidak perlu menyetok barang. Kami yang akan melakukan pengemasan dan pengiriman ke konsumen Anda.",
  },
  {
    q: "Bentuk dukungan apa yang akan saya dapatkan?",
    a: "Mitra mendapatkan akses ke Marketing Kit (foto/video produk), bimbingan rutin melalui webinar, support grup WhatsApp, dan dashboard pemantauan stok & order.",
  },
  {
    q: "Kapan produk baru dirilis?",
    a: "Kami merilis model baju anak terbaru secara rutin setiap bulan untuk memastikan koleksi Anda selalu up-to-date dengan tren pasar.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Temukan jawaban atas pertanyaan umum mengenai program kemitraan
            Lamonte.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <details
              key={i}
              className="group glass-dark rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border-zinc-200"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900">
                <h3 className="text-lg font-bold outfit">{faq.q}</h3>
                <div className="shrink-0 transition-transform duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 leading-relaxed text-zinc-600 font-medium">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
