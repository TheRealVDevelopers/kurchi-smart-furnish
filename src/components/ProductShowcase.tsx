
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart, ArrowRight } from 'lucide-react';

const ProductShowcase = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Executive Leather Chair',
      category: 'Office Chairs',
      price: 15999,
      originalPrice: 19999,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: '⭐ Best Seller',
      badgeColor: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      id: 2,
      name: 'Modern Fabric Sofa',
      category: 'Sofas',
      price: 45999,
      originalPrice: 55999,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: '🆕 New Arrival',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Ergonomic Gaming Chair',
      category: 'Gaming',
      price: 12999,
      originalPrice: 16999,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: '🔥 Limited Stock',
      badgeColor: 'bg-gradient-to-r from-red-500 to-red-600'
    },
    {
      id: 4,
      name: 'Conference Table Set',
      category: 'Office',
      price: 75999,
      originalPrice: 89999,
      rating: 4.6,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: '🏢 B2B Special',
      badgeColor: 'bg-gradient-to-r from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked furniture pieces that combine style, comfort, and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-0 shadow-lg">
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Enhanced Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm`}>
                  {product.badge}
                </div>
                
                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Order
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8 py-3 hover:bg-red-50 hover:border-red-300 border-2 shadow-lg hover:shadow-xl transition-all duration-300">
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
