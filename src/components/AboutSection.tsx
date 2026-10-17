'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Flame, Building2, Bike, Moon } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-20 bg-[#FCFAF7] border-t border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Broast Image with 18-SPICE BROAST Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/broast.jpg"
                alt="Authentic 18-Spice Pressure Broast"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* 18-Spice Broast Scalloped Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#351E14] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-[#D99414]/30 flex flex-col items-center justify-center rotate-3 hover:rotate-0 transition-transform">
                <span className="font-display text-base sm:text-xl font-black tracking-wider text-[#FFC72C] leading-none">
                  18-SPICE
                </span>
                <span className="font-display text-sm sm:text-lg font-black tracking-widest text-white leading-none mt-0.5">
                  BROAST
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 4 Feature Badges */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] text-[#D99414] uppercase">
                ABOUT US
              </span>
              <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-black uppercase text-[#1C1917] tracking-tight leading-[0.98] mb-3 sm:mb-4">
              FRESH, FAST, AND <br />
              <span className="text-[#C8102E]">DELIVERED DELICIOUS</span> <br />
              RIGHT TO YOU
            </h2>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal max-w-xl mb-6">
              The Rolling Rooster is Islamabad&apos;s premier cloud kitchen &amp; open-air rooftop dining destination in Sector I-11/2. We combine authentic 18-spice pressure broast with gourmet zinger recipes and artisan stone-baked pizzas, backed by rigorous hygiene standards and swift city-wide delivery.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full">
              {/* Button */}
              <a
                href="https://wa.me/923005453645"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#C8102E] hover:bg-[#A50E26] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all hover:scale-102 active:scale-98 cursor-pointer shrink-0"
              >
                <span>OUR STORY</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* 4 Feature Badges in 2x2 Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 flex-1 w-full text-left">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF4E5] text-[#D99414] flex items-center justify-center shrink-0">
                    <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-snug">
                    Authentic 18-Spice Broast
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF4E5] text-[#D99414] flex items-center justify-center shrink-0">
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-snug">
                    Rooftop Dining in Sector I-11/2
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF4E5] text-[#D99414] flex items-center justify-center shrink-0">
                    <Bike className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-snug">
                    Fast &amp; Fresh Delivery
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF4E5] text-[#D99414] flex items-center justify-center shrink-0">
                    <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-snug">
                    Open Till 3:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
