'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const CROWD_FAVORITES_UI = [
  {
    id: 'fav-1',
    name: 'Crispy Broast (Leg Piece)',
    tag: 'BROAST',
    desc: 'Signature 18-spice pressure broast, crisp and juicy.',
    price: 'Rs. 350',
    image: '/images/broast.jpg',
  },
  {
    id: 'fav-2',
    name: 'Zinger Burger',
    tag: 'BURGER',
    desc: 'Juicy, crunchy and loaded with flavor and special sauce.',
    price: 'Rs. 400',
    image: '/images/zinger.jpg',
  },
  {
    id: 'fav-3',
    name: 'BBQ Chicken Wings (6)',
    tag: 'BBQ',
    desc: 'Smoky, saucy and irresistible glazed wings.',
    price: 'Rs. 600',
    image: '/images/wings.jpg',
  },
  {
    id: 'fav-4',
    name: 'Mayo Garlic Fries',
    tag: 'FRIES',
    desc: 'Crispy golden fries with creamy garlic mayo drizzle.',
    price: 'Rs. 450',
    image: '/images/loaded-fries.jpg',
  },
  {
    id: 'fav-5',
    name: 'Large Pizza (Classic)',
    tag: 'PIZZA',
    desc: 'Stone-baked, hand-stretched pizza with prime toppings.',
    price: 'Rs. 1,200',
    image: '/images/pizza.jpg',
  },
];

export default function CrowdFavorites() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section id="favorites" className="py-10 sm:py-14 bg-[#FCFAF7] border-t border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Title & Navigation Arrows */}
        <div className="flex items-end justify-between gap-4 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 sm:w-6 h-[2px] bg-[#D99414] rounded-full" />
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] text-[#D99414] uppercase">
                ROLLING ROOSTER PICKS
              </span>
              <span className="w-5 sm:w-6 h-[2px] bg-[#D99414] rounded-full" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1C1917] tracking-tight leading-none">
              THE CROWD FAVORITES
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={scrollLeft}
              aria-label="Previous items"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 hover:border-gray-900 bg-white text-gray-700 hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next items"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 hover:border-gray-900 bg-white text-gray-700 hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Product Cards Row with Top Protruding Circular Images (Light Theme) */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto lg:overflow-visible pt-10 pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CROWD_FAVORITES_UI.map((item) => (
            <div
              key={item.id}
              className="min-w-[75%] sm:min-w-[44%] md:min-w-[32%] lg:min-w-0 relative flex flex-col justify-between pt-12 pb-5 px-4 rounded-3xl bg-white border border-[#EDE8E1] hover:border-[#F57C00]/50 shadow-sm hover:shadow-xl transition-all duration-300 group snap-start mt-6"
            >
              {/* Protruding Circular Food Image (Top Center) */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full p-1 bg-white shadow-md border border-[#EDE8E1] group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                {/* Top Row: Category Tag & AVAILABLE status */}
                <div className="flex items-center justify-between gap-2 mb-3 mt-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-stone-100 text-stone-600">
                    {item.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    AVAILABLE
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-950 leading-snug group-hover:text-[#E65100] transition-colors mb-1.5 line-clamp-1">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-gray-500 font-normal line-clamp-2 leading-relaxed mb-4 min-h-[32px]">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Row: PRICE & + Add to Order Button */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-stone-400 leading-tight">
                    PRICE
                  </span>
                  <span className="text-sm font-black text-gray-950 leading-tight">
                    {item.price}
                  </span>
                </div>

                {/* + Add to Order Vibrant Pill Button */}
                <a
                  href="https://wa.me/923005453645"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#F57C00] to-[#E65100] hover:from-[#E65100] hover:to-[#D84315] text-white text-[11px] font-bold tracking-wide shadow-sm hover:shadow transition-all hover:scale-102 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
