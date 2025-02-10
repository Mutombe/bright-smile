import React from 'react';
import { useState, useEffect } from 'react'
import HomePage from './components/home/home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/nav/nav';
import Footer from './components/footer/footer';
import DentalProductsPage from './components/products/products';
import ServicesPage from './components/services/services';
import AboutUsPage from './components/about/about';
import ContactPage from './components/contact/contact';
import FAQPage from './components/faq/faq';
import BlogPage from './components/blog/blog';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16 mb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here as we create them */}
            <Route path="/products" element={<DentalProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
          {/* <Route path="/admin" element={<AdminPage />} /> */}
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
