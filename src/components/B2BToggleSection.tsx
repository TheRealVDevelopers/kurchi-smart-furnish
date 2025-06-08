
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Building, User, Check, Info } from 'lucide-react';

const B2BToggleSection = () => {
  const [isB2B, setIsB2B] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Shopping Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're furnishing your home or office, we have the perfect solution for you
          </p>
        </div>

        {/* Enhanced Toggle Switch */}
        <div className="flex justify-center items-center space-x-6 mb-12 bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
          <div className={`flex items-center space-x-2 ${!isB2B ? 'text-red-600 font-semibold' : 'text-gray-500'} transition-colors duration-300`}>
            <User className="h-5 w-5" />
            <span>Individual (B2C)</span>
          </div>
          
          <Switch
            checked={isB2B}
            onCheckedChange={setIsB2B}
            className="data-[state=checked]:bg-orange-500"
          />
          
          <div className={`flex items-center space-x-2 ${isB2B ? 'text-orange-600 font-semibold' : 'text-gray-500'} transition-colors duration-300`}>
            <Building className="h-5 w-5" />
            <span>Business (B2B)</span>
          </div>
        </div>

        {/* Enhanced Content based on toggle */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {!isB2B ? (
            // Enhanced B2C Content
            <>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-200 transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="h-6 w-6 text-red-600 mr-2" />
                  Individual Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Retail pricing with seasonal discounts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Free home delivery & installation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Extended warranty options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Flexible EMI options</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Shopping
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Home furniture setup"
                  className="rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105"
                />
              </div>
            </>
          ) : (
            // Enhanced B2B Content
            <>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-orange-200 transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Building className="h-6 w-6 text-orange-600 mr-2" />
                  Business Benefits
                </h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-6 flex items-start space-x-2 border border-orange-200">
                  <Info className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div className="text-sm text-orange-800">
                    <strong>GST Verification Required:</strong> Get exclusive rates after GST validation
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Bulk order discounts up to 25%</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>30-day payment terms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Custom design consultation</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  Verify GST & Get Quotes
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Office workspace"
                  className="rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default B2BToggleSection;
