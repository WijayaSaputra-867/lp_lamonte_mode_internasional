"use client";

import React from "react";
import { Star, MessageCircle, ShieldCheck, Sparkles, Heart, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-40 relative overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(244,224,77,0.1)_0,transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_80%,rgba(244,114,182,0.05)_0,transparent_50%)]"></div>
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="relative rounded-[4rem] p-12 md:p-24 text-center border-[3px] border-primary bg-white overflow-hidden shadow-[30px_30px_0px_0px_rgba(244,224,77,0.3)] group">
          {/* Animated Floaties */}
          <div className="absolute top-10 left-10 text-primary/30 rotate-12 animate-bounce duration-[3s]">
            <Star size={48} fill="currentColor" stroke="none" />
          </div>
          <div className="absolute bottom-10 right-10 text-pink-500/20 -rotate-12 animate-pulse duration-[4s]">
            <Heart size={64} fill="currentColor" stroke="none" />
          </div>
          <div className="absolute top-1/2 right-20 text-sky-500/10 animate-bounce duration-[5s]">
            <Zap size={80} fill="currentColor" stroke="none" />
          </div>

          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-xs font-black text-zinc-900 uppercase tracking-[0.3em] shadow-xl shadow-primary/20 animate-pulse">
              <Sparkles size={16} /> Exclusive Membership Open
            </div>

            <h2 className="text-5xl font-black tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl outfit mb-10 leading-[0.9]">
              Ready to <br /> <span className="text-gradient">Start Your Empire?</span>
            </h2>
            
            <p className="text-zinc-500 mb-14 text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Join our monthly elite mentorship group. Only <span className="text-zinc-900 font-black underline decoration-primary decoration-8 text-shadow-sm">12 slots remaining</span> for this month’s cohort. Don’t let this opportunity slip!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://wa.me/6281234567890"
                className="group relative flex items-center justify-center gap-4 rounded-3xl bg-primary px-12 py-6 text-xl font-black text-zinc-900 transition-all hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
              >
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                Claim Your Spot Today
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-sm font-black text-zinc-500 uppercase tracking-widest">
                <ShieldCheck size={20} className="text-emerald-500" /> Secure Registration
              </div>
              <div className="flex items-center gap-2 text-sm font-black text-zinc-500 uppercase tracking-widest">
                <Star size={20} className="text-primary" /> Certified Programs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
