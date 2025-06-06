
import React from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileNav />
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
