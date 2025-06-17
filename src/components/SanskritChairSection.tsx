
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Calculator, Users, Coffee, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SanskritChairSection = () => {
  const navigate = useNavigate();

  const chairTypes = [
    {
      id: 1,
      sanskritName: 'राजसी कुर्ची',
      englishName: 'Rajasi Kuruchi',
      role: 'Executive',
      description: 'For leaders who command respect and comfort',
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: Crown,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 2,
      sanskritName: 'अर्थिक कुर्ची',
      englishName: 'Arthika Kuruchi',
      role: 'Finance',
      description: 'Precision and comfort for financial minds',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: Calculator,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      sanskritName: 'प्रबंधक कुर्ची',
      englishName: 'Prabandhaka Kuruchi',
      role: 'Manager',
      description: 'Ergonomic support for efficient management',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: Users,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 4,
      sanskritName: 'अतिथि कुर्ची',
      englishName: 'Atithi Kuruchi',
      role: 'Guest',
      description: 'Welcoming comfort for honored guests',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: Coffee,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      sanskritName: 'साधारण कुर्ची',
      englishName: 'Sadharana Kuruchi',
      role: 'General',
      description: 'Everyday comfort for all purposes',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: Home,
      gradient: 'from-red-500 to-rose-600'
    }
  ];

  const handleCardClick = (chairId: number) => {
    navigate(`/product/${chairId}`);
  };

  return (
    <section className="py-8 bg-green-700 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23065f46' fill-opacity='0.1'%3E%3Cpath d='M30 15C35 20 35 25 30 30C25 25 25 20 30 15Z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-2 border border-amber-300 shadow-lg">
            <span className="text-lg">🪷</span>
            <span className="font-sanskrit text-sm text-gray-800 font-semibold">प्राचीन भारतीय परंपरा</span>
            <span className="text-lg">🪷</span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-1">
            <span className="text-white">कुर्ची – </span>
            <span className="font-sanskrit text-2xl text-yellow-300 drop-shadow-sm">संस्कृत में</span>
          </h2>
          <p className="text-sm text-green-50 max-w-lg mx-auto">
            Discover the ancient Indian wisdom of seating arrangements
          </p>
        </div>

        {/* Compact Product Grid - Single Row */}
        <div className="flex overflow-x-auto gap-3 pb-3 mb-4 scrollbar-hide">
          {chairTypes.map((chair, index) => {
            const IconComponent = chair.icon;
            return (
              <div key={chair.id} className="flex-shrink-0 w-48">
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/95 backdrop-blur-sm border border-amber-200 hover:border-amber-400 h-full" onClick={() => handleCardClick(chair.id)}>
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={chair.image}
                      alt={chair.role}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    <div className="absolute top-2 left-2 bg-amber-100 text-amber-900 px-2 py-1 rounded-full text-xs font-medium shadow-md border border-amber-300">
                      <span className="font-sanskrit text-xs font-semibold">{chair.sanskritName.split(' ')[0]}</span>
                    </div>
                    
                    <div className={`absolute top-2 right-2 w-6 h-6 bg-gradient-to-r ${chair.gradient} rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <IconComponent className="h-3 w-3 text-white" />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button size="sm" className="w-full bg-kurchi-red hover:bg-red-700 text-white text-xs shadow-lg">
                        Explore
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-2 bg-white">
                    <h3 className="font-sanskrit text-xs text-gray-900 mb-1 text-center bg-amber-50 py-1 px-2 rounded-lg border border-amber-200">
                      {chair.sanskritName}
                    </h3>
                    <h4 className="text-xs font-semibold text-kurchi-red text-center mb-1">
                      {chair.englishName}
                    </h4>
                    <p className="text-xs text-gray-600 text-center leading-relaxed mb-1">
                      {chair.description}
                    </p>
                    
                    <div className="flex justify-center">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-300 font-medium">
                        {chair.role}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-green-700 shadow-lg bg-transparent backdrop-blur-sm font-semibold">
            <span className="font-sanskrit mr-2 text-sm">सभी देखें</span>
            View All Collections
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SanskritChairSection;
