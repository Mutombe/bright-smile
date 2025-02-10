import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 

  Award,
  Star,
  CheckCircle
} from 'lucide-react';

// About Us Page
const AboutUsPage = () => {
    return (
      <div className="bg-gray-50 min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Story, Our Passion
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey of compassion, innovation, and exceptional dental care
            </p>
          </motion.div>
  
          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <Award className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-center">
                To provide exceptional, compassionate dental care that transforms lives 
                through healthy, beautiful smiles. We are committed to advanced 
                technologies, continuous learning, and personalized patient experiences.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <Star className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 text-center">
                To be the leading dental care provider, setting new standards in 
                patient-centered care, technological innovation, and holistic oral health 
                management. We aspire to create confident, healthy smiles for life.
              </p>
            </motion.div>
          </div>
  
          {/* Team Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Meet Our Expert Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Emily Chen",
                  role: "Lead Dentist",
                  expertise: "Cosmetic Dentistry",
                  image: "/user.jpg"
                },
                {
                  name: "Dr. Michael Rodriguez",
                  role: "Restorative Specialist",
                  expertise: "Implant Dentistry",
                  image: "/user.jpg"
                },
                {
                  name: "Dr. Sarah Thompson",
                  role: "Pediatric Dental Expert",
                  expertise: "Children's Dentistry",
                  image: "/user.jpg"
                }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <p className="text-cyan-600 font-medium">{member.expertise}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default AboutUsPage;