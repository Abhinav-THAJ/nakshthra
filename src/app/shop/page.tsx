"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Filter, ChevronDown, Heart, ShoppingBag, Check } from "lucide-react";
import { useState } from "react";

const allProducts = [
  {
    id: "p1",
    name: "Imperial Diamond Bangle",
    price: "₹ 4,50,000",
    image: "/images/products/diamond_bangle.png",
    category: "High Jewelry",
    material: "18K Rose Gold"
  },
  {
    id: "p2",
    name: "Royal 22K Men's Ring",
    price: "₹ 1,25,000",
    image: "/images/products/gold_ring.png",
    category: "Rings",
    material: "22K Yellow Gold"
  },
  {
    id: "p3",
    name: "Eternity Diamond Pendant",
    price: "₹ 2,80,000",
    image: "/images/products/diamond_pendant.png",
    category: "Necklaces",
    material: "Platinum"
  },
  {
    id: "p4",
    name: "Heritage Bridal Set",
    price: "₹ 12,80,000",
    image: "/images/products/bridal_set.png",
    category: "Bridal",
    material: "22K Yellow Gold"
  },
  {
    id: "p5",
    name: "Temple Motif Gold Necklace",
    price: "₹ 8,95,000",
    image: "/images/products/gold_necklace.png",
    category: "Necklaces",
    material: "22K Yellow Gold"
  },
  {
    id: "p6",
    name: "Solitaire Diamond Studs",
    price: "₹ 3,45,000",
    image: "/images/products/diamond_earrings.png",
    category: "High Jewelry",
    material: "Platinum"
  }
];

const categories = ["All Jewelry", "High Jewelry", "Bridal", "Rings", "Necklaces"];
const materials = ["22K Yellow Gold", "18K Rose Gold", "Platinum"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Jewelry");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const toggleMaterial = (mat: string) => {
    setSelectedMaterials(prev => 
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const filteredProducts = allProducts.filter(p => {
    const categoryMatch = selectedCategory === "All Jewelry" || p.category === selectedCategory;
    const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
    return categoryMatch && materialMatch;
  });

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200 pb-32">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-12 px-6 border-b border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <p className="text-gold-500 uppercase tracking-[0.3em] text-xs mb-4">Discover the Finest</p>
              <h1 className="font-heading text-4xl md:text-6xl text-ivory">Masterpieces</h1>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-ivory border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-ivory border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">
                Sort By <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pt-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)} 
              className="lg:hidden w-full flex items-center justify-between text-xs uppercase tracking-widest text-ivory border border-white/20 px-6 py-4 mb-4 hover:bg-white/5 transition-colors"
            >
              <span>{isMobileFiltersOpen ? "Hide Filters" : "Show Filters"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Sidebar */}
            <aside className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0 mb-12 lg:mb-0`}>
              <div className="space-y-12">
                <div>
                  <h3 className="font-heading text-xl text-ivory mb-6">Categories</h3>
                  <ul className="space-y-4 text-sm text-gray-400">
                    {categories.map((cat) => (
                      <li 
                        key={cat} 
                        onClick={() => setSelectedCategory(cat)}
                        className={`flex justify-between items-center cursor-pointer transition-colors ${selectedCategory === cat ? 'text-gold-500' : 'hover:text-gold-500'}`}
                      >
                        <span>{cat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl text-ivory mb-6">Material</h3>
                  <ul className="space-y-4 text-sm text-gray-400">
                    {materials.map((mat) => {
                      const isActive = selectedMaterials.includes(mat);
                      return (
                        <li 
                          key={mat}
                          onClick={() => toggleMaterial(mat)}
                          className={`flex items-center gap-3 cursor-pointer transition-colors ${isActive ? 'text-ivory' : 'hover:text-white'}`}
                        >
                          <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${isActive ? 'bg-gold-500 border-gold-500' : 'border-white/20'}`}>
                            {isActive && <Check className="w-3 h-3 text-black font-bold" />}
                          </div> 
                          {mat}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <h2 className="text-2xl text-ivory font-heading mb-4">No masterpieces found</h2>
                  <p className="text-gray-400 text-sm">Please try selecting a different category or material.</p>
                  <button 
                    onClick={() => { setSelectedCategory("All Jewelry"); setSelectedMaterials([]); }}
                    className="mt-8 text-xs uppercase tracking-widest text-gold-500 hover:text-ivory border-b border-gold-500 pb-1 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20">
                    {filteredProducts.map((product) => (
                      <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
                        <div className="relative aspect-square w-full overflow-hidden mb-6 bg-black border border-white/5">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover object-center transform group-hover:scale-110 transition-transform duration-1000 ease-in-out opacity-90 group-hover:opacity-100"
                          />
                          
                          <div className="absolute top-4 right-4 z-10">
                            <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 hover:text-black transition-all duration-300">
                              <Heart className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Hover Quick Add */}
                          <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                            <button className="w-full bg-white/10 backdrop-blur-md border border-white/30 text-white py-3 uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300">
                              <ShoppingBag className="w-4 h-4" /> Quick View
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">{product.category}</span>
                          <h4 className="font-heading text-lg mb-2 text-ivory group-hover:text-gold-400 transition-colors">{product.name}</h4>
                          <p className="text-gray-400 text-sm tracking-widest">{product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  <div className="mt-20 flex justify-center gap-2">
                    <button className="w-10 h-10 border border-gold-500 text-gold-500 flex items-center justify-center text-sm font-heading">1</button>
                    <button className="w-10 h-10 border border-white/20 text-gray-400 hover:border-white/50 transition-colors flex items-center justify-center text-sm font-heading">2</button>
                    <button className="w-10 h-10 border border-white/20 text-gray-400 hover:border-white/50 transition-colors flex items-center justify-center text-sm font-heading">3</button>
                    <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                    <button className="px-6 h-10 border border-white/20 text-gray-400 hover:border-white/50 transition-colors flex items-center justify-center text-xs uppercase tracking-widest">Next</button>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
