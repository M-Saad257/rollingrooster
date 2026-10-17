'use client';

import React from 'react';
import Image from 'next/image';

interface CategoryCirclesProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function CategoryCircles({
  activeCategory,
  onSelectCategory,
}: CategoryCirclesProps) {
  const categories = [
    { id: 'all', name: 'All Menu', image: '/images/hero-feast.jpg' },
    { id: 'deals', name: 'Deals & Combos', image: '/images/hero-feast.jpg' },
    { id: 'broast', name: '18-Spice Broast', image: '/images/broast.jpg' },
    { id: 'burgers', name: 'Zingers & Burgers', image: '/images/zinger.jpg' },
    { id: 'pizzas', name: 'Artisan Pizzas', image: '/images/pizza.jpg' },
    { id: 'wings', name: 'BBQ Wings', image: '/images/wings.jpg' },
    { id: 'fries', name: 'Loaded Fries', image: '/images/loaded-fries.jpg' },
  ];

  return (
    <div className="bg-white border-b border-gray-200/80 py-3 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Horizontal Category Icons - Scrollbar completely hidden */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-1 justify-start sm:justify-center">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none cursor-pointer"
              >
                {/* Circular Image Badge */}
                <div
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 transition-all p-0.5 bg-gray-50 ${
                    isActive
                      ? 'border-[#E4002B] ring-3 ring-[#E4002B]/20 scale-105 shadow-sm'
                      : 'border-gray-200 group-hover:border-[#E4002B]/60 group-hover:scale-102'
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                {/* Label */}
                <span
                  className={`text-[11px] font-bold tracking-tight whitespace-nowrap transition-colors ${
                    isActive ? 'text-[#E4002B]' : 'text-gray-700 group-hover:text-black'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
