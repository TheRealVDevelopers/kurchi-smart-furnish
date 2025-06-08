
import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
            <img 
              src="/lovable-uploads/37602a25-3493-42ce-8d4a-ff446e19d8c8.png" 
              alt="Kurchi" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('/categories')} className="text-gray-700 hover:text-red-600 transition-colors">Chairs</button>
            <button onClick={() => handleNavigation('/categories')} className="text-gray-700 hover:text-red-600 transition-colors">Sofas</button>
            <button onClick={() => handleNavigation('/categories')} className="text-gray-700 hover:text-red-600 transition-colors">Recliners</button>
            <button onClick={() => handleNavigation('/categories')} className="text-gray-700 hover:text-red-600 transition-colors">Office</button>
            <button onClick={() => handleNavigation('/custom-request')} className="text-gray-700 hover:text-red-600 transition-colors">Custom</button>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search furniture..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                onFocus={() => handleNavigation('/search')}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2" onClick={() => handleNavigation('/profile')}>
              <User className="h-4 w-4" />
              <span>Account</span>
            </Button>
            <Button variant="ghost" size="sm" className="relative" onClick={() => handleNavigation('/wishlist')}>
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search furniture..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  onFocus={() => handleNavigation('/search')}
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <button onClick={() => handleNavigation('/categories')} className="text-gray-700 hover:text-red-600 transition-colors py-2 text-left">Chairs</button>
                <button onClick={() => handleNavigation('/categories')} className="text-gray-700 hover:text-red-600 transition-colors py-2 text-left">Sofas</button>
                <button onClick={() => handleNavigation('/categories')} className="text-gray-700 hover:text-red-600 transition-colors py-2 text-left">Recliners</button>
                <button onClick={() => handleNavigation('/categories')} className="text-gray-700 hover:text-red-600 transition-colors py-2 text-left">Office</button>
                <button onClick={() => handleNavigation('/custom-request')} className="text-gray-700 hover:text-red-600 transition-colors py-2 text-left">Custom</button>
                <Button variant="outline" className="justify-start" onClick={() => handleNavigation('/profile')}>
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
