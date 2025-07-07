import React from 'react';
import { ArrowRight } from 'lucide-react';
import droneImage1 from '../assets/drone-cleaning-1.jpg';
import droneImage2 from '../assets/drone-cleaning-2.jpg';

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Çalışmalarımızdan
            <span className="block text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Örnekler
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesyonel drone teknolojimiz ile gerçekleştirdiğimiz temizlik projelerinden bazı görseller
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
            <img 
              src={droneImage1} 
              alt="Drone ile cam cephe temizliği - Önce" 
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Cam Cephe Temizliği</h3>
              <p className="text-gray-200">Yüksek binalar için güvenli ve etkili drone temizlik çözümü</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
            <img 
              src={droneImage2} 
              alt="Drone ile cam cephe temizliği - Sonra" 
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Endüstriyel Temizlik</h3>
              <p className="text-gray-200">Büyük ölçekli endüstriyel tesislerin profesyonel temizliği</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-semibold mb-6">
            <span>Tüm projelerimiz %100 garantilidir</span>
          </div>
          <div>
            <button className="group bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-button hover:shadow-button-hover transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center">
                Daha Fazla Proje Görün
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;