
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

const KBuddyCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-kurchi-red via-kurchi-red-muted to-kurchi-red text-white relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-white rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-xl">
                <span className="text-3xl">🪑</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Meet KURCHI Assistant</h3>
                <p className="text-white/90">Your Smart <span className="font-sanskrit">कुर्ची</span> Expert</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Need Help Finding the Perfect <span className="font-sanskrit text-kurchi-saffron">कुर्ची</span>?
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed">
              KURCHI Assistant is here to help! Get instant recommendations based on Sanskrit chair philosophy, 
              upload custom designs, track orders, or connect with our expert craftsmen - all in one smart chat experience.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-kurchi-saffron" />
                <span>AI-powered <span className="font-sanskrit">कुर्ची</span> recommendations</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-kurchi-saffron" />
                <span>Instant custom request processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-kurchi-saffron" />
                <span>24/7 support & 100-day trial tracking</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-kurchi-red hover:bg-kurchi-cream px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with KURCHI Assistant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Right Content - Enhanced Chat Preview */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-kurchi-cream rounded-full flex items-center justify-center">
                    <span className="text-xl">🪑</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-kurchi-navy">KURCHI Assistant</div>
                    <div className="text-xs text-green-600 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      Online now
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-kurchi-cream to-kurchi-saffron/20 p-3 rounded-lg text-sm text-kurchi-navy border border-kurchi-saffron/30">
                    <span className="font-sanskrit">नमस्ते!</span> I'm KURCHI Assistant 🪑 How can I help you find the perfect chair today?
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-kurchi-red/10 text-kurchi-red p-2 rounded-lg text-xs font-medium hover:bg-kurchi-red/20 transition-colors border border-kurchi-red/30">
                      🪑 Sanskrit Chairs
                    </button>
                    <button className="bg-blue-50 text-blue-700 p-2 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors border border-blue-200">
                      📷 Custom Request
                    </button>
                    <button className="bg-green-50 text-green-700 p-2 rounded-lg text-xs font-medium hover:bg-green-100 transition-colors border border-green-200">
                      🏢 B2B Orders
                    </button>
                    <button className="bg-purple-50 text-purple-700 p-2 rounded-lg text-xs font-medium hover:bg-purple-100 transition-colors border border-purple-200">
                      📦 100-Day Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced floating chat indicator */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-green-600 text-white p-3 rounded-full animate-bounce shadow-2xl">
              <MessageCircle className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KBuddyCTASection;
