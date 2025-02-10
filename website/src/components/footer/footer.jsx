import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaTooth } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
                          
                          <FaTooth className="h-8 w-8 text-cyan-600" />
              <span className="ml-2 text-xl font-bold">BrightSmile Dental</span>
            </div>
            <p className="text-gray-400">
              Providing exceptional dental care with a gentle touch
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                123 Dental Street, City, State 12345
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                info@brightsmile.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 BrightSmile Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;