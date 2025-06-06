
import React, { useState } from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const Orders = () => {
  const [orders] = useState([
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: '₹12,999',
      items: [
        {
          name: 'Executive Office Chair',
          image: '/placeholder.svg',
          quantity: 1,
          price: '₹12,999'
        }
      ],
      deliveryDate: '2024-01-20'
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-10',
      status: 'shipped',
      total: '₹45,999',
      items: [
        {
          name: 'Luxury Leather Sofa',
          image: '/placeholder.svg',
          quantity: 1,
          price: '₹45,999'
        }
      ],
      estimatedDelivery: '2024-01-25'
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-600" />;
      case 'processing':
        return <Package className="h-5 w-5 text-orange-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'shipped':
        return 'Shipped';
      case 'processing':
        return 'Processing';
      default:
        return 'Pending';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MobileNav />
      
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Package className="h-8 w-8 text-kurchi-red mr-3" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Orders</h1>
          </div>

          {orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order.id} className="overflow-hidden">
                  <div className="p-6">
                    {/* Order Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Order #{order.id}
                        </h3>
                        <p className="text-gray-600">Placed on {order.date}</p>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 md:mt-0">
                        {getStatusIcon(order.status)}
                        <span className="font-medium">{getStatusText(order.status)}</span>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-kurchi-red">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Footer */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 pt-4 border-t">
                      <div>
                        <p className="text-lg font-semibold">Total: {order.total}</p>
                        {order.status === 'delivered' ? (
                          <p className="text-green-600">Delivered on {order.deliveryDate}</p>
                        ) : (
                          <p className="text-gray-600">Expected delivery: {order.estimatedDelivery}</p>
                        )}
                      </div>
                      <div className="flex space-x-2 mt-4 md:mt-0">
                        <Button variant="outline" size="sm">
                          Track Order
                        </Button>
                        {order.status === 'delivered' && (
                          <Button variant="outline" size="sm">
                            Write Review
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
              <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
              <Button className="bg-kurchi-red hover:bg-kurchi-red-dark">
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
