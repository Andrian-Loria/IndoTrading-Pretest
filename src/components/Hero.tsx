import { Search, TrendingUp, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Indonesia's Leading B2B Marketplace
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Connect with thousands of verified suppliers and discover quality products 
              for your business needs
            </p>
            
            <div className="bg-white rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <Input 
                  placeholder="What are you looking for?" 
                  className="border-0 text-gray-900 flex-1"
                />
                <Button className="ml-3 bg-orange-500 hover:bg-orange-600">
                  Search
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-orange-400" />
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-blue-100">Active Suppliers</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-orange-400" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-100">Verified</div>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-orange-400" />
                <div className="text-2xl font-bold">Fast</div>
                <div className="text-sm text-blue-100">Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <img 
                src="/Images/B2B-Trading.jpg" 
                alt="B2B Trading" 
                className="w-full h-75 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
