import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import BrandsSection from '@/components/sections/BrandsSection';
import VehiclesSection from '@/components/sections/VehiclesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';

export default function ChineseHome() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - Custom for Chinese */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-light">
          <div className="section-container py-12 md:py-24">
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold-primary/10 text-gold-primary font-medium mb-4">
                值得信赖的汽车出口商
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                优质<span className="text-gold-primary">中国</span>汽车
                <br />
                <span className="text-gray-dark">全球交付</span>
              </h1>
              <p className="text-xl text-gray-dark mb-8 max-w-2xl mx-auto">
                西安大秦道瑞国际贸易有限公司供应全球领先品牌的优质汽油车、电动车和混合动力车。
              </p>
            </div>

            {/* Contact Card */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-gold-primary to-gold-dark rounded-2xl p-8 text-white shadow-2xl mt-12">
              <h3 className="text-2xl font-bold mb-6">立即联系我们</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white/80 mb-2">全天候24/7服务</p>
                  <a
                    href="tel:+8615594634955"
                    className="text-3xl font-bold hover:text-white/90 transition-colors block"
                  >
                    +86-15594634955
                  </a>
                </div>
                
                <div className="space-y-4">
                  <p className="text-white/80">联系方式:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/10 rounded-lg">WhatsApp</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">微信</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">Telegram</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">电话</span>
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
                关于大秦汽车
              </h2>
              <p className="text-xl text-gray-dark mb-8">
                大秦汽车，隶属于西安大秦道瑞国际贸易有限公司，是一家总部位于中国的独立汽车供应商和出口商。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    我们的使命
                  </h3>
                  <p className="text-gray-dark">
                    以具有竞争力的价格提供优质汽车，并提供卓越的服务。
                  </p>
                </div>
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    我们的愿景
                  </h3>
                  <p className="text-gray-dark">
                    成为中国最值得信赖的汽车出口合作伙伴。
                  </p>
                </div>
                <div className="p-6 bg-gray-light rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    我们的价值观
                  </h3>
                  <p className="text-gray-dark">
                    诚信、质量、以客户为中心和持续改进。
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
