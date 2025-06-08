
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Mic, Send, Upload, Package, User, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

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
      text: "Hi there! I'm K-Buddy, your smart furnishing assistant! 🪑 How can I help you create your perfect space today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [currentFlow, setCurrentFlow] = useState<'main' | 'custom' | 'bulk' | 'track'>('main');

  const suggestions = [
    { icon: '🪑', text: 'Suggest me a Chair', action: 'suggest' },
    { icon: '📷', text: 'Send Custom Request', action: 'custom' },
    { icon: '🏢', text: 'Bulk Purchase (B2B)', action: 'bulk' },
    { icon: '📦', text: 'Track My Order', action: 'track' },
    { icon: '👤', text: 'Talk to Sales Expert', action: 'human' }
  ];

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

  const handleSuggestionClick = (action: string) => {
    switch (action) {
      case 'suggest':
        addMessage("I'd like chair suggestions", false);
        setTimeout(() => {
          addMessage("Great choice! Let me help you find the perfect chair. What's your preferred style? Executive, Gaming, Lounge, or Ergonomic?", true);
        }, 1000);
        break;
      case 'custom':
        setCurrentFlow('custom');
        addMessage("I want to send a custom furniture request", false);
        setTimeout(() => {
          addMessage("Perfect! I'll help you create a custom furniture request. Please describe what you're looking for, and feel free to upload any reference images.", true);
        }, 1000);
        break;
      case 'bulk':
        setCurrentFlow('bulk');
        addMessage("I need bulk furniture for my business", false);
        setTimeout(() => {
          addMessage("Excellent! We love helping businesses create amazing workspaces. Can you share your GST number and what type of furniture you need?", true);
        }, 1000);
        break;
      case 'track':
        setCurrentFlow('track');
        addMessage("I want to track my order", false);
        setTimeout(() => {
          addMessage("I'll help you track your order! Please provide your order number or the phone number you used during purchase.", true);
        }, 1000);
        break;
      case 'human':
        addMessage("I'd like to talk to a sales expert", false);
        setTimeout(() => {
          addMessage("I'm connecting you with our sales team. They'll be with you shortly! In the meantime, feel free to browse our featured products.", true);
        }, 1000);
        break;
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage(inputValue, false);
    setInputValue('');
    
    // Simple bot responses based on current flow
    setTimeout(() => {
      if (currentFlow === 'custom') {
        addMessage("Thanks for your request! Our design team will review it and get back to you within 24 hours. You can also upload images if you have any references.", true);
      } else {
        addMessage("I understand! Let me help you with that. Our team will get back to you soon with the best options.", true);
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-2xl animate-bounce group-hover:animate-none">🪑</div>
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75"></div>
          </Button>
        )}
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🪑</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">K-Buddy</h3>
                <p className="text-white/80 text-xs">Smart Furnishing Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-900 rounded-bl-md'
                      : 'bg-red-500 text-white rounded-br-md'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          {currentFlow === 'main' && (
            <div className="p-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-2">
                {suggestions.slice(0, 4).map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestionClick(suggestion.action)}
                    className="text-xs h-auto py-2 px-3 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all"
                  >
                    <span className="mr-1">{suggestion.icon}</span>
                    {suggestion.text}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSuggestionClick(suggestions[4].action)}
                className="w-full mt-2 text-xs h-auto py-2 px-3 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all"
              >
                <span className="mr-1">{suggestions[4].icon}</span>
                {suggestions[4].text}
              </Button>
            </div>
          )}

          {/* Custom Request Upload */}
          {currentFlow === 'custom' && (
            <div className="p-4 border-t border-gray-100">
              <div className="space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs h-auto py-2 px-3 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all"
                >
                  <Upload className="h-3 w-3 mr-2" />
                  Upload Reference Images
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentFlow('main')}
                  className="w-full text-xs h-auto py-2 px-3 rounded-xl hover:bg-gray-50 hover:border-gray-200 transition-all"
                >
                  Back to Main Menu
                </Button>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="rounded-xl border-gray-200 focus:border-red-300 pr-10"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 text-gray-400 hover:text-red-500"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="rounded-xl bg-red-500 hover:bg-red-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
