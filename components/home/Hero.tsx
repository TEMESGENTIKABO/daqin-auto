"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Shield, Globe, Users } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-light">
      <div className="section-container py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold-primary/10 text-gold-primary font-medium mb-4">
                {t.hero.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                {t.hero.title}
                <br />
                <span className="text-gray-dark">{t.hero.subtitle}</span>
              </h1>
              <p className="text-xl text-gray-dark mb-8 max-w-2xl">
                {t.hero.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-gold-primary mb-2">
                  50+
                </div>
                <div className="text-gray-dark">{t.hero.stats.brands}</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-gold-primary mb-2">
                  1000+
                </div>
                <div className="text-gray-dark">{t.hero.stats.vehicles}</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-gold-primary mb-2">
                  24/7
                </div>
                <div className="text-gray-dark">{t.hero.stats.support}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>{t.hero.cta.quote}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#brands"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>{t.hero.cta.brands}</span>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gold-primary" />
                <span className="text-gray-dark">
                  {t.hero.features.quality}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gold-primary" />
                <span className="text-gray-dark">
                  {t.hero.features.shipping}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gold-primary" />
                <span className="text-gray-dark">
                  {t.hero.features.support}
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gold-primary to-gold-dark rounded-2xl p-8 text-white shadow-2xl">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🚗</span>
              </div>

              <h3 className="text-2xl font-bold mb-6">Contact Us Now</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-white/80 mb-2">{t.common.available}</p>
                  <a
                    href={`tel:${t.common.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-3xl font-bold hover:text-white/90 transition-colors block"
                  >
                    {t.common.phone}
                  </a>
                </div>

                <div className="space-y-4">
                  <p className="text-white/80">Contact via:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/10 rounded-lg">
                      WhatsApp
                    </span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">
                      WeChat
                    </span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">
                      Telegram
                    </span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">
                      Phone
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <p className="text-sm text-white/60">
                    Get instant response for vehicle inquiries, pricing, and
                    shipping details.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gold-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
