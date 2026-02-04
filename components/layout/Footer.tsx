"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Shield,
  Clock,
  Car,
  Users,
  ChevronUp,
  Truck,
  Home,
  Building,
  Server,
  ChevronDown,
} from "lucide-react";
import { FaWhatsapp, FaTelegram, FaWeixin } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Contact methods data
  const contactMethods = [
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      title: "WhatsApp",
      href: "https://wa.me/+8615594634955",
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      id: "telegram",
      icon: FaTelegram,
      title: "Telegram",
      href: "https://t.me/+8615594634955",
      color: "text-sky-400",
      bgColor: "bg-sky-900/20",
    },
    {
      id: "wechat",
      icon: FaWeixin,
      title: "WeChat",
      href: "weixin://dl/chat?daqinauto",
      color: "text-emerald-400",
      bgColor: "bg-emerald-900/20",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email",
      href: "mailto:contact@daqinauto.com",
      color: "text-gold-primary",
      bgColor: "bg-yellow-900/20",
    },
  ];

  // Quick Links - Two columns (2x3)
  const quickLinks = [
    { label: t.header.nav.home, href: "/", icon: Home },
    { label: t.header.nav.about, href: "/about", icon: Users },
    { label: t.header.nav.brands, href: "/brands", icon: Building },
    { label: t.header.nav.vehicles, href: "/models", icon: Car },
    { label: t.header.nav.services, href: "/services", icon: Server },
    { label: t.header.nav.contact, href: "/contact", icon: Phone },
  ];

  // Why Choose Us features
  const features = [
    {
      id: "quality",
      icon: Shield,
      title: t.footer.qualityAssurance,
    },
    {
      id: "shipping",
      icon: Truck,
      title: t.footer.globalShipping,
    },
    {
      id: "support",
      icon: Clock,
      title: t.footer.support24_7,
    },
    {
      id: "experience",
      icon: Globe,
      title: t.footer.yearsExperience,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Desktop version - unchanged */}
      <div className="hidden md:block">
        <div className="section-container px-4 py-6 md:py-8">
          {/* Desktop: 4-column layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Company Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-9 h-9 rounded-lg border border-gold-primary/30 flex items-center justify-center">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/favicon.ico"
                      alt="Da Qin Logo"
                      fill
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{t.header.title}</h3>
                  <p className="text-xs text-gray-400">{t.header.company}</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-2">
                {t.footer.companyTagline}
              </p>

              <div className="flex items-start space-x-1">
                <MapPin className="w-3 h-3 text-gold-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-400">
                    {t.common.address}
                  </p>
                  <p className="text-[9px] text-gray-500">{t.footer.headquarters}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-gold-primary mb-3">
                {t.header.nav.contact}
              </h4>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={method.id}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded ${method.bgColor} border border-gray-700/20 hover:scale-110 transition-transform`}
                        title={method.title}
                      >
                        <Icon className={`w-3.5 h-3.5 ${method.color}`} />
                      </a>
                    );
                  })}
                </div>
                <p className="text-[10px] text-gray-500">
                  {t.footer.clickToContact}
                </p>
              </div>
            </div>

            {/* Quick Links - Two Columns */}
            <div>
              <h4 className="text-sm font-semibold text-gold-primary mb-3">
                {t.footer.quickLinks}
              </h4>
              
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {quickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xs text-gray-300 hover:text-gold-primary transition-colors flex items-center space-x-1"
                  >
                    {item.icon && <item.icon className="w-3 h-3" />}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-gold-primary mb-3">
                {t.footer.whyChooseUs}
              </h4>
              
              <div className="space-y-2">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.id} className="flex items-center space-x-2">
                      <Icon className="w-3.5 h-3.5 text-gold-primary flex-shrink-0" />
                      <span className="text-xs text-gray-300">{feature.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Bottom Bar */}
          <div className="border-t border-gray-800 pt-3 md:pt-4 mt-4 md:mt-5">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-[10px] text-gray-400">
                  © {currentYear} {t.header.title}. {t.footer.copyright}
                </p>
              </div>
              
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-[10px] text-gray-400">
                  {t.footer.language}
                </span>
                <LanguageSwitcher
                  className="text-white text-xs"
                  arrowIcon={<ChevronUp className="w-3 h-3" />}
                  variant="footer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version - redesigned with requested order */}
      <div className="md:hidden">
        <div className="px-4 py-4">
          {/* Mobile Header - Just Company Info */}
          <div className="flex items-start mb-4">
            {/* Logo and Company Name */}
            <div className="flex items-start space-x-2">
              <div className="w-10 h-10 rounded-lg border border-gold-primary/30 flex items-center justify-center flex-shrink-0">
                <div className="relative w-6 h-6">
                  <Image
                    src="/favicon.ico"
                    alt="Da Qin Logo"
                    fill
                    className="object-contain"
                    sizes="24px"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{t.header.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{t.header.company}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <MapPin className="w-2.5 h-2.5 text-gold-primary" />
                  <p className="text-[9px] text-gray-400">{t.common.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Accordion Sections - REORDERED */}
          <div className="space-y-2 mb-4">
            {/* A. Contact Details (First) */}
            <div className="bg-gray-800/30 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('contact')}
                className="w-full px-3 py-2.5 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded bg-green-500/10 flex items-center justify-center">
                    <Phone className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-sm font-medium">{t.footer.contactDetails}</span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    expandedSection === 'contact' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedSection === 'contact' && (
                <div className="px-3 pb-3 pt-1">
                  <div className="space-y-3">
                    {/* Full Address */}
                    <div className="flex items-start space-x-2 p-2 bg-gray-900/30 rounded">
                      <MapPin className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-300">
                          {t.common.address}
                        </p>
                        <p className="text-[10px] text-gray-400">{t.footer.headquarters}</p>
                      </div>
                    </div>
                    
                    {/* Contact Methods with Labels */}
                    <div className="space-y-2">
                      <p className="text-xs text-gray-400 px-1">{t.footer.contactVia}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {contactMethods.map((method) => {
                          const Icon = method.icon;
                          return (
                            <a
                              key={method.id}
                              href={method.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-lg ${method.bgColor} flex items-center space-x-2`}
                            >
                              <Icon className={`w-4 h-4 ${method.color}`} />
                              <span className="text-xs text-gray-300">{method.title}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* B. Quick Links (Second) */}
            <div className="bg-gray-800/30 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('quickLinks')}
                className="w-full px-3 py-2.5 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded bg-gold-primary/10 flex items-center justify-center">
                    <Home className="w-3 h-3 text-gold-primary" />
                  </div>
                  <span className="text-sm font-medium">{t.footer.quickLinks}</span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    expandedSection === 'quickLinks' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedSection === 'quickLinks' && (
                <div className="px-3 pb-3 pt-1">
                  <div className="grid grid-cols-2 gap-2">
                    {quickLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-xs text-gray-300 hover:text-gold-primary transition-colors py-1.5 px-2 hover:bg-gray-800/30 rounded flex items-center space-x-2"
                      >
                        {item.icon && <item.icon className="w-3 h-3" />}
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* C. Why Choose Us (Third) */}
            <div className="bg-gray-800/30 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('features')}
                className="w-full px-3 py-2.5 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium">{t.footer.whyChooseUs}</span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    expandedSection === 'features' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedSection === 'features' && (
                <div className="px-3 pb-3 pt-1">
                  <div className="space-y-2">
                    {features.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <div 
                          key={feature.id} 
                          className="flex items-center space-x-3 px-2 py-2 bg-gray-900/30 rounded"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-gold-primary" />
                          </div>
                          <span className="text-xs text-gray-300">{feature.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Bottom Bar - Super Compact */}
          <div className="border-t border-gray-800 pt-3">
            <div className="flex flex-col space-y-2">
              {/* Language Switcher */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-400">{t.footer.language}</span>
                <LanguageSwitcher
                  className="text-white text-xs"
                  arrowIcon={<ChevronUp className="w-3 h-3" />}
                  variant="footer"
                />
              </div>
              
              {/* Copyright */}
              <div className="text-center">
                <p className="text-[9px] text-gray-400">
                  © {currentYear} {t.header.title}. {t.footer.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}