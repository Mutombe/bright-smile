import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  Clock, 
  User, 
  BookOpen, 
  Search,
  Tag
} from 'lucide-react';

// Reusable Hero component that can be used across different pages
const Hero = ({ title, subtitle, backgroundImage, overlayColor = 'rgba(0, 0, 0, 0.5)' }) => {
  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          // Create a gradient overlay that blends with the image
          backgroundColor: overlayColor,
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Content container with responsive padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;