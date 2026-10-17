'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X, Plus } from 'lucide-react';
import { RESTAURANT_SECTIONS, MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: MenuItem) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectItem }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const { addItem } = useCart();

  if (!isOpen) return null;

  const allItems = RESTAURANT_SECTIONS.flatMap((sec) => sec.items);
  const results = allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search burgers, pizzas, wings, broast..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm outline-none text-gray-900 placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {results.length === 0 ? (
            <div className="py-12 text-center text-xs text-gray-400">
              No menu items match &quot;{query}&quot;
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectItem(item);
                  onClose();
                }}
                className="p-2.5 rounded-xl hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors border border-transparent hover:border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-gray-900">{item.name}</h5>
                    <span className="text-[11px] font-semibold text-[#E64A19]">
                      Rs {item.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    addItem(item, 1, {}, 0, {
                      x: rect.left + rect.width / 2,
                      y: rect.top + rect.height / 2,
                    });
                  }}
                  className="w-7 h-7 rounded-full bg-[#E64A19] text-white flex items-center justify-center hover:bg-[#D71932]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
