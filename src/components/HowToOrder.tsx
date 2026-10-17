'use client';

import React from 'react';
import { Utensils, ShoppingBag, Bike, ChevronRight } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Favorites',
      desc: 'Explore our menu and pick what you love.',
      icon: Utensils,
    },
    {
      num: '02',
      title: 'Build Your Order',
      desc: 'Add items to your cart with ease.',
      icon: ShoppingBag,
    },
    {
      num: '03',
      title: 'Get It Delivered',
      desc: "We'll deliver it fresh and piping hot to your door.",
      icon: Bike,
    },
  ];

  return (
    <section className="py-10 sm:py-20 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] text-[#D99414] uppercase">
              HOW TO ORDER
            </span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#D99414] rounded-full" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#1C1917] tracking-tight leading-tight">
            YOUR CRAVINGS, THREE STEPS AWAY
          </h2>
        </div>

        {/* 3 Steps Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.num}>
                <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#EDE8E1] shadow-2xs hover:shadow-md transition-shadow duration-300 w-full md:flex-1">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF4E5] text-[#E56A1E] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
                      <span className="font-bold text-xs sm:text-sm text-[#E56A1E]">
                        {step.num}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector (Hidden on Mobile) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex text-gray-400 shrink-0">
                    <ChevronRight className="w-6 h-6 stroke-[2]" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
