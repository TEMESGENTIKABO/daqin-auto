"use client";

import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "@/components/Breadcrumb";
import { Award, Globe, Users, Shield, Target, Heart } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="section-container px-4 py-6">
        <Breadcrumb items={[{ label: t.header.nav.about, href: "/about" }]} />
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-black to-gray-900 py-16 md:py-24">
        <div className="section-container px-4 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
            <Target className="w-6 h-6 text-gold-primary" />
            <div className="w-10 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.about.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image with Subtle Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url("/images/about.png")',
          }}
        >
          {/* Light overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Very subtle blur to soften the image */}
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>

        <div className="section-container px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 drop-shadow-sm">
                {t.about.storyTitle}
              </h2>
              <p className="text-xl text-gray-800 mb-8 backdrop-blur-sm bg-white/40 rounded-lg py-3 px-6 border border-white/50">
                {t.about.fullDescription}
              </p>
            </div>

            {/* Mission, Vision, Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/50 hover:border-gold-primary transition-all hover:shadow-xl">
                <div className="inline-flex items-center justify-center p-3 bg-gold-primary/10 rounded-xl mb-4 backdrop-blur-sm border border-gold-primary/20">
                  <Target className="w-8 h-8 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 drop-shadow-sm">
                  {t.about.mission.title}
                </h3>
                <p className="text-gray-800 text-lg">{t.about.mission.text}</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/50 hover:border-gold-primary transition-all hover:shadow-xl">
                <div className="inline-flex items-center justify-center p-3 bg-gold-primary/10 rounded-xl mb-4 backdrop-blur-sm border border-gold-primary/20">
                  <Globe className="w-8 h-8 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 drop-shadow-sm">
                  {t.about.vision.title}
                </h3>
                <p className="text-gray-800 text-lg">{t.about.vision.text}</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/50 hover:border-gold-primary transition-all hover:shadow-xl">
                <div className="inline-flex items-center justify-center p-3 bg-gold-primary/10 rounded-xl mb-4 backdrop-blur-sm border border-gold-primary/20">
                  <Heart className="w-8 h-8 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 drop-shadow-sm">
                  {t.about.values.title}
                </h3>
                <p className="text-gray-800 text-lg">{t.about.values.text}</p>
              </div>
            </div>

            {/* Additional Content Sections */}
            <div className="space-y-16">
              {/* Why Choose Us */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/50">
                <h2 className="text-3xl font-bold text-black mb-8 text-center drop-shadow-sm">
                  {t.about.whyChooseUs}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gold-primary/10 rounded-lg backdrop-blur-sm border border-gold-primary/20">
                      <Award className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 drop-shadow-sm">
                        {t.about.features.experience.title}
                      </h3>
                      <p className="text-gray-800">
                        {t.about.features.experience.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gold-primary/10 rounded-lg backdrop-blur-sm border border-gold-primary/20">
                      <Shield className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 drop-shadow-sm">
                        {t.about.features.quality.title}
                      </h3>
                      <p className="text-gray-800">
                        {t.about.features.quality.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gold-primary/10 rounded-lg backdrop-blur-sm border border-gold-primary/20">
                      <Globe className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 drop-shadow-sm">
                        {t.about.features.global.title}
                      </h3>
                      <p className="text-gray-800">
                        {t.about.features.global.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gold-primary/10 rounded-lg backdrop-blur-sm border border-gold-primary/20">
                      <Users className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 drop-shadow-sm">
                        {t.about.features.support.title}
                      </h3>
                      <p className="text-gray-800">
                        {t.about.features.support.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-black to-gray-900">
        <div className="section-container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.about.ctaTitle}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.about.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/models"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all"
            >
              {t.about.viewModels}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
