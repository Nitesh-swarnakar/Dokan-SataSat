export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone X",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Laptop Pro",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    category: "Electronics"
  },
  {
    id: 4,
    name: "Men's Casual Shirt",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    category: "Fashion"
  },
  {
    id: 5,
    name: "Women's Summer Dress",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    category: "Fashion"
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    category: "Fashion"
  },
  {
    id: 7,
    name: "Stainless Steel Cookware Set",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    category: "Home & Kitchen"
  },
  {
    id: 8,
    name: "Smart LED TV",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    category: "Electronics"
  },
  {
    id: 9,
    name: "Yoga Mat",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    category: "Sports & Outdoors"
  },
  {
    id: 10,
    name: "Bestselling Novel",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    category: "Books"
  },
  {
    id: 11,
    name: "Organic Face Cream",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    category: "Beauty & Personal Care"
  },
  {
    id: 12,
    name: "Wireless Gaming Mouse",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    category: "Electronics"
  }
];