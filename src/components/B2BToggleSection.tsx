
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Building, User, Check, Info } from 'lucide-react';

const B2BToggleSection = () => {
  const [isB2B, setIsB2B] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Shopping Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're furnishing your home or office, we have the perfect solution for you
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center space-x-6 mb-12">
          <div className={`flex items-center space-x-2 ${!isB2B ? 'text-red-600 font-semibold' : 'text-gray-500'}`}>
            <User className="h-5 w-5" />
            <span>Individual (B2C)</span>
          </div>
          
          <Switch
            checked={isB2B}
            onCheckedChange={setIsB2B}
            className="data-[state=checked]:bg-orange-500"
          />
          
          <div className={`flex items-center space-x-2 ${isB2B ? 'text-orange-600 font-semibold' : 'text-gray-500'}`}>
            <Building className="h-5 w-5" />
            <span>Business (B2B)</span>
          </div>
        </div>

        {/* Content based on toggle */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {!isB2B ? (
            // B2C Content
            <>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual Benefits</h3>
                <ul className="space-y-3">
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
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">
                  Start Shopping
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Home furniture setup"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </>
          ) : (
            // B2B Content
            <>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Benefits</h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-4 flex items-start space-x-2">
                  <Info className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div className="text-sm text-orange-800">
                    <strong>GST Verification Required:</strong> Get exclusive rates after GST validation
                  </div>
                </div>
                <ul className="space-y-3">
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
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                  Verify GST & Get Quotes
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Office workspace"
                  className="rounded-2xl shadow-lg"
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
