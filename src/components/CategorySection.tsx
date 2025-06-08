
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Executive Chairs',
      description: 'Premium office seating solutions',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      productCount: '120+ Products',
      startingPrice: '₹8,999',
      badge: 'Popular'
    },
    {
      id: 2,
      name: 'Luxury Sofas',
      description: 'Comfort meets elegance',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      productCount: '80+ Products',
      startingPrice: '₹25,999',
      badge: 'Premium'
    },
    {
      id: 3,
      name: 'Gaming Chairs',
      description: 'Ultimate gaming experience',
      image: 'https://images.unsplash.com/photo-1626727141774-cc998e8306c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      productCount: '45+ Products',
      startingPrice: '₹12,999',
      badge: 'Trending'
    },
    {
      id: 4,
      name: 'Dining Sets',
      description: 'Gather in style and comfort',
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      productCount: '60+ Products',
      startingPrice: '₹18,999',
      badge: 'New'
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Popular': return 'bg-green-500';
      case 'Premium': return 'bg-purple-500';
      case 'Trending': return 'bg-orange-500';
      case 'New': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shop by <span className="text-red-600">Category</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collection of premium furniture designed for every space and purpose. 
            From modern offices to cozy homes, find the perfect piece for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${getBadgeColor(category.badge)} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
                  {category.badge}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick View Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {category.name}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600 transition-colors transform group-hover:translate-x-1" />
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {category.productCount}
                  </span>
                  <span className="text-lg font-bold text-red-600">{category.startingPrice}</span>
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
