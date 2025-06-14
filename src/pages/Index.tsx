
import React from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import SanskritChairSection from '@/components/SanskritChairSection';
import CategorySection from '@/components/CategorySection';
import ProductShowcase from '@/components/ProductShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import B2BToggleSection from '@/components/B2BToggleSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import JoinEarnSection from '@/components/JoinEarnSection';
import Testimonials from '@/components/Testimonials';
import KBuddyCTASection from '@/components/KBuddyCTASection';
import CustomRequestSection from '@/components/CustomRequestSection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileNav />
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <Hero />
        <SanskritChairSection />
        <ProductShowcase />
        <CategorySection />
        <WhyChooseUs />
        <B2BToggleSection />
        <FeaturedProducts />
        <JoinEarnSection />
        <KBuddyCTASection />
        <Testimonials />
        <CustomRequestSection />
      </main>
      <Footer />
      <ChatWidget />
      <ScrollToTop />
    </div>
  );
};

export default Index;
