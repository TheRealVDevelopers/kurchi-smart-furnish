
import React from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Office Chairs',
      description: 'Ergonomic designs for productivity',
      image: '/placeholder.svg',
      productCount: '120+ Products',
      startingPrice: '₹5,999'
    },
    {
      id: 2,
      name: 'Luxury Sofas',
      description: 'Comfort meets elegance',
      image: '/placeholder.svg',
      productCount: '80+ Products',
      startingPrice: '₹25,999'
    },
    {
      id: 3,
      name: 'Recliners',
      description: 'Ultimate relaxation experience',
      image: '/placeholder.svg',
      productCount: '45+ Products',
      startingPrice: '₹15,999'
    },
    {
      id: 4,
      name: 'Dining Sets',
      description: 'Gather in style',
      image: '/placeholder.svg',
      productCount: '60+ Products',
      startingPrice: '₹12,999'
    },
    {
      id: 5,
      name: 'Study Tables',
      description: 'Focus and productivity',
      image: '/placeholder.svg',
      productCount: '35+ Products',
      startingPrice: '₹8,999'
    },
    {
      id: 6,
      name: 'Lounge Chairs',
      description: 'Relaxation redefined',
      image: '/placeholder.svg',
      productCount: '25+ Products',
      startingPrice: '₹18,999'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileNav />
      
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Categories
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete collection of premium furniture designed for every space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-kurchi-red transition-colors" />
                  </div>
                  
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{category.productCount}</span>
                    <span className="text-lg font-semibold text-kurchi-red">{category.startingPrice}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
