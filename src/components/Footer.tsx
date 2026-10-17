'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Clock, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#201411] text-stone-300 pt-10 sm:pt-14 pb-8 text-xs border-t border-[#352420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-stone-800/80">
          {/* Column 1: Brand & Socials (Col 4) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <div className="relative w-44 sm:w-56 h-12 sm:h-14">
              <Image
                src="/images/LogoMy.png"
                alt="The Rolling Rooster"
                fill
                className="object-contain object-center sm:object-left brightness-125"
              />
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm font-normal">
              Authentic fast food, crispy broast, gourmet burgers, artisan pizzas and a memorable rooftop dining experience in Islamabad.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#35231D] hover:bg-[#C8102E] text-stone-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#35231D] hover:bg-[#C8102E] text-stone-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
              >
                ig
              </a>
              <a
                href="https://wa.me/923005453645"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-[#35231D] hover:bg-[#25D366] text-stone-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
              >
                wa
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-stone-400 text-xs font-normal">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#favorites" className="hover:text-white transition-colors">
                  Deals
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#rooftop" className="hover:text-white transition-colors">
                  Rooftop Dining
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Menu (Col 2) */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase">
              Our Menu
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-stone-400 text-xs font-normal">
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Broast &amp; Chicken
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Burgers &amp; Zinger
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Pizzas
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Wings &amp; Bites
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Loaded Fries
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Drinks &amp; Shakes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Col 4 with ORDER NOW button) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-2.5 sm:mb-3">
                Contact Info
              </h4>
              <div className="space-y-2 text-stone-400 text-xs font-normal">
                <a
                  href="tel:03008482848"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFC72C] shrink-0" />
                  <span>0300-8482848</span>
                </a>
                <a
                  href="tel:03005455645"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFC72C] shrink-0" />
                  <span>+92 300 5455645</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FFC72C] shrink-0 mt-0.5" />
                  <span>Sector I-11/2, Islamabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#FFC72C] shrink-0" />
                  <span>12:00 PM – 3:00 AM Daily</span>
                </div>
              </div>
            </div>

            {/* Red ORDER NOW > Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/923005453645"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C8102E] hover:bg-[#A50E26] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all hover:scale-102 active:scale-98 cursor-pointer w-full sm:w-auto"
              >
                <span>ORDER NOW</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2.5 text-center sm:text-left">
          <span>
            &copy; 2026 The Rolling Rooster (Islamabad). All rights reserved.
          </span>
          <span className="font-medium text-stone-400">
            In-house Fast Food &bull; Cloud Kitchen &bull; Open-Air Rooftop Terrace
          </span>
        </div>
      </div>
    </footer>
  );
}
