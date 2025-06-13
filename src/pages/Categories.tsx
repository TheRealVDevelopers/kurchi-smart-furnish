
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Search, Filter, Grid3X3, List, ChevronRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState<{
    use: string[];
    material: string[];
    category: string[];
  }>({
    use: [],
    material: [],
    category: []
  });
  
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Executive Chairs',
      emoji: '🪑',
      description: 'Premium chairs for leadership',
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: 45,
      tags: ['Premium', 'Ergonomic'],
      category: 'Chair',
      use: 'Office',
      material: 'Leather'
    },
    {
      id: 2,
      name: 'Gaming Chairs',
      emoji: '🎮',
      description: 'Comfort for long gaming sessions',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: 32,
      tags: ['Gaming', 'RGB'],
      category: 'Chair',
      use: 'Home',
      material: 'Fabric'
    },
    {
      id: 3,
      name: 'Office Sofas',
      emoji: '🛋️',
      description: 'Professional seating solutions',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: 28,
      tags: ['Business', 'Comfort'],
      category: 'Sofa',
      use: 'Office',
      material: 'Leather'
    },
    {
      id: 4,
      name: 'Home Lounge Chairs',
      emoji: '🏠',
      description: 'Relaxation and comfort at home',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: 38,
      tags: ['Comfort', 'Style'],
      category: 'Chair',
      use: 'Home',
      material: 'Wood'
    },
    {
      id: 5,
      name: 'Conference Tables',
      emoji: '🪵',
      description: 'Meeting room essentials',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: 22,
      tags: ['Business', 'Large'],
      category: 'Table',
      use: 'Office',
      material: 'Wood'
    },
    {
      id: 6,
      name: 'Outdoor Chairs',
      emoji: '🌞',
      description: 'Weather-resistant outdoor seating',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: 19,
      tags: ['Weather-proof', 'Durable'],
      category: 'Chair',
      use: 'Outdoor',
      material: 'Steel'
    }
  ];

  const filters = {
    use: ['Office', 'Home', 'Outdoor'],
    material: ['Wood', 'Leather', 'Fabric', 'Steel', 'Plastic'],
    category: ['Chair', 'Sofa', 'Table']
  };

  const handleFilterChange = (filterType: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const filteredCategories = categories.filter(category => {
    const useMatch = selectedFilters.use.length === 0 || selectedFilters.use.includes(category.use);
    const materialMatch = selectedFilters.material.length === 0 || selectedFilters.material.includes(category.material);
    const categoryMatch = selectedFilters.category.length === 0 || selectedFilters.category.includes(category.category);
    
    return useMatch && materialMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileNav />
      
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-kurchi-navy/60 mb-6">
            <button onClick={() => navigate('/')} className="hover:text-kurchi-red transition-colors">
              <Home className="h-4 w-4" />
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-kurchi-navy font-medium">Categories</span>
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-kurchi-navy mb-2">
                Furniture Categories
              </h1>
              <p className="text-kurchi-navy/70">
                Discover our complete range of premium furniture collections
              </p>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="px-3"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="px-3"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-kurchi-saffron/30 sticky top-24">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="h-5 w-5 text-kurchi-red" />
                  <h3 className="text-lg font-semibold text-kurchi-navy">Filters</h3>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-kurchi-navy/50" />
                    <Input
                      placeholder="Search categories..."
                      className="pl-10 w-full"
                    />
                  </div>
                </div>

                {/* Filter Groups */}
                {Object.entries(filters).map(([filterType, options]) => (
                  <div key={filterType} className="mb-6">
                    <h4 className="font-medium text-kurchi-navy mb-3 capitalize">
                      By {filterType}
                    </h4>
                    <div className="space-y-2">
                      {options.map(option => (
                        <label key={option} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters[filterType as keyof typeof selectedFilters].includes(option)}
                            onChange={() => handleFilterChange(filterType as keyof typeof selectedFilters, option)}
                            className="rounded border-kurchi-saffron text-kurchi-red focus:ring-kurchi-red"
                          />
                          <span className="text-sm text-kurchi-navy/80">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setSelectedFilters({ use: [], material: [], category: [] })}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-kurchi-navy/70">
                  Showing {filteredCategories.length} of {categories.length} categories
                </p>
              </div>

              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredCategories.map(category => (
                  <Card key={category.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-kurchi-saffron/30">
                    <div className={`${viewMode === 'list' ? 'flex' : ''}`}>
                      <div className={`relative overflow-hidden ${
                        viewMode === 'list' ? 'w-48 h-32' : 'aspect-square'
                      }`}>
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        
                        {/* Emoji Badge */}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                          {category.emoji}
                        </div>
                        
                        {/* Count Badge */}
                        <div className="absolute top-4 right-4 bg-kurchi-red text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          {category.count} items
                        </div>
                      </div>
                      
                      <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-kurchi-navy group-hover:text-kurchi-red transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-kurchi-navy/70 text-sm leading-relaxed">
                            {category.description}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {category.tags.map(tag => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          {/* Category Info */}
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-4 text-xs text-kurchi-navy/60">
                              <span>{category.category}</span>
                              <span>•</span>
                              <span>{category.use}</span>
                              <span>•</span>
                              <span>{category.material}</span>
                            </div>
                          </div>
                          
                          <Button className="w-full mt-4 bg-kurchi-red hover:bg-kurchi-red-muted">
                            View Products
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* No Results */}
              {filteredCategories.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-kurchi-navy mb-2">No categories found</h3>
                  <p className="text-kurchi-navy/70">Try adjusting your filters to see more results.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Categories;
