
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
    <section className="py-20 relative overflow-hidden bg-green-100">
      {/* Enhanced Cultural Background with Herbal Elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Lotus Pattern Background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23065f46' fill-opacity='0.1'%3E%3Cpath d='M60 30C70 40 70 50 60 60C50 50 50 40 60 30ZM30 60C40 70 50 70 60 60C50 50 40 50 30 60ZM90 60C80 50 80 40 90 30C100 40 100 50 90 60ZM60 90C50 80 50 70 60 60C70 70 70 80 60 90Z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Herbs Animation */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-pulse">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-gray-600">
            <path d="M50 10 C30 30, 30 70, 50 90 C70 70, 70 30, 50 10 Z" />
            <circle cx="50" cy="30" r="3" fill="gold" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-16 w-12 h-12 opacity-20 animate-pulse delay-1000">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-gray-700">
            <path d="M50 20 C35 35, 35 65, 50 80 C65 65, 65 35, 50 20 Z" />
          </svg>
        </div>
        
        {/* Temple Arch Corners */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-600">
            <path d="M10 90 Q50 10, 90 90 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform scale-x-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-600">
            <path d="M10 90 Q50 10, 90 90 Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          {/* Enhanced Sanskrit Header with Scroll Design */}
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm px-12 py-6 rounded-full mb-8 border-2 border-amber-300/30 shadow-xl relative">
            {/* Decorative Scroll Ends */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full opacity-70"></div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full opacity-70"></div>
            
            <span className="text-4xl animate-pulse">🪷</span>
            <span className="font-sanskrit text-2xl text-gray-800 font-semibold">प्राचीन भारतीय परंपरा</span>
            <span className="text-4xl animate-pulse delay-500">🪷</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">कुर्ची – </span>
            <span className="font-sanskrit text-5xl md:text-7xl text-kurchi-red drop-shadow-sm">संस्कृत में</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-sanskrit text-gray-900 mb-8 drop-shadow-sm">
            हर कुर्सी का नाम है
          </h3>
          
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-3xl border-2 border-amber-200/50 shadow-2xl relative">
            {/* Decorative Corner Elements */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-400 rounded-tl-lg"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr-lg"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl-lg"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-400 rounded-br-lg"></div>
            
            <p className="text-xl text-gray-800 leading-relaxed mb-4">
              Discover the ancient Indian wisdom of seating arrangements. Each chair designed with 
              cultural significance and modern ergonomics, honoring the Sanskrit tradition of purposeful furniture.
            </p>
            <div className="border-t border-amber-300 pt-4">
              <span className="block text-2xl font-sanskrit text-kurchi-red mb-2">
                "आसन में शुद्धता, मन में स्थिरता"
              </span>
              <span className="block text-lg text-gray-700 italic font-medium">
                (Purity in seating, stability in mind)
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {chairTypes.map((chair, index) => {
            const IconComponent = chair.icon;
            return (
              <Card key={chair.id} className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/95 backdrop-blur-sm border-2 border-amber-200/50 hover:border-amber-400 relative" onClick={() => handleCardClick(chair.id)}>
                {/* Wooden Plank Background Effect */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2392400e' fill-opacity='0.2'%3E%3Crect x='0' y='0' width='60' height='4'/%3E%3Crect x='0' y='8' width='60' height='4'/%3E%3Crect x='0' y='16' width='60' height='4'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={chair.image}
                    alt={chair.role}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Enhanced Sanskrit Badge with Scroll Design */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg border-2 border-amber-300 backdrop-blur-sm">
                    <span className="font-sanskrit text-base font-semibold">{chair.sanskritName.split(' ')[0]}</span>
                  </div>
                  
                  {/* Enhanced Role Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${chair.gradient} rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Cultural Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Enhanced CTA Button */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full bg-gradient-to-r from-kurchi-red to-red-600 hover:from-red-700 hover:to-red-800 text-white shadow-xl border border-white/20 backdrop-blur-sm">
                      <span className="font-sanskrit mr-2 text-sm">अन्वेषण</span> 
                      Explore
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm relative">
                  {/* Decorative Top Border */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                  
                  <div className="text-center space-y-3 pt-2">
                    {/* Enhanced Sanskrit Text */}
                    <h3 className="font-sanskrit text-xl text-gray-900 mb-2 animate-fade-in bg-gradient-to-r from-amber-50 to-orange-50 py-3 px-4 rounded-xl border-2 border-amber-200 shadow-sm">
                      {chair.sanskritName}
                    </h3>
                    <h4 className="text-lg font-semibold text-kurchi-red group-hover:text-red-700 transition-colors">
                      {chair.englishName}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {chair.description}
                    </p>
                    
                    <div className="flex items-center justify-center pt-3">
                      <span className="text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full border border-blue-300 shadow-sm font-medium">
                        {chair.role} Collection
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="px-12 py-4 border-3 border-gray-700 text-gray-800 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm text-lg font-semibold">
            <span className="font-sanskrit mr-4 text-xl">सभी देखें</span>
            View All Sanskrit Collections
            <ArrowRight className="ml-4 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SanskritChairSection;
