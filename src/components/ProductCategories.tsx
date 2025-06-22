import { 
  Zap, 
  Wrench, 
  Shirt, 
  Home, 
  Car, 
  Laptop, 
  Heart, 
  Utensils,
  ArrowRight 
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Zap, color: "bg-blue-100 text-blue-600", count: "12,543" },
  { name: "Machinery", icon: Wrench, color: "bg-green-100 text-green-600", count: "8,721" },
  { name: "Textiles", icon: Shirt, color: "bg-purple-100 text-purple-600", count: "15,234" },
  { name: "Construction", icon: Home, color: "bg-orange-100 text-orange-600", count: "9,876" },
  { name: "Automotive", icon: Car, color: "bg-red-100 text-red-600", count: "6,543" },
  { name: "Computers", icon: Laptop, color: "bg-indigo-100 text-indigo-600", count: "11,234" },
  { name: "Healthcare", icon: Heart, color: "bg-pink-100 text-pink-600", count: "4,567" },
  { name: "Food & Beverage", icon: Utensils, color: "bg-yellow-100 text-yellow-600", count: "7,890" },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse by Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover thousands of products across various industries and categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{category.count} products</p>
              <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                View all
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
