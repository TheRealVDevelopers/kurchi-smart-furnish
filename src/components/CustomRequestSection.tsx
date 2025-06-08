
import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, MessageCircle, Palette, ArrowRight } from 'lucide-react';

const CustomRequestSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Have a <span className="text-red-200">Custom</span> Design in Mind?
              </h2>
              <p className="text-xl text-red-100 leading-relaxed">
                Bring your vision to life with our bespoke furniture service. Upload your design, 
                share your requirements, and let our expert craftsmen create something truly unique for you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Upload className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Upload Your Design</h3>
                  <p className="text-red-100">Share images, sketches, or reference photos</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Discuss Details</h3>
                  <p className="text-red-100">Chat with our design experts in real-time</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Get Your Furniture</h3>
                  <p className="text-red-100">Receive your custom-made piece crafted to perfection</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Start Custom Request
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Custom Furniture Design Process"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Custom Order</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                "Exactly what we envisioned! Professional service from start to finish."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomRequestSection;
