import React from 'react';
import { ArrowRight } from 'lucide-react';
import droneCleaningImage from '../assets/drone-cleaning-1.jpg';


const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat scale-110 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url(${droneCleaningImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Content - Centered */}
          <div className="text-white animate-fade-in-up max-w-4xl">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Türkiye'nin En Güvenilir
                <span className="block text-primary-light bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  Drone Temizlik Servisi
                </span>
              </h1>
              <p className="text-xl mb-6 text-gray-100 max-w-2xl mx-auto leading-relaxed">
                <strong>3+ yıllık deneyim</strong> ile yüksek binalar, cam cepheler ve endüstriyel tesislerin 
                profesyonel temizliği. <strong>%100 güvenli</strong> hizmet garantisi.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                  <span className="text-sm font-medium">24 Saat İçinde Başlama</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                  <span className="text-sm font-medium">%100 güvenli</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                  <span className="text-sm font-medium">%50 Daha Ekonomik</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-gradient-primary text-white px-8 py-5 rounded-lg font-semibold text-lg shadow-button hover:shadow-button-hover transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Ücretsiz Keşif ve Teklif Alın
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={scrollToServices}
                className="group px-8 py-5 bg-white/15 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-primary-dark rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Hizmetlerimizi Keşfedin
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;