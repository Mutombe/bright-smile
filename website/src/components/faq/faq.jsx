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

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqCategories = [
    { 
      id: 'general', 
      name: 'General Dentistry', 
      icon: HelpCircle 
    },
    { 
      id: 'cosmetic', 
      name: 'Cosmetic Procedures', 
      icon: BookOpen 
    },
    { 
      id: 'insurance', 
      name: 'Insurance & Payments', 
      icon: Clock 
    }
  ];

  const faqData = {
    general: [
      {
        question: "How often should I visit the dentist?",
        answer: "We recommend a comprehensive dental check-up and professional cleaning every six months. However, some patients with specific dental conditions might require more frequent visits. During your initial consultation, we'll create a personalized dental care plan tailored to your unique oral health needs."
      },
      {
        question: "What should I expect during my first visit?",
        answer: "Your first visit includes a thorough examination, including digital X-rays, comprehensive oral health assessment, professional cleaning, and a detailed consultation with our dentist. We'll discuss your dental history, current oral health, and develop a personalized treatment plan that addresses your specific goals and concerns."
      },
      {
        question: "Do you offer emergency dental services?",
        answer: "Yes, BrightSmile Dental provides emergency dental care. We have dedicated time slots for urgent dental issues like severe tooth pain, dental trauma, or unexpected complications. If you're experiencing a dental emergency, please call our office immediately, and we'll prioritize your care."
      }
    ],
    cosmetic: [
      {
        question: "What cosmetic dental procedures do you offer?",
        answer: "We offer a comprehensive range of cosmetic dental services including professional teeth whitening, porcelain veneers, dental bonding, smile makeovers, and advanced orthodontic treatments. Our goal is to help you achieve a confident, radiant smile that reflects your unique personality."
      },
      {
        question: "How long do cosmetic dental procedures take?",
        answer: "The duration varies depending on the specific procedure. For instance, professional teeth whitening can be completed in a single session, while veneers might require two to three appointments. During your consultation, we'll provide a detailed timeline and discuss what you can expect throughout your cosmetic dental journey."
      }
    ],
    insurance: [
      {
        question: "Do you accept dental insurance?",
        answer: "We work with most major dental insurance providers and can help you maximize your benefits. Our billing team will verify your coverage, provide a comprehensive treatment plan, and assist you in understanding your financial responsibilities before any procedure."
      },
      {
        question: "What payment options are available?",
        answer: "We offer multiple payment options including major credit cards, dental financing plans, and in-house payment arrangements. Our goal is to make high-quality dental care accessible and affordable for all our patients."
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Hero - Made text more responsive */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Your comprehensive guide to dental care and our services
          </p>
        </motion.div>

        {/* FAQ Categories - Redesigned for better mobile responsiveness */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          {faqCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center justify-center px-4 sm:px-6 py-3 rounded-full transition-colors
                w-full sm:w-auto text-sm sm:text-base
                ${activeCategory === category.id 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }
              `}
              whileHover={{ scale: 1.02 }}
            >
              <category.icon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* FAQ Accordion - Adjusted padding for mobile */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4">
          {faqData[activeCategory].map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-md"
            >
              <button 
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full flex justify-between items-center p-4 sm:p-6 text-left"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transform transition-transform ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openQuestion === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;