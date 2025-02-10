import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Heart, 
  Users, 
  Star, 
  Stethoscope, 
  Smile 
} from 'lucide-react';

// Enhanced HomePage Component
const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative pt-24 sm:pt-32 pb-16 bg-cover bg-center" 
           style={{
             backgroundImage: 'linear-gradient(rgba(147, 221, 255, 0.7), rgba(255,255,255,0.7)), url("/2.jpg")',
             backgroundBlendMode: 'lighten'
           }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Transforming Smiles, Changing Lives
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            >
              Comprehensive dental care with precision, compassion, and cutting-edge technology
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-600 text-white px-8 py-3 rounded-full hover:bg-cyan-700 transition-colors"
                onClick={() => window.location.href = "/contact"}
              >
                Book Appointment
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cyan-600 px-8 py-3 rounded-full border-2 border-cyan-600 hover:bg-cyan-50 transition-colors"
                onClick={() => window.location.href = "/contact"}
              >
                Virtual Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <FeaturesSection />

      {/* Enhanced Features Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BrightSmile?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine advanced dental techniques with compassionate care to deliver exceptional patient experiences
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: Shield, 
              title: "Advanced Safety", 
              description: "Strict infection control and sterilization protocols",
              color: "text-green-600"
            },
            { 
              icon: Stethoscope, 
              title: "Comprehensive Care", 
              description: "Full range of dental services under one roof",
              color: "text-blue-600"
            },
            { 
              icon: Heart, 
              title: "Patient-Centered", 
              description: "Personalized treatment plans tailored to your needs",
              color: "text-red-600"
            },
            { 
              icon: Users, 
              title: "Expert Team", 
              description: "Highly skilled and continuously trained professionals",
              color: "text-purple-600"
            },
            { 
              icon: Smile, 
              title: "Cutting-Edge Technology", 
              description: "Latest dental equipment and techniques",
              color: "text-yellow-600"
            },
            { 
              icon: Star, 
              title: "Proven Results", 
              description: "Thousands of satisfied patients and beautiful smiles",
              color: "text-indigo-600"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;




// The FeatureCard component represents each individual feature card with its rotating background images
const FeatureCard = ({ feature }) => {
  // State to track which image is currently displayed in the carousel
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  // Set up the image rotation effect using useEffect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 3000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Define placeholder images for each feature type
  // In a production environment, these would be replaced with real images
  const placeholderImages = {
    "Advanced Safety": [
      "/2.jpg",
      "/1.jpg",
      "/2.jpg"
    ],
    "Comprehensive Care": [
      "/4.jpg",
      "/5.jpg",
      "/3.jpg"
    ],
    "Patient-Centered": [
      "/6.jpg",
      "/7.jpg",
      "/8.jpg"
    ],
    "Expert Team": [
      "/9.jpg",
      "/10.jpg",
      "/11.jpg"
    ],
    "Cutting-Edge Technology": [
      "/18.jpg",
      "/12.jpg",
      "/12.jpg"
    ],
    "Proven Results": [
      "/21.jpg",
      "/20.jpg",
      "/19.jpg"
    ]
  };

  // Get the appropriate icon component for this feature
  const IconComponent = feature.icon;

  return (
    // Replace Card component with a div using similar styling
    <div className="relative overflow-hidden h-64 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 bg-white">
      {/* Background image container */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          {/* Map through the images for this feature's carousel */}
          {placeholderImages[feature.title].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${feature.title} background ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75" />
        </div>
      </div>
      
      {/* Content container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center p-6 z-10">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
          <IconComponent className={`w-12 h-12 ${feature.color}`} />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
        <p className="text-gray-200">{feature.description}</p>
      </div>
    </div>
  );
};

// The main FeaturesSection component that displays all feature cards
const FeaturesSection = () => {
  // Define the features array with all necessary information
  const features = [
    {
      icon: Shield,
      title: "Advanced Safety",
      description: "Strict infection control and sterilization protocols",
      color: "text-green-600"
    },
    {
      icon: Stethoscope,
      title: "Comprehensive Care",
      description: "Full range of dental services under one roof",
      color: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Personalized treatment plans tailored to your needs",
      color: "text-red-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled and continuously trained professionals",
      color: "text-purple-600"
    },
    {
      icon: Smile,
      title: "Cutting-Edge Technology",
      description: "Latest dental equipment and techniques",
      color: "text-yellow-600"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "Thousands of satisfied patients and beautiful smiles",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose BrightSmile?</h2>
          <p className="text-xl text-gray-600">
            We combine advanced dental techniques with compassionate care to deliver exceptional patient experiences
          </p>
        </div>
        
        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
