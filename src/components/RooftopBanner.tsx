'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function RooftopBanner() {
  const handleReserve = () => {
    const msg = `*Rooftop Table Reservation - The Rolling Rooster*
--------------------------------------
Hi! I would like to reserve a table at the Rooftop Terrace (Sector I-11/2 Islamabad).
Please let me know availability. Thank you!`;
    window.open(
      `https://wa.me/923005453645?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section id="rooftop" className="py-6 sm:py-12 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[440px] flex items-center shadow-xl">
          {/* Background Rooftop Image */}
          <Image
            src="/images/rooftop.jpg"
            alt="The Rolling Rooster Rooftop Terrace Dining"
            fill
            className="object-cover object-center"
          />

          {/* Dark Atmospheric Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

          {/* Left Content */}
          <div className="relative z-10 max-w-xl p-6 sm:p-14 text-white flex flex-col items-start">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 sm:w-8 h-[2px] bg-[#FFC72C] rounded-full" />
              <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#FFC72C] uppercase">
                ROOFTOP DINING
              </span>
              <span className="w-6 sm:w-8 h-[2px] bg-[#FFC72C] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-3 sm:mb-4">
              GOOD FOOD. <br />
              OPEN SKIES. <br />
              GREAT COMPANY.
            </h2>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-stone-200 font-normal leading-relaxed mb-6 sm:mb-8 max-w-md">
              Enjoy a memorable dining experience at our rooftop terrace in Sector I-11/2, Islamabad.
            </p>

            {/* Button */}
            <button
              onClick={handleReserve}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#C8102E] hover:bg-[#A50E26] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>RESERVE YOUR TABLE</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
