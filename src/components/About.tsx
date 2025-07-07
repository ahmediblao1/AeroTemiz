import React from 'react';
import { Award, Users, MapPin, Calendar, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      number: "500+",
      label: "Tamamlanan Proje",
      description: "Başarıyla tamamlanan temizlik projeleri"
    },
    {
      icon: Users,
      number: "50+",
      label: "Uzman Ekip",
      description: "Sertifikalı drone operatörleri ve teknisyenler"
    },
    {
      icon: MapPin,
      number: "15+",
      label: "Şehir",
      description: "Türkiye genelinde hizmet verdiğimiz şehirler"
    },
    {
      icon: Calendar,
      number: "10+",
      label: "Yıl Deneyim",
      description: "Sektörde kazandığımız uzmanlık ve tecrübe"
    }
  ];

  const certifications = [
    "SHGM Sertifikalı Drone Operatörü",
    "ISO 9001 Kalite Yönetim Sistemi",
    "OHSAS 18001 İş Sağlığı ve Güvenliği",
    "Çevre Yönetim Sistemi ISO 14001",
    "Mesleki Yeterlilik Belgesi",
    "Kalite Garanti Belgeli"
  ];

  const whyChooseUs = [
    {
      title: "Güvenlik Önceliğimiz",
      description: "Tüm operasyonlarımızda en yüksek güvenlik standartlarını uyguluyoruz. Uzman pilot ekibimiz ile %100 güvenli çözümler sunuyoruz."
    },
    {
      title: "İleri Teknoloji",
      description: "En güncel drone teknolojileri ve özel temizlik ekipmanları ile etkili sonuçlar elde ediyoruz. Sürekli teknoloji yatırımı yaparak sektörde öncü konumumuzu koruyoruz."
    },
    {
      title: "Çevre Dostu",
      description: "Çevreye zarar vermeyen, biyolojik olarak parçalanabilen temizlik ürünleri kullanıyoruz. Sürdürülebilir temizlik çözümleriyle çevreyi koruyoruz."
    },
    {
      title: "Ekonomik Çözümler",
      description: "Geleneksel yöntemlere göre %40 daha ekonomik hizmet sunuyoruz. Platform ve vinç ihtiyacını ortadan kaldırarak maliyetleri minimize ediyoruz."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            🏢 Kurumsal Kimlik
          </span>
          <h2 className="text-heading mb-6">
            Türkiye'nin Öncü
            <span className="block text-primary">Drone Temizlik Şirketi</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            2014 yılından beri drone teknolojisi alanında öncü olan şirketimiz, 
            yüksek yapıların temizlik ve bakım hizmetlerinde güvenilir çözümler sunmaktadır.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <achievement.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
              <h3 className="font-semibold text-card-foreground mb-2">{achievement.label}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Why Choose Us */}
          <div>
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Neden AeroTemiz Türkiye?
            </h3>
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <h4 className="font-semibold text-card-foreground mb-2 flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Innovation */}
          <div>
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Teknoloji ve İnovasyon
            </h3>
            <div className="card-professional">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <span className="font-semibold text-card-foreground">Gelişmiş Teknoloji</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-card-foreground">4K Kamera Sistemleri</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-card-foreground">GPS Stabilizasyon</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-card-foreground">Çevre Dostu Temizlik Ürünleri</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-card-foreground">Uzaktan Operasyon Sistemi</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                <p className="text-success font-medium text-sm">
                  ✅ En son teknoloji ile güvenli ve etkili temizlik hizmeti.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="card-professional bg-gradient-primary text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
          <p className="text-lg mb-6 text-white/90 max-w-4xl mx-auto">
            Drone teknolojisinin gücünü kullanarak, yüksek yapıların temizlik ve bakım süreçlerini 
            daha güvenli, daha ekonomik ve daha çevre dostu hale getirmek. Müşterilerimize 
            dünya standartlarında hizmet sunarak sektörde örnek olmak.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">Güvenlik</h4>
              <p className="text-sm text-white/80">Her operasyonda güvenlik önceliğimizdir</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Kalite</h4>
              <p className="text-sm text-white/80">Uluslararası standartlarda hizmet kalitesi</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">İnovasyon</h4>
              <p className="text-sm text-white/80">Sürekli teknoloji ve yöntem geliştirme</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;