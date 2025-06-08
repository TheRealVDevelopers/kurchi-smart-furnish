
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Executive Leather Chair',
      category: 'Office Chairs',
      price: 15999,
      originalPrice: 19999,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Bestseller',
      isB2B: false
    },
    {
      id: 2,
      name: 'Modern Fabric Sofa',
      category: 'Sofas',
      price: 45999,
      originalPrice: 55999,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'New',
      isB2B: false
    },
    {
      id: 3,
      name: 'Ergonomic Gaming Chair',
      category: 'Gaming',
      price: 12999,
      originalPrice: 16999,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Sale',
      isB2B: false
    },
    {
      id: 4,
      name: 'Premium Recliner',
      category: 'Recliners',
      price: 35999,
      originalPrice: 42999,
      rating: 4.8,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Featured',
      isB2B: false
    },
    {
      id: 5,
      name: 'Conference Table Set',
      category: 'Office',
      price: 75999,
      originalPrice: 89999,
      rating: 4.6,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'B2B',
      isB2B: true
    },
    {
      id: 6,
      name: 'Luxury Lounge Chair',
      category: 'Lounge',
      price: 28999,
      originalPrice: 34999,
      rating: 4.9,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Premium',
      isB2B: false
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'bg-green-500';
      case 'New': return 'bg-blue-500';
      case 'Sale': return 'bg-red-500';
      case 'Featured': return 'bg-purple-500';
      case 'B2B': return 'bg-orange-500';
      case 'Premium': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked furniture pieces that combine style, comfort, and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-2 py-1 rounded-md text-xs font-medium`}>
                  {product.badge}
                </div>
                
                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  {product.isB2B && (
                    <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      Bulk Pricing Available
                    </span>
                  )}
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
                    <span className="text-sm text-green-600 font-medium">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
