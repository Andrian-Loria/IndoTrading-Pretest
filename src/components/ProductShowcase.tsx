import { ShoppingCart, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Industrial LED Lighting System",
    price: "Rp 2,500,000",
    minOrder: "10 units",
    supplier: "PT. Techno Electronics",
    location: "Jakarta",
    image: "/Images/Industrial-Led-Lightning-System.jpg"
  },
  {
    name: "Cotton Fabric Premium Quality",
    price: "Rp 85,000",
    minOrder: "50 meters", 
    supplier: "CV. Maju Tekstil",
    location: "Bandung",
    image: "/Images/Cotton-Fabric.jpg"
  },
  {
    name: "Steel Construction Beam",
    price: "Rp 450,000",
    minOrder: "20 pieces",
    supplier: "PT. Konstruksi Prima", 
    location: "Surabaya",
    image: "/Images/Steel-Construction-Beam.jpg"
  },
  {
    name: "Hydraulic Press Machine",
    price: "Rp 25,000,000",
    minOrder: "1 unit",
    supplier: "UD. Mesin Industri",
    location: "Medan", 
    image: "/Images/Hydraulic-Press-Machine.jpg"
  },
  {
    name: "Electronic Components Set",
    price: "Rp 150,000",
    minOrder: "100 sets",
    supplier: "PT. Techno Electronics",
    location: "Jakarta",
    image: "/Images/electronic-components-set.jpg"
  },
  {
    name: "Premium Ceramic Tiles",
    price: "Rp 120,000",
    minOrder: "25 boxes",
    supplier: "PT. Konstruksi Prima",
    location: "Surabaya", 
    image: "/Images/Premium-Ceramic-Tiles.jpg"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover high-quality products from verified suppliers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button className="p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                  <span className="text-sm text-gray-500">Min. {product.minOrder}</span>
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  <div>{product.supplier}</div>
                  <div>{product.location}</div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    Contact Supplier
                  </Button>
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
        </section>
    );
};

export default ProductShowcase;
