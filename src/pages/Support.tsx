
import React, { useState } from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, Clock, HelpCircle, FileText } from 'lucide-react';

const Support = () => {
  const [activeChat, setActiveChat] = useState(false);

  const faqItems = [
    {
      question: 'What is the delivery time for furniture?',
      answer: 'Standard delivery takes 7-14 business days. Premium items may take 3-4 weeks for custom manufacturing.'
    },
    {
      question: 'Do you offer installation services?',
      answer: 'Yes, we provide professional installation services for all furniture items at a nominal charge.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all items in original condition with packaging.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MobileNav />
      
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>
            <p className="text-gray-600">
              Get in touch with our support team for any questions or assistance
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center cursor-pointer hover:shadow-lg transition-shadow">
              <MessageCircle className="h-12 w-12 text-kurchi-red mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team instantly</p>
              <Button 
                className="bg-kurchi-red hover:bg-kurchi-red-dark"
                onClick={() => setActiveChat(true)}
              >
                Start Chat
              </Button>
            </Card>

            <Card className="p-6 text-center cursor-pointer hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 text-kurchi-red mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
              <Button variant="outline">+91 98765 43210</Button>
            </Card>

            <Card className="p-6 text-center cursor-pointer hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 text-kurchi-red mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us your questions via email</p>
              <Button variant="outline">support@kurchi.com</Button>
            </Card>
          </div>

          {/* Support Hours */}
          <Card className="mb-8">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-kurchi-red mr-3" />
                <h2 className="text-xl font-semibold">Support Hours</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM IST</p>
                </div>
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p className="text-gray-600">10:00 AM - 4:00 PM IST</p>
                </div>
              </div>
            </div>
          </Card>

          {/* FAQ Section */}
          <Card>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <HelpCircle className="h-6 w-6 text-kurchi-red mr-3" />
                <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-medium text-gray-900 mb-2">{item.question}</h4>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Chat Widget */}
          {activeChat && (
            <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border z-50">
              <div className="bg-kurchi-red text-white p-4 rounded-t-lg flex items-center justify-between">
                <span className="font-semibold">Kurchi Support</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:text-gray-200"
                  onClick={() => setActiveChat(false)}
                >
                  ×
                </Button>
              </div>
              <div className="p-4 h-80">
                <div className="bg-gray-100 p-3 rounded-lg mb-4">
                  <p className="text-sm">Hi! How can I help you today?</p>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-kurchi-red"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
