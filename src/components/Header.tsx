import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Dokan Satasat</Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="py-2 px-4 rounded-full text-gray-800 w-64"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
          </div>
          <Link to="/cart" className="hover:text-gray-200">
            <ShoppingCart size={24} />
          </Link>
          <button className="hover:text-gray-200">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;