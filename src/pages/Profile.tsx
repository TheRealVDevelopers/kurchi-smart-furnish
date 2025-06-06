
import React from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Package, Heart, MapPin, Phone, Mail, Settings, LogOut } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MobileNav />
      
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Profile Header */}
          <Card className="mb-8">
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-kurchi-red rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
                  <p className="text-gray-600">Manage your account and preferences</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3">
                <Package className="h-8 w-8 text-kurchi-red" />
                <div>
                  <h3 className="font-semibold">My Orders</h3>
                  <p className="text-sm text-gray-600">Track your orders</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-kurchi-red" />
                <div>
                  <h3 className="font-semibold">Wishlist</h3>
                  <p className="text-sm text-gray-600">Saved items</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-kurchi-red" />
                <div>
                  <h3 className="font-semibold">Addresses</h3>
                  <p className="text-sm text-gray-600">Manage delivery</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3">
                <Settings className="h-8 w-8 text-kurchi-red" />
                <div>
                  <h3 className="font-semibold">Settings</h3>
                  <p className="text-sm text-gray-600">Account settings</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Account Options */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Account</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <span>Phone Number</span>
                  </div>
                  <Button variant="ghost" size="sm">Add</Button>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <span>Email Address</span>
                  </div>
                  <Button variant="ghost" size="sm">Add</Button>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-600" />
                    <span>Personal Information</span>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-gray-600" />
                    <span>Preferences</span>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="w-full text-red-600 border-red-600 hover:bg-red-50">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
