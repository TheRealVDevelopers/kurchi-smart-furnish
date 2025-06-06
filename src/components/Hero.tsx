
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Redefining Comfort with 
                <span className="text-red-600"> Intelligence</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Discover premium furniture crafted for modern living. From elegant chairs to luxurious sofas, 
                find pieces that transform your space with style and comfort.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-sm font-medium">🤖 AI Assistant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-sm font-medium">📱 AR Preview</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 px-8 py-3 text-lg">
                Custom Orders
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Furniture Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Cities Served</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl p-8 transform rotate-3 shadow-lg">
              <div className="bg-white rounded-xl p-6 transform -rotate-3 shadow-xl">
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">K</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                    </div>
                    <div className="text-sm text-gray-500">Premium Furniture Collection</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium">Live Chat</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">⚡ Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
