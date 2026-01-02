"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Phone, Mail, MapPin, Globe, Shield, Clock } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 border-2 border-gold-primary rounded-lg flex items-center justify-center">
                <span className="text-gold-primary font-bold text-lg">DQ</span>
              </div>
              <h3 className="text-xl font-bold text-white">{t.header.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">
              {t.header.company}
            </p>
            <p className="text-gray-400">
              Your trusted partner for Chinese automotive exports with over a decade of experience.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gold-primary mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t.common.phone}</p>
                  <p className="text-sm text-gray-400">Phone / WhatsApp / Telegram</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t.common.email}</p>
                  <p className="text-sm text-gray-400">Email for inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t.common.address}</p>
                  <p className="text-sm text-gray-400">Headquarters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {(Object.values(t.header.nav) as string[]).map((item: string) => (
                <li key={item}>
                  <a
                    href={item === t.header.nav.home ? '/' : `#${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-300 hover:text-gold-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-gold-primary mb-6">Why Choose Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gold-primary" />
                <span className="text-gray-300">Quality Assurance</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gold-primary" />
                <span className="text-gray-300">Global Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold-primary" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t.header.title}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Languages:</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
