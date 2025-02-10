import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'sonner';
import { 
  ShieldCheck, 
  Heart, 
  Microscope, 
  Star, 
  CheckCircle, 
  Award,
  ShoppingCart 
} from 'lucide-react';

const productCategories = [
  {
    id: 'oral-care',
    name: 'Oral Care Essentials',
    description: 'Professional-grade products for daily dental hygiene',
    icon: ShieldCheck,
    products: [
      {
        name: 'Advanced Whitening Toothpaste',
        description: 'Clinically proven formula for gentle, effective whitening',
        price: 12.99,
        benefits: [
          'Removes surface stains',
          'Strengthens enamel',
          'Long-lasting fresh breath'
        ],
        image: "/colgate.webp"
      },
      {
        name: 'Sensitive Teeth Mouthwash',
        description: 'Specialized formula for tooth sensitivity and gum health',
        price: 9.99,
        benefits: [
          'Reduces sensitivity',
          'Helps protect gum line',
          'Alcohol-free formula'
        ],
        image: "/listerine.webp"
      }
    ]
  },
  {
    id: 'professional-care',
    name: 'Professional Care Line',
    description: 'Advanced dental care products used by our experts',
    icon: Microscope,
    products: [
      {
        name: 'Pro Dental Repair Kit',
        description: 'Complete home care system for comprehensive oral health',
        price: 49.99,
        benefits: [
          'Professional-grade tools',
          'Comprehensive oral care',
          'Dentist-recommended components'
        ],
        image: "/product2.webp"
      },
      {
        name: 'Precision Electric Toothbrush',
        description: 'Smart technology for optimal cleaning and gum care',
        price: 89.99,
        benefits: [
          'Multiple cleaning modes',
          'Pressure sensor technology',
          'Long-lasting battery life'
        ],
        image: "/product1.webp"
      }
    ]
  }
];

const DentalProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0]);

  const handleAddToCart = (product) => {
    toast.success('Added to cart!', {
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 sm:pt-24">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Dental Care at Home
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Extending our commitment to exceptional oral health beyond the clinic
          </p>
        </motion.div>

        {/* Brand Philosophy Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {[
            { 
              icon: Heart, 
              title: 'Patient-Centered Design', 
              description: 'Products crafted with patient comfort in mind' 
            },
            { 
              icon: CheckCircle, 
              title: 'Scientifically Proven', 
              description: 'Rigorous testing and professional endorsement' 
            },
            { 
              icon: Award, 
              title: 'Quality Guaranteed', 
              description: 'Premium ingredients and advanced technology' 
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <feature.icon className="h-10 w-10 mx-auto mb-4 text-cyan-600" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Product Categories */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {productCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.02 }}
                className={`
                  flex items-center justify-center px-4 py-2 rounded-full transition-colors
                  ${selectedCategory.id === category.id 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }
                `}
              >
                <category.icon className="mr-2 h-4 w-4" />
                <span className="text-sm">{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Selected Category Details */}
          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              {selectedCategory.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              {selectedCategory.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {selectedCategory.products.map((product, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200"
                >
                  <div className="flex flex-col sm:flex-row items-center mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover mb-4 sm:mb-0 sm:mr-6 rounded-lg"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-cyan-600 font-bold text-lg">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <Star className="h-4 w-4 text-cyan-600 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart(product)}
                    className="mt-6 w-full bg-cyan-600 text-white py-3 rounded-full hover:bg-cyan-700 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Why Trust BrightSmile Products?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Dentist Approved",
                description: "Recommended by professionals"
              },
              {
                icon: Award,
                title: "Clinically Tested",
                description: "Scientifically validated formulas"
              },
              {
                icon: Heart,
                title: "Patient-First Design",
                description: "Created for optimal results"
              }
            ].map((item, index) => (
              <div key={index}>
                <item.icon className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalProductsPage;