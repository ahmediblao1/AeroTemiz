import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              AeroTemiz
              <span className="text-secondary ml-2 font-normal">Türkiye</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Hizmetlerimiz
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Projelerimiz
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              İletişim
            </button>
          </nav>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">+90 551 710 7709</span>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-corporate"
            >
              Ücretsiz Teklif
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary transition-colors p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in-up">
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              Hizmetlerimiz
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              Projelerimiz
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              İletişim
            </button>
            
            <div className="pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-foreground mb-4">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">+90 551 710 7709</span>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-corporate w-full justify-center"
              >
                Ücretsiz Teklif
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;