import React from 'react';
import Hero from '../components/Hero/Hero';
import ProductsSection from '../components/Products/ProductsSection';
import CategoriesSection from '../components/Categories/CategoriesSection';
import PartnersSection from '../components/Partners/PartnersSection';
import ContactSection from '../components/Contact/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ProductsSection />
      <CategoriesSection />
      <PartnersSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;