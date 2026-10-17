'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { CheckCircle2 } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#1F1F1F] text-[#FFF8EC] border border-[#FFC928]/30 rounded-full shadow-2xl backdrop-blur-md animate-bounce-short"
    >
      <div className="w-6 h-6 rounded-full bg-[#D71932] flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-4 h-4 text-white" />
      </div>
      <span className="text-sm font-medium tracking-wide">{toastMessage.text}</span>
    </div>
  );
}
