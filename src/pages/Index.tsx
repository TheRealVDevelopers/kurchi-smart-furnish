
import React from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import CustomRequestSection from '@/components/CustomRequestSection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileNav />
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <Hero />
        <CategorySection />
        <WhyChooseUs />
        <FeaturedProducts />
        <Testimonials />
        <CustomRequestSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
