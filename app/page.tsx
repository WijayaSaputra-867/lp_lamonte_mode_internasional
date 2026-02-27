"use client";

import React, { useState } from "react";
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
  Award,
  Menu,
  X
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTierTab, setIsTierTab] = useState("Populer");

  const allTiers = [
    {
      category: "Hemat",
      name: "Paket Sampel Murmer",
      price: "650.000",
      tag: "Tes Pasar Paling Hemat",
      desc: "25 pcs campur ukuran",
      summary: "Untuk tes minat pasar tanpa takut stok numpuk.",
      perks: ["Stok ringan, aman untuk mulai", "Mix model laris untuk display & foto", "Enak dijual ke tetangga/teman"],
      recommended: false
    },
    {
      category: "Hemat",
      name: "Paket Mix Sampel Murmer",
      price: "850.000",
      tag: "Sample Mix Import Lokal",
      desc: "30 pcs (mix import lokal)",
      summary: "Lebih banyak varian untuk lihat selera pasar.",
      perks: ["Kombinasi import & lokal pilihan", "Cocok untuk foto katalog awal", "Siap dijual online & offline"],
      recommended: false
    },
    {
      category: "Populer",
      name: "Paket Usaha Mix Fashion",
      price: "1.000.000",
      tag: "Mulai Usaha Serius",
      desc: "36 pcs (mix import lokal)",
      summary: "Pas untuk kamu yang siap jualan rutin.",
      perks: ["Komposisi harian & semi-event", "Bisa dijual satuan atau paket", "Enak mulai masuk marketplace"],
      recommended: false
    },
    {
      category: "Populer",
      name: "Paket Super Trial",
      price: "1.200.000",
      tag: "Ngetest Market Online",
      desc: "30 pcs",
      summary: "Ideal untuk tes market di IG, TikTok & WA.",
      perks: ["Isi model fotogenik untuk konten", "Support foto & caption", "Aman untuk tes harga & respon pasar"],
      recommended: false
    },
    {
      category: "Populer",
      name: "Paket Kombinasi",
      price: "1.650.000",
      tag: "Paket Kombinasi Flexible",
      desc: "45 pcs (mix import lokal)",
      summary: "Untuk yang ingin varian ukuran & model lebih banyak.",
      perks: ["Nyaman untuk keluarga & online", "Enak untuk paket bundling", "Stok masih ringan tapi 'jalan'"],
      recommended: false
    },
    {
      category: "Populer",
      name: "Paket Boom Laris Jualan",
      price: "1.800.000",
      tag: "Best Seller Pemula Naik Level",
      desc: "50 pcs",
      summary: "Pas untuk yang sudah rutin dapat order.",
      perks: ["Komposisi model paling laris", "Cocok untuk live & flash sale", "Mulai siap gandeng reseller sekitar"],
      recommended: true
    },
    {
      category: "Serius",
      name: "New Paket Eksklusif",
      price: "2.250.000",
      tag: "New Paket Eksklusif",
      desc: "65 pcs",
      summary: "Untuk segmen bunda yang cari look premium.",
      perks: ["Fokus model premium & rapi difoto", "Cocok main di harga menengah atas", "Bantu naikkan image 'toko serius'"],
      recommended: false
    },
    {
      category: "Serius",
      name: "Paket Mini Murmer",
      price: "3.550.000",
      tag: "Siapin Stok Harian",
      desc: "100 pcs",
      summary: "Stok nyaman untuk sering upload & sering closing.",
      perks: ["Cocok untuk jualan full online", "Siap untuk beberapa momen promo", "Mulai bisa gandeng reseller kecil"],
      recommended: false
    },
    {
      category: "Serius",
      name: "Paket Hemat Buka Usaha",
      price: "5.500.000",
      tag: "Siap Jadi Toko Serius",
      desc: "125 pcs",
      summary: "Paket hemat buat mulai usaha lebih serius.",
      perks: ["Cukup untuk etalase kecil di rumah", "Enak mulai rekrut reseller aktif", "Kombinasi harian & event"],
      recommended: true
    },
    {
      category: "Strategic",
      name: "Paket Buka Toko",
      price: "12.500.000",
      tag: "Paket Buka Toko Offline",
      desc: "300-350 pcs (free banner)",
      summary: "Siap punya toko fisik dengan tampilan profesional.",
      perks: ["Stok 300-350 pcs mix model", "Free banner toko siap pasang", "Cocok untuk kios kecil atau di rumah"],
      recommended: false
    },
    {
      category: "Strategic",
      name: "Paket Ball Mega Premium",
      price: "25.000.000",
      tag: "Level Ball Mega Premium",
      desc: "550 pcs",
      summary: "Untuk yang siap kuasai area dan bangun jaringan.",
      perks: ["Stok besar cover 1 kota/kabupaten", "Ideal bangun tim reseller", "Dibantu susun strategi distribusi"],
      recommended: true
    }
  ];
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
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#features" className="hover:text-primary transition-colors">Keunggulan</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Katalog</a>
            <a href="#tiers" className="hover:text-primary transition-colors">Paket Mitra</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Lamonte,%20saya%20tertarik%20bergabung%20menjadi%20mitra." 
              className="hidden sm:inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 active:scale-95 glow"
            >
              Daftar Sekarang
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`absolute top-full left-0 w-full border-b border-zinc-100 bg-white transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
          <div className="flex flex-col p-6 gap-4">
            <a 
              href="#features" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-zinc-900 border-b border-zinc-50 pb-2"
            >
              Keunggulan
            </a>
            <a 
              href="#catalog" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-zinc-900 border-b border-zinc-50 pb-2"
            >
              Katalog
            </a>
            <a 
              href="#tiers" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-zinc-900 border-b border-zinc-50 pb-2"
            >
              Paket Mitra
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-zinc-900 border-b border-zinc-50 pb-2"
            >
              FAQ
            </a>
            <a 
              href="https://wa.me/6281234567890" 
              className="mt-2 block w-full text-center rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-amber-500/20"
            >
              Daftar Sekarang
            </a>
          </div>
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
                href="#tiers" 
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 glow-soft group"
              >
                Rekomendasi Paket <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Modul A */}
            <div className="glass-dark rounded-[2.5rem] p-8 transition-all hover:bg-white border-zinc-200 flex flex-col h-full bg-white/50">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1 outfit">Branding Toko Naik Kelas</h3>
              <p className="text-zinc-500 font-medium text-sm mb-4">Modul A: Brand Identity Kit</p>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 flex-grow">
                Toko kecil rasa official store. Dapat desain sertifikat, ID card, banner, dan template feed seragam. Bikin calon pembeli langsung percaya.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
                <CheckCircle2 size={14} />
                <span>Toko terlihat rapi & niat</span>
              </div>
            </div>

            {/* Modul B */}
            <div className="glass-dark rounded-[2.5rem] p-8 transition-all hover:bg-white border-zinc-200 flex flex-col h-full bg-white/50">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1 outfit">Angka Jelas, Target Nyata</h3>
              <p className="text-zinc-500 font-medium text-sm mb-4">Modul B: Kalkulator Cuan Sultan</p>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 flex-grow">
                Masukkan modal dan target penghasilan. Sistem hitung otomatis target harian, harga ideal, dan skenario promo. Jualan pakai data, bukan feeling.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 rounded-xl bg-purple-50 px-4 py-2 text-xs font-bold text-purple-600">
                <CheckCircle2 size={14} />
                <span>Tau angka, berani gas</span>
              </div>
            </div>

            {/* Modul C */}
            <div className="glass-dark rounded-[2.5rem] p-8 transition-all hover:bg-white border-zinc-200 flex flex-col h-full bg-white/50">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                <ShoppingBag size={28} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1 outfit">Konten Katalog Auto Cakep</h3>
              <p className="text-zinc-500 font-medium text-sm mb-4">Modul C: Model & Content Academy</p>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 flex-grow">
                Diajarin cara foto anak pakai HP, angle yang laku, dan filter praktis. Plus stok foto katalog profesional yang siap pakai.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 rounded-xl bg-pink-50 px-4 py-2 text-xs font-bold text-pink-600">
                <CheckCircle2 size={14} />
                <span>Feed keliatan brand besar</span>
              </div>
            </div>

            {/* Modul D */}
            <div className="glass-dark rounded-[2.5rem] p-8 transition-all hover:bg-white border-zinc-200 flex flex-col h-full bg-white/50">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Package size={28} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1 outfit">Toko Online Siap Panen</h3>
              <p className="text-zinc-500 font-medium text-sm mb-4">Modul D: Marketplace Playbook</p>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 flex-grow">
                Step-by-step buka toko di marketplace. Dapat contoh judul, deskripsi, foto, dan pola diskon yang bikin produk sering muncul di pencarian.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 rounded-xl bg-orange-50 px-4 py-2 text-xs font-bold text-orange-600">
                <CheckCircle2 size={14} />
                <span>Nggak bingung mulai dari mana</span>
              </div>
            </div>

            {/* Modul E */}
            <div className="glass-dark rounded-[2.5rem] p-8 transition-all hover:bg-white border-zinc-200 flex flex-col h-full bg-white/50">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1 outfit">CS Robot Jago Nego</h3>
              <p className="text-zinc-500 font-medium text-sm mb-4">Modul E: WA Automation & Script Closing</p>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 flex-grow">
                Tinggal copy-paste template chat yang sudah teruji. Dari chat nanya harga sampai minta diskon. Bisa diset otomatis, jadi tetap closing walau kamu lagi sibuk.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-600">
                <CheckCircle2 size={14} />
                <span>Chat rapi, closing naik</span>
              </div>
            </div>

            {/* Modul F */}
            <div className="glass-dark rounded-[2.5rem] p-8 transition-all hover:bg-white border-zinc-200 flex flex-col h-full bg-white/50">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1 outfit">Konten Harian Anti Buntu</h3>
              <p className="text-zinc-500 font-medium text-sm mb-4">Modul F: 365 Hari Kalender Konten</p>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 flex-grow">
                Ide konten harian sudah disiapkan. Ada contoh caption, hook, dan CTA. Tinggal pilih, eksekusi, dan ulangi.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-xs font-bold text-red-600">
                <CheckCircle2 size={14} />
                <span>Setahun selalu ada bahan</span>
              </div>
            </div>

            {/* Modul G - Large Feature */}
            <div className="md:col-span-3 glass-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden transition-all hover:bg-white border-zinc-200 bg-white/50">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                    <Users size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-2 outfit">Modul G: Sekolah Pebisnis Lapangan</h3>
                  <p className="text-zinc-500 font-bold text-lg mb-6">Live Zoom & Mentoring</p>
                  <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-2xl">
                    Kelas Zoom rutin: update tren jualan, studi kasus mitra, dan sesi tanya jawab. Kamu nggak cuma ikut-ikutan, tapi paham cara mainnya.
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-xl bg-amber-50 px-6 py-3 text-sm font-bold text-amber-600">
                    <CheckCircle2 size={18} />
                    <span>Cek Jadwal Kelas</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="aspect-square w-24 md:w-32 rounded-2xl bg-white p-2 border border-zinc-100 shadow-sm hover:shadow-md transition-all">
                        <img src={`https://picsum.photos/200?random=${i+20}`} alt="mentoring" className="object-cover w-full h-full rounded-xl" />
                      </div>
                    ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity bg-gradient-to-l from-amber-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
              Katalog Produk Unggulan
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
              Koleksi baju anak premium dengan desain trendy dan kualitas bahan terbaik. Siap untuk Anda pasarkan segera.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: "Setelan Celana Pendek Little Dino", cat: "Setelan Anak Laki-laki", price: "Best Seller" },
              { name: "Dress Cotton Candy Premium", cat: "Dress Anak Perempuan", price: "New Arrival" },
              { name: "T-Shirt Oversize Urban Junior", cat: "Kaos Anak Unisex", price: "Trending" },
              { name: "Pajamas Soft Sleep Collection", cat: "Pakaian Tidur", price: "Restock" },
              { name: "Jaket Windbreaker Explorer", cat: "Outerwear Premium", price: "Recommended" },
              { name: "Legging Stretch Comfort Kids", cat: "Celana & Bawahan", price: "Essential" },
              { name: "One-Set Polkadot Sweetie", cat: "Setelan Anak Perempuan", price: "Limited Editon" },
              { name: "Hoodie Fleece Winter Warm", cat: "Outerwear Anak", price: "Hot Deal" },
            ].map((prod, i) => (
              <div key={i} className="group relative glass-dark rounded-3xl p-4 transition-all hover:bg-white border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/50">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100 mb-4 relative">
                  <img 
                    src={`https://picsum.photos/400/500?random=${i+50}`} 
                    alt={prod.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-amber-500/30">
                      {prod.price}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{prod.cat}</p>
                  <h3 className="text-sm md:text-base font-bold text-zinc-900 truncate outfit">{prod.name}</h3>
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-400">Harga Khusus Mitra</span>
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-900 group-hover:bg-primary group-hover:text-white transition-colors">
                      <ShoppingBag size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20melihat%20katalog%20lengkap%20Mitra%20Lamonte." 
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white group"
            >
              Lihat Katalog Lengkap via WhatsApp <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="tiers" className="py-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
              Pilih Paket Kemitraan Anda
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
              Tentukan langkah awal Anda sesuai dengan modal dan target profit yang Anda inginkan.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {["Hemat", "Populer", "Serius", "Strategic"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setIsTierTab(cat)}
                  className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${isTierTab === cat ? 'bg-primary text-white shadow-lg shadow-amber-500/20' : 'bg-white text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200'}`}
                >
                  {cat === "Hemat" && "Paket Hemat (< 1jt)"}
                  {cat === "Populer" && "Paket Populer (1-2jt)"}
                  {cat === "Serius" && "Paket Serius (2-5jt)"}
                  {cat === "Strategic" && "Paket Strategic (> 10jt)"}
                </button>
              ))}
            </div>

            {/* Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allTiers.filter(t => t.category === isTierTab).map((tier, i) => (
                <div key={i} className={`relative group rounded-[2.5rem] p-8 transition-all hover:translate-y-[-8px] ${tier.recommended ? 'bg-white border-2 border-primary shadow-2xl shadow-amber-500/10' : 'bg-white border border-zinc-200 shadow-sm hover:shadow-xl'}`}>
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
                      Pilihan Terbaik
                    </div>
                  )}
                  
                  {/* Package Image Placeholder / Tag */}
                  <div className="mb-6 aspect-video rounded-3xl bg-zinc-100 overflow-hidden relative border border-zinc-100">
                    <img 
                      src={`https://picsum.photos/400/225?random=${i+100}`} 
                      alt={tier.name} 
                      className="h-full w-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold">
                      {tier.tag}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-1 outfit">{tier.name}</h3>
                  <p className="text-xs text-zinc-400 mb-4 font-bold uppercase tracking-widest">{tier.desc}</p>
                  
                  <div className="mb-8">
                    <span className="text-3xl font-extrabold text-zinc-900 outfit">Rp {tier.price}</span>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed min-h-[40px]">
                      {tier.summary}
                    </p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {tier.perks.map((perk, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20tertarik%20dengan%20${tier.name}.`} 
                    className={`block w-full text-center py-4 rounded-2xl font-bold transition-all ${tier.recommended ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-amber-500/20' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}
                  >
                    Ambil Paket Ini
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {[
              { label: "Tahun Berdiri", value: "2011+", icon: Award },
              { label: "Produk Terjual", value: "500Rb+", icon: Package },
              { label: "Mitra Aktif", value: "700+", icon: Users },
              { label: "Tingkat Kesuksesan", value: "99%", icon: TrendingUp },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center md:text-left transition-transform hover:-translate-y-1 hover:shadow-md bg-white">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon size={20} />
                </div>
                <div className="text-2xl font-bold text-zinc-900 sm:text-3xl outfit">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
              Kisah Sukses Mitra Kami
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
              Bergabunglah dengan ratusan wirausahawan yang telah meraih kesuksesan bersama Lamonte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ibu Rahma",
                role: "Agen - Bekasi",
                text: "Dulu bingung mau mulai bisnis apa. Setelah gabung Lamonte, saya dibimbing dari nol. Sekarang penghasilan bulanan sudah jauh melebihi gaji waktu kerja dulu.",
                image: "https://i.pravatar.cc/150?u=rahma",
                stars: 5,
                success: "Profit Rp 25jt+/bln"
              },
              {
                name: "Bapak Surya",
                role: "Distributor - Surabaya",
                text: "Sistem otomatisnya juara! Saya bisa pantau stok dan orderan sambil tetap mengurus hal lain. Support sistemnya juga sangat membantu perkembangan tim saya.",
                image: "https://i.pravatar.cc/150?u=surya",
                stars: 5,
                success: "700+ Reseller Aktif"
              },
              {
                name: "Ibu Maya",
                role: "Reseller - Bandung",
                text: "Kualitas bajunya beneran premium! Pelanggan saya selalu balik lagi buat order. Marketing kit-nya sangat membantu promosi saya di media sosial.",
                image: "https://i.pravatar.cc/150?u=maya",
                stars: 5,
                success: "Repeat Order 80%"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass-dark rounded-[2.5rem] p-8 transition-all hover:bg-white border-zinc-200 flex flex-col h-full bg-white/50 relative">
                <div className="absolute top-8 right-8 text-primary/20">
                  <Star size={40} fill="currentColor" stroke="none" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary" fill="currentColor" />
                  ))}
                </div>
                <p className="text-zinc-600 text-lg italic leading-relaxed mb-8 flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 outfit">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-500 font-medium">{testimonial.role}</p>
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
                  <div key={i} className="inline-block h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-zinc-100">
                    <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-bold text-zinc-900 outfit">Siap Menjadi Kisah Sukses Berikutnya?</h4>
                <p className="text-zinc-500">Bergabunglah dengan 700+ mitra sukses lainnya di seluruh Indonesia.</p>
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
