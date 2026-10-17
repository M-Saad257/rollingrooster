'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function FlyingCartOverlay() {
  const { flyingItems } = useCart();
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateTarget = () => {
      // Find the navbar cart button position
      const cartBtn = document.getElementById('navbar-cart-btn');
      if (cartBtn) {
        const rect = cartBtn.getBoundingClientRect();
        setTargetPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      } else {
        setTargetPos({ x: window.innerWidth - 60, y: 30 });
      }
    };

    updateTarget();
    window.addEventListener('resize', updateTarget);
    return () => window.removeEventListener('resize', updateTarget);
  }, []);

  if (flyingItems.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {flyingItems.map((item) => {
        const deltaX = targetPos.x - item.startX;
        const deltaY = targetPos.y - item.startY;

        return (
          <div
            key={item.id}
            className="absolute w-14 h-14 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFC928] bg-white animate-fly-cart"
            style={
              {
                left: `${item.startX - 28}px`,
                top: `${item.startY - 28}px`,
                '--tx': `${deltaX}px`,
                '--ty': `${deltaY}px`,
                '--tx-half': `${deltaX * 0.5 - 40}px`,
                '--ty-half': `${deltaY * 0.3}px`,
              } as React.CSSProperties
            }
          >
            <Image
              src={item.image}
              alt="Flying item"
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
