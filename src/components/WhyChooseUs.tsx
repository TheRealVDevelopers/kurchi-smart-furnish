
import React from 'react';
import { Shield, Truck, Headphones, Award, Zap, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: '5 Year Warranty',
      description: 'Comprehensive coverage on all our premium furniture pieces',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Truck,
      title: 'Free Installation',
      description: 'Professional setup service included with every purchase',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service for all your needs',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handcrafted furniture using finest materials and techniques',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Zap,
      title: 'AI Powered',
      description: 'Smart recommendations based on your preferences and space',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Users,
      title: 'B2B Solutions',
      description: 'Specialized bulk pricing and custom solutions for businesses',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-red-600">Kurchi</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just furniture makers, we're lifestyle curators. Experience the perfect blend of 
            comfort, technology, and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
