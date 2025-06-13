
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
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-kurchi-navy mb-4">
            Featured Products
          </h2>
          <p className="text-base md:text-lg text-kurchi-navy/70 max-w-2xl mx-auto">
            Hand-picked furniture pieces that combine style, comfort, and quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border border-kurchi-saffron/30">
              <div className="relative aspect-square bg-kurchi-cream/30 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Enhanced 100-Day Trial Banner */}
                <div className="absolute top-2 left-2 bg-gradient-to-r from-kurchi-saffron to-yellow-400 text-kurchi-navy px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-bold shadow-lg z-10 animate-pulse">
                  🎉 100 Days Trial
                </div>
                
                {/* Product Badge */}
                <div className={`absolute top-2 right-2 ${getBadgeColor(product.badge)} text-white px-2 py-1 rounded-md text-xs font-medium shadow-lg`}>
                  {product.badge}
                </div>
                
                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-12 right-2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg backdrop-blur-sm"
                >
                  <Heart className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
                
                {/* Quick Actions */}
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="w-full bg-kurchi-red hover:bg-kurchi-red-muted text-white text-xs md:text-sm py-2 rounded-lg shadow-lg">
                    <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <div className="mb-2">
                  <span className="text-xs md:text-sm text-kurchi-navy/60">{product.category}</span>
                  {product.isB2B && (
                    <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      Bulk Pricing Available
                    </span>
                  )}
                </div>
                
                <h3 className="text-sm md:text-lg font-semibold text-kurchi-navy mb-2 group-hover:text-kurchi-red transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 md:h-4 md:w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs md:text-sm text-kurchi-navy/60">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg md:text-xl font-bold text-kurchi-navy">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs md:text-sm text-kurchi-navy/50 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  {product.originalPrice > product.price && (
                    <span className="text-xs md:text-sm text-green-600 font-medium">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button variant="outline" size="lg" className="px-6 md:px-8 py-3 border-2 border-kurchi-red text-kurchi-red hover:bg-kurchi-red hover:text-white transition-colors">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
