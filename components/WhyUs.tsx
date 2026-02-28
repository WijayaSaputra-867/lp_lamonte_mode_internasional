"use client";

import React from "react";
import { Factory, ShieldCheck, Truck, Users, BarChart3, Clock } from "lucide-react";

const REASONS = [
  {
    title: "Pabrik Sendiri (First Hand)",
    desc: "Kami bukan perantara. Lamonte memiliki fasilitas produksi sendiri dan akses langsung ke pabrik import terpercaya, menjamin Anda mendapatkan harga tangan pertama yang sangat kompetitif.",
    icon: Factory,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Quality Control Berlapis",
    desc: "Setiap helai pakaian melewati 3 tahap pengecekan (QC) sebelum masuk ke gudang pusat. Kami meminimalisir reject sehingga Anda bisa berjualan dengan tenang tanpa takut komplain pelanggan.",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Logistik Prioritas",
    desc: "Bekerja sama dengan ekspedisi nasional terkemuka. Mitra Lamonte mendapatkan prioritas pengiriman dan tarif cargo khusus yang membantu menekan biaya operasional pengiriman barang.",
    icon: Truck,
    color: "text-sky-600",
    bg: "bg-sky-50"
  },
  {
    title: "Update Model Tercepat",
    desc: "Fashion anak bergerak sangat cepat. Tim desain kami memastikan ada update model baru setiap minggu agar etalase toko Anda selalu segar dan mengikuti tren pasar terbaru.",
    icon: Clock,
    color: "text-pink-600",
    bg: "bg-pink-50"
  },
  {
    title: "Bimbingan Bisnis Intensif",
    desc: "Kami tidak hanya menjual baju, tapi membangun pebisnis. Dapatkan akses ke webinar rutin tentang teknik marketing, manajemen stok, hingga cara rekrut reseller untuk scaling.",
    icon: BarChart3,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Ekosistem Komunitas Positif",
    desc: "Bergabunglah dengan ribuan mitra lainnya di seluruh Indonesia. Tempat berbagi tips jualan, studi kasus sukses, dan kolaborasi bisnis yang saling mendukung pertumbuhan bersama.",
    icon: Users,
    color: "text-orange-600",
    bg: "bg-orange-50"
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-[10px] font-black text-zinc-900 uppercase tracking-[0.2em]">
              The Lamonte Advantage
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl outfit leading-none mb-6">
              Mengapa Memilih <br /> <span className="text-gradient">Lamonte?</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-8">
              Kami memahami tantangan membangun bisnis fashion. Itulah mengapa kami menyediakan infrastruktur yang lengkap untuk memastikan kesuksesan Anda.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-primary/10">
                <div className="text-3xl font-black text-primary outfit">13+</div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-tight">Tahun Pengalaman <br /> di Industri Fashion</div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-primary/10">
                <div className="text-3xl font-black text-primary outfit">1M+</div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-tight">Produk Terjual <br /> Secara Nasional</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {REASONS.map((reason, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-surface border border-zinc-50 hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/5 group">
                <div className={`mb-6 h-14 w-14 flex items-center justify-center rounded-2xl ${reason.bg} ${reason.color} group-hover:scale-110 transition-transform`}>
                  <reason.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-zinc-900 outfit mb-3">{reason.title}</h3>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed italic">
                  &quot;{reason.desc}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
