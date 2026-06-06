"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const bestSellers = [
  {
    id: "bs1",
    name: "Imperial Diamond Bangle",
    price: "₹ 4,50,000",
    image: "/images/products/diamond_bangle.png",
    category: "Diamonds"
  },
  {
    id: "bs2",
    name: "Royal 22K Men's Ring",
    price: "₹ 1,25,000",
    image: "/images/products/gold_ring.png",
    category: "Gold"
  },
  {
    id: "bs3",
    name: "Eternity Diamond Pendant",
    price: "₹ 2,80,000",
    image: "/images/products/diamond_pendant.png",
    category: "Diamonds"
  },
  {
    id: "bs4",
    name: "Heritage Bridal Set",
    price: "₹ 12,80,000",
    image: "/images/products/bridal_set.png",
    category: "Bridal"
  },
];

export default function BestSellers() {
  return (
    <section className="py-24 bg-[#050505] text-ivory border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-gold-500 uppercase tracking-[0.3em] text-sm mb-4">Most Desired</h2>
            <h3 className="font-heading text-4xl md:text-5xl">Best Sellers</h3>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/shop" className="text-sm tracking-widest uppercase flex items-center gap-2 hover:text-gold-500 transition-colors border-b border-white/20 pb-1 hover:border-gold-500">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="-mx-6 px-6">
          <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={32}
            slidesPerView={1.2}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-12"
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <Link href={`/product/${product.id}`} className="group block cursor-pointer">
                  <div className="relative aspect-square w-full overflow-hidden mb-6 bg-black border border-white/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-in-out opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                      <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <ShoppingBag className="w-4 h-4" /> Quick View
                      </button>
                    </div>

                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/10 text-gold-500">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center px-4">
                    <h4 className="font-heading text-lg mb-2 group-hover:text-gold-400 transition-colors">{product.name}</h4>
                    <p className="text-gray-400 text-sm tracking-widest">{product.price}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
