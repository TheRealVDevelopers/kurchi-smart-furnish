
import React, { useState } from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Executive Office Chair',
      price: '₹12,999',
      originalPrice: '₹15,999',
      image: '/placeholder.svg',
      inStock: true
    },
    {
      id: 2,
      name: 'Luxury Leather Sofa',
      price: '₹45,999',
      originalPrice: '₹52,999',
      image: '/placeholder.svg',
      inStock: false
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileNav />
      
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Heart className="h-8 w-8 text-kurchi-red mr-3" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Wishlist</h1>
            <span className="ml-4 text-gray-500">({wishlistItems.length} items)</span>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-xl font-bold text-kurchi-red">{item.price}</span>
                      <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-kurchi-red hover:bg-kurchi-red-dark"
                        disabled={!item.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
              <p className="text-gray-600 mb-6">Start adding items you love to your wishlist</p>
              <Button className="bg-kurchi-red hover:bg-kurchi-red-dark">
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
