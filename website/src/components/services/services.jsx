import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Smile, 
  Microscope, 
  HeartPulse, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  Award,
  Star,
  CheckCircle
} from 'lucide-react';
import { FaTooth } from 'react-icons/fa';

// Services Page
const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'preventive',
      name: 'Preventive Care',
      icon: FaTooth,
      description: 'Proactive dental health maintenance',
      details: [
        'Comprehensive dental examinations',
        'Professional teeth cleaning',
        'Dental X-rays and diagnostics',
        'Oral cancer screenings',
        'Personalized oral hygiene guidance'
      ],
      image: "/api/placeholder/800/600"
    },
    {
      id: 'cosmetic',
      name: 'Cosmetic Dentistry',
      icon: Smile,
      description: 'Enhancing your smile\'s aesthetic appeal',
      details: [
        'Teeth whitening',
        'Porcelain veneers',
        'Smile makeovers',
        'Dental bonding',
        'Aesthetic dental crowns'
      ],
      image: "/api/placeholder/800/600"
    },
    {
      id: 'restorative',
      name: 'Restorative Treatments',
      icon: X,
      description: 'Comprehensive dental restoration',
      details: [
        'Dental implants',
        'Advanced root canal therapy',
        'Crowns and bridges',
        'Full mouth rehabilitation',
        'Advanced prosthetic solutions'
      ],
      image: "/api/placeholder/800/600"
    }
  ];

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
            Comprehensive Dental Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Personalized care that transforms smiles and improves lives
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:border-cyan-600 border-2 border-transparent transition-all"
            >
              <service.icon className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">{service.name}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Modal */}
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-xl max-w-4xl w-full shadow-2xl grid md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:order-2">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.name} 
                  className="w-full h-full object-cover rounded-r-xl"
                />
              </div>
              <div className="p-8 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedService.name}
                </h2>
                <p className="text-gray-600 mb-6">{selectedService.description}</p>
                <ul className="space-y-3">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button 
                  className="mt-6 w-full bg-cyan-600 text-white py-3 rounded-full hover:bg-cyan-700 transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Technology and Expertise Section */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Commitment to Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Microscope, 
                title: 'Advanced Technology', 
                description: 'State-of-the-art dental equipment and techniques' 
              },
              { 
                icon: HeartPulse, 
                title: 'Patient-Centered Care', 
                description: 'Personalized treatment plans for individual needs' 
              },
              { 
                icon: Users, 
                title: 'Expert Team', 
                description: 'Highly skilled and continuously trained professionals' 
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;