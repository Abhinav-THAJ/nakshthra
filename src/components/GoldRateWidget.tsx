"use client";

import { TrendingUp } from "lucide-react";

export default function GoldRateWidget() {
  return (
    <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-gold-500/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/3">
            <h2 className="text-gold-500 uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Live Market
            </h2>
            <h3 className="font-heading text-3xl md:text-4xl mb-4 text-ivory">Today's Gold Rate</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Stay updated with the latest precious metal rates. Prices are refreshed daily ensuring complete transparency for your investments.
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Last Updated: {new Date().toLocaleDateString('en-IN')} 10:00 AM
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {[
              { purity: "22K Gold", price: "₹ 6,750", per: "per gram" },
              { purity: "24K Gold", price: "₹ 7,363", per: "per gram" },
              { purity: "18K Gold", price: "₹ 5,523", per: "per gram" },
            ].map((rate, idx) => (
              <div key={idx} className="bg-[#0f0f0f] border border-white/10 p-8 hover:border-gold-500/50 transition-colors group">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 group-hover:text-ivory transition-colors">
                  {rate.purity}
                </p>
                <p className="font-heading text-3xl text-gold-500 mb-2">
                  {rate.price}
                </p>
                <p className="text-xs text-gray-500 tracking-widest uppercase">
                  {rate.per}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
