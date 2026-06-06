"use client";

import { useCartStore } from "@/store/useCartStore";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCartStore();

  return (
    <button 
      onClick={() => addItem(product)}
      className="flex-1 bg-gold-500 hover:bg-gold-400 text-black py-4 px-8 uppercase tracking-widest text-xs font-bold transition-colors"
    >
      Add to Shopping Bag
    </button>
  );
}
