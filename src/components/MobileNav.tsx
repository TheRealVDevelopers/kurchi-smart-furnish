
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Home, Grid3X3, Heart, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const MobileNav = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      {/* Mobile App Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/37602a25-3493-42ce-8d4a-ff446e19d8c8.png" 
              alt="Kurchi" 
              className="h-6 w-auto"
            />
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-kurchi-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Account</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <UserCircle className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                  <div className="space-y-2">
                    <a href="/orders" className="block py-2 text-gray-700">My Orders</a>
                    <a href="/wishlist" className="block py-2 text-gray-700">Wishlist</a>
                    <a href="/profile" className="block py-2 text-gray-700">Profile</a>
                    <a href="/support" className="block py-2 text-gray-700">Support</a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
        <div className="flex items-center justify-around py-2">
          <a href="/" className="flex flex-col items-center p-2">
            <Home className="h-5 w-5 text-kurchi-red" />
            <span className="text-xs text-kurchi-red mt-1">Home</span>
          </a>
          <a href="/categories" className="flex flex-col items-center p-2">
            <Grid3X3 className="h-5 w-5 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Categories</span>
          </a>
          <a href="/search" className="flex flex-col items-center p-2">
            <Search className="h-5 w-5 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Search</span>
          </a>
          <a href="/wishlist" className="flex flex-col items-center p-2">
            <Heart className="h-5 w-5 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Wishlist</span>
          </a>
          <a href="/profile" className="flex flex-col items-center p-2">
            <UserCircle className="h-5 w-5 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Profile</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
