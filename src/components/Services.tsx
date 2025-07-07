import React from 'react';
import { Building2, Factory, Sparkles, Wrench, Shield, Zap } from 'lucide-react';
import serviceHighriseImage from '../assets/service-highrise.jpg';
import serviceIndustrialImage from '../assets/service-industrial.jpg';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Yüksek Bina Temizliği",
      description: "Gökdelenler ve yüksek yapıların cam cephe ve dış yüzey temizliği. Profesyonel drone teknolojisi ile güvenli ve etkili temizlik.",
      features: ["Cam cephe temizliği", "Dış yüzey bakımı", "Yüksek güvenlik standartları"],
      image: serviceHighriseImage
    },
    {
      icon: Sparkles,
      title: "Cam Cephe Bakımı",
      description: "Modern binaların cam yüzeylerinin detaylı temizliği ve bakımı. Çizilme yapmayan özel temizlik çözümleri.",
      features: ["Lekesiz temizlik", "UV koruma uygulaması", "Düzenli bakım programları"],
      image: null
    },
    {
      icon: Factory,
      title: "Endüstriyel Tesis Temizliği",
      description: "Fabrikalar, depolar ve büyük endüstriyel komplekslerin kapsamlı temizlik ve bakım hizmetleri.",
      features: ["Ağır sanayi temizliği", "Çevre dostu kimyasallar", "Minimal kesinti süresi"],
      image: serviceIndustrialImage
    },
    {
      icon: Wrench,
      title: "Altyapı Bakımı",
      description: "Köprüler, tüneller ve büyük altyapı projelerinin bakım ve temizlik hizmetleri. Erişilmesi güç alanlar için özel çözümler.",
      features: ["Köprü temizliği", "Tünel bakımı", "Altyapı kontrolü"],
      image: null
    },
    {
      icon: Shield,
      title: "Acil Müdahale",
      description: "7/24 acil durumlar için hızlı müdahale hizmeti. Doğal afetler sonrası temizlik ve değerlendirme.",
      features: ["7/24 hazır ekip", "Hızlı müdahale", "Acil durum planlaması"],
      image: null
    },
    {
      icon: Zap,
      title: "Özel Projeler",
      description: "Tarihi yapılar, anıtlar ve özel mimarili binaların hassas temizlik ve restorasyon hizmetleri.",
      features: ["Hassas temizlik", "Restorasyon desteği", "Kültürel miras koruması"],
      image: null
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            🎯 Profesyonel Hizmetler
          </span>
          <h2 className="text-heading mb-6">
            Kapsamlı Drone Temizlik
            <span className="block text-primary">Hizmet Portföyümüz</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Gelişmiş drone teknolojisi ve uzman ekibimizle, her türlü yüksek yapı ve endüstriyel 
            tesisin temizlik ihtiyaçlarına çözüm sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-professional group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              
              {/* Service Image */}
              {service.image && (
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Service Icon */}
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
              </div>

              {/* Service Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-professional max-w-4xl mx-auto bg-gradient-primary text-white">
            <h3 className="text-2xl font-bold mb-4">
              Özel İhtiyaçlarınız İçin Çözüm Arıyorsunuz?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Standart hizmetlerimizin dışında özel projeler için de çözüm üretiyoruz. 
              Uzman ekibimizle ihtiyaçlarınızı değerlendirin.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline-corporate bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Özel Proje Talebi
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;