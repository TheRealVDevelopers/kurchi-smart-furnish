
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Truck, Headphones, ShoppingBag, Ruler, Factory, Package, Home } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "From Factory to Your Living Room",
      alt: "Modern Living Room with Premium Furniture"
    },
    {
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Manufacturing Excellence, Direct to You",
      alt: "Executive Office Chair"
    },
    {
      url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "#ManufactureToCustomer Journey",
      alt: "Modern Office Setup"
    }
  ];

  const manufacturingSteps = [
    { icon: Factory, label: "Factory", color: "text-blue-600" },
    { icon: Package, label: "Manufacturing", color: "text-orange-600" },
    { icon: Home, label: "Your Home", color: "text-green-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % manufacturingSteps.length);
    }, 2000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-kurchi-cream to-white py-16 md:py-20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8102E' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-kurchi-saffron/30 to-kurchi-saffron/50 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-kurchi-red/20 to-kurchi-red/30 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* 100 Days Trial Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-kurchi-red to-kurchi-red-muted text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg animate-pulse-glow">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-bold">100 Days Free Trial</span>
                <span>on Every Chair!</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kurchi-navy leading-tight">
                From Factory to Your 
                <span className="text-kurchi-red relative">
                  {" "}Living Room
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-kurchi-red to-kurchi-red-muted rounded-full"></div>
                </span>
              </h1>
              
              <div className="bg-kurchi-saffron/20 p-4 rounded-xl border border-kurchi-saffron/50">
                <p className="text-xl text-kurchi-red font-medium italic animate-pulse text-center">
                  {heroImages[currentImageIndex].tagline}
                </p>
                <p className="text-lg text-kurchi-navy/80 text-center mt-2 font-bold">
                  #ManufactureToCustomer
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-kurchi-navy/80 leading-relaxed max-w-lg">
                India's first chair-centric premium furniture brand. Experience direct-from-factory 
                pricing, Sanskrit-inspired designs, and smart furniture solutions crafted for modern Indian homes.
              </p>
            </div>

            {/* Manufacturing Journey Animation */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-kurchi-saffron/30">
              <h3 className="text-lg font-semibold text-kurchi-navy mb-4 text-center">Our Journey</h3>
              <div className="flex items-center justify-between">
                {manufacturingSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        currentStep === index 
                          ? 'border-kurchi-red bg-kurchi-red/10 scale-110' 
                          : 'border-gray-300 bg-gray-50'
                      }`}>
                        <IconComponent className={`h-8 w-8 transition-colors duration-500 ${
                          currentStep === index ? 'text-kurchi-red' : 'text-gray-400'
                        }`} />
                      </div>
                      <span className={`text-sm font-medium transition-colors duration-500 ${
                        currentStep === index ? 'text-kurchi-red' : 'text-gray-500'
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-kurchi-red to-kurchi-red-muted rounded-full transition-all duration-2000"
                  style={{ width: `${((currentStep + 1) / manufacturingSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-lg border border-kurchi-saffron/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-kurchi-navy">5 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-lg border border-kurchi-saffron/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-kurchi-navy">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-lg border border-kurchi-saffron/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Headphones className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-kurchi-navy">24/7 Support</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-kurchi-red to-kurchi-red-muted hover:from-kurchi-red-muted hover:to-kurchi-red text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Explore Chairs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-kurchi-red text-kurchi-red hover:bg-kurchi-red hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                <Ruler className="mr-2 h-5 w-5" />
                Custom Request
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-kurchi-saffron/30">
              <div className="text-center group">
                <div className="text-3xl font-bold text-kurchi-navy mb-1 group-hover:text-kurchi-red transition-colors duration-300">15K+</div>
                <div className="text-sm text-kurchi-navy/70">Chairs Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-kurchi-navy mb-1 group-hover:text-kurchi-red transition-colors duration-300">650+</div>
                <div className="text-sm text-kurchi-navy/70">Workspaces Transformed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-kurchi-navy mb-1 group-hover:text-kurchi-red transition-colors duration-300">900+</div>
                <div className="text-sm text-kurchi-navy/70">Monthly Orders</div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-kurchi-navy/20 via-transparent to-transparent"></div>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-kurchi-red shadow-lg' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-white to-kurchi-cream rounded-2xl shadow-2xl p-6 animate-bounce border border-kurchi-saffron/30">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-kurchi-saffron/20 to-kurchi-saffron/30 rounded-full flex items-center justify-center">
                    <span className="text-kurchi-red text-xl">🪑</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-kurchi-navy">KURCHI Assistant</div>
                    <div className="text-xs text-kurchi-navy/70">Always Ready</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced background decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-kurchi-saffron/20 to-kurchi-saffron/30 rounded-full opacity-30 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-kurchi-red/10 to-kurchi-red/20 rounded-full opacity-30 -z-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
