"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  const { t, dir } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t.header.nav.home, href: '/' },
    { name: t.header.nav.about, href: '#about' },
    { name: t.header.nav.brands, href: '#brands' },
    { name: t.header.nav.vehicles, href: '#vehicles' },
    { name: t.header.nav.services, href: '#services' },
    { name: t.header.nav.contact, href: '#contact' },
  ];

  return (
    <header 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      dir={dir}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 border-2 border-gold-primary rounded-xl flex items-center justify-center bg-gradient-to-br from-gold-primary/10 to-transparent">
              <span className="text-gold-primary font-bold text-2xl">DQ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">{t.header.title}</h1>
              <p className="text-sm text-gray-dark hidden md:block">
                {t.header.company}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-dark hover:text-gold-primary font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Contact Button */}
            <a
              href={`tel:${t.common.phone.replace(/[^0-9+]/g, '')}`}
              className="btn-primary flex items-center space-x-2 group"
            >
              <Phone className="w-4 h-4" />
              <span>{t.header.contactBtn}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4 px-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-dark hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={`tel:${t.common.phone.replace(/[^0-9+]/g, '')}`}
                className="btn-primary flex items-center justify-center space-x-2 w-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>{t.header.contactBtn}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
