"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Image - Full visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/bg41.png")',
        }}
      />
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="section-container py-12 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Centered Content */}
            <div className="space-y-8 text-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-primary mb-6">
                  Your Trusted Automobile supplier in china
                </h1>
                <p className="text-xl text-white/90 mb-8 mx-auto max-w-3xl">
                  {t.hero.description}
                </p>
              </div>

              {/* Stats - Modified section */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-gold-primary mb-2">
                    50+
                  </div>
                  <div className="text-xl font-bold text-white tracking-wide">
                    {t.hero.stats.brands}
                  </div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-gold-primary mb-2">
                    1000+
                  </div>
                  <div className="text-xl font-bold text-white tracking-wide">
                    {t.hero.stats.vehicles}
                  </div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-gold-primary mb-2">
                    24/7
                  </div>
                  <div className="text-xl font-bold text-white tracking-wide">
                    {t.hero.stats.support}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="#contact"
                  className="btn-primary flex items-center justify-center space-x-2 group bg-gold-primary hover:bg-gold-dark text-white px-8 py-3 rounded-lg"
                >
                  <span>{t.hero.cta.quote}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                {/* Updated: Link to /brands page */}
                <Link
                  href="/brands"
                  className="btn-secondary flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg"
                >
                  <span>Browse Brands</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}