import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import BrandsSection from '@/components/sections/BrandsSection';
import VehiclesSection from '@/components/sections/VehiclesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';

export default function RussianHome() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - Custom for Russian */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-light">
          <div className="section-container py-12 md:py-24">
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold-primary/10 text-gold-primary font-medium mb-4">
                Надежный экспортер автомобилей
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                Премиальные <span className="text-gold-primary">китайские</span> автомобили
                <br />
                <span className="text-gray-dark">Доставка по всему миру</span>
              </h1>
              <p className="text-xl text-gray-dark mb-8 max-w-2xl mx-auto">
                Торговая компания Сиань Дацинь Даоруй Интернэшнл Ко., Лтд. поставляет качественные бензиновые, электрические и гибридные автомобили ведущих мировых брендов.
              </p>
            </div>

            {/* Contact Card */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-gold-primary to-gold-dark rounded-2xl p-8 text-white shadow-2xl mt-12">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white/80 mb-2">Доступно 24/7</p>
                  <a
                    href="tel:+8615594634955"
                    className="text-3xl font-bold hover:text-white/90 transition-colors block"
                  >
                    +86-15594634955
                  </a>
                </div>
                
                <div className="space-y-4">
                  <p className="text-white/80">Связь через:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/10 rounded-lg">WhatsApp</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">WeChat</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">Telegram</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">Телефон</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                О Daqin Auto
              </h2>
              <p className="text-xl text-gray-dark mb-8">
                Daqin Auto, под торговой компанией Сиань Дацинь Даоруй Интернэшнл Ко., Лтд., является независимым поставщиком и экспортером автомобилей, базирующимся в Китае.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Наша миссия
                  </h3>
                  <p className="text-gray-dark">
                    Предоставлять качественные автомобили по конкурентоспособным ценам с исключительным сервисом.
                  </p>
                </div>
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Наше видение
                  </h3>
                  <p className="text-gray-dark">
                    Стать самым надежным партнером по экспорту автомобилей из Китая.
                  </p>
                </div>
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Наши ценности
                  </h3>
                  <p className="text-gray-dark">
                    Честность, качество, ориентация на клиента и постоянное улучшение.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <BrandsSection />
        
        {/* Vehicles Section */}
        <VehiclesSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
