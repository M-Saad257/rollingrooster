'use client';

import React from 'react';
import TopNav from '@/components/TopNav';
import HeroSection from '@/components/HeroSection';
import ExploreMenuCategories from '@/components/ExploreMenuCategories';
import CrowdFavorites from '@/components/CrowdFavorites';
import PromoFeatureCards from '@/components/PromoFeatureCards';
import AboutSection from '@/components/AboutSection';
import RooftopBanner from '@/components/RooftopBanner';
import HowToOrder from '@/components/HowToOrder';
import DeliveryAreas from '@/components/DeliveryAreas';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#FCFAF7] text-[#1C1917] selection:bg-[#C8102E] selection:text-white">
      {/* 1. Header / Navigation Bar */}
      <TopNav onSearchClick={() => {}} />

      {/* 2. Hero Section: ROLL WITH THE CRUNCH with funky paint typography */}
      <HeroSection />

      {/* 3. Explore Our Menu: WHAT ARE YOU CRAVING TODAY? */}
      <ExploreMenuCategories />

      {/* 4. The Crowd Favorites: 5 Product Cards */}
      <CrowdFavorites />

      {/* 5. Promotional Feature Cards: Zinger Burgers & Artisan Pizzas */}
      <PromoFeatureCards />

      {/* 6. About Us: 18-Spice Broast Feature */}
      <AboutSection />

      {/* 7. Rooftop Dining Atmosphere Banner */}
      <RooftopBanner />

      {/* 8. How To Order: 3 Steps */}
      <HowToOrder />

      {/* 9. Delivery Areas: We Deliver Across Islamabad */}
      <DeliveryAreas />

      {/* 10. Dark Espresso Footer */}
      <Footer />
    </main>
  );
}
