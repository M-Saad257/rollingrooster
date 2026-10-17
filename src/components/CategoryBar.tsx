'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { RESTAURANT_SECTIONS } from '@/data/menuData';

export default function CategoryBar() {
  const [activeCategory, setActiveCategory] = useState<string>('deals');

  const scrollToSection = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Horizontally scrollable pill buttons */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {RESTAURANT_SECTIONS.map((sec) => {
            const isActive = activeCategory === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#E64A19] text-white shadow-xs'
                    : 'bg-transparent text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              >
                {sec.title}
              </button>
            );
          })}
        </div>

        {/* Scroll right arrow */}
        <button
          onClick={() => {
            const container = document.querySelector('.no-scrollbar');
            if (container) container.scrollBy({ left: 160, behavior: 'smooth' });
          }}
          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 shrink-0 shadow-xs"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
