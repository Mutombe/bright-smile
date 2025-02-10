import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaTooth,           // Logo/Brand Icon
  FaHome,            // Home
  FaTools,           // Services
  FaInfoCircle,      // About
  FaAddressBook,     // Contact
  FaShoppingCart,    // Dental Products
  FaCalendarCheck,   // Appointments
  FaUserMd,          // Dental Team
  FaQuestionCircle,  // FAQs
  FaBlog             // Blog
} from 'react-icons/fa';
import { 
  Shield, 
  Heart, 
  Users, 
  Star, 
  Stethoscope, 
  Smile 
} from 'lucide-react';

// Enhanced Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links with icons and descriptions
  const navLinks = [
    { href: "/", icon: FaHome, label: "Home", description: "Welcome to BrightSmile" },
    { href: "/services", icon: FaTools, label: "Services", description: "Our Dental Treatments" },
    { href: "/products", icon: FaShoppingCart, label: "Dental Products", description: "Professional Care Products" },
    //{ href: "/team", icon: FaUserMd, label: "Our Team", description: "Meet Our Experts" },
    { href: "/about", icon: FaInfoCircle, label: "About Us", description: "Our Dental Philosophy" },
    { href: "/blog", icon: FaBlog, label: "Dental Blog", description: "Oral Health Insights" },
    { href: "/faq", icon: FaQuestionCircle, label: "FAQs", description: "Common Questions" },
    { href: "/contact", icon: FaAddressBook, label: "Contact", description: "Get in Touch" }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section with Animated Hover */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onClick={() => window.location.href = "/"}
          >
            <FaTooth className="h-8 w-8 text-cyan-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">BrightSmile Dental</span>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-cyan-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navLinks.map((link, index) => (
              <motion.a 
                key={index} 
                href={link.href} 
                className="flex items-center text-gray-600 hover:text-cyan-600 group"
                whileHover={{ scale: 1.05 }}
                title={link.description}
              >
                <link.icon className="mr-2 h-4 w-4 text-gray-400 group-hover:text-cyan-600 transition-colors" />
                {link.label}
              </motion.a>
            ))}
            <motion.button 
              className="bg-cyan-600 text-white px-6 py-2 rounded-full hover:bg-cyan-700 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarCheck className="mr-2" /> Book Appointment
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="sm:hidden bg-white shadow-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <motion.a 
                key={index} 
                href={link.href} 
                className="flex items-center px-3 py-2 text-gray-600 hover:text-cyan-600 hover:bg-gray-100 rounded-md group"
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600" />
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;