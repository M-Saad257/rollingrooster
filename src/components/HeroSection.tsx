'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, ChevronRight, Sparkles, Bike, Moon, Flame } from 'lucide-react';

export default function HeroSection() {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFAF7] via-[#FAF6EE] to-[#FCFAF7] sm:pt-5 pb-12 sm:pb-20">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#FFC72C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#C8102E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Funky Paint Typography & Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
              <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#D99414] uppercase">
                ISLAMABAD&apos;S CRISPY CRAVING
              </span>
              <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
            </div>

            {/* Funky Paint Type Main Headline */}
            <h1 className="font-paint text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] text-[#1C1917] tracking-normal leading-[1.05] sm:leading-[0.98] mb-4 paint-shadow">
              ROLL WITH THE <br />
              <span className="text-[#C8102E] paint-shadow-red inline-block transform hover:rotate-[-1deg] transition-transform">
                CRUNCH.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-lg mb-6 sm:mb-8 leading-relaxed font-medium">
              From crispy pressure broast to juicy zinger burgers and oven-baked pizzas, make every craving a feast.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8 sm:mb-3">
              <a
                href="https://wa.me/923005453645"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#C8102E] hover:bg-[#A50E26] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                <span>ORDER YOUR FAVORITES</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={scrollToMenu}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-white hover:bg-gray-50 border border-[#E7E2D9] text-[#1C1917] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-2xs hover:shadow-xs transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>EXPLORE THE MENU</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Feature Highlights (3 Badges) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-3 border-t border-[#EFECE6] w-full max-w-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2.5 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF4E5] text-[#D99414] flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">Freshly</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 leading-tight">Prepared</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2.5 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF4E5] text-[#D99414] flex items-center justify-center shrink-0">
                  <Bike className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">Fast Delivery</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 leading-tight">in Islamabad</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2.5 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF4E5] text-[#D99414] flex items-center justify-center shrink-0">
                  <Moon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">Late-Night</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 leading-tight">Service till 3 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Feast */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-4 lg:mt-0">
            {/* Playful Doodles around food */}
            <div className="absolute -top-8 left-3 sm:left-10 z-20 flex items-center gap-1.5 pointer-events-none rotate-[-6deg]">
              <span className="font-hand font-bold text-base sm:text-xl text-[#D99414] leading-tight drop-shadow-xs">
                Crispy <br />Juicy <br />Delicious
              </span>
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#D99414] -rotate-12 translate-y-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5c6 0 8 4 8 9m0 0l-3-3m3 3l3-3" />
              </svg>
            </div>

            {/* Sparkle icons */}
            <Sparkles className="absolute top-1 right-6 sm:right-10 w-5 h-5 sm:w-6 sm:h-6 text-[#FFC72C] animate-pulse" />
            <Sparkles className="absolute bottom-6 left-2 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 text-[#FFC72C]/80" />

            {/* Main Visual Image Card */}
            <div className="relative w-full aspect-[4/3] max-w-md sm:max-w-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src="/images/hero-combo.jpg"
                alt="The Rolling Rooster Signature Fast Food Feast"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />

              {/* Logo Seal Badge Sticker on Bucket */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-14 h-14 sm:w-20 sm:h-20 drop-shadow-lg z-20 hover:rotate-12 transition-transform">
                <Image
                  src="/images/logo-seal.png"
                  alt="Quality Seal"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
