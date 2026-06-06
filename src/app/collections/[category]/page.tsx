import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Filter, ChevronDown, Heart, ShoppingBag } from "lucide-react";
import { notFound } from "next/navigation";

const allProducts = [
  { id: "p1", name: "Imperial Diamond Bangle", price: "₹ 4,50,000", image: "/images/products/diamond_bangle.png", category: "diamond" },
  { id: "p2", name: "Royal 22K Men's Ring", price: "₹ 1,25,000", image: "/images/products/gold_ring.png", category: "gold" },
  { id: "p3", name: "Eternity Diamond Pendant", price: "₹ 2,80,000", image: "/images/products/diamond_pendant.png", category: "high-jewelry" },
  { id: "p4", name: "Heritage Bridal Set", price: "₹ 12,80,000", image: "/images/products/bridal_set.png", category: "bridal" },
  { id: "p5", name: "Temple Motif Gold Necklace", price: "₹ 8,95,000", image: "/images/products/gold_necklace.png", category: "gold" },
  { id: "p6", name: "Solitaire Diamond Studs", price: "₹ 3,45,000", image: "/images/products/diamond_earrings.png", category: "diamond" }
];

const categoryData = {
  "high-jewelry": { title: "High Jewelry", subtitle: "Rare & Exquisite" },
  "bridal": { title: "Bridal Trousseau", subtitle: "For Your Special Day" },
  "gold": { title: "Heritage Gold", subtitle: "Timeless 22K Craftsmanship" },
  "diamond": { title: "Pristine Diamonds", subtitle: "Flawless Brilliance" },
  "men": { title: "Men's Edit", subtitle: "Bold & Distinctive" }
};

type Props = {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const categoryStr = resolvedParams.category;
  
  const catInfo = categoryData[categoryStr as keyof typeof categoryData];
  if (!catInfo) notFound();

  // Filter products or just show all if we don't have enough dummy data per category
  const products = allProducts.filter(p => p.category === categoryStr);
  const displayProducts = products.length > 0 ? products : allProducts; // Fallback to all if empty for demo purposes

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200 pb-32">
      <Navbar />
      
      <section className="pt-40 pb-12 px-6 border-b border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <p className="text-gold-500 uppercase tracking-[0.3em] text-xs mb-4">{catInfo.subtitle}</p>
              <h1 className="font-heading text-4xl md:text-6xl text-ivory">{catInfo.title}</h1>
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

      <section className="pt-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="space-y-12">
                <div>
                  <h3 className="font-heading text-xl text-ivory mb-6">Explore</h3>
                  <ul className="space-y-4 text-sm text-gray-400">
                    <li className="flex justify-between items-center cursor-pointer hover:text-gold-500 transition-colors">
                      <Link href="/shop">All Jewelry</Link>
                    </li>
                    {Object.entries(categoryData).map(([key, val]) => (
                      <li key={key} className={`flex justify-between items-center cursor-pointer transition-colors ${key === categoryStr ? "text-gold-500" : "hover:text-gold-500"}`}>
                        <Link href={`/collections/${key}`}>{val.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20">
                {displayProducts.map((product) => (
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

                      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                        <button className="w-full bg-white/10 backdrop-blur-md border border-white/30 text-white py-3 uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300">
                          <ShoppingBag className="w-4 h-4" /> Quick View
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-heading text-lg mb-2 text-ivory group-hover:text-gold-400 transition-colors">{product.name}</h4>
                      <p className="text-gray-400 text-sm tracking-widest">{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
