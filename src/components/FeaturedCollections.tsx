"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    id: "gold",
    title: "Heritage Gold",
    image: "/images/hero/bridal_model.png",
    link: "/collections/gold"
  },
  {
    id: "diamond",
    title: "Pristine Diamonds",
    image: "/images/hero/diamond_necklace.png",
    link: "/collections/diamond"
  },
  {
    id: "bridal",
    title: "Bridal Trousseau",
    image: "/images/hero/bridal_model.png",
    link: "/collections/bridal"
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-32 bg-black text-ivory relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-gold-500 uppercase tracking-[0.3em] text-sm mb-4">Discover</h2>
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl">Curated Collections</h3>
          </div>
          <Link href="/collections" className="group flex items-center gap-4 hover:text-gold-400 transition-colors">
            <span className="uppercase tracking-widest text-sm">View All</span>
            <div className="w-12 h-[1px] bg-white group-hover:bg-gold-400 transition-colors relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r border-t border-current rotate-45" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {collections.map((collection, index) => (
            <Link href={collection.link} key={collection.id} className="group block relative aspect-[4/5] w-full overflow-hidden bg-black">
              <div className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover object-center brightness-75 group-hover:brightness-100 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-heading text-3xl mb-2">{collection.title}</h4>
                <div className="w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
