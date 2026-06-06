"use client";

import Navbar from "@/components/Navbar";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ShieldCheck, Lock } from "lucide-react";

export default function CheckoutPage() {
  const { items } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = items.reduce((total, item) => {
    const priceStr = item.price.replace(/[^\d]/g, "");
    return total + parseInt(priceStr) * item.quantity;
  }, 0);

  const tax = subtotal * 0.03; // 3% GST dummy
  const total = subtotal + tax;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      useCartStore.getState().clearCart();
    }, 2500);
  };

  if (!mounted) return null;

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200 flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-24 px-6 text-center">
          <div className="max-w-xl">
            <ShieldCheck className="w-20 h-20 text-gold-500 mx-auto mb-8" />
            <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-6">Order Confirmed</h1>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm">
              Thank you for your exquisite purchase. Your order #NK-{Math.floor(Math.random() * 100000)} is being meticulously prepared by our artisans. You will receive an email confirmation with tracking details shortly.
            </p>
            <Link href="/shop" className="inline-block border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-300 px-10 py-4 uppercase tracking-widest text-xs font-bold">
              Return to Boutique
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200 pb-32">
      <Navbar />
      
      <div className="pt-32 pb-12 px-6 border-b border-white/5">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl text-ivory flex items-center gap-4">
            Secure Checkout <Lock className="w-5 h-5 text-gold-500" />
          </h1>
        </div>
      </div>

      <section className="pt-12 px-6">
        <div className="container mx-auto">
          {items.length === 0 ? (
             <div className="text-center py-20">
               <h2 className="font-heading text-2xl text-ivory mb-4">Your Shopping Bag is Empty</h2>
               <Link href="/shop" className="text-gold-500 hover:text-white uppercase tracking-widest text-xs border-b border-gold-500 pb-1">
                 Continue Shopping
               </Link>
             </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Checkout Form */}
              <div className="lg:col-span-7 xl:col-span-8">
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-12">
                  
                  {/* Contact Info */}
                  <div>
                    <h2 className="font-heading text-2xl text-ivory mb-6">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Email Address</label>
                        <input required type="email" className="bg-transparent border border-white/20 p-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Phone Number</label>
                        <input required type="tel" className="bg-transparent border border-white/20 p-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h2 className="font-heading text-2xl text-ivory mb-6">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">First Name</label>
                        <input required type="text" className="bg-transparent border border-white/20 p-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Last Name</label>
                        <input required type="text" className="bg-transparent border border-white/20 p-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-6">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500">Street Address</label>
                      <input required type="text" className="bg-transparent border border-white/20 p-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">City</label>
                        <input required type="text" className="bg-transparent border border-white/20 p-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">State / Region</label>
                        <input required type="text" className="bg-transparent border border-white/20 p-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Postal Code</label>
                        <input required type="text" className="bg-transparent border border-white/20 p-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div>
                    <h2 className="font-heading text-2xl text-ivory mb-6">Payment Method</h2>
                    <div className="bg-white/5 border border-white/10 p-6 flex flex-col gap-4">
                      <div className="flex items-center gap-4 border border-gold-500 bg-gold-500/10 p-4 cursor-pointer">
                        <div className="w-4 h-4 rounded-full border-[4px] border-gold-500 bg-black flex-shrink-0"></div>
                        <span className="text-ivory text-sm tracking-wide">Razorpay (Cards, UPI, NetBanking)</span>
                      </div>
                      <p className="text-[10px] text-gray-500 tracking-widest uppercase pl-8">
                        You will be securely redirected to Razorpay's payment gateway.
                      </p>
                    </div>
                  </div>

                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-5 xl:col-span-4">
                <div className="bg-white/5 border border-white/10 p-8 sticky top-32">
                  <h2 className="font-heading text-2xl text-ivory mb-8">Order Summary</h2>
                  
                  <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="relative w-16 h-16 bg-black border border-white/10 flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm text-ivory line-clamp-1">{item.name}</h4>
                          <p className="text-gray-400 text-xs mt-1">Qty: {item.quantity}</p>
                          <p className="text-gold-500 text-xs mt-1">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-6 space-y-4 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Shipping (Insured)</span>
                      <span className="text-gold-500">Complimentary</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Estimated Tax (3%)</span>
                      <span>{formatPrice(tax)}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 mt-6 pt-6 flex justify-between items-end mb-8">
                    <span className="text-sm uppercase tracking-widest text-gray-400">Total</span>
                    <span className="font-heading text-3xl text-ivory">{formatPrice(total)}</span>
                  </div>

                  <button 
                    form="checkout-form"
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gold-500 hover:bg-gold-400 text-black py-4 uppercase tracking-widest text-xs font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <span className="animate-pulse">Connecting to Razorpay...</span>
                    ) : (
                      "Pay with Razorpay"
                    )}
                  </button>
                  <p className="text-[10px] text-gray-500 text-center mt-4 tracking-wide flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" /> Secure 256-bit SSL Encryption
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>
    </main>
  );
}
