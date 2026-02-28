"use client";

import React from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const FAQ_DATA = [
  {
    q: "How do I register as a partner?",
    a: "It's easy! Just click any 'Register Now' button or contact our admin via WhatsApp to get the registration form and a detailed starter guide.",
  },
  {
    q: "Are there any hidden registration fees?",
    a: "None at all. The investment amount depends on the partnership tier you choose. We offer options starting from very affordable startup packages.",
  },
  {
    q: "Do I need to manage my own inventory?",
    a: "Not necessarily. If you choose our Dropshipper package, we handle all the storage, packing, and shipping directly to your customers.",
  },
  {
    q: "What kind of support will I receive?",
    a: "Partners get full access to our Marketing Kit (pro photos/videos), weekly mentoring webinars, a dedicated WhatsApp support group, and a real-time inventory dashboard.",
  },
  {
    q: "How often are new designs released?",
    a: "We drop fresh kids fashion collections every month, ensuring your store is always aligned with the latest market trends and high-demand styles.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-100 rounded-full blur-[100px] opacity-30"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-6 py-2 text-xs font-black text-sky-600 uppercase tracking-[0.3em] shadow-sm">
              <MessageCircle size={16} /> Support Center
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl outfit leading-none mb-8">
              Got <br /> <span className="sky-gradient">Questions?</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-10">
              Everything you need to know about the Lamonte partnership program. If you need more help, our tea is always here.
            </p>
            <a href="https://wa.me/6281234567890" className="inline-flex items-center gap-3 text-lg font-black text-zinc-900 hover:text-sky-500 transition-colors group">
              Still confused? Chat with Admin 
              <span className="h-10 w-10 flex items-center justify-center rounded-2xl bg-zinc-900 text-white group-hover:bg-sky-500 transition-colors ml-2">
                <MessageCircle size={18} />
              </span>
            </a>
          </div>

          <div className="lg:w-2/3 space-y-6">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group rounded-[2rem] bg-zinc-50/50 hover:bg-white border-2 border-zinc-50 hover:border-sky-100 p-8 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-6 text-zinc-900">
                  <h3 className="text-xl md:text-2xl font-black outfit leading-tight">{faq.q}</h3>
                  <div className="shrink-0 h-12 w-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-sky-500 group-open:bg-sky-500 group-open:text-white transition-all shadow-sm">
                    <Plus size={24} className="group-open:hidden" />
                    <Minus size={24} className="hidden group-open:block" />
                  </div>
                </summary>
                <p className="mt-6 leading-relaxed text-zinc-500 font-medium text-lg lg:pr-10">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
