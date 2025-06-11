
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
    <section className="py-20 bg-gradient-to-br from-kurchi-cream via-white to-kurchi-saffron/20 relative overflow-hidden">
      {/* Decorative Sanskrit Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E9C46A' fill-opacity='0.4'%3E%3Cpath d='M50 10L60 40L90 40L70 60L80 90L50 70L20 90L30 60L10 40L40 40Z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-kurchi-saffron/20 px-6 py-3 rounded-full mb-6 border border-kurchi-saffron">
            <span className="text-2xl">🪑</span>
            <span className="font-sanskrit text-lg text-kurchi-navy">प्राचीन भारतीय परंपरा</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-kurchi-navy mb-6">
            Kuruchi for Every <span className="text-kurchi-red font-sanskrit">भूमिका</span>
          </h2>
          
          <p className="text-xl text-kurchi-navy/80 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient Indian wisdom of seating arrangements. Each chair designed with 
            cultural significance and modern ergonomics, honoring the Sanskrit tradition of purposeful furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {chairTypes.map((chair, index) => {
            const IconComponent = chair.icon;
            return (
              <Card key={chair.id} className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/80 backdrop-blur-sm border border-kurchi-saffron/30">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={chair.image}
                    alt={chair.role}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Sanskrit Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-kurchi-saffron to-amber-500 text-kurchi-navy px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    <span className="font-sanskrit">{chair.sanskritName.split(' ')[0]}</span>
                  </div>
                  
                  {/* Role Icon */}
                  <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-r ${chair.gradient} rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-kurchi-navy/70 via-kurchi-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* CTA Button */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full bg-kurchi-red hover:bg-kurchi-red-muted text-white shadow-xl">
                      <span className="font-sanskrit mr-1">अन्वेषण</span> Explore
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 bg-white/90 backdrop-blur-sm">
                  <div className="text-center space-y-3">
                    <h3 className="font-sanskrit text-lg text-kurchi-navy mb-1 animate-fade-in">
                      {chair.sanskritName}
                    </h3>
                    <h4 className="text-lg font-semibold text-kurchi-red group-hover:text-kurchi-red-muted transition-colors">
                      {chair.englishName}
                    </h4>
                    <p className="text-sm text-kurchi-navy/70 leading-relaxed">
                      {chair.description}
                    </p>
                    
                    <div className="flex items-center justify-center pt-2">
                      <span className="text-xs bg-kurchi-cream text-kurchi-navy px-3 py-1 rounded-full border border-kurchi-saffron/50">
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
          <Button variant="outline" size="lg" className="px-8 py-3 border-2 border-kurchi-saffron text-kurchi-navy hover:bg-kurchi-saffron/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="font-sanskrit mr-2">सभी देखें</span>
            View All Sanskrit Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SanskritChairSection;
