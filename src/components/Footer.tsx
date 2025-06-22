import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">IndoTrading</div>
            <p className="mb-4">
              Indonesia's leading B2B marketplace connecting businesses with verified suppliers and quality products.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Machinery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Textiles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automotive</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Find Suppliers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product Sourcing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trade Assurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Control</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@indotrading.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 IndoTrading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
