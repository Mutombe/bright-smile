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

// Enhanced Navbar Component


// Enhanced HomePage Component
const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative pt-24 sm:pt-32 pb-16 bg-cover bg-center" 
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("/2.jpg")',
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