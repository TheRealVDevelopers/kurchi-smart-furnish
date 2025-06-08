
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Truck, Headphones, ShoppingBag, Ruler } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1616627982181-98a1927b15d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Seating Redefined. Comfort Delivered.",
      alt: "Modern Living Room with Premium Furniture"
    },
    {
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Premium Furniture for Work & Life",
      alt: "Executive Office Chair"
    },
    {
      url: "https://images.unsplash.com/photo-1626727141774-cc998e8306c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 fill-current" />
                <span>India's #1 Smart Furniture Brand</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Redefining Comfort with 
                <span className="text-red-600 relative">
                  {" "}Intelligence
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-200 rounded"></div>
                </span>
              </h1>
              
              <p className="text-xl text-red-600 font-medium italic">
                {heroImages[currentImageIndex].tagline}
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover premium furniture crafted for modern living. From ergonomic office chairs to luxury sofas, 
                experience furniture that adapts to your lifestyle with AI-powered recommendations.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">5 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
                <Headphones className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-red-600 px-8 py-4 text-lg rounded-xl transition-all duration-300">
                <Ruler className="mr-2 h-5 w-5" />
                Custom Order
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">15K+</div>
                <div className="text-sm text-gray-600">Chairs Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">650+</div>
                <div className="text-sm text-gray-600">Workspaces Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">900+</div>
                <div className="text-sm text-gray-600">Monthly Orders</div>
              </div>
            </div>
          </div>

          {/* Right Content - Auto-rotating Hero Images */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src={heroImages[currentImageIndex].url}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-[500px] object-cover transition-all duration-1000 ease-in-out"
                />
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">🤖</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">AI Assistant</div>
                    <div className="text-xs text-gray-500">Always Ready</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📱</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">AR Preview</div>
                    <div className="text-xs text-gray-500">See Before Buy</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-red-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-100 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
