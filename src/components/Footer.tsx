import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dokan Satasat</h3>
            <p className="mb-2">Your AI-powered e-commerce solution</p>
            <p className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:kumarswarnkarnitesh@gmail.com">kumarswarnkarnitesh@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="flex items-center mb-2">
              <Phone size={16} className="mr-2" />
              +1 (123) 456-7890
            </p>
            <p className="flex items-center">
              <MapPin size={16} className="mr-2" />
              123 E-commerce Street, Tech City, 12345
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Dokan Satasat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;