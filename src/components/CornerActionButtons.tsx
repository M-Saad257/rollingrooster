'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menuData';

export default function CornerActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Call Button */}
      <a
        href={`tel:${RESTAURANT_INFO.phone}`}
        aria-label="Call Restaurant"
        className="w-12 h-12 rounded-full bg-[#E4002B] hover:bg-[#B80022] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all group border-2 border-white"
        title={`Call ${RESTAURANT_INFO.phone}`}
      >
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hi The Rolling Rooster! I would like to place an order.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="relative w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all group border-2 border-white"
        title="Order via WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
