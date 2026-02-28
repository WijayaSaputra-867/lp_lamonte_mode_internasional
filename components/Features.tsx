"use client";

import React from "react";
import { CheckCircle2, ChevronDown, ChevronUp, LucideProps, Sparkles, Target, Palette, Rocket, Globe, Zap, Users } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  colors: { bg: string; text: string };
  isLarge: boolean;
}

interface FeaturesProps {
  featuresToRender: Feature[];
  isMobile: boolean;
  visibleCount: number;
  handleLoadMore: () => void;
  shuffledFeaturesLength: number;
}

export default function Features({
  featuresToRender,
  isMobile,
  visibleCount,
  handleLoadMore,
  shuffledFeaturesLength,
}: FeaturesProps) {
  return (
    <section id="features" className="py-24 bg-surface text-zinc-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-[0.4] pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-pink/10 rounded-full blur-[150px]"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-6 py-2 text-xs font-black text-zinc-900 uppercase tracking-[0.3em] border border-primary/10 shadow-sm">
            <Sparkles size={16} className="text-primary" /> Powerful Ecosystem
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl outfit leading-none mb-6">
            Everything You <br /> <span className="text-gradient">Need to Shine</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
            We've built the ultimate support system so you can focus on growing your brand without the operational headache.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresToRender.map((feature, i) => {
            if (feature.isLarge) {
              return (
                <div
                  key={feature.id}
                  className="lg:col-span-3 group relative rounded-[3rem] p-8 md:p-14 overflow-hidden transition-all duration-700 hover:bg-white border border-zinc-100 bg-white/50 shadow-sm hover:shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                    <div className="flex-1 text-center lg:text-left">
                      <div
                        className={`mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent-pink text-zinc-900 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform`}
                      >
                        <feature.icon size={40} />
                      </div>
                      <h3 className="text-3xl lg:text-5xl font-black mb-4 outfit leading-tight text-zinc-900">
                        {feature.title}
                      </h3>
                      <p className="text-primary font-extrabold text-sm uppercase tracking-[0.2em] mb-6">
                        {feature.subtitle}
                      </p>
                      <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-2xl font-medium">
                        {feature.desc}
                      </p>
                      <div
                        className={`inline-flex items-center gap-3 rounded-2xl bg-primary/10 border border-primary/20 px-8 py-4 text-sm font-black text-zinc-900 hover:bg-primary/20 transition-all`}
                      >
                        <CheckCircle2 size={20} className="text-emerald-500" />
                        <span>{feature.badge}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                      {[1, 2, 3, 4].map((k) => (
                        <div
                          key={k}
                          className="aspect-square w-full lg:w-40 rounded-4xl overflow-hidden border-2 border-primary/10 p-2 bg-white transform group-hover:rotate-3 even:group-hover:-rotate-3 transition-transform shadow-lg"
                        >
                          <img
                            src={`https://images.unsplash.com/photo-1543332164-6e82f3557e4e?auto=format&fit=crop&q=80&w=200&random=${k}`}
                            alt="mentoring"
                            className="object-cover w-full h-full rounded-3xl"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              );
            }

            return (
              <div
                key={feature.id}
                className="group relative rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-white border border-zinc-100 flex flex-col h-full bg-white/50 shadow-sm hover:shadow-xl"
              >
                <div
                  className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-surface border border-primary/10 text-zinc-900 shadow-md group-hover:scale-110 group-hover:bg-primary transition-all`}
                >
                  <feature.icon size={30} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-black mb-2 outfit tracking-tight leading-none group-hover:text-primary transition-colors text-zinc-900">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 font-extrabold text-[10px] uppercase tracking-[0.2em] mb-6">
                  {feature.subtitle}
                </p>
                <p className="text-zinc-500 text-base leading-relaxed mb-10 grow font-medium">
                  {feature.desc}
                </p>
                <div
                  className={`mt-auto inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.1em] text-zinc-900`}
                >
                  <Zap size={14} className="text-primary" />
                  <span>{feature.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {isMobile && (
          <div className="mt-12 flex justify-center lg:hidden">
            <button
              onClick={handleLoadMore}
              className="group flex items-center gap-3 rounded-full border-2 border-primary/20 bg-white px-10 py-4 text-sm font-black text-zinc-900 transition-all hover:bg-primary/10 hover:border-primary bouncy-hover shadow-lg"
            >
              {visibleCount >= shuffledFeaturesLength ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  View More Modules <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
