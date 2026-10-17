'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ShoppingBag, ChevronRight, Menu, X } from 'lucide-react';

interface TopNavProps {
  onSearchClick?: () => void;
}

export default function TopNav({ onSearchClick }: TopNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FCFAF7]/95 backdrop-blur-md  border-[#EFECE6] transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Logo Lockup */}
        <Link href="#home" className="flex items-center gap-2 group focus:outline-none shrink-0">
          <div className="relative w-36 sm:w-48 md:w-52 h-10 sm:h-14">
            <Image
              src="/images/LogoMy.png"
              alt="The Rolling Rooster"
              fill
              priority
              className="object-contain object-left transition-transform duration-300 group-hover:scale-102"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-9 text-xs font-semibold text-gray-700">
          <Link
            href="#home"
            className="relative text-gray-950 font-bold transition-colors pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C8102E] after:rounded-full"
          >
            Home
          </Link>
          <Link
            href="#menu"
            className="hover:text-[#C8102E] transition-colors pb-1"
          >
            Menu
          </Link>
          <Link
            href="#favorites"
            className="hover:text-[#C8102E] transition-colors pb-1"
          >
            Deals
          </Link>
          <Link
            href="#about"
            className="hover:text-[#C8102E] transition-colors pb-1"
          >
            Our Story
          </Link>
          <Link
            href="#rooftop"
            className="hover:text-[#C8102E] transition-colors pb-1"
          >
            Rooftop Dining
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#C8102E] transition-colors pb-1"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Search, Cart Icon & ORDER NOW Button */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Search Icon */}
          <button
            onClick={onSearchClick}
            aria-label="Search menu items"
            className="p-2 text-gray-800 hover:text-[#C8102E] transition-colors rounded-full hover:bg-black/5 cursor-pointer"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
          </button>

          {/* Cart Bag Icon with red badge */}
          <button
            aria-label="Cart with 0 items"
            className="relative p-2 text-gray-800 hover:text-[#C8102E] transition-all rounded-full hover:bg-black/5 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
            <span className="absolute top-0.5 right-0.5 sm:-top-0.5 sm:-right-0.5 bg-[#C8102E] text-white text-[9px] sm:text-[10px] font-bold w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shadow-xs">
              0
            </span>
          </button>

          {/* ORDER NOW > Pill Button */}
          <a
            href="https://wa.me/923005453645"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#C8102E] hover:bg-[#A50E26] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm transition-all hover:scale-102 active:scale-98 cursor-pointer whitespace-nowrap"
          >
            <span>ORDER NOW</span>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-gray-800 hover:text-[#C8102E] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EFECE6] px-4 py-4 space-y-3 shadow-lg">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#C8102E]"
          >
            Home
          </Link>
          <Link
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#C8102E]"
          >
            Menu
          </Link>
          <Link
            href="#favorites"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#C8102E]"
          >
            Deals
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#C8102E]"
          >
            Our Story
          </Link>
          <Link
            href="#rooftop"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#C8102E]"
          >
            Rooftop Dining
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#C8102E]"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
