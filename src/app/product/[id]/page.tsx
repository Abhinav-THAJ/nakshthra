import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, Gem, Truck, ChevronRight, ShoppingBag, Heart } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

const products = {
  "p1": { name: "Imperial Diamond Bangle", price: "₹ 4,50,000", image: "/images/products/diamond_bangle.png", category: "Diamonds", description: "A breathtaking display of craftsmanship. This imperial bangle features brilliant-cut diamonds intricately set in 18K white gold, creating a continuous halo of light. Perfect for evening galas and high society events.", specs: { purity: "18K Gold", weight: "24.5g", stone: "VVS Diamonds", color: "E-F" } },
  "p2": { name: "Royal 22K Men's Ring", price: "₹ 1,25,000", image: "/images/products/gold_ring.png", category: "Gold", description: "Embody power and heritage with this heavyweight 22K yellow gold ring. Intricate traditional motifs are etched deeply into the band, representing strength and legacy.", specs: { purity: "22K Gold", weight: "18.2g", stone: "None", color: "Yellow Gold" } },
  "p3": { name: "Eternity Diamond Pendant", price: "₹ 2,80,000", image: "/images/products/diamond_pendant.png", category: "Diamonds", description: "Suspended in time, this eternity pendant features a flawless center solitaire surrounded by a double halo of pavé diamonds. A true statement of eternal love.", specs: { purity: "18K Gold", weight: "12.0g", stone: "IF Solitaire", color: "D Color" } },
  "p4": { name: "Heritage Bridal Set", price: "₹ 12,80,000", image: "/images/products/bridal_set.png", category: "Bridal", description: "The ultimate trousseau centerpiece. This masterful bridal set weaves together generations of Indian artistry, featuring a majestic choker, matching jhumkas, and a delicate maang tikka.", specs: { purity: "22K Gold", weight: "185.0g", stone: "Kundan & Emeralds", color: "Antique Gold" } },
  "p5": { name: "Temple Motif Gold Necklace", price: "₹ 8,95,000", image: "/images/products/gold_necklace.png", category: "Gold", description: "Inspired by ancient temple architecture, this heavy 22K gold necklace features divine motifs and cascading gold beads. A masterpiece of traditional artisanship.", specs: { purity: "22K Gold", weight: "120.5g", stone: "Rubies", color: "Yellow Gold" } },
  "p6": { name: "Solitaire Diamond Studs", price: "₹ 3,45,000", image: "/images/products/diamond_earrings.png", category: "Diamonds", description: "The essence of minimalism and luxury. These premium solitaire diamond studs rest elegantly on the ear, delivering unparalleled brilliance for everyday sophistication.", specs: { purity: "18K White Gold", weight: "4.2g", stone: "VVS Solitaire", color: "E Color" } }
};

type Props = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products[resolvedParams.id as keyof typeof products];

  if (!product) {
    notFound();
  }

  // Get related products (exclude current, take 4)
  const relatedProducts = Object.entries(products)
    .filter(([id]) => id !== resolvedParams.id)
    .slice(0, 4)
    .map(([id, p]) => ({ id, ...p }));

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="pt-32 pb-8 px-6 border-b border-white/5">
        <div className="container mx-auto flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500">
          <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-gold-500 transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gold-500">{product.name}</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Image Gallery - Reduced size via col-span-4 */}
            <div className="flex flex-col gap-6 lg:col-span-5 xl:col-span-4 xl:col-start-2">
              <div className="relative aspect-square w-full bg-black border border-white/5 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="relative aspect-square bg-black border border-white/10 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${idx}`}
                      fill
                      className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col pt-4 lg:pt-0 lg:col-span-7 xl:col-span-5 xl:col-start-7">
              <span className="text-gold-500 uppercase tracking-widest text-xs mb-4">{product.category}</span>
              <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-6">{product.name}</h1>
              <p className="text-2xl text-gray-300 mb-8 tracking-wider">{product.price}</p>
              
              <div className="w-full h-[1px] bg-white/10 mb-8" />
              
              <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-lg">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-12">
                <div>
                  <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1">Purity</p>
                  <p className="text-ivory text-sm">{product.specs.purity}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1">Gross Weight</p>
                  <p className="text-ivory text-sm">{product.specs.weight}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1">Stone</p>
                  <p className="text-ivory text-sm">{product.specs.stone}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1">Color/Grade</p>
                  <p className="text-ivory text-sm">{product.specs.color}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <AddToCartButton product={{ id: resolvedParams.id, name: product.name, price: product.price, image: product.image }} />
                <button className="flex-1 bg-transparent border border-white/30 hover:border-white text-white py-4 px-8 uppercase tracking-widest text-xs transition-colors">
                  Book Virtual Viewing
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold-500" />
                  <span className="text-xs text-gray-400 uppercase tracking-widest">100% Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gem className="w-5 h-5 text-gold-500" />
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Lifetime Exchange</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-gold-500" />
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Insured Shipping</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#030303]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-gold-500 uppercase tracking-[0.3em] text-xs mb-4">Curated For You</p>
              <h2 className="font-heading text-4xl text-ivory">Related Pieces</h2>
            </div>
            <Link href="/shop" className="text-xs uppercase tracking-widest text-gray-400 hover:text-gold-500 transition-colors border-b border-transparent hover:border-gold-500 pb-1">
              View All Collection
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relProduct) => (
              <Link href={`/product/${relProduct.id}`} key={relProduct.id} className="group cursor-pointer block">
                <div className="relative aspect-square w-full overflow-hidden mb-6 bg-black border border-white/5">
                  <Image
                    src={relProduct.image}
                    alt={relProduct.name}
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
                  <h4 className="font-heading text-base mb-1 text-ivory group-hover:text-gold-400 transition-colors">{relProduct.name}</h4>
                  <p className="text-gray-400 text-xs tracking-widest">{relProduct.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
