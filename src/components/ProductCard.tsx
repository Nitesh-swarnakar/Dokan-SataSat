import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, rating, category }) => {
  return (
    <Link to={`/product/${id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{category}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;