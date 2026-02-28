/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Users,
  Package,
  ShieldCheck,
  Zap,
  ShoppingBag,
  LucideProps,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Catalog from "@/components/Catalog";
import PartnershipTiers from "@/components/PartnershipTiers";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import RegistrationProcess from "@/components/RegistrationProcess";
import Marquee from "@/components/Marquee";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const FEATURES_DATA = [
  {
    id: "A",
    title: "Branding Toko Naik Kelas",
    subtitle: "Modul A: Brand Identity Kit",
    desc: "Toko kecil rasa official store. Dapat desain sertifikat, ID card, banner, dan template feed seragam. Bikin calon pembeli langsung percaya.",
    badge: "Toko terlihat rapi & niat",
    icon: ShieldCheck,
    colors: { bg: "bg-blue-50", text: "text-blue-600" },
    isLarge: false,
  },
  {
    id: "B",
    title: "Angka Jelas, Target Nyata",
    subtitle: "Modul B: Kalkulator Cuan Sultan",
    desc: "Masukkan modal dan target penghasilan. Sistem hitung otomatis target harian, harga ideal, dan skenario promo. Jualan pakai data, bukan feeling.",
    badge: "Tau angka, berani gas",
    icon: TrendingUp,
    colors: { bg: "bg-purple-50", text: "text-purple-600" },
    isLarge: false,
  },
  {
    id: "C",
    title: "Konten Katalog Auto Cakep",
    subtitle: "Modul C: Model & Content Academy",
    desc: "Diajarin cara foto anak pakai HP, angle yang laku, dan filter praktis. Plus stok foto katalog profesional yang siap pakai.",
    badge: "Feed keliatan brand besar",
    icon: ShoppingBag,
    colors: { bg: "bg-pink-50", text: "text-pink-600" },
    isLarge: false,
  },
  {
    id: "D",
    title: "Toko Online Siap Panen",
    subtitle: "Modul D: Marketplace Playbook",
    desc: "Step-by-step buka toko di marketplace. Dapat contoh judul, deskripsi, foto, dan pola diskon yang bikin produk sering muncul di pencarian.",
    badge: "Nggak bingung mulai dari mana",
    icon: Package,
    colors: { bg: "bg-orange-50", text: "text-orange-600" },
    isLarge: false,
  },
  {
    id: "E",
    title: "CS Robot Jago Nego",
    subtitle: "Modul E: WA Automation & Script Closing",
    desc: "Tinggal copy-paste template chat yang sudah teruji. Dari chat nanya harga sampai minta diskon. Bisa diset otomatis, jadi tetap closing walau kamu lagi sibuk.",
    badge: "Chat rapi, closing naik",
    icon: ShoppingBag,
    colors: { bg: "bg-emerald-50", text: "text-emerald-600" },
    isLarge: false,
  },
  {
    id: "F",
    title: "Konten Harian Anti Buntu",
    subtitle: "Modul F: 365 Hari Kalender Konten",
    desc: "Ide konten harian sudah disiapkan. Ada contoh caption, hook, dan CTA. Tinggal pilih, eksekusi, dan ulangi.",
    badge: "Setahun selalu ada bahan",
    icon: Zap,
    colors: { bg: "bg-red-50", text: "text-red-600" },
    isLarge: false,
  },
  {
    id: "G",
    title: "Modul G: Sekolah Pebisnis Lapangan",
    subtitle: "Live Zoom & Mentoring",
    desc: "Kelas Zoom rutin: update tren jualan, studi kasus mitra, dan sesi tanya jawab. Kamu nggak cuma ikut-ikutan, tapi paham cara mainnya.",
    badge: "Cek Jadwal Kelas",
    icon: Users,
    colors: { bg: "bg-amber-50", text: "text-amber-600" },
    isLarge: true,
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTierTab, setIsTierTab] = useState("Populer");
  const [isMobile, setIsMobile] = useState(false);
  const [shuffledFeatures, setShuffledFeatures] = useState<typeof FEATURES_DATA>([]);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const shuffleArray = (array: typeof FEATURES_DATA) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const handleResize = () => {
      const mobileStatus = window.innerWidth < 768;
      setIsMobile(mobileStatus);

      if (mobileStatus && shuffledFeatures.length === 0) {
        setShuffledFeatures(shuffleArray(FEATURES_DATA));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [shuffledFeatures.length]);

  const handleLoadMore = () => {
    if (visibleCount >= shuffledFeatures.length) {
      setVisibleCount(1);
    } else {
      setVisibleCount((prev) => prev + 1);
    }
  };

  const featuresToRender = isMobile
    ? shuffledFeatures.slice(0, visibleCount)
    : FEATURES_DATA;

  const allTiers = [
    {
      category: "Hemat",
      name: "Paket Sampel Murmer",
      price: "650.000",
      tag: "Tes Pasar Paling Hemat",
      desc: "25 pcs campur ukuran",
      summary: "Untuk tes minat pasar tanpa takut stok numpuk.",
      perks: [
        "Stok ringan, aman untuk mulai",
        "Mix model laris untuk display & foto",
        "Enak dijual ke tetangga/teman",
      ],
      recommended: false,
    },
    {
      category: "Hemat",
      name: "Paket Mix Sampel Murmer",
      price: "850.000",
      tag: "Sample Mix Import Lokal",
      desc: "30 pcs (mix import lokal)",
      summary: "Lebih banyak varian untuk lihat selera pasar.",
      perks: [
        "Kombinasi import & lokal pilihan",
        "Cocok untuk foto katalog awal",
        "Siap dijual online & offline",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Usaha Mix Fashion",
      price: "1.000.000",
      tag: "Mulai Usaha Serius",
      desc: "36 pcs (mix import lokal)",
      summary: "Pas untuk kamu yang siap jualan rutin.",
      perks: [
        "Komposisi harian & semi-event",
        "Bisa dijual satuan atau paket",
        "Enak mulai masuk marketplace",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Super Trial",
      price: "1.200.000",
      tag: "Ngetest Market Online",
      desc: "30 pcs",
      summary: "Ideal untuk tes market di IG, TikTok & WA.",
      perks: [
        "Isi model fotogenik untuk konten",
        "Support foto & caption",
        "Aman untuk tes harga & respon pasar",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Kombinasi",
      price: "1.650.000",
      tag: "Paket Kombinasi Flexible",
      desc: "45 pcs (mix import lokal)",
      summary: "Untuk yang ingin varian ukuran & model lebih banyak.",
      perks: [
        "Nyaman untuk keluarga & online",
        "Enak untuk paket bundling",
        "Stok masih ringan tapi 'jalan'",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Boom Laris Jualan",
      price: "1.800.000",
      tag: "Best Seller Pemula Naik Level",
      desc: "50 pcs",
      summary: "Pas untuk yang sudah rutin dapat order.",
      perks: [
        "Komposisi model paling laris",
        "Cocok untuk live & flash sale",
        "Mulai siap gandeng reseller sekitar",
      ],
      recommended: true,
    },
    {
      category: "Serius",
      name: "New Paket Eksklusif",
      price: "2.250.000",
      tag: "New Paket Eksklusif",
      desc: "65 pcs",
      summary: "Untuk segmen bunda yang cari look premium.",
      perks: [
        "Fokus model premium & rapi difoto",
        "Cocok main di harga menengah atas",
        "Bantu naikkan image 'toko serius'",
      ],
      recommended: false,
    },
    {
      category: "Serius",
      name: "Paket Mini Murmer",
      price: "3.550.000",
      tag: "Siapin Stok Harian",
      desc: "100 pcs",
      summary: "Stok nyaman untuk sering upload & sering closing.",
      perks: [
        "Cocok untuk jualan full online",
        "Siap untuk beberapa momen promo",
        "Mulai bisa gandeng reseller kecil",
      ],
      recommended: false,
    },
    {
      category: "Serius",
      name: "Paket Hemat Buka Usaha",
      price: "5.500.000",
      tag: "Siap Jadi Toko Serius",
      desc: "125 pcs",
      summary: "Paket hemat buat mulai usaha lebih serius.",
      perks: [
        "Cukup untuk etalase kecil di rumah",
        "Enak mulai rekrut reseller aktif",
        "Kombinasi harian & event",
      ],
      recommended: true,
    },
    {
      category: "Strategic",
      name: "Paket Buka Toko",
      price: "12.500.000",
      tag: "Paket Buka Toko Offline",
      desc: "300-350 pcs (free banner)",
      summary: "Siap punya toko fisik dengan tampilan profesional.",
      perks: [
        "Stok 300-350 pcs mix model",
        "Free banner toko siap pasang",
        "Cocok untuk kios kecil atau di rumah",
      ],
      recommended: false,
    },
    {
      category: "Strategic",
      name: "Paket Ball Mega Premium",
      price: "25.000.000",
      tag: "Level Ball Mega Premium",
      desc: "550 pcs",
      summary: "Untuk yang siap kuasai area dan bangun jaringan.",
      perks: [
        "Stok besar cover 1 kota/kabupaten",
        "Ideal bangun tim reseller",
        "Dibantu susun strategi distribusi",
      ],
      recommended: true,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Features
        featuresToRender={featuresToRender}
        isMobile={isMobile}
        visibleCount={visibleCount}
        handleLoadMore={handleLoadMore}
        shuffledFeaturesLength={shuffledFeatures.length}
      />
      <Catalog isMobile={isMobile} />
      <PartnershipTiers
        isTierTab={isTierTab}
        setIsTierTab={setIsTierTab}
        allTiers={allTiers}
      />
      <RegistrationProcess />
      <Stats />
      <Testimonials />
      <FAQ />
      <Marquee />
      <FinalCTA />
      <Footer />

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
