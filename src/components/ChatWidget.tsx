
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
      text: "Hi there! I'm KURCHI Assistant, your smart furnishing assistant! 🤖 How can I help you create your perfect space today?",
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
    <Draggable handle=".drag-handle">
      <div className="fixed bottom-6 right-6 z-50">
        {/* Floating Chat Button with Robot Icon */}
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="drag-handle w-16 h-16 rounded-full bg-gradient-to-br from-kurchi-red via-kurchi-red-muted to-kurchi-red hover:from-kurchi-red-muted hover:to-kurchi-red shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group cursor-move"
          >
            {/* Robot Icon SVG */}
            <svg className="w-8 h-8 text-white animate-bounce group-hover:animate-none" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11V13H11V11C9.9 11 9 10.1 9 9V6.5L3 7V9H1V7C1 6.5 1.4 6 2 6L9 5.5V4C9 2.3 10.3 1 12 1S15 2.3 15 4V5.5L22 6C22.6 6 23 6.5 23 7V9H21ZM8 10V16C8 17.1 8.9 18 10 18H14C15.1 18 16 17.1 16 16V10H8ZM10 12H14V16H10V12ZM6 14V22H4V14H6ZM20 14V22H18V14H20Z"/>
            </svg>
            {/* Enhanced Pulse Ring */}
            <div className="absolute inset-0 rounded-full bg-kurchi-red/30 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-kurchi-red/20 animate-ping opacity-50 animation-delay-75"></div>
          </Button>
        )}

        {/* Enhanced Chat Panel with Glassmorphism */}
        {isOpen && (
          <div className="w-96 h-[500px] bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Enhanced Header with Glassmorphism */}
            <div className="drag-handle bg-gradient-to-r from-kurchi-red/90 to-kurchi-red-muted/90 backdrop-blur-lg p-4 flex items-center justify-between cursor-move border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11V13H11V11C9.9 11 9 10.1 9 9V6.5L3 7V9H1V7C1 6.5 1.4 6 2 6L9 5.5V4C9 2.3 10.3 1 12 1S15 2.3 15 4V5.5L22 6C22.6 6 23 6.5 23 7V9H21ZM8 10V16C8 17.1 8.9 18 10 18H14C15.1 18 16 17.1 16 16V10H8ZM10 12H14V16H10V12ZM6 14V22H4V14H6ZM20 14V22H18V14H20Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">KURCHI Assistant</h3>
                  <p className="text-white/80 text-xs flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                    Smart Furnishing Bot
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

            {/* Messages with Enhanced Glassmorphism */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white/5 backdrop-blur-sm">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl backdrop-blur-lg border ${
                      message.isBot
                        ? 'bg-white/90 text-kurchi-navy border-white/30 rounded-bl-md'
                        : 'bg-kurchi-red/90 text-white border-kurchi-red/30 rounded-br-md'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Suggestions */}
            {currentFlow === 'main' && (
              <div className="p-4 border-t border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-2">
                  {suggestions.slice(0, 4).map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion.action)}
                      className="text-xs h-auto py-2 px-3 rounded-xl bg-white/10 border-white/30 text-kurchi-navy hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
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
                  className="w-full mt-2 text-xs h-auto py-2 px-3 rounded-xl bg-white/10 border-white/30 text-kurchi-navy hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
                >
                  <span className="mr-1">{suggestions[4].icon}</span>
                  {suggestions[4].text}
                </Button>
              </div>
            )}

            {/* Custom Request Upload */}
            {currentFlow === 'custom' && (
              <div className="p-4 border-t border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs h-auto py-2 px-3 rounded-xl bg-white/10 border-white/30 text-kurchi-navy hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
                  >
                    <Upload className="h-3 w-3 mr-2" />
                    Upload Reference Images
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentFlow('main')}
                    className="w-full text-xs h-auto py-2 px-3 rounded-xl bg-white/10 border-white/30 text-kurchi-navy hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
                  >
                    Back to Main Menu
                  </Button>
                </div>
              </div>
            )}

            {/* Enhanced Input */}
            <div className="p-4 border-t border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="rounded-xl border-white/30 bg-white/10 backdrop-blur-sm focus:border-kurchi-red/50 pr-10 text-kurchi-navy placeholder:text-kurchi-navy/70"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-8 w-8 text-kurchi-navy/60 hover:text-kurchi-red"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="rounded-xl bg-kurchi-red hover:bg-kurchi-red-muted backdrop-blur-sm"
                >
                  <Send className="h-4 w-4" />
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
