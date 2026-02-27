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
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary glow">
              <ShoppingBag className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight outfit text-zinc-900">Mitra <span className="text-primary">Lamonte</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#features" className="hover:text-primary transition-colors">Keunggulan</a>
            <a href="#tiers" className="hover:text-primary transition-colors">Paket Mitra</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
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
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0,transparent_70%)] pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              <Zap size={16} />
              <span>Program Kemitraan Fashion Anak #1 di Indonesia</span>
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl outfit leading-[1.1]">
              Mulai Bisnis Fashion Anak & Raih <span className="amber-gradient">Rp 15-80 Juta/Bulan</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              Bergabunglah dengan 700+ mitra sukses lainnya. Dapatkan produk berkualitas premium, sistem otomatis, dan bimbingan eksklusif untuk sukses di pasar fashion anak.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <a 
                href="https://wa.me/6281234567890" 
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 glow-soft group"
              >
                Konsultasi Gratis <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex -space-x-3 overflow-hidden py-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-zinc-100">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
                <div className="flex items-center pl-6 text-sm font-medium text-zinc-500">
                  <span className="text-zinc-900 font-bold mr-1">700+</span> Mitra sudah bergabung
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
              <div key={i} className="glass rounded-2xl p-6 text-center md:text-left transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon size={20} />
                </div>
                <div className="text-2xl font-bold text-zinc-900 sm:text-3xl outfit">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
              Mengapa Memilih Mitra Lamonte?
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
              Kami memberikan ekosistem lengkap agar Anda bisa fokus pada penjualan tanpa pusing urusan operasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-dark rounded-3xl p-8 relative overflow-hidden h-[320px] group transition-all hover:bg-white border-zinc-200">
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white glow">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2 outfit">Sistem Otomatis & Teruji</h3>
                <p className="text-zinc-600 max-w-md text-base leading-relaxed">
                  Kelola orderan, cek stok real-time, dan monitor profit harian Anda melalui dashboard mitra yang user-friendly. No ribet, no pusing!
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                 <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.5)_0,transparent_70%)] blur-3xl"></div>
              </div>
            </div>
            
            <div className="glass-dark rounded-3xl p-8 transition-all hover:bg-white border-zinc-200">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
                <Heart size={24} className="text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2 outfit">Kualitas Premium</h3>
              <p className="text-zinc-600 text-base leading-relaxed">
                Produk kami menggunakan bahan grade A yang aman & nyaman untuk anak-anak, membuat konsumen repeat order.
              </p>
            </div>

            <div className="glass-dark rounded-3xl p-8 transition-all hover:bg-white border-zinc-200">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2 outfit">Bimbingan Eksklusif</h3>
              <p className="text-zinc-600 text-base leading-relaxed">
                Dapatkan akses ke webinar rutin, materi jualan harian, dan support grup WhatsApp bersama para mentor.
              </p>
            </div>

            <div className="md:col-span-2 glass-dark rounded-3xl p-8 relative overflow-hidden transition-all hover:bg-white border-zinc-200">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2 outfit">Marketing Kit Lengkap</h3>
                  <p className="text-zinc-600 text-base leading-relaxed">
                    Kami sediakan ribuan konten foto & video HD siap posting setiap hari. Tidak perlu repot sewa model atau sewa studio sendiri.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="aspect-square w-24 rounded-lg bg-zinc-100 overflow-hidden border border-zinc-200 grayscale hover:grayscale-0 transition-all cursor-pointer">
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
      <section id="tiers" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
              Pilih Paket Kemitraan Anda
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
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
              <div key={i} className={`relative rounded-3xl p-8 transition-all hover:translate-y-[-4px] ${tier.recommended ? 'bg-amber-50/50 border-2 border-primary shadow-xl shadow-amber-200/20' : 'bg-white border border-zinc-200 shadow-sm hover:shadow-md'}`}>
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
                    Paling Populer
                  </div>
                )}
                <h3 className="text-xl font-bold text-zinc-900 mb-2 outfit">{tier.name}</h3>
                <p className="text-sm text-zinc-500 mb-6 font-medium">{tier.desc}</p>
                <div className="space-y-4 mb-8">
                  {tier.perks.map((perk, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-zinc-700">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href="https://wa.me/6281234567890" 
                  className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${tier.recommended ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-amber-500/20' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}
                >
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
              Temukan jawaban atas pertanyaan umum mengenai program kemitraan Lamonte.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              { 
                q: "Bagaimana cara mendaftar menjadi mitra?", 
                a: "Anda bisa langsung klik tombol 'Daftar Sekarang' atau hubungi admin via WhatsApp untuk mendapatkan formulir pendaftaran dan informasi lebih lanjut." 
              },
              { 
                q: "Apakah ada biaya pendaftaran?", 
                a: "Biaya pendaftaran bervariasi tergantung paket mitra yang Anda pilih. Untuk Dropshipper, kami menawarkan opsi pendaftaran dengan modal yang sangat terjangkau." 
              },
              { 
                q: "Apakah saya harus menyetok barang?", 
                a: "Tidak harus. Jika Anda memilih paket Dropshipper, Anda tidak perlu menyetok barang. Kami yang akan melakukan pengemasan dan pengiriman ke konsumen Anda." 
              },
              { 
                q: "Bentuk dukungan apa yang akan saya dapatkan?", 
                a: "Mitra mendapatkan akses ke Marketing Kit (foto/video produk), bimbingan rutin melalui webinar, support grup WhatsApp, dan dashboard pemantauan stok & order." 
              },
              { 
                q: "Kapan produk baru dirilis?", 
                a: "Kami merilis model baju anak terbaru secara rutin setiap bulan untuk memastikan koleksi Anda selalu up-to-date dengan tren pasar." 
              },
            ].map((faq, i) => (
              <details key={i} className="group glass-dark rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border-zinc-200">
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

      {/* Trust & Social Proof */}
      <section className="py-12 border-y border-zinc-100 bg-zinc-50 overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-zinc-400 grayscale opacity-60">
              <Star size={24} fill="currentColor" />
              <span className="text-2xl font-bold outfit uppercase tracking-tighter">Trusted by 700+ Partners Since 2011</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative rounded-[2.5rem] p-12 md:p-20 text-center border border-zinc-100 bg-gradient-to-b from-amber-50/50 to-white overflow-hidden shadow-2xl shadow-zinc-200/50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-8 leading-[1.2]">
              Siap Mengubah Finansial Anda dengan <br /> Bisnis Fashion Anak?
            </h2>
            <p className="text-zinc-600 mb-12 text-lg max-w-2xl mx-auto font-medium">
              Kesempatan terbatas! Slot bimbingan intensif bulan ini tersisa <span className="text-primary font-bold">12 orang</span> saja. Daftar sekarang sebelum kompetitor Anda mengambil langkah lebih dulu.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/6281234567890" 
                className="flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 sm:px-10 sm:py-5 text-base sm:text-xl font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 shadow-xl shadow-amber-500/30"
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" /> Hubungi Admin via WhatsApp
              </a>
            </div>
            <p className="mt-8 text-sm text-zinc-500 flex items-center justify-center gap-2 font-medium">
              <ShieldCheck size={16} className="text-emerald-500" /> Data Anda Terjamin & Transaksi Aman
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100 text-zinc-500 bg-zinc-50/50">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white border border-zinc-200 shadow-sm">
              <ShoppingBag className="text-primary" size={16} />
            </div>
            <span className="text-lg font-bold tracking-tight outfit text-zinc-900">Mitra <span className="text-primary">Lamonte</span></span>
          </div>
          <div className="text-sm font-medium">
            &copy; 2026 PT Lamonte Mode Internasional. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium">
             <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
             <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
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
