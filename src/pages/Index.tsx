import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-20">
        <Hero />
        <Services />
        {/* <Portfolio /> */}
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
