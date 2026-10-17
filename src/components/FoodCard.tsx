'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Heart } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

interface FoodCardProps {
  item: MenuItem;
  onOpenDetails: (item: MenuItem) => void;
}

export default function FoodCard({ item, onOpenDetails }: FoodCardProps) {
  const { addItem } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const coords = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    addItem(item, 1, {}, 0, coords);
  };

  return (
    <div
      onClick={() => onOpenDetails(item)}
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-xs hover:shadow-md transition-all duration-200 p-3.5 cursor-pointer"
    >
      {/* Top row: Heart wishlist toggle */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsLiked(!isLiked);
        }}
        aria-label="Save to favorites"
        className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-400 hover:text-[#E64A19] shadow-2xs transition-colors"
      >
        <Heart
          className={`w-4 h-4 ${isLiked ? 'fill-[#E64A19] text-[#E64A19]' : 'stroke-current'}`}
        />
      </button>

      <div>
        {/* Compact Food Image */}
        <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-2.5 flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#E64A19] transition-colors leading-tight line-clamp-1">
          {item.name}
        </h4>

        <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Bottom Row: Price & Circular Add Button */}
      <div className="mt-3 pt-2.5 border-t border-gray-50 flex items-center justify-between">
        <div className="flex flex-col">
          {item.isStartingFrom && (
            <span className="text-[10px] text-gray-400 uppercase font-semibold">Starting From</span>
          )}
          <span className="text-sm font-extrabold text-gray-900">
            Rs {item.price.toLocaleString()}
          </span>
        </div>

        {/* Circular + button */}
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${item.name} to bag`}
          className="w-8 h-8 rounded-full bg-[#E64A19] hover:bg-[#D71932] text-white flex items-center justify-center shadow-xs transition-transform active:scale-90"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
