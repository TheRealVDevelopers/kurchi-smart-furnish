
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Calculator, Users, Coffee, Home } from 'lucide-react';

const SanskritChairSection = () => {
  const chairTypes = [
    {
      id: 1,
      sanskritName: 'अध्यक्ष कुर्ची',
      englishName: 'Adhyaksha Kuruchi',
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

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Enhanced Sanskrit Cultural Background */}
      <div className="absolute inset-0 opacity-10">
        {/* Lotus Pattern Background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M60 30C70 40 70 50 60 60C50 50 50 40 60 30ZM30 60C40 70 50 70 60 60C50 50 40 50 30 60ZM90 60C80 50 80 40 90 30C100 40 100 50 90 60ZM60 90C50 80 50 70 60 60C70 70 70 80 60 90Z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Ancient Scroll Decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-amber-200/20 to-saffron-200/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          {/* Enhanced Sanskrit Header */}
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-amber-100 to-orange-100 px-8 py-4 rounded-full mb-6 border-2 border-amber-200 shadow-lg">
            <span className="text-3xl">🪷</span>
            <span className="font-sanskrit text-xl text-amber-800">प्राचीन भारतीय परंपरा</span>
            <span className="text-3xl">🪷</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-kurchi-navy mb-4">
            Kuruchi – <span className="text-kurchi-red font-sanskrit text-5xl md:text-6xl">संस्कृत में</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-sanskrit text-emerald-700 mb-6">
            हर कुर्सी का नाम है
          </h3>
          
          <p className="text-xl text-kurchi-navy/80 max-w-4xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-amber-200/50 shadow-lg">
            Discover the ancient Indian wisdom of seating arrangements. Each chair designed with 
            cultural significance and modern ergonomics, honoring the Sanskrit tradition of purposeful furniture.
            <span className="block mt-2 text-lg font-sanskrit text-emerald-700">
              "आसन में शुद्धता, मन में स्थिरता"
            </span>
            <span className="block text-sm text-kurchi-navy/60 italic">
              (Purity in seating, stability in mind)
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {chairTypes.map((chair, index) => {
            const IconComponent = chair.icon;
            return (
              <Card key={chair.id} className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-2 border-amber-200/50 hover:border-emerald-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={chair.image}
                    alt={chair.role}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Enhanced Sanskrit Badge with Scroll Design */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 px-4 py-2 rounded-full text-xs font-medium shadow-lg border border-amber-300">
                    <span className="font-sanskrit text-sm">{chair.sanskritName.split(' ')[0]}</span>
                  </div>
                  
                  {/* Enhanced Role Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${chair.gradient} rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Cultural Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Enhanced CTA Button */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl border border-white/20">
                      <span className="font-sanskrit mr-2 text-sm">अन्वेषण</span> 
                      Explore
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm">
                  <div className="text-center space-y-3">
                    {/* Enhanced Sanskrit Text */}
                    <h3 className="font-sanskrit text-lg text-emerald-800 mb-1 animate-fade-in bg-gradient-to-r from-amber-100 to-orange-100 py-2 px-3 rounded-lg border border-amber-200">
                      {chair.sanskritName}
                    </h3>
                    <h4 className="text-lg font-semibold text-kurchi-red group-hover:text-emerald-700 transition-colors">
                      {chair.englishName}
                    </h4>
                    <p className="text-sm text-kurchi-navy/70 leading-relaxed">
                      {chair.description}
                    </p>
                    
                    <div className="flex items-center justify-center pt-2">
                      <span className="text-xs bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200 shadow-sm">
                        {chair.role} Collection
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-4 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <span className="font-sanskrit mr-3 text-lg">सभी देखें</span>
            View All Sanskrit Collections
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SanskritChairSection;
