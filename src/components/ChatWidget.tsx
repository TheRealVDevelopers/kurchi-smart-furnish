
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Mic, Send, Upload, Package, User, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Draggable from 'react-draggable';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'upload';
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "नमस्ते! I'm KURCHI Assistant 🪑 How can I help you find the perfect furniture today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [currentFlow, setCurrentFlow] = useState<'main' | 'custom' | 'bulk' | 'track'>('main');

  const smartSuggestions = [
    { icon: '🪑', text: 'Show Popular Chairs', action: 'popular', flow: 'main' },
    { icon: '📦', text: 'Track My Order', action: 'track', flow: 'track' },
    { icon: '🎨', text: 'Custom Design Request', action: 'custom', flow: 'custom' },
    { icon: '🏢', text: 'Bulk Purchase (B2B)', action: 'bulk', flow: 'bulk' },
    { icon: '💰', text: 'Join & Earn Program', action: 'earn', flow: 'main' },
    { icon: '🎉', text: '100-Day Trial Info', action: 'trial', flow: 'main' },
    { icon: '👤', text: 'Talk to Expert', action: 'human', flow: 'main' },
    { icon: '📱', text: 'Sanskrit Chair Guide', action: 'sanskrit', flow: 'main' }
  ];

  const getSmartResponse = (action: string) => {
    const responses = {
      popular: "Here are our most popular chairs! 🪑 Executive Leather Chair (₹15,999), Modern Gaming Chair (₹12,999), and Ergonomic Office Chair (₹18,999). All come with 100-day trial!",
      track: "I can help you track your order! Please share your order number or phone number used during purchase.",
      custom: "Exciting! I'll help you create something unique. Please describe your vision and feel free to upload reference images. Our design team reviews all requests within 24 hours.",
      bulk: "Perfect for businesses! We offer special B2B pricing for bulk orders. Please share your GST number and quantity needed for a custom quote.",
      earn: "Great choice! Our Join & Earn program offers up to 15% commission on referrals. You'll need to verify Aadhaar/PAN and complete our simple application.",
      trial: "Our 100-Day Risk-Free Trial means you can use any furniture for 100 days. Not satisfied? Full refund, no questions asked! We even handle pickup.",
      human: "Connecting you with our furniture expert... They specialize in helping customers find perfect matches based on usage, space, and budget.",
      sanskrit: "Each chair type has a Sanskrit name with deep meaning! अध्यक्ष कुर्ची (Executive), अर्थिक कुर्ची (Finance), प्रबंधक कुर्ची (Manager). Would you like to explore these?"
    };
    return responses[action as keyof typeof responses] || "I understand! Let me help you with that.";
  };

  const addMessage = (text: string, isBot: boolean = false, type: 'text' | 'suggestion' | 'upload' = 'text') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      type
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSuggestionClick = (action: string, text: string, flow?: string) => {
    addMessage(text, false);
    if (flow) setCurrentFlow(flow as any);
    
    setTimeout(() => {
      addMessage(getSmartResponse(action), true);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage(inputValue, false);
    const userMessage = inputValue.toLowerCase();
    setInputValue('');
    
    // Smart response logic
    setTimeout(() => {
      let response = "Thanks for your message! Our team will help you with that. ";
      
      if (userMessage.includes('price') || userMessage.includes('cost')) {
        response = "Our furniture starts from ₹5,999. All products come with transparent pricing and 100-day trial. Would you like specific product recommendations?";
      } else if (userMessage.includes('delivery') || userMessage.includes('shipping')) {
        response = "We offer free delivery across India! Delivery typically takes 7-14 days. You can track your order in real-time once dispatched.";
      } else if (userMessage.includes('trial') || userMessage.includes('return')) {
        response = "Our 100-Day Risk-Free Trial is simple: Use it, love it, or return it! Full refund guaranteed if you're not 100% satisfied.";
      }
      
      addMessage(response, true);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Draggable handle=".drag-handle" bounds="parent" defaultPosition={{ x: 0, y: 0 }}>
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
        {/* Enhanced Floating Robot Button */}
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="drag-handle w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-kurchi-red via-kurchi-red-muted to-kurchi-red hover:from-kurchi-red-muted hover:to-kurchi-red shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group cursor-move"
          >
            {/* Enhanced Robot Icon */}
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white animate-bounce group-hover:animate-none" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11V13H11V11C9.9 11 9 10.1 9 9V6.5L3 7V9H1V7C1 6.5 1.4 6 2 6L9 5.5V4C9 2.3 10.3 1 12 1S15 2.3 15 4V5.5L22 6C22.6 6 23 6.5 23 7V9H21ZM8 10V16C8 17.1 8.9 18 10 18H14C15.1 18 16 17.1 16 16V10H8ZM10 12H14V16H10V12ZM6 14V22H4V14H6ZM20 14V22H18V14H20Z"/>
            </svg>
            {/* Enhanced pulse effects */}
            <div className="absolute inset-0 rounded-full bg-kurchi-red/30 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-kurchi-red/20 animate-ping opacity-50" style={{ animationDelay: '0.2s' }}></div>
          </Button>
        )}

        {/* Enhanced Chat Panel - Mobile Responsive */}
        {isOpen && (
          <div className="w-80 md:w-96 h-[480px] md:h-[500px] bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="drag-handle bg-gradient-to-r from-kurchi-red/90 to-kurchi-red-muted/90 backdrop-blur-lg p-3 md:p-4 flex items-center justify-between cursor-move border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11V13H11V11C9.9 11 9 10.1 9 9V6.5L3 7V9H1V7C1 6.5 1.4 6 2 6L9 5.5V4C9 2.3 10.3 1 12 1S15 2.3 15 4V5.5L22 6C22.6 6 23 6.5 23 7V9H21ZM8 10V16C8 17.1 8.9 18 10 18H14C15.1 18 16 17.1 16 16V10H8ZM10 12H14V16H10V12ZM6 14V22H4V14H6ZM20 14V22H18V14H20Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base">KURCHI Assistant</h3>
                  <p className="text-white/80 text-xs flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                    Smart Furniture Bot
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 md:p-4 overflow-y-auto space-y-3 md:space-y-4 bg-white/5 backdrop-blur-sm">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-2 md:p-3 rounded-2xl backdrop-blur-lg border text-sm ${
                      message.isBot
                        ? 'bg-white/90 text-kurchi-navy border-white/30 rounded-bl-md'
                        : 'bg-kurchi-red/90 text-white border-kurchi-red/30 rounded-br-md'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Smart Suggestions */}
            {currentFlow === 'main' && (
              <div className="p-3 md:p-4 border-t border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {smartSuggestions.slice(0, 6).map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion.action, suggestion.text, suggestion.flow)}
                      className="text-xs h-auto py-2 px-2 md:px-3 rounded-xl bg-white/10 border-white/30 text-kurchi-navy hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
                    >
                      <span className="mr-1">{suggestion.icon}</span>
                      <span className="truncate">{suggestion.text}</span>
                    </Button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {smartSuggestions.slice(6).map((suggestion, index) => (
                    <Button
                      key={index + 6}
                      variant="outline"
                      size="sm"
                      onClick={() =>  handleSuggestionClick(suggestion.action, suggestion.text, suggestion.flow)}
                      className="text-xs h-auto py-2 px-2 md:px-3 rounded-xl bg-white/10 border-white/30 text-kurchi-navy hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
                    >
                      <span className="mr-1">{suggestion.icon}</span>
                      <span className="truncate">{suggestion.text}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Custom/Other Flow Actions */}
            {currentFlow !== 'main' && (
              <div className="p-3 md:p-4 border-t border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="space-y-2">
                  {currentFlow === 'custom' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs h-auto py-2 px-3 rounded-xl bg-white/10 border-white/30 text-kurchi-navy hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
                    >
                      <Upload className="h-3 w-3 mr-2" />
                      Upload Reference Images
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentFlow('main')}
                    className="w-full text-xs h-auto py-2 px-3 rounded-xl bg-white/10 border-white/30 text-kurchi-navy hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
                  >
                    ← Back to Main Menu
                  </Button>
                </div>
              </div>
            )}

            {/* Enhanced Input */}
            <div className="p-3 md:p-4 border-t border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="rounded-xl border-white/30 bg-white/10 backdrop-blur-sm focus:border-kurchi-red/50 pr-10 text-kurchi-navy placeholder:text-kurchi-navy/70 text-sm"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-6 w-6 md:h-8 md:w-8 text-kurchi-navy/60 hover:text-kurchi-red"
                  >
                    <Mic className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="rounded-xl bg-kurchi-red hover:bg-kurchi-red-muted backdrop-blur-sm h-8 w-8 md:h-10 md:w-10"
                >
                  <Send className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default ChatWidget;
