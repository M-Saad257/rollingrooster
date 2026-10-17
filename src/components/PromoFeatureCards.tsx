'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface PromoFeatureCardsProps {
  onExploreBurgers?: () => void;
  onExplorePizzas?: () => void;
}

export default function PromoFeatureCards({
  onExploreBurgers,
  onExplorePizzas,
}: PromoFeatureCardsProps) {
  return (
    <section className="py-4 sm:py-8 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Card: Zinger Burgers (Red Theme) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#B81B1B] via-[#C8102E] to-[#990E22] text-white p-5 sm:p-8 flex items-center justify-between min-h-[180px] sm:min-h-[220px] shadow-lg group">
            {/* Left Content */}
            <div className="flex flex-col items-start z-10 max-w-[58%]">
              <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[0.92] mb-1.5 sm:mb-2">
                ZINGER <br />
                BURGERS
              </h3>
              <p className="text-[11px] sm:text-sm text-red-100 font-normal mb-3 sm:mb-5 leading-snug">
                Crunchy outside and, <br />juicy inside.
              </p>
              <button
                onClick={onExploreBurgers}
                className="flex items-center gap-1 sm:gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white hover:bg-red-50 text-[#C8102E] text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>EXPLORE BURGERS</span>
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
              </button>
            </div>

            {/* Right Food Image */}
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/zinger.jpg"
                alt="Crunchy Zinger Burger"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Card: Artisan Pizzas (Warm Cream/Beige Theme) */}
          <div className="relative overflow-hidden rounded-3xl bg-[#F6EFE6] border border-[#E8DFC8] text-[#1C1917] p-5 sm:p-8 flex items-center justify-between min-h-[180px] sm:min-h-[220px] shadow-sm group">
            {/* Left Content */}
            <div className="flex flex-col items-start z-10 max-w-[58%]">
              <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[0.92] mb-1.5 sm:mb-2 text-[#1C1917]">
                ARTISAN <br />
                PIZZAS
              </h3>
              <p className="text-[11px] sm:text-sm text-stone-600 font-normal mb-3 sm:mb-5 leading-snug">
                Hand-stretched dough, <br />loaded with flavor.
              </p>
              <button
                onClick={onExplorePizzas}
                className="flex items-center gap-1 sm:gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#E56A1E] hover:bg-[#C95512] text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>EXPLORE PIZZAS</span>
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
              </button>
            </div>

            {/* Right Food Image */}
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/pizza.jpg"
                alt="Fresh Artisan Pizza"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
