import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import BrandsSection from '@/components/sections/BrandsSection';
import VehiclesSection from '@/components/sections/VehiclesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                {t('about.title')}
              </h2>
              <p className="text-xl text-gray-dark mb-8">
                {t('about.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {t('about.mission.title')}
                  </h3>
                  <p className="text-gray-dark">
                    {t('about.mission.text')}
                  </p>
                </div>
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {t('about.vision.title')}
                  </h3>
                  <p className="text-gray-dark">
                    {t('about.vision.text')}
                  </p>
                </div>
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {t('about.values.title')}
                  </h3>
                  <p className="text-gray-dark">
                    {t('about.values.text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BrandsSection />
        <VehiclesSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}