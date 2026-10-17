'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, MapPin, Clock, Calendar, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menuData';

export default function AboutRooftop() {
  const handleReserve = () => {
    const msg = `*Rooftop Table Reservation - The Rolling Rooster*
--------------------------------------
Hi! I would like to inquire about booking a table on the rooftop terrace tonight.
Location: Sector I-11/2 Islamabad
Please let me know availability. Thank you!`;
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="about" className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Rooftop Imagery */}
          <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xs border border-gray-100">
            <Image
              src="/images/rooftop.jpg"
              alt="The Rolling Rooster Rooftop Terrace in Islamabad"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFC928]">
                Sector I-11/2 Islamabad
              </span>
              <h3 className="text-base font-bold">Open-Sky Rooftop Dining</h3>
            </div>
          </div>

          {/* Right: Story & Reservation */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 text-[#E64A19] text-[11px] font-bold uppercase">
              <Sparkles className="w-3 h-3" />
              Signature Craft
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              18-Spice Secret Broast &amp; Rooftop Experience
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
              At <strong>The Rolling Rooster</strong>, our chicken is marinated in 18 authentic herbs and spices, then fried under high pressure to seal in every drop of juice with an impossibly crunchy crust.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-gray-700 py-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D71932]" />
                <span>Sector I-11/2, Islamabad</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FFC928]" />
                <span>12:00 PM – 3:00 AM (Late Night)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={handleReserve}
                className="px-5 py-2.5 rounded-xl bg-[#E64A19] hover:bg-[#D71932] text-white text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-2 transition-transform active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Rooftop Table</span>
              </button>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:text-black text-xs font-semibold flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
