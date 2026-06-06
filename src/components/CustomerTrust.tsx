"use client";

import { ShieldCheck, Gem, RefreshCcw, Wallet } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 mb-6 text-gold-500" />,
    title: "100% BIS Hallmarked",
    description: "Every piece of gold jewelry is certified and hallmarked for purity."
  },
  {
    icon: <Gem className="w-8 h-8 mb-6 text-gold-500" />,
    title: "Certified Diamonds",
    description: "Ethically sourced diamonds with international IGI/GIA certification."
  },
  {
    icon: <RefreshCcw className="w-8 h-8 mb-6 text-gold-500" />,
    title: "Lifetime Exchange",
    description: "100% exchange value on diamond jewelry and current market rate for gold."
  },
  {
    icon: <Wallet className="w-8 h-8 mb-6 text-gold-500" />,
    title: "Easy EMI Options",
    description: "Flexible payment plans to make your luxury purchases effortless."
  }
];

export default function CustomerTrust() {
  return (
    <section className="py-24 bg-black text-center border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="font-heading text-xl text-ivory mb-4">{feature.title}</h4>
              <p className="text-gray-400 text-sm max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
