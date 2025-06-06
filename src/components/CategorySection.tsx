
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const CategorySection = () => {
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
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium furniture designed for every space and purpose
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                </div>
                
                <p className="text-gray-600 mb-3">{category.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{category.productCount}</span>
                  <span className="text-lg font-semibold text-red-600">{category.startingPrice}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
