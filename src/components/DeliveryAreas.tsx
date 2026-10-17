'use client';

import React from 'react';
import { MapPin, ChevronRight, Bike } from 'lucide-react';

export default function DeliveryAreas() {
  const zones = [
    { name: 'Sector I-11/2', desc: 'Base Kitchen & Rooftop' },
    { name: 'Sector I-8 & I-9', desc: 'Express Zone A' },
    { name: 'Sector I-10 & G-9', desc: 'Express Zone B' },
    { name: 'Sector G-10 & G-11', desc: 'Zone C Delivery' },
  ];

  const handleCheckArea = () => {
    const msg = `Hi The Rolling Rooster! I want to confirm delivery availability for my location in Islamabad.`;
    window.open(
      `https://wa.me/923005453645?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section className="py-10 sm:py-16 bg-[#FCFAF7] border-t border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] text-[#D99414] uppercase">
              DELIVERY AREAS
            </span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#1C1917] tracking-tight leading-none">
            WE DELIVER ACROSS ISLAMABAD
          </h2>
        </div>

        {/* Zones & Button */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6">
          {/* 4 Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 flex-1">
            {zones.map((zone) => (
              <div
                key={zone.name}
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EDE8E1] shadow-2xs hover:border-[#C8102E]/40 transition-colors"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-50 text-[#C8102E] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 fill-[#C8102E]/20 stroke-[#C8102E]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-[13px] font-bold text-gray-900 leading-tight">
                    {zone.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 leading-tight mt-0.5">
                    {zone.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Action: Scooter & Button */}
          <div className="flex items-center gap-3 shrink-0 justify-center sm:justify-end pt-2 lg:pt-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFF4E5] text-[#C8102E] flex items-center justify-center shadow-2xs shrink-0">
              <Bike className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </div>

            <button
              onClick={handleCheckArea}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 sm:px-6 py-3 rounded-full bg-[#C8102E] hover:bg-[#A50E26] text-white text-xs font-bold tracking-wider uppercase shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>CHECK YOUR AREA</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
