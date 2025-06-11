
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Home, Grid3X3, Heart, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';

const MobileNav = () => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* Mobile App Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-kurchi-saffron/30 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
            <img 
              src="/lovable-uploads/37602a25-3493-42ce-8d4a-ff446e19d8c8.png" 
              alt="Kurchi" 
              className="h-6 w-auto"
            />
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-kurchi-navy hover:text-kurchi-red hover:bg-kurchi-cream" onClick={() => handleNavigation('/search')}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative text-kurchi-navy hover:text-kurchi-red hover:bg-kurchi-cream" onClick={() => handleNavigation('/wishlist')}>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-kurchi-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-kurchi-navy hover:text-kurchi-red hover:bg-kurchi-cream">
                  <User className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-kurchi-navy">Account</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <Button variant="outline" className="w-full justify-start border-kurchi-saffron text-kurchi-navy hover:bg-kurchi-cream" onClick={() => handleNavigation('/profile')}>
                    <UserCircle className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                  <div className="space-y-2">
                    <button onClick={() => handleNavigation('/orders')} className="block py-2 text-kurchi-navy w-full text-left hover:text-kurchi-red transition-colors">My Orders</button>
                    <button onClick={() => handleNavigation('/wishlist')} className="block py-2 text-kurchi-navy w-full text-left hover:text-kurchi-red transition-colors">Wishlist</button>
                    <button onClick={() => handleNavigation('/profile')} className="block py-2 text-kurchi-navy w-full text-left hover:text-kurchi-red transition-colors">Profile</button>
                    <button onClick={() => handleNavigation('/support')} className="block py-2 text-kurchi-navy w-full text-left hover:text-kurchi-red transition-colors">Support</button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-kurchi-saffron/30 shadow-lg z-50">
        <div className="flex items-center justify-around py-2">
          <button onClick={() => handleNavigation('/')} className="flex flex-col items-center p-2">
            <Home className="h-5 w-5 text-kurchi-red" />
            <span className="text-xs text-kurchi-red mt-1">Home</span>
          </button>
          <button onClick={() => handleNavigation('/categories')} className="flex flex-col items-center p-2">
            <Grid3X3 className="h-5 w-5 text-kurchi-navy/60" />
            <span className="text-xs text-kurchi-navy/60 mt-1">Categories</span>
          </button>
          <button onClick={() => handleNavigation('/search')} className="flex flex-col items-center p-2">
            <Search className="h-5 w-5 text-kurchi-navy/60" />
            <span className="text-xs text-kurchi-navy/60 mt-1">Search</span>
          </button>
          <button onClick={() => handleNavigation('/wishlist')} className="flex flex-col items-center p-2">
            <Heart className="h-5 w-5 text-kurchi-navy/60" />
            <span className="text-xs text-kurchi-navy/60 mt-1">Wishlist</span>
          </button>
          <button onClick={() => handleNavigation('/profile')} className="flex flex-col items-center p-2">
            <UserCircle className="h-5 w-5 text-kurchi-navy/60" />
            <span className="text-xs text-kurchi-navy/60 mt-1">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
