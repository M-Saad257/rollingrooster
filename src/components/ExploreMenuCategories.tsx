'use client';

import React from 'react';
import Image from 'next/image';
import { CATEGORIES_LIST } from '@/data/menuData';

interface ExploreMenuCategoriesProps {
  activeCategory?: string;
  onSelectCategory?: (id: string) => void;
}

export default function ExploreMenuCategories({
  activeCategory = 'all',
  onSelectCategory = () => {},
}: ExploreMenuCategoriesProps) {
  return (
    <section id="menu" className="py-10 sm:py-16 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
            <span className="text-[11px] font-black tracking-[0.2em] text-[#D99414] uppercase">
              EXPLORE OUR MENU
            </span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#1C1917] tracking-tight leading-tight mb-2.5">
            WHAT ARE YOU CRAVING TODAY?
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 font-medium px-2">
            From crispy chicken to loaded burgers, discover your next favorite.
          </p>
        </div>

        {/* 7 Category Cards: Horizontal scroll on small screens, 7-col grid on large */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {CATEGORIES_LIST.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white border transition-all duration-300 text-center group cursor-pointer ${
                  isSelected
                    ? 'border-[#C8102E] ring-2 ring-[#C8102E]/20 shadow-md -translate-y-1'
                    : 'border-[#EDE8E1] hover:border-[#C8102E]/50 hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Food Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2.5 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Category Title */}
                <span className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-[#C8102E] transition-colors leading-snug">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
