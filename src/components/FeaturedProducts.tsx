
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Executive Leather Chair Elite',
      price: 15999,
      originalPrice: 19999,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Best Seller',
      category: 'Executive Chairs'
    },
    {
      id: 2,
      name: 'Ergonomic Office Chair Pro',
      price: 12999,
      originalPrice: 16999,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'New Arrival',
      category: 'Office Chairs'
    },
    {
      id: 3,
      name: 'Luxury Recliner Sofa',
      price: 45999,
      originalPrice: 55999,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Premium',
      category: 'Sofas'
    },
    {
      id: 4,
      name: 'Modern Dining Chair Set',
      price: 8999,
      originalPrice: 11999,
      rating: 4.5,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Sale',
      category: 'Dining Chairs'
    }
  ];

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kurchi-navy mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-kurchi-navy/70 max-w-2xl mx-auto">
            Discover our most popular furniture pieces, crafted with precision and designed for comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200 hover:border-kurchi-saffron"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* 100 Days Trial Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-kurchi-saffron to-yellow-400 text-kurchi-navy px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  🎉 100 Days Trial
                </div>
                
                {/* Product Badge */}
                <Badge 
                  className={`absolute top-3 right-3 ${
                    product.badge === 'Best Seller' ? 'bg-kurchi-red text-white' :
                    product.badge === 'New Arrival' ? 'bg-green-500 text-white' :
                    product.badge === 'Premium' ? 'bg-purple-500 text-white' :
                    'bg-orange-500 text-white'
                  }`}
                >
                  {product.badge}
                </Badge>
                
                {/* Quick Actions */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-kurchi-red hover:bg-kurchi-red-muted text-white text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart logic
                      }}
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      Add to Cart
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="px-3 bg-white/90 hover:bg-white border-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to wishlist logic
                      }}
                    >
                      <Heart className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-kurchi-navy/60 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-kurchi-navy/70">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-kurchi-navy group-hover:text-kurchi-red transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-kurchi-red">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-kurchi-navy/50 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  {product.originalPrice && (
                    <div className="text-xs text-green-600 font-medium">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3 border-2 border-kurchi-red text-kurchi-red hover:bg-kurchi-red hover:text-white transition-colors">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
