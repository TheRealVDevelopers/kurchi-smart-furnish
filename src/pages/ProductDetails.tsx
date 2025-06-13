
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Share2, 
  ShoppingCart, 
  Minus, 
  Plus, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  MessageCircle,
  Zap,
  Award
} from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: 'Executive Leather Chair Elite',
    sanskritName: 'राजसी कुर्ची',
    category: 'Executive Chairs',
    price: 15999,
    originalPrice: 19999,
    b2bPrice: 12999,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Experience luxury and comfort with our premium Executive Leather Chair. Crafted with genuine leather and ergonomic design, perfect for long working hours.',
    features: [
      'Premium genuine leather upholstery',
      'Adjustable height and tilt mechanism',
      'Lumbar support for spine health',
      '360-degree swivel base',
      'Sturdy metal frame construction'
    ],
    specifications: {
      'Material': 'Genuine Leather & Metal',
      'Dimensions': '65cm x 70cm x 110-120cm',
      'Weight Capacity': '150 kg',
      'Assembly': 'Required (tools included)',
      'Warranty': '2 Years Manufacturing Warranty'
    },
    bulkPricing: [
      { quantity: '1-9 pcs', price: 15999 },
      { quantity: '10-49 pcs', price: 14499 },
      { quantity: '50+ pcs', price: 12999 }
    ]
  };

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileNav />
      <main className="pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-kurchi-navy/60 mb-8">
            <span>Home</span> / <span>Categories</span> / <span>{product.category}</span> / <span className="text-kurchi-navy font-medium">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative bg-kurchi-cream/30 rounded-2xl overflow-hidden aspect-square">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* 100 Days Trial Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-kurchi-saffron to-yellow-400 text-kurchi-navy px-4 py-2 rounded-xl text-sm font-bold shadow-lg animate-pulse">
                  🎉 100 Days Free Trial
                </div>
                
                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className={`absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors ${isWishlisted ? 'text-red-500' : 'text-kurchi-navy'}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-kurchi-red' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2 text-kurchi-red border-kurchi-red">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold text-kurchi-navy mb-2">{product.name}</h1>
                <p className="text-xl font-sanskrit text-kurchi-red mb-4">{product.sanskritName}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-kurchi-navy/60">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <Card className="p-6 bg-gradient-to-r from-kurchi-cream to-kurchi-saffron/20 border-kurchi-saffron/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-kurchi-navy">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-kurchi-navy/50 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <Badge className="bg-green-500 text-white">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </Badge>
                  </div>
                  
                  {/* B2B Pricing */}
                  <div className="bg-white/60 p-4 rounded-lg border border-kurchi-saffron/50">
                    <h3 className="font-semibold text-kurchi-navy mb-2">B2B Bulk Pricing Available</h3>
                    <div className="text-sm text-kurchi-navy/70">
                      <p>Login for special bulk rates starting from ₹{product.b2bPrice.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-kurchi-cream/50 rounded-lg">
                  <Shield className="h-8 w-8 text-kurchi-red mx-auto mb-2" />
                  <p className="text-sm font-medium">2 Year Warranty</p>
                </div>
                <div className="text-center p-4 bg-kurchi-cream/50 rounded-lg">
                  <Truck className="h-8 w-8 text-kurchi-red mx-auto mb-2" />
                  <p className="text-sm font-medium">Free Delivery</p>
                </div>
                <div className="text-center p-4 bg-kurchi-cream/50 rounded-lg">
                  <RotateCcw className="h-8 w-8 text-kurchi-red mx-auto mb-2" />
                  <p className="text-sm font-medium">100 Day Trial</p>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border border-kurchi-saffron rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange('decrease')}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange('increase')}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-kurchi-red hover:bg-kurchi-red-muted text-white py-3 text-lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="px-6 border-kurchi-red text-kurchi-red hover:bg-kurchi-red hover:text-white">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-2 border-kurchi-navy text-kurchi-navy hover:bg-kurchi-navy hover:text-white py-3"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Custom Request
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="bulk-pricing">Bulk Pricing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-kurchi-navy/80 leading-relaxed mb-6">{product.description}</p>
                  
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Zap className="h-4 w-4 text-kurchi-red mt-1 mr-2 flex-shrink-0" />
                        <span className="text-kurchi-navy/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>
              
              <TabsContent value="specifications">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between p-3 bg-kurchi-cream/30 rounded-lg">
                        <span className="font-medium">{key}:</span>
                        <span className="text-kurchi-navy/80">{value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="text-center py-8 text-kurchi-navy/60">
                    <Award className="h-12 w-12 mx-auto mb-4" />
                    <p>Reviews section coming soon!</p>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="bulk-pricing">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">B2B Bulk Pricing</h3>
                  <div className="space-y-4">
                    {product.bulkPricing.map((tier, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-kurchi-cream/30 rounded-lg">
                        <span className="font-medium">{tier.quantity}</span>
                        <span className="text-xl font-bold text-kurchi-red">₹{tier.price.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="bg-kurchi-saffron/20 p-4 rounded-lg border border-kurchi-saffron/30">
                      <p className="text-sm text-kurchi-navy/80">
                        <strong>Note:</strong> B2B pricing is available after business verification. 
                        Contact our sales team for custom quotes on larger orders.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default ProductDetails;
