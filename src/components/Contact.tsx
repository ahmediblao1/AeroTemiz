import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDetails: '',
    urgency: 'normal'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const serviceTypes = [
    "Yüksek Bina Temizliği",
    "Cam Cephe Bakımı", 
    "Endüstriyel Tesis Temizliği",
    "Altyapı Bakımı",
    "Acil Müdahale",
    "Özel Projeler"
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon İletişim",
      details: ["+90 551 710 7709"],
      subtitle: "7/24 Çağrı Merkezi"
    },
    {
      icon: Mail,
      title: "E-posta Adresi",
      details: ["aerotemiz@​yahoo.com"],
      subtitle: "24 saat içinde yanıt"
    },
    {
      icon: MapPin,
      title: "Merkez Ofis",
      details: ["Levent, Büyükdere Cad.", "İstanbul, Türkiye"],
      subtitle: "Randevu ile ziyaret"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["Hafta içi: 08:00 - 18:00", "Acil: 7/24"],
      subtitle: "Esnek hizmet saatleri"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            📞 İletişim
          </span>
          <h2 className="text-heading mb-6">
            Ücretsiz Keşif ve Teklif
            <span className="block text-primary">İçin İletişime Geçin</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Projeniz için ücretsiz keşif yapıyor ve detaylı teklif sunuyoruz. 
            7/24 acil müdahale hizmetimizle yanınızdayız.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <div className="card-professional">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Ücretsiz Teklif Formu
              </h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <span className="text-success font-medium">
                    Talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </span>
                </div>
              )}

              <form 
                action="https://formspree.io/f/xrbkvjqj" 
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Şirketinizin adı"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      E-posta Adresi *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Telefon Numarası *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="+90 551 710 7709"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Hizmet Türü *
                    </label>
                    <select
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                    >
                      <option value="">Hizmet seçiniz</option>
                      {serviceTypes.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Aciliyet Durumu
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Acil</option>
                      <option value="emergency">Çok Acil</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Proje Detayları *
                  </label>
                  <textarea
                    name="projectDetails"
                    required
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Projenizin detaylarını, binanın yüksekliği, yüzey alanı ve özel gereksinimlerinizi belirtiniz..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-corporate w-full text-center justify-center group text-base py-4"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Ücretsiz Teklif Gönder
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Quick Response */}
            <div className="card-professional bg-primary/5 border border-primary/20">
              <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                ⚡ Hızlı Yanıt
              </h3>
              <p className="text-muted-foreground mb-4">
                Form gönderdiğinizde 2 saat içinde size dönüş yapıyoruz
              </p>
              <div className="flex items-center space-x-4">
                <a href="tel:+905517107709" className="btn-corporate">
                  <Phone className="mr-2 h-4 w-4" />
                  Hemen Arayın
                </a>
                <span className="text-primary font-semibold">+90 551 710 7709</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-professional text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-xs text-primary font-medium">{info.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="card-professional">
              <h4 className="font-semibold text-card-foreground mb-4">Ofis Konumumuz</h4>
              <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Harita yükleniyor...</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Levent, Büyükdere Cad. İstanbul
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;