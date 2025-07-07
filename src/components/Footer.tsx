import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hizmetlerimiz", href: "#services" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Projelerimiz", href: "#portfolio" },
    { name: "İletişim", href: "#contact" }
  ];

  const services = [
    "Yüksek Bina Temizliği",
    "Cam Cephe Bakımı",
    "Endüstriyel Temizlik",
    "Altyapı Bakımı",
    "Acil Müdahale",
    "Özel Projeler"
  ];

  // const legalPages = [
  //   "Gizlilik Politikası",
  //   "Kullanım Şartları",
  //   "KVKK Aydınlatma Metni",
  //   "Çerez Politikası"
  // ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">
                AeroTemiz
                <span className="block text-primary-light text-lg font-normal">Türkiye</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Türkiye'nin öncü drone temizlik hizmeti. Yüksek yapıların güvenli, 
                ekonomik ve çevre dostu temizlik çözümleri.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Hızlı Linkler</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-light transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Hizmetlerimiz</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">İletişim Bilgileri</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-light mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">
                      Levent, Büyükdere Cad.<br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-light" />
                  <a href="tel:+905551234567" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                    +90 551 710 7709
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-light" />
                  <a href="mailto:aerotemiz@​yahoo.com" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                    aerotemiz@yahoo.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-primary/20 rounded-lg border border-primary/30">
                <p className="text-sm font-medium text-white mb-1">⏰ Çalışma Saatleri</p>
                <p className="text-primary-light font-semibold">
                  Pazartesi - Cuma: 08:00 - 18:00
                </p>
                <p className="text-xs text-gray-300 mt-1">Hafta Sonu Randevu İle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-300 text-sm text-center md:text-left">
              <p>© {currentYear} AeroTemiz Türkiye. Tüm hakları saklıdır.</p>
            </div>

            {/* Legal Links
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalPages.map((page, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-primary-light transition-colors text-sm">
                  {page}
                </a>
              ))}
            </div> */}
          </div>

          {/* Company Stats */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">Hizmet Alanlarımız</p>
              <div className="flex flex-wrap justify-center items-center space-x-4 text-xs text-gray-400">
                <span>15+ Şehir</span>
                <span>•</span>
                <span>500+ Proje</span>
                <span>•</span>
                <span>10+ Yıl Deneyim</span>
                <span>•</span>
                <span>7/24 Hizmet</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;