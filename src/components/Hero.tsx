
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Truck, Headphones, ShoppingBag, Ruler } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Seating Redefined. Comfort Delivered.",
      alt: "Modern Living Room with Premium Furniture"
    },
    {
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Premium Furniture for Work & Life",
      alt: "Executive Office Chair"
    },
    {
      url: "data:image/jpeg;base64,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",
      tagline: "Ergonomic Excellence. Every Day.",
      alt: "Modern Office Setup"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-16 md:py-20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-100 to-red-50 text-red-800 px-6 py-3 rounded-full text-sm font-medium shadow-lg border border-red-200">
                <Star className="h-4 w-4 fill-current" />
                <span>India's #1 Smart Furniture Brand</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Redefining Comfort with 
                <span className="text-red-600 relative">
                  {" "}Intelligence
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-xl text-red-600 font-medium italic animate-pulse">
                {heroImages[currentImageIndex].tagline}
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover premium furniture crafted for modern living. From ergonomic office chairs to luxury sofas, 
                experience furniture that adapts to your lifestyle with AI-powered recommendations.
              </p>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">5 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Headphones className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-red-600 hover:bg-red-50 px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                <Ruler className="mr-2 h-5 w-5" />
                Custom Order
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center group">
                <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">15K+</div>
                <div className="text-sm text-gray-600">Chairs Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">650+</div>
                <div className="text-sm text-gray-600">Workspaces Transformed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">900+</div>
                <div className="text-sm text-gray-600">Monthly Orders</div>
              </div>
            </div>
          </div>

          {/* Right Content - Auto-rotating Hero Images */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={heroImages[currentImageIndex].url}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-[500px] object-cover transition-all duration-1000 ease-in-out"
                />
                
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white shadow-lg' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-6 animate-bounce border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">🤖</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">AI Assistant</div>
                    <div className="text-xs text-gray-500">Always Ready</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced background decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-30 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 -z-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
