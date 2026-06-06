import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "gold", title: "Heritage Gold", img: "/images/hero/bridal_model.png" },
  { id: "diamond", title: "Pristine Diamonds", img: "/images/hero/diamond_necklace.png" },
  { id: "bridal", title: "Bridal Trousseau", img: "/images/products/bridal_set.png" },
  { id: "high-jewelry", title: "High Jewelry", img: "/images/products/diamond_pendant.png" }
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="font-heading text-5xl md:text-7xl text-ivory mb-6">Our Collections</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Explore our meticulously crafted ranges. Each piece is designed to be a timeless heirloom, blending traditional artistry with contemporary luxury.
        </p>
      </section>

      {/* Grid */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((cat) => (
              <Link href={`/collections/${cat.id}`} key={cat.id} className="group block relative aspect-[4/5] md:aspect-square overflow-hidden bg-black border border-white/5">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover object-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h2 className="font-heading text-3xl md:text-4xl text-ivory mb-2">{cat.title}</h2>
                  <div className="flex items-center gap-4 text-gold-500 uppercase tracking-widest text-xs">
                    <span>Explore</span>
                    <div className="w-12 h-[1px] bg-gold-500 group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
