import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import TrendingProducts from "@/components/TrendingProducts";
import GoldRateWidget from "@/components/GoldRateWidget";
import CustomerTrust from "@/components/CustomerTrust";
import LifestyleSection from "@/components/LifestyleSection";
import BestSellers from "@/components/BestSellers";
import ShowroomCTA from "@/components/ShowroomCTA";

import { getBestSellers } from "@/lib/services/odoo-products";

export default async function Home() {
  const bestSellers = await getBestSellers();

  return (
    <main className="min-h-screen bg-black selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar />
      <Hero />
      <BestSellers products={bestSellers} />
      <FeaturedCollections />
      <TrendingProducts />
      <GoldRateWidget />
      <LifestyleSection />
      <CustomerTrust />
      <ShowroomCTA />
    </main>
  );
}
