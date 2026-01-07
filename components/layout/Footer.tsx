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
} from "lucide-react";
import { FaWhatsapp, FaTelegram, FaWeixin } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Contact methods data
  const contactMethods = [
    {
      id: "phone",
      icon: Phone,
      title: "Call",
      href: "tel:+86-15594634955",
      color: "text-blue-400 hover:text-blue-300",
      bgColor: "bg-blue-900/30 hover:bg-blue-900/50",
      borderColor: "border-blue-700/30",
    },
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      title: "WhatsApp",
      href: "https://wa.me/+8615594634955",
      color: "text-green-400 hover:text-green-300",
      bgColor: "bg-green-900/30 hover:bg-green-900/50",
      borderColor: "border-green-700/30",
    },
    {
      id: "telegram",
      icon: FaTelegram,
      title: "Telegram",
      href: "https://t.me/+8615594634955",
      color: "text-sky-400 hover:text-sky-300",
      bgColor: "bg-sky-900/30 hover:bg-sky-900/50",
      borderColor: "border-sky-700/30",
    },
    {
      id: "wechat",
      icon: FaWeixin,
      title: "WeChat",
      href: "weixin://dl/chat?daqinauto",
      color: "text-emerald-400 hover:text-emerald-300",
      bgColor: "bg-emerald-900/30 hover:bg-emerald-900/50",
      borderColor: "border-emerald-700/30",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email",
      href: "mailto:contact@daqinauto.com",
      color: "text-gold-primary hover:text-gold-light",
      bgColor: "bg-yellow-900/30 hover:bg-yellow-900/50",
      borderColor: "border-yellow-700/30",
    },
  ];

  // Navigation items with icons for mobile
  const navItems = [
    {
      key: "home",
      label: t.header.nav.home,
      icon: null,
      href: "/",
    },
    {
      key: "models",
      label: t.header.nav.models,
      icon: Car,
      href: "#models",
    },
    {
      key: "about",
      label: t.header.nav.about,
      icon: Users,
      href: "#about",
    },
    {
      key: "contact",
      label: t.header.nav.contact,
      icon: Phone,
      href: "/contact",
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="section-container px-4 py-8 md:py-16">
        {/* Desktop: Original 4-column grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Company Info - Desktop Original */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 border-2 border-gold-primary rounded-lg flex items-center justify-center">
                <span className="text-gold-primary font-bold text-lg">DQ</span>
              </div>
              <h3 className="text-xl font-bold text-white">{t.header.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{t.header.company}</p>
            <p className="text-gray-400 mb-6">
              Your trusted partner for Chinese automotive exports with over a
              decade of experience.
            </p>

            {/* Contact Icons - Desktop */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-gray-400 mr-2">Contact:</span>
              <div className="flex items-center space-x-2">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.id}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg ${method.bgColor} border ${method.borderColor} transition-all hover:scale-110`}
                      title={method.title}
                    >
                      <Icon className={`w-4 h-4 ${method.color}`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Info - Desktop Updated with Icons */}
          <div>
            <h4 className="text-lg font-semibold text-gold-primary mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-5 h-5 text-gold-primary flex-shrink-0" />
                  <span className="text-sm text-gray-400">Direct Contact</span>
                </div>
                {/* Horizontal contact icons */}
                <div className="flex items-center space-x-2">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={method.id}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg ${method.bgColor} border ${method.borderColor} transition-all hover:scale-105`}
                        title={method.title}
                      >
                        <Icon className={`w-4 h-4 ${method.color}`} />
                      </a>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-500 pt-1">
                  Click any icon to contact instantly
                </p>
              </div>

              <div className="flex items-start space-x-3 pt-4 border-t border-gray-800">
                <MapPin className="w-5 h-5 text-gold-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t.common.address}</p>
                  <p className="text-sm text-gray-400">Headquarters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Desktop Original */}
          <div>
            <h4 className="text-lg font-semibold text-gold-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {(Object.values(t.header.nav) as string[]).map((item: string) => (
                <li key={item}>
                  <a
                    href={
                      item === t.header.nav.home
                        ? "/"
                        : `#${item.toLowerCase().replace(" ", "")}`
                    }
                    className="text-gray-300 hover:text-gold-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features - Desktop Original */}
          <div>
            <h4 className="text-lg font-semibold text-gold-primary mb-6">
              Why Choose Us
            </h4>
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

        {/* Mobile: Improved layout */}
        <div className="md:hidden">
          {/* Company Info - Mobile Improved */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 border-2 border-gold-primary rounded-lg flex items-center justify-center">
                <span className="text-gold-primary font-bold text-lg">DQ</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {t.header.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{t.header.company}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Your trusted partner for Chinese automotive exports with over a
              decade of experience.
            </p>

            {/* Contact Icons - Horizontal on mobile */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">Contact via:</span>
                <span className="text-xs text-gray-500">Tap to contact</span>
              </div>
              <div className="flex items-center justify-between space-x-2">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.id}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex flex-col items-center justify-center p-3 rounded-xl ${method.bgColor} border ${method.borderColor} transition-all active:scale-95`}
                      title={method.title}
                    >
                      <Icon className={`w-5 h-5 mb-1 ${method.color}`} />
                      <span className="text-xs text-gray-300 truncate w-full text-center">
                        {method.title}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Address - Mobile */}
            <div className="flex items-start space-x-3 p-3 bg-gray-900/30 rounded-lg">
              <MapPin className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">{t.common.address}</p>
                <p className="text-xs text-gray-400">Headquarters</p>
              </div>
            </div>
          </div>

          {/* Quick Links - Horizontal scroll on mobile */}
          <div className="mb-8">
            <h4 className="text-base font-semibold text-gold-primary mb-4">
              Quick Links
            </h4>
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 space-x-4 no-scrollbar">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className="flex-shrink-0 flex flex-col items-center space-y-2 p-3 min-w-[80px] bg-gray-900/50 hover:bg-gray-800 rounded-xl transition-colors group"
                  >
                    {Icon && (
                      <div className="p-2 bg-gold-primary/10 rounded-lg group-hover:bg-gold-primary/20 transition-colors">
                        <Icon className="w-4 h-4 text-gold-primary" />
                      </div>
                    )}
                    <span className="text-xs font-medium text-center">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Features Grid - Mobile Improved */}
          <div className="mb-8">
            <h4 className="text-base font-semibold text-gold-primary mb-4">
              Why Choose Us
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg">
                <div className="p-2 bg-gold-primary/10 rounded-lg">
                  <Shield className="w-4 h-4 text-gold-primary" />
                </div>
                <span className="text-sm text-gray-300">Quality</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg">
                <div className="p-2 bg-gold-primary/10 rounded-lg">
                  <Globe className="w-4 h-4 text-gold-primary" />
                </div>
                <span className="text-sm text-gray-300">Global Shipping</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg">
                <div className="p-2 bg-gold-primary/10 rounded-lg">
                  <Clock className="w-4 h-4 text-gold-primary" />
                </div>
                <span className="text-sm text-gray-300">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg">
                <div className="p-2 bg-gold-primary/10 rounded-lg">
                  <MapPin className="w-4 h-4 text-gold-primary" />
                </div>
                <span className="text-sm text-gray-300 truncate">
                  {t.common.address.split(",")[0]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Language switcher hidden on mobile only */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t.header.title}. All rights reserved.
            </p>
            {/* Hidden on mobile, visible on medium screens and up */}
            <div className="hidden md:flex items-center space-x-6 mt-0">
              <span className="text-sm text-gray-400">Languages:</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for scrollbar hiding */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </footer>
  );
}
