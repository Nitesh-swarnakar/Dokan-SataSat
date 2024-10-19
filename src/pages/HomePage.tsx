import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Clock, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dokan Satasat</h1>
        <p className="text-xl mb-6">Your AI-powered e-commerce destination for seamless shopping experiences.</p>
        <Link to="/products" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Start Shopping
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <Truck size={48} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p>Get your products delivered quickly and efficiently.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <ShieldCheck size={48} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p>Shop with confidence using our secure payment systems.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Clock size={48} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p>Our AI-powered support is always here to help you.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Zap size={48} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
          <p>Experience personalized shopping with our advanced AI.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="text-blue-600 hover:text-blue-800 font-semibold">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;