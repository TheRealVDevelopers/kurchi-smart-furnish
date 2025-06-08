
import React from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import CustomRequestForm from '@/components/CustomRequestForm';
import ChatWidget from '@/components/ChatWidget';

const CustomRequest = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MobileNav />
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="py-12">
          <CustomRequestForm />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default CustomRequest;
