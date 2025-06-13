
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Truck, Home, Wrench, Package, CheckCircle } from 'lucide-react';

const Hero = () => {
  const factorySteps = [
    { icon: Wrench, label: 'Crafting', description: 'Expert craftsmen create each piece' },
    { icon: Package, label: 'Packing', description: 'Carefully packed for safe delivery' },
    { icon: Truck, label: 'Shipping', description: 'Direct transportation to you' },
    { icon: Home, label: 'Delivered', description: 'Arrives at your doorstep' },
    { icon: CheckCircle, label: 'Satisfied', description: '100-day trial guarantee' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-kurchi-cream via-white to-kurchi-saffron/20">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-kurchi-red rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-kurchi-saffron rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-kurchi-red rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Enhanced Hashtag Section */}
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-kurchi-red/10 to-kurchi-saffron/20 px-4 md:px-6 py-2 md:py-3 rounded-full border border-kurchi-saffron/30 mb-4 animate-bounce">
                <span className="text-kurchi-red font-bold text-lg md:text-xl">#ManufactureToCustomer</span>
              </div>
              <p className="text-kurchi-navy/70 text-sm md:text-base font-medium">
                Direct from our factory floor to your door
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-kurchi-navy mb-4 md:mb-6 leading-tight">
              Premium <span className="font-sanskrit text-kurchi-red">कुर्ची</span>
              <br className="hidden md:block" />
              <span className="text-kurchi-red">Direct From Factory</span>
            </h1>
            
            <p className="text-base md:text-xl text-kurchi-navy/80 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience luxury furniture crafted with ancient Indian wisdom. 
              Skip the middleman, embrace quality, and enjoy our 
              <span className="font-bold text-kurchi-red"> 100-day risk-free trial</span>.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 md:mb-12">
              <Button size="lg" className="bg-kurchi-red hover:bg-kurchi-red-muted text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-kurchi-navy text-kurchi-navy hover:bg-kurchi-navy hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl transition-colors">
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* 100-Day Trial Highlight */}
            <div className="bg-gradient-to-r from-kurchi-saffron/20 to-yellow-100 p-4 md:p-6 rounded-2xl border border-kurchi-saffron/30 shadow-lg">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-12 h-12 bg-kurchi-saffron rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎉</span>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-bold text-kurchi-navy text-base md:text-lg">100 Days Risk-Free Trial</h3>
                  <p className="text-kurchi-navy/70 text-sm md:text-base">Not happy? Full refund, no questions asked!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Factory Animation */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Factory Image */}
              <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-kurchi-saffron/30">
                <img
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="KURCHI Factory"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-2xl"
                />
                
                {/* Animated Process Steps */}
                <div className="absolute -bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-xl border border-kurchi-saffron/30">
                    <div className="flex justify-between items-center">
                      {factorySteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                          <div key={index} className="text-center group">
                            <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-kurchi-red to-kurchi-red-muted rounded-full flex items-center justify-center mb-1 md:mb-2 transition-all duration-300 animate-pulse`} style={{ animationDelay: `${index * 0.5}s` }}>
                              <IconComponent className="h-3 w-3 md:h-4 md:w-4 text-white" />
                            </div>
                            <span className="text-xs font-medium text-kurchi-navy hidden md:block">{step.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-kurchi-saffron text-kurchi-navy px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg animate-bounce">
                ✨ Premium Quality
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg animate-bounce delay-1000">
                🚚 Free Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
