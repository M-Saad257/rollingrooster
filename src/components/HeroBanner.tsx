'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menuData';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'ROLLED LOADED READY',
      desc: 'Fresh wraps and signature 18-spice broast stacked with bold fillings and crazy flavor. One bite and you are hooked.',
      image: '/images/banners/hero_banner.png',
    },
    {
      title: 'HOT PRESSURE BROAST',
      desc: 'High-pressure fried chicken with golden craggy skin and steaming juicy meat. Sector I-11/2 Islamabad.',
      image: '/images/hero-feast.jpg',
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 relative">
      {/* Banner Container */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[28/9] max-h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-[#082038]">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          priority
          className="object-cover"
        />

        {/* Carousel Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-transform hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-transform hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === currentSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Speed Contact Buttons (Matching Reference bottom right) */}
      <div className="absolute right-7 bottom-6 z-20 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hi The Rolling Rooster! I would like to place an order.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          aria-label="Call Restaurant"
          className="w-10 h-10 rounded-full bg-[#E64A19] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
