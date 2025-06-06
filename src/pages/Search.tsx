
import React, { useState } from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, Filter, SlidersHorizontal } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    priceRange: '',
    material: ''
  });

  const searchResults = [
    {
      id: 1,
      name: 'Executive Office Chair',
      price: '₹12,999',
      originalPrice: '₹15,999',
      image: '/placeholder.svg',
      rating: 4.5,
      reviews: 156
    },
    {
      id: 2,
      name: 'Luxury Leather Sofa',
      price: '₹45,999',
      originalPrice: '₹52,999',
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 89
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileNav />
      
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Search Furniture</h1>
            
            {/* Search Bar */}
            <div className="relative mb-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for chairs, sofas, tables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kurchi-red focus:border-kurchi-red"
              />
            </div>

            {/* Filter Bar */}
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              <Button variant="outline" size="sm" className="flex items-center whitespace-nowrap">
                <Filter className="h-4 w-4 mr-2" />
                Category
              </Button>
              <Button variant="outline" size="sm" className="flex items-center whitespace-nowrap">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Price Range
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                Material
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                Rating
              </Button>
            </div>
          </div>

          {/* Search Results */}
          <div className="mb-4">
            <p className="text-gray-600">Showing {searchResults.length} results for "{searchQuery || 'all products'}"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <Card key={product.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl font-bold text-kurchi-red">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(product.rating))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results State */}
          {searchResults.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <SearchIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
