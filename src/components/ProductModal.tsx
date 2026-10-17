'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ProductModal({ item, onClose }: ProductModalProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const handleAdd = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    addItem(item, quantity, {}, 0, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden z-10 flex flex-col max-h-[85vh] border border-gray-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 text-gray-700 hover:bg-gray-100 flex items-center justify-center shadow-xs transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image */}
        <div className="relative w-full h-52 bg-gray-50 flex items-center justify-center p-4">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-3">
          <div>
            <h3 className="font-extrabold text-lg text-gray-900 leading-tight">
              {item.name}
            </h3>
            <span className="text-base font-extrabold text-[#E64A19] block mt-1">
              Rs {item.price.toLocaleString()}
            </span>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            {item.description}
          </p>

          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700">Quantity</span>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-0.5">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-bold text-gray-900 px-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <button
            onClick={handleAdd}
            className="w-full py-3 px-4 rounded-xl bg-[#E64A19] hover:bg-[#D71932] text-white font-bold text-xs uppercase tracking-wider shadow-xs flex items-center justify-center gap-2 transition-transform active:scale-98"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Bag • Rs {(item.price * quantity).toLocaleString()}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
