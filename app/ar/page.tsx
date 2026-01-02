import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import BrandsSection from '@/components/sections/BrandsSection';
import VehiclesSection from '@/components/sections/VehiclesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';

export default function ArabicHome() {
  return (
    <>
      <Header />
      <main className="min-h-screen" dir="rtl">
        {/* Hero Section - Custom for Arabic */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-light">
          <div className="section-container py-12 md:py-24">
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold-primary/10 text-gold-primary font-medium mb-4">
                مصدر سيارات موثوق
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                سيارات <span className="text-gold-primary">صينية</span> فاخرة
                <br />
                <span className="text-gray-dark">توصيل عالمي</span>
              </h1>
              <p className="text-xl text-gray-dark mb-8 max-w-2xl mx-auto">
                شركة شيآن دا تشين داو ري للتجارة الدولية المحدودة توفر سيارات بنزين، كهربائية، وهجينة عالية الجودة من ماركات رائدة عالمياً.
              </p>
            </div>

            {/* Contact Card */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-gold-primary to-gold-dark rounded-2xl p-8 text-white shadow-2xl mt-12">
              <h3 className="text-2xl font-bold mb-6 text-right">اتصل بنا الآن</h3>
              <div className="space-y-6 text-right">
                <div>
                  <p className="text-white/80 mb-2 text-right">متوفر ٢٤/٧</p>
                  <a
                    href="tel:+8615594634955"
                    className="text-3xl font-bold hover:text-white/90 transition-colors block text-right"
                  >
                    ٨٦-١٥٥٩٤٦٣٤٩٥٥+
                  </a>
                </div>
                
                <div className="space-y-4 text-right">
                  <p className="text-white/80 text-right">التواصل عبر:</p>
                  <div className="flex flex-wrap gap-3 justify-end">
                    <span className="px-4 py-2 bg-white/10 rounded-lg">واتساب</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">وي شات</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">تيليجرام</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">هاتف</span>
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
                عن دا تشين أوتو
              </h2>
              <p className="text-xl text-gray-dark mb-8">
                دا تشين أوتو، التابعة لشركة شيآن دا تشين داو ري للتجارة الدولية المحدودة، هي مورد ومصدر سيارات مستقل مقرها في الصين.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    مهمتنا
                  </h3>
                  <p className="text-gray-dark">
                    توفير مركبات عالية الجودة بأسعار تنافسية مع خدمة استثنائية.
                  </p>
                </div>
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    رؤيتنا
                  </h3>
                  <p className="text-gray-dark">
                    أن نصبح الشريك الأكثر ثقة في تصدير السيارات من الصين.
                  </p>
                </div>
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    قيمنا
                  </h3>
                  <p className="text-gray-dark">
                    النزاهة، الجودة، تركيز العملاء، والتحسين المستمر.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <BrandsSection />
        
        {/* Vehicles Section */}
        <section id="vehicles" className="py-16 md:py-24 bg-gray-light">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                أنواع المركبات
              </h2>
              <p className="text-xl text-gray-dark max-w-3xl mx-auto">
                نوفر جميع أنواع المركبات لتلبية احتياجات السوق المتنوعة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  type: 'كهربائية',
                  name: 'مركبات كهربائية',
                  description: 'مركبات كهربائية خالية من الانبعاثات بتقنية بطارية متطورة',
                  color: 'bg-green-100 text-green-800'
                },
                {
                  type: 'هجينة',
                  name: 'مركبات هجينة',
                  description: 'تجمع بين الطاقة الكهربائية والبنزين لأقصى كفاءة',
                  color: 'bg-blue-100 text-blue-800'
                },
                {
                  type: 'موسعة',
                  name: 'مركبات كهربائية موسعة المدى',
                  description: 'مركبات كهربائية مع مولّدات تمديد المدى',
                  color: 'bg-purple-100 text-purple-800'
                },
                {
                  type: 'بنزين',
                  name: 'مركبات تقليدية',
                  description: 'مركبات بنزين موثوقة بتقنية مثبتة',
                  color: 'bg-red-100 text-red-800'
                }
              ].map((vehicle) => (
                <div 
                  key={vehicle.type}
                  className="bg-white p-6 rounded-xl text-center shadow-sm"
                >
                  <span className={`px-4 py-2 rounded-full font-bold ${vehicle.color}`}>
                    {vehicle.type}
                  </span>
                  <h3 className="text-xl font-semibold text-black my-4">{vehicle.name}</h3>
                  <p className="text-gray-dark">{vehicle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
