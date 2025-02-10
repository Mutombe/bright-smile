import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, CheckCircle, Linkedin, Mail, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[400px] sm:min-h-[500px] w-full overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/1.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90 backdrop-blur-sm" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="text-center"
        >
          {/* Decorative Element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-8 rounded-full"
          />

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent pb-2">
            Our Story, Our Passion
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            A journey of compassion, innovation, and exceptional dental care
          </motion.p>

          {/* Optional Decorative Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute top-40 right-10 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AboutUsPage = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Enhanced team member data with additional information
  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Lead Dentist",
      expertise: "Cosmetic Dentistry",
      image: "/user.jpg",
      experience: "15+ years",
      education: "Harvard School of Dental Medicine",
      availability: "Mon-Thu"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Restorative Specialist",
      expertise: "Implant Dentistry",
      image: "/user.jpg",
      experience: "12+ years",
      education: "UCLA School of Dentistry",
      availability: "Tue-Fri"
    },
    {
      name: "Dr. Sarah Thompson",
      role: "Pediatric Dental Expert",
      expertise: "Children's Dentistry",
      image: "/user.jpg",
      experience: "10+ years",
      education: "University of Michigan",
      availability: "Mon-Wed"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with enhanced animation */}
        <Hero />

        {/* Mission and Vision with improved hover effects */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="bg-white rounded-xl shadow-lg p-8 transition-colors duration-300"
          >
            <Award className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-center leading-relaxed">
              To provide exceptional, compassionate dental care that transforms lives 
              through healthy, beautiful smiles. We are committed to advanced 
              technologies, continuous learning, and personalized patient experiences.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="bg-white rounded-xl shadow-lg p-8 transition-colors duration-300"
          >
            <Star className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-center leading-relaxed">
              To be the leading dental care provider, setting new standards in 
              patient-centered care, technological innovation, and holistic oral health 
              management. We aspire to create confident, healthy smiles for life.
            </p>
          </motion.div>
        </div>

        {/* Enhanced Team Showcase */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden p-6"
              >
                {/* Circular image container with border effect */}
                <div className="relative mx-auto w-48 h-48 mb-6">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-4 border-white"
                  />
                </div>
                
                {/* Member information with enhanced layout */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-cyan-600 font-medium mb-4">{member.expertise}</p>
                  
                  {/* Additional details with icons */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-600" />
                      {member.experience} Experience
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Award className="w-4 h-4 text-cyan-600" />
                      {member.education}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-600" />
                      Available {member.availability}
                    </p>
                  </div>
                  
                  {/* Social/Contact buttons */}
                  <div className="flex justify-center gap-4 mt-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-cyan-50 text-cyan-600 hover:bg-cyan-100"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-cyan-50 text-cyan-600 hover:bg-cyan-100"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;