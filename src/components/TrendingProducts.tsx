"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "p1",
    name: "Imperial Diamond Bangle",
    price: "₹ 4,50,000",
    image: "/images/products/diamond_bangle.png",
    category: "Diamonds"
  },
  {
    id: "p2",
    name: "Heritage Bridal Set",
    price: "₹ 12,80,000",
    image: "/images/products/bridal_set.png",
    category: "Bridal"
  },
  {
    id: "p3",
    name: "Royal 22K Men's Ring",
    price: "₹ 1,25,000",
    image: "/images/products/gold_ring.png",
    category: "Gold"
  }
];

export default function TrendingProducts() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-ivory">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-gold-500 uppercase tracking-[0.3em] text-sm mb-4">Exceptional Masterpieces</h2>
            <h3 className="font-heading text-4xl md:text-5xl">Trending Now</h3>
          </div>
          <Link href="/shop" className="text-sm tracking-widest uppercase flex items-center gap-2 hover:text-gold-500 transition-colors border-b border-white/20 pb-1 hover:border-gold-500">
            View All Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square w-full overflow-hidden mb-6 bg-black">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 border border-white/20 backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-heading text-xl mb-2 group-hover:text-gold-400 transition-colors">{product.name}</h4>
                  <p className="text-gray-400 text-sm tracking-widest">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
