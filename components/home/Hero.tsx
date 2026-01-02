"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  Shield,
  Globe,
  Users,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { FaWhatsapp, FaWeixin, FaTelegram } from "react-icons/fa";

export default function Hero() {
  const { t } = useLanguage();

  // Social media links (replace with your actual links)
  const socialLinks = {
    whatsapp: "https://wa.me/+86-15594634955", // Replace with your WhatsApp number
    wechat: "weixin://dl/chat?yourusername", // WeChat deep link
    telegram: "https://t.me/+86-15594634955", // Replace with your Telegram username
    phone: "tel:+86-15594634955", // Replace with your phone number
  };

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Image - Full visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/bg4.png")',
        }}
      />

      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="section-container py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium mb-4 border border-white/30">
                  {t.hero.tagline}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {t.hero.title}
                  <br />
                  <span className="text-gold-light">{t.hero.subtitle}</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl backdrop-blur-sm bg-black/20 p-4 rounded-lg">
                  {t.hero.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-gold-primary mb-2">
                    50+
                  </div>
                  <div className="text-white/90">{t.hero.stats.brands}</div>
                </div>
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-gold-primary mb-2">
                    1000+
                  </div>
                  <div className="text-white/90">{t.hero.stats.vehicles}</div>
                </div>
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-gold-primary mb-2">
                    24/7
                  </div>
                  <div className="text-white/90">{t.hero.stats.support}</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="btn-primary flex items-center justify-center space-x-2 group bg-gold-primary hover:bg-gold-dark text-white"
                >
                  <span>{t.hero.cta.quote}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#brands"
                  className="btn-secondary flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                >
                  <span>{t.hero.cta.brands}</span>
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
                <div className="flex items-center space-x-3 backdrop-blur-sm bg-black/30 p-3 rounded-lg">
                  <Shield className="w-5 h-5 text-gold-primary" />
                  <span className="text-white/90">
                    {t.hero.features.quality}
                  </span>
                </div>
                <div className="flex items-center space-x-3 backdrop-blur-sm bg-black/30 p-3 rounded-lg">
                  <Globe className="w-5 h-5 text-gold-primary" />
                  <span className="text-white/90">
                    {t.hero.features.shipping}
                  </span>
                </div>
                <div className="flex items-center space-x-3 backdrop-blur-sm bg-black/30 p-3 rounded-lg">
                  <Users className="w-5 h-5 text-gold-primary" />
                  <span className="text-white/90">
                    {t.hero.features.support}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-md rounded-2xl p-8 text-white shadow-2xl border border-white/20">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold-primary/30">
                  <Phone className="w-8 h-8 text-gold-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Us Now
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-white/80 mb-2">{t.common.available}</p>
                    <a
                      href={socialLinks.phone}
                      className="text-3xl font-bold text-gold-primary hover:text-gold-light transition-colors block"
                    >
                      {t.common.phone}
                    </a>
                  </div>

                  <div className="space-y-4">
                    <p className="text-white/80">Contact via:</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={socialLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-3 bg-green-600/20 hover:bg-green-600/30 rounded-lg transition-colors border border-green-600/30 group"
                      >
                        <FaWhatsapp className="w-5 h-5 text-green-400" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={socialLinks.wechat}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-3 bg-green-700/20 hover:bg-green-700/30 rounded-lg transition-colors border border-green-700/30 group"
                      >
                        <FaWeixin className="w-5 h-5 text-green-300" />
                        <span>WeChat</span>
                      </a>

                      <a
                        href={socialLinks.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-colors border border-blue-600/30 group"
                      >
                        <FaTelegram className="w-5 h-5 text-blue-400" />
                        <span>Telegram</span>
                      </a>

                      <a
                        href={socialLinks.phone}
                        className="flex items-center space-x-2 px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors border border-blue-500/30 group"
                      >
                        <Phone className="w-5 h-5 text-blue-300" />
                        <span>Phone</span>
                      </a>
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
      </div>
    </section>
  );
}
