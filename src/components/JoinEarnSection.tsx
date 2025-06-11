
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, IndianRupee, Award, FileText, ArrowRight, TrendingUp } from 'lucide-react';

const JoinEarnSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Refer Friends & Family',
      description: 'Share KURCHI with your network and earn on every successful purchase',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: IndianRupee,
      title: 'Earn Commission',
      description: 'Get up to ₹2,500 commission on every chair sold through your referral',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Award,
      title: 'Monthly Rewards',
      description: 'Top performers get additional bonuses and exclusive KURCHI merchandise',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Real-time dashboard to monitor your referrals and earnings',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Register as Partner',
      description: 'Submit Aadhaar & PAN for verification'
    },
    {
      step: '02',
      title: 'Get Referral Code',
      description: 'Receive your unique KURCHI partner code'
    },
    {
      step: '03',
      title: 'Share & Earn',
      description: 'Start referring and track your earnings'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-kurchi-navy to-kurchi-navy/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M40 10L50 30L70 30L55 45L65 65L40 50L15 65L25 45L10 30L30 30Z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-kurchi-red/20 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm border border-kurchi-red/30">
                <Users className="h-4 w-4" />
                <span>KURCHI Partner Program</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Join & <span className="text-kurchi-red font-sanskrit">अर्जन</span> 
                <br />with KURCHI
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Become a KURCHI Partner and turn your network into earnings. 
                Share premium furniture, earn generous commissions, and build a sustainable income stream.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-kurchi-red rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-kurchi-red hover:bg-kurchi-red-muted text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <FileText className="mr-2 h-5 w-5" />
                Join as Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-kurchi-navy px-8 py-4 text-lg rounded-xl transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-kurchi-navy mb-2">{feature.title}</h3>
                    <p className="text-kurchi-navy/70 text-sm leading-relaxed">{feature.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Earnings Highlight */}
            <Card className="bg-gradient-to-r from-kurchi-red to-kurchi-red-muted p-6 rounded-xl shadow-xl border border-kurchi-red/30 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <IndianRupee className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Earn up to ₹25,000</h3>
                  <p className="text-white/90">Monthly potential with active referrals</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinEarnSection;
