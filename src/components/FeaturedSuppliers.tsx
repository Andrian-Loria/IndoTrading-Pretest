import { Star, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const suppliers = [
  {
    name: "PT. Techno Electronics",
    location: "Jakarta, Indonesia",
    rating: 4.8,
    reviews: 234,
    products: 1250,
    verified: true,
    speciality: "Electronics & Components"
  },
  {
    name: "CV. Maju Tekstil",
    location: "Bandung, Indonesia",
    rating: 4.9,
    reviews: 189,
    products: 890,
    verified: true,
    speciality: "Textile & Garments"
  },
  {
    name: "PT. Konstruksi Prima",
    location: "Surabaya, Indonesia",
    rating: 4.7,
    reviews: 156,
    products: 670,
    verified: true,
    speciality: "Construction Materials"
  },
  {
    name: "UD. Mesin Industri",
    location: "Medan, Indonesia",
    rating: 4.6,
    reviews: 98,
    products: 450,
    verified: true,
    speciality: "Industrial Machinery"
  }
];

const FeaturedSuppliers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Suppliers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partner with trusted and verified suppliers across Indonesia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suppliers.map((supplier, index) => (
            <div 
              key={index}
              className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  {supplier.name.split(' ')[1]?.[0] || supplier.name[0]}
                </div>
                {supplier.verified && (
                  <Award className="h-5 w-5 text-green-500" />
                )}
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {supplier.name}
              </h3>
              
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {supplier.location}
              </div>
              
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{supplier.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({supplier.reviews})</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{supplier.speciality}</p>
              <p className="text-sm text-gray-500 mb-4">{supplier.products} products</p>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
              >
                View Profile
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSuppliers;
