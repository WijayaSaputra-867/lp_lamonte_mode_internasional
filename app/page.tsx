"use client";

import React from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Package, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Star,
  ShoppingBag,
  Heart,
  Award
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary glow">
              <ShoppingBag className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight outfit">Mitra <span className="text-primary">Lamonte</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Keunggulan</a>
            <a href="#tiers" className="hover:text-white transition-colors">Paket Mitra</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Admin%20Lamonte,%20saya%20tertarik%20bergabung%20menjadi%20mitra." 
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 active:scale-95 glow"
          >
            Daftar Sekarang
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <Zap size={16} />
              <span>Program Kemitraan Fashion Anak #1 di Indonesia</span>
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl outfit leading-[1.1]">
              Mulai Bisnis Fashion Anak & Raih <span className="amber-gradient">Rp 15-80 Juta/Bulan</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Bergabunglah dengan 700+ mitra sukses lainnya. Dapatkan produk berkualitas premium, sistem otomatis, dan bimbingan eksklusif untuk sukses di pasar fashion anak.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <a 
                href="https://wa.me/6281234567890" 
                className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 glow group"
              >
                Konsultasi Gratis <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex -space-x-3 overflow-hidden py-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-background bg-zinc-800">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
                <div className="flex items-center pl-6 text-sm font-medium text-zinc-400">
                  <span className="text-white font-bold mr-1">700+</span> Mitra sudah bergabung
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {[
              { label: "Tahun Berdiri", value: "2011+", icon: Award },
              { label: "Produk Terjual", value: "500Rb+", icon: Package },
              { label: "Mitra Aktif", value: "700+", icon: Users },
              { label: "Tingkat Kesuksesan", value: "99%", icon: TrendingUp },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center md:text-left transition-transform hover:-translate-y-1">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <stat.icon size={20} />
                </div>
                <div className="text-2xl font-bold text-white sm:text-3xl outfit">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl outfit mb-4 text-gradient">
              Mengapa Memilih Mitra Lamonte?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Kami memberikan ekosistem lengkap agar Anda bisa fokus pada penjualan tanpa pusing urusan operasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-dark rounded-3xl p-8 relative overflow-hidden h-[320px] group transition-all hover:bg-zinc-900/80">
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white glow">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 outfit">Sistem Otomatis & Teruji</h3>
                <p className="text-zinc-400 max-w-md">
                  Kelola orderan, cek stok real-time, dan monitor profit harian Anda melalui dashboard mitra yang user-friendly. No ribet, no pusing!
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                 <div className="h-full w-full bg-gradient-to-br from-primary/40 to-transparent blur-3xl"></div>
              </div>
            </div>
            
            <div className="glass-dark rounded-3xl p-8 transition-all hover:bg-zinc-900/80">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-white">
                <Heart size={24} className="text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 outfit">Kualitas Premium</h3>
              <p className="text-zinc-400">
                Produk kami menggunakan bahan grade A yang aman & nyaman untuk anak-anak, membuat konsumen repeat order.
              </p>
            </div>

            <div className="glass-dark rounded-3xl p-8 transition-all hover:bg-zinc-900/80">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-300">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 outfit">Bimbingan Eksklusif</h3>
              <p className="text-zinc-400">
                Dapatkan akses ke webinar rutin, materi jualan harian, dan support grup WhatsApp bersama para mentor.
              </p>
            </div>

            <div className="md:col-span-2 glass-dark rounded-3xl p-8 relative overflow-hidden transition-all hover:bg-zinc-900/80">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 outfit">Marketing Kit Lengkap</h3>
                  <p className="text-zinc-400">
                    Kami sediakan ribuan konten foto & video HD siap posting setiap hari. Tidak perlu repot sewa model atau sewa studio sendiri.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="aspect-square w-24 rounded-lg bg-zinc-800 overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <img src={`https://picsum.photos/200?random=${i}`} alt="product" className="object-cover w-full h-full" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="tiers" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl outfit mb-4">
              Pilih Paket Kemitraan Anda
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Tentukan langkah awal Anda sesuai dengan modal dan target profit yang Anda inginkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Dropshipper", desc: "Tanpa stok barang, modal minimal.", perks: ["Profit 10-15%", "Materi Jualan", "Dashboard Order"] },
              { name: "Reseller", desc: "Harga lebih murah, stok barang sendiri.", perks: ["Profit 20-30%", "Materi Jualan", "Support Grup", "Bonus Penjualan"], recommended: true },
              { name: "Agen", desc: "Suplier untuk para reseller di wilayah Anda.", perks: ["Harga Grosir Khusus", "Wilayah Eksklusif", "Marketing Kit Fisik", "Akses Mentor"] },
              { name: "Distributor", desc: "Tingkat tertinggi dengan profit maksimal.", perks: ["Harga Tangan Pertama", "Target Wilayah Besar", "Training Eksklusif", "Profit Maksimal"] },
            ].map((tier, i) => (
              <div key={i} className={`relative rounded-3xl p-8 transition-all hover:scale-[1.02] ${tier.recommended ? 'bg-primary/10 border-2 border-primary glow shadow-primary/20' : 'bg-surface border border-white/5'}`}>
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Paling Populer
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2 outfit">{tier.name}</h3>
                <p className="text-sm text-zinc-500 mb-6">{tier.desc}</p>
                <div className="space-y-4 mb-8">
                  {tier.perks.map((perk, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href="https://wa.me/6281234567890" 
                  className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${tier.recommended ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                >
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="py-12 border-y border-white/5 bg-zinc-950/30 overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-zinc-600 grayscale opacity-40">
              <Star size={24} />
              <span className="text-2xl font-bold outfit uppercase tracking-tighter">Trusted by 700+ Partners Since 2011</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative glass-dark rounded-[2.5rem] p-12 md:p-20 text-center border-primary/20 bg-gradient-to-b from-primary/10 to-transparent overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl outfit mb-8 leading-[1.2]">
              Siap Mengubah Finansial Anda dengan <br /> Bisnis Fashion Anak?
            </h2>
            <p className="text-zinc-400 mb-12 text-lg max-w-2xl mx-auto">
              Kesempatan terbatas! Slot bimbingan intensif bulan ini tersisa <span className="text-primary font-bold">12 orang</span> saja. Daftar sekarang sebelum kompetitor Anda mengambil langkah lebih dulu.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/6281234567890" 
                className="flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 text-xl font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 glow"
              >
                <MessageCircle size={24} /> Hubungi Admin via WhatsApp
              </a>
            </div>
            <p className="mt-8 text-sm text-zinc-500 flex items-center justify-center gap-2">
              <ShieldCheck size={16} /> Data Anda Terjamin & Transaksi Aman
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-zinc-600">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-zinc-800">
              <ShoppingBag className="text-zinc-500" size={16} />
            </div>
            <span className="text-lg font-bold tracking-tight outfit text-zinc-400">Mitra <span className="text-primary/50">Lamonte</span></span>
          </div>
          <div className="text-sm">
            &copy; 2026 PT Lamonte Mode Internasional. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
             <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
             <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
