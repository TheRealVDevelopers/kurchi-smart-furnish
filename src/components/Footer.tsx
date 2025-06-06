
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/37602a25-3493-42ce-8d4a-ff446e19d8c8.png" 
              alt="Kurchi" 
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-gray-400">
              Redefining comfort with intelligence. Premium furniture crafted for modern living spaces.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chairs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sofas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recliners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Office Furniture</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Orders</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">B2B Portal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                <span className="text-gray-400">
                  123 Furniture Street, Design District, Mumbai 400001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">hello@kurchi.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kurchi. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
