
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Users, 
  IndianRupee, 
  Award, 
  TrendingUp, 
  FileText, 
  CheckCircle,
  Copy,
  Download
} from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const JoinEarn = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPartner, setIsPartner] = useState(false); // Mock partner status

  const partnerStats = {
    totalReferrals: 24,
    totalEarnings: 18750,
    pendingPayment: 3250,
    referralCode: 'KURCHI-AF1004'
  };

  const steps = [
    {
      step: 1,
      title: 'Personal Details',
      description: 'Basic information and contact details'
    },
    {
      step: 2,
      title: 'Document Upload',
      description: 'Aadhaar and PAN verification'
    },
    {
      step: 3,
      title: 'Bank Details',
      description: 'Account information for payments'
    }
  ];

  const benefits = [
    {
      icon: IndianRupee,
      title: 'High Commission',
      description: 'Earn up to ₹2,500 per chair sold',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Network Growth',
      description: 'Build your furniture business network',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      title: 'Monthly Bonuses',
      description: 'Extra rewards for top performers',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Tracking',
      description: 'Monitor your earnings and referrals',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  if (isPartner) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <MobileNav />
        <main className="pt-16 md:pt-0 pb-20 md:pb-0">
          <div className="container mx-auto px-4 py-8">
            {/* Partner Dashboard */}
            <div className="text-center mb-8">
              <Badge className="bg-green-500 text-white mb-4">✅ Verified Partner</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-kurchi-navy mb-2">
                Welcome to KURCHI Partner Program
              </h1>
              <p className="text-lg text-kurchi-navy/70">Your earnings dashboard and referral tools</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-blue-800">{partnerStats.totalReferrals}</h3>
                <p className="text-blue-600">Total Referrals</p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <IndianRupee className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-green-800">₹{partnerStats.totalEarnings.toLocaleString()}</h3>
                <p className="text-green-600">Total Earnings</p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-orange-800">₹{partnerStats.pendingPayment.toLocaleString()}</h3>
                <p className="text-orange-600">Pending Payment</p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-purple-800">Gold</h3>
                <p className="text-purple-600">Partner Level</p>
              </Card>
            </div>

            {/* Referral Tools */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Your Referral Link</h3>
                <div className="bg-kurchi-cream/50 p-4 rounded-lg border border-kurchi-saffron/30 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono">https://kurchi.app/ref/{partnerStats.referralCode}</span>
                    <Button size="sm" variant="outline">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download QR
                  </Button>
                  <Button className="w-full bg-kurchi-red hover:bg-kurchi-red-muted">
                    Share Link
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <IndianRupee className="mr-2 h-4 w-4" />
                    Request Withdrawal
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Reports
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    View Referral History
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileNav />
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="bg-kurchi-red text-white mb-4">Join KURCHI Partner Program</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-kurchi-navy mb-4">
              Join & <span className="text-kurchi-red font-sanskrit">अर्जन</span> with KURCHI
            </h1>
            <p className="text-xl text-kurchi-navy/70 max-w-3xl mx-auto">
              Turn your network into earnings. Share premium furniture, earn generous commissions, 
              and build a sustainable income stream with India's direct-to-customer furniture brand.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-kurchi-navy/70 text-sm">{benefit.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Registration Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-center mb-6">Become a KURCHI Partner</h2>
                
                {/* Progress Steps */}
                <div className="flex justify-center mb-8">
                  {steps.map((step, index) => (
                    <div key={step.step} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        currentStep >= step.step ? 'bg-kurchi-red text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {currentStep > step.step ? <CheckCircle className="h-5 w-5" /> : step.step}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-16 h-1 mx-2 ${
                          currentStep > step.step ? 'bg-kurchi-red' : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Content */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-kurchi-saffron/50 rounded-lg focus:outline-none focus:border-kurchi-red"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-kurchi-saffron/50 rounded-lg focus:outline-none focus:border-kurchi-red"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 border border-kurchi-saffron/50 rounded-lg focus:outline-none focus:border-kurchi-red"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-kurchi-saffron/50 rounded-lg focus:outline-none focus:border-kurchi-red"
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Document Verification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 border-2 border-dashed border-kurchi-saffron/50 hover:border-kurchi-red transition-colors">
                      <div className="text-center">
                        <Upload className="h-12 w-12 text-kurchi-navy/60 mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Upload Aadhaar Card</h4>
                        <p className="text-sm text-kurchi-navy/60 mb-4">PDF, JPG, PNG (Max 5MB)</p>
                        <Button variant="outline" size="sm">Choose File</Button>
                      </div>
                    </Card>
                    
                    <Card className="p-6 border-2 border-dashed border-kurchi-saffron/50 hover:border-kurchi-red transition-colors">
                      <div className="text-center">
                        <Upload className="h-12 w-12 text-kurchi-navy/60 mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Upload PAN Card</h4>
                        <p className="text-sm text-kurchi-navy/60 mb-4">PDF, JPG, PNG (Max 5MB)</p>
                        <Button variant="outline" size="sm">Choose File</Button>
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Bank Account Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Account Holder Name *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-kurchi-saffron/50 rounded-lg focus:outline-none focus:border-kurchi-red"
                        placeholder="As per bank records"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Account Number *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-kurchi-saffron/50 rounded-lg focus:outline-none focus:border-kurchi-red"
                        placeholder="Enter account number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">IFSC Code *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-kurchi-saffron/50 rounded-lg focus:outline-none focus:border-kurchi-red"
                        placeholder="Enter IFSC code"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Bank Name *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-kurchi-saffron/50 rounded-lg focus:outline-none focus:border-kurchi-red"
                        placeholder="Enter bank name"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                {currentStep < 3 ? (
                  <Button 
                    className="bg-kurchi-red hover:bg-kurchi-red-muted"
                    onClick={() => setCurrentStep(currentStep + 1)}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button 
                    className="bg-kurchi-red hover:bg-kurchi-red-muted"
                    onClick={() => alert('Application submitted! We will verify your documents and get back to you within 24 hours.')}
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default JoinEarn;
