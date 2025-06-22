import { Search, Menu, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center space-x-4">
            <span>🇮🇩 Indonesia</span>
            <span>|</span>
            <span>Bahasa Indonesia</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Help Center</span>
            <span>|</span>
            <span>Download App</span>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <img
                src="/Images/Logo.png" 
                alt="Logo"
                className="h-10 w-auto object-contain"
                />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-700 transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-blue-700 transition-colors">Suppliers</a>
              <a href="#" className="text-gray-700 hover:text-blue-700 transition-colors">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-700 transition-colors">Services</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <Input 
                placeholder="Search products, suppliers..." 
                className="border-0 bg-transparent focus-visible:ring-0 w-80"
              />
            </div>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
