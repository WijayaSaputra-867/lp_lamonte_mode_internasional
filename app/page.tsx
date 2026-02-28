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
import WhyUs from "@/components/WhyUs";
import RegistrationProcess from "@/components/RegistrationProcess";
import Marquee from "@/components/Marquee";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const FEATURES_DATA = [
  {
    id: "A",
    title: "Branding Toko Naik Kelas",
    subtitle: "Modul A: Brand Identity Kit",
    desc: "Ubah toko kecil menjadi official store dengan Brand Identity Kit lengkap. Anda akan menerima desain sertifikat kemitraan eksklusif, template ID card, banner toko fisik/online, dan set template feed Instagram seragam untuk membangun kepercayaan pembeli secara instan.",
    badge: "Branding Profesional & Terpercaya",
    icon: ShieldCheck,
    colors: { bg: "bg-blue-50", text: "text-blue-600" },
    isLarge: false,
  },
  {
    id: "B",
    title: "Angka Jelas, Target Nyata",
    subtitle: "Modul B: Kalkulator Profit Strategis",
    desc: "Hilangkan kebingungan finansial dengan Kalkulator Profit Otomatis. Cukup masukkan modal awal, dan sistem akan menghitung target harian, harga jual ideal sesuai pasar, serta simulasi skenario promo untuk memastikan setiap penjualan menghasilkan margin yang sehat.",
    badge: "Bisnis Berbasis Data, Bukan Feeling",
    icon: TrendingUp,
    colors: { bg: "bg-purple-50", text: "text-purple-600" },
    isLarge: false,
  },
  {
    id: "C",
    title: "Konten Katalog Auto Cakep",
    subtitle: "Modul C: Model & Content Academy",
    desc: "Kuasai seni konten visual tanpa kamera mahal. Kami memberikan panduan teknik foto produk menggunakan smartphone, teknik lighting praktis, serta akses ke ribuan stok foto katalog model profesional yang siap Anda unggah kapan saja.",
    badge: "Visual Level Brand Internasional",
    icon: ShoppingBag,
    colors: { bg: "bg-pink-50", text: "text-pink-600" },
    isLarge: false,
  },
  {
    id: "D",
    title: "Toko Online Siap Panen",
    subtitle: "Modul D: Marketplace Masterclass",
    desc: "Panduan teknis langkah demi langkah mendominasi Shopee, Tokopedia, dan TikTok Shop. Dapatkan blueprint optimasi judul (SEO), deskripsi produk persuasif, teknik riset kata kunci, dan strategi diskon yang meningkatkan visibilitas produk di hasil pencarian teratas.",
    badge: "Optimasi Marketplace & Trafik Tinggi",
    icon: Package,
    colors: { bg: "bg-orange-50", text: "text-orange-600" },
    isLarge: false,
  },
  {
    id: "E",
    title: "CS Robot Jago Nego",
    subtitle: "Modul E: WhatsApp Automation & Scripting",
    desc: "Tingkatkan konversi penjualan dengan script closing yang sudah teruji. Kami menyediakan template chat otomatis untuk berbagai skenario: dari sapaan awal, menangani keberatan harga, hingga follow-up orderan yang belum dibayar. Bisa diintegrasikan dengan tools automasi WA.",
    badge: "Sistem Closing Otomatis 24/7",
    icon: ShoppingBag,
    colors: { bg: "bg-emerald-50", text: "text-emerald-600" },
    isLarge: false,
  },
  {
    id: "F",
    title: "Konten Harian Anti Buntu",
    subtitle: "Modul F: 365 Hari Kalender Konten",
    desc: "Jangan pernah kehabisan ide posting lagi. Dapatkan kalender konten setahun penuh yang mencakup ide postingan harian, contoh caption yang menarik interaksi, Hook video pendek yang viral, dan Call to Action (CTA) yang mendorong penjualan langsung.",
    badge: "Konsistensi Branding Tanpa Pusing",
    icon: Zap,
    colors: { bg: "bg-red-50", text: "text-red-600" },
    isLarge: false,
  },
  {
    id: "G",
    title: "Modul G: Sekolah Pebisnis Lapangan",
    subtitle: "Mentoring Eksklusif & Live Training",
    desc: "Dukungan penuh melalui sesi Live Zoom rutin dan grup diskusi eksklusif. Pelajari update tren fashion anak terbaru, studi kasus nyata dari mitra sukses, dan dapatkan jawaban langsung atas tantangan operasional harian Anda. Anda tidak akan pernah berjalan sendiri dalam membangun bisnis ini.",
    badge: "Dukungan Komunitas & Mentoring Full",
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
      desc: "25 pcs campur ukuran (All Grade A)",
      summary: "Pilihan terbaik untuk pemula yang ingin mengetes minat pasar tanpa risiko stok menumpuk.",
      perks: [
        "25 pcs Koleksi Mix Best Seller",
        "Akses Katalog Digital & Stok Realtime",
        "Grup Support WA Mitra Pemula",
        "E-Sertifikat Kemitraan Resmi",
      ],
      recommended: false,
    },
    {
      category: "Hemat",
      name: "Paket Mix Sampel Murmer",
      price: "850.000",
      tag: "Sample Mix Import Lokal",
      desc: "30 pcs (Mix Premium Import & Lokal)",
      summary: "Kombinasi model import dan lokal untuk melihat selera pelanggan di area Anda.",
      perks: [
        "30 pcs (15 Import, 15 Lokal Premium)",
        "Panduan Dasar Jualan di WhatsApp",
        "Akses Foto Produk Non-Model",
        "Update Model Baru Tiap Minggu",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Usaha Mix Fashion",
      price: "1.000.000",
      tag: "Mulai Usaha Serius",
      desc: "36 pcs (Mix Import & Lokal Pilihan)",
      summary: "Paket yang paling seimbang untuk mulai membangun stok harian dan display toko.",
      perks: [
        "36 pcs Koleksi Mix Paling Laris",
        "Modul A: Brand Identity Kit Dasar",
        "Tips Optimasi Bio Instagram & WA",
        "Prioritas Update Stok Produk Baru",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Super Trial",
      price: "1.200.000",
      tag: "Ngetest Market Online",
      desc: "30 pcs (Kualitas Super Premium)",
      summary: "Fokus pada produk dengan visual tinggi, ideal untuk konten IG Reels dan TikTok.",
      perks: [
        "30 pcs Model High-Visual/Fotogenik",
        "Video Konten Mentahan Siap Edit",
        "Panduan Konten TikTok Dasar",
        "Support Copywriting Iklan",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Kombinasi",
      price: "1.650.000",
      tag: "Paket Kombinasi Flexible",
      desc: "45 pcs (Lengkap Semua Kategori)",
      summary: "Varian ukuran dan model lebih luas, memunginkan Anda melayani lebih banyak segmen.",
      perks: [
        "45 pcs Mix (Bayi, Balita, Anak)",
        "Modul B: Kalkulator Profit Strategis",
        "Template Invoice & Rekap Order",
        "Akses Grup Sharing Mitra Sukses",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Boom Laris Jualan",
      price: "1.800.000",
      tag: "Best Seller Pemula Naik Level",
      desc: "50 pcs (Best Seller Only)",
      summary: "Paket dengan perputaran modal tercepat karena hanya berisi model paling laku.",
      perks: [
        "50 pcs Jaminan Model Cepat Laku",
        "Modul C: Model & Content Academy",
        "Voucher Diskon Pembelian Berikutnya",
        "Full Support Mentoring via Zoom",
      ],
      recommended: true,
    },
    {
      category: "Serius",
      name: "New Paket Eksklusif",
      price: "2.250.000",
      tag: "Premium Fashion Focus",
      desc: "65 pcs (Koleksi Eksklusif Lamonte)",
      summary: "Untuk mitra yang membidik segmen menengah ke atas dengan kualitas jahitan butik.",
      perks: [
        "65 pcs Koleksi Premium Signature",
        "Modul D: Marketplace Masterclass",
        "Sertifikat Mitra Eksklusif Cetak",
        "Konsultasi Bisnis Personal 1-on-1",
      ],
      recommended: false,
    },
    {
      category: "Serius",
      name: "Paket Mini Murmer",
      price: "3.550.000",
      tag: "Siapin Stok Harian",
      desc: "100 pcs (Ready Stok Melimpah)",
      summary: "Kapasitas stok yang aman untuk melayani reseller dan orderan partai kecil.",
      perks: [
        "100 pcs Koleksi Lengkap & Merata",
        "Modul E: WhatsApp Automation",
        "Free Packaging Exclusive Lamonte",
        "Akses Prioritas Customer Service",
      ],
      recommended: false,
    },
    {
      category: "Serius",
      name: "Paket Hemat Buka Usaha",
      price: "5.500.000",
      tag: "Siap Jadi Toko Serius",
      desc: "125 pcs (Paket Setup Toko)",
      summary: "Blueprint lengkap memulai toko fisik pertama Anda dengan modal sangat terukur.",
      perks: [
        "125 pcs Koleksi Display Terbaik",
        "Modul F: 365 Hari Kalender Konten",
        "Banner/Spanduk Toko Fisik Gratis",
        "Bimbingan Manajemen Stok & Karyawan",
      ],
      recommended: true,
    },
    {
      category: "Strategic",
      name: "Paket Buka Toko",
      price: "12.500.000",
      tag: "Paket Buka Toko Offline",
      desc: "350 pcs (Full Support Branding)",
      summary: "Transformasikan ruangan Anda menjadi butik fashion anak profesional dengan paket ini.",
      perks: [
        "300-350 pcs Koleksi All Varians",
        "Paket Branding Toko (X-Banner, Plastik)",
        "Grup Mentoring Khusus Pemilik Toko",
        "Promosi Toko di Media Sosial Lamonte",
      ],
      recommended: false,
    },
    {
      category: "Strategic",
      name: "Paket Ball Mega Premium",
      price: "25.000.000",
      tag: "Level Ball Mega Premium",
      desc: "600 pcs (Gudang Cabang/Distributor)",
      summary: "Jadilah pusat distribusi utama di kota Anda dan bangun jaringan reseller sendiri.",
      perks: [
        "550-600 pcs Stok Skala Besar",
        "Akses Harga VIP Distributor",
        "Dibantu Strategi Rekrut Reseller",
        "Kunjungan Tim Pusat (Opsional)",
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
      <WhyUs />
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
