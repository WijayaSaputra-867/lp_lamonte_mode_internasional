"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    q: "Kualitas Kain & Material?",
    a: "Kami hanya menggunakan serat alami berkualitas tinggi. Setiap paket kemitraan menyertakan produk dengan standar Grade A, memastikan kenyamanan si kecil di setiap aktivitas.",
  },
  {
    q: "Kebijakan Retur & Kualitas?",
    a: "Integritas adalah prioritas kami. Jika terdapat produk reject, kami menyediakan proses retur yang transparan dan cepat maksimal 3 hari setelah barang diterima.",
  },
  {
    q: "Proses Pengiriman?",
    a: "Kami bekerja sama dengan kurir prioritas untuk memastikan pesanan Anda tiba dalam kondisi sempurna dengan biaya yang telah kami negosiasikan secara khusus.",
  },
  {
    q: "Fleksibilitas Harga?",
    a: "Kami memberikan standar HET untuk menjaga ekosistem tetap sehat, namun memberikan keleluasaan bagi mitra untuk menyesuaikan dengan biaya operasional lokal masing-masing.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-32 bg-background border-t border-secondary/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-[10px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mb-6 block">
              Inquiries
            </span>
            <h2 className="text-4xl md:text-7xl font-serif font-light text-secondary leading-tight mb-8">
              Fine <span className="italic">Details.</span>
            </h2>
            <p className="text-lg font-serif italic text-secondary/60 leading-relaxed max-w-sm mb-12">
              Jawaban untuk pertanyaan yang paling sering diajukan untuk membantu kelancaran operasional bisnis Anda.
            </p>
            <a href="https://wa.me/6281234567890" className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-primary border-b border-primary/20 pb-2">
               Ask Personal Questions
            </a>
          </div>

          <div className="divide-y divide-secondary/10">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group py-8 cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-6 list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-xl font-serif font-light text-secondary">{faq.q}</h3>
                  <ChevronDown size={20} className="text-zinc-300 transition-transform duration-500 group-open:rotate-180" strokeWidth={1.5} />
                </summary>
                <div className="mt-6 max-w-md">
                  <p className="text-base font-serif italic text-secondary/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
