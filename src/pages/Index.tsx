import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import FeaturedSuppliers from "@/components/FeaturedSuppliers";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductCategories />
      <FeaturedSuppliers />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Index;
