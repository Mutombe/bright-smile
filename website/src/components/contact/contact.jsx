import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
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
// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
    console.log('Form submitted:', formData);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact BrightSmile Dental
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and help you achieve your best smile
          </p>
        </motion.div>
  
        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-600"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-3 rounded-full hover:bg-cyan-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-cyan-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Our Location</h3>
                  <p className="text-gray-600">
                    1234 Dental Care Boulevard
                    <br />
                    Smile City, SC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-cyan-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-gray-600">Emergency: (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-cyan-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@brightsmile.com</p>
                  <p className="text-gray-600">appointments@brightsmile.com</p>
                </div>
              </div>
            </div>
  
            {/* Office Hours */}
            <div className="mt-8 bg-gray-50 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
  
        {/* Google Maps Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
              <p className="text-gray-600">
                Google Maps Integration Placeholder
                <br />
                (Actual map would show clinic location)
              </p>
            </div>
          </div>
        </motion.div>
  
        {/* Additional Contact Insights */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Contact BrightSmile?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HeartPulse,
                title: "Compassionate Support",
                description: "Our team is dedicated to addressing your dental concerns with empathy and expertise."
              },
              {
                icon: CheckCircle,
                title: "Prompt Responses",
                description: "We aim to respond to all inquiries within 24 business hours."
              },
              {
                icon: Users,
                title: "Personalized Guidance",
                description: "Every patient receives individualized attention and care recommendations."
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
}

export default ContactPage