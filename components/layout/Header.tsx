"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Shield,
  Car,
  ChevronDown,
  ChevronUp,
  Globe,
  Search,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [languagePopupOpen, setLanguagePopupOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguagePopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigation = [
    {
      id: "home",
      name: t.header.nav.home,
      href: "/",
      icon: Home,
    },
    {
      id: "services",
      name: t.header.nav.services,
      href: "/#services",
      icon: Briefcase,
    },
    {
      id: "about",
      name: t.header.nav.about,
      href: "/about",
      icon: Users,
    },
    {
      id: "contact",
      name: t.header.nav.contact,
      href: "/contact",
      icon: MessageSquare,
    },
    {
      id: "brands",
      name: t.header.nav.brands,
      href: "/brands",
      icon: Shield,
      dropdown: [
        { name: "All Brands", href: "/brands" },
        { name: "Chinese Brands", href: "/brands#chinese" },
        { name: "International Brands", href: "/brands#international" },
        { name: "Featured Models", href: "/models?featured=true" },
      ],
    },
    {
      id: "models",
      name: t.header.nav.models,
      href: "/models",
      icon: Car,
      dropdown: [
        { name: "All Models", href: "/models" },
        { name: "New Arrivals", href: "/models?status=new" },
        { name: "Electric Vehicles", href: "/models?category=electric" },
        { name: "SUVs", href: "/models?category=suv" },
        { name: "Sedans", href: "/models?category=sedan" },
      ],
    },
  ];

  const contactInfo = [
    { icon: Phone, text: t.common.phone },
    { icon: MapPin, text: t.common.address },
    { icon: Clock, text: t.common.available },
  ];

  const languageOptions: {
    code: "en" | "ar" | "ru" | "zh";
    name: string;
    flag: string;
  }[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const currentLanguage = languageOptions.find(
    (lang) => lang.code === language
  );

  return (
    <>
      {/* Top Announcement Bar - Enlarged for mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="section-container">
          <div className="flex items-center justify-between h-11 md:h-10"> {/* Increased from h-9 to h-11 for mobile */}
            <div className="flex items-center gap-3 text-sm md:text-sm overflow-hidden"> {/* Increased from text-xs to text-sm for mobile */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-gold-primary/20 rounded-full"> {/* Increased py from 0.5 to 1 for mobile */}
                  <CheckCircle className="w-4 h-4 md:w-3 md:h-3 text-gold-primary" /> {/* Increased from w-3 h-3 to w-4 h-4 for mobile */}
                  <span className="font-medium opacity-90 truncate">
                    Xi'an Daqin Daorui International Trade Co., Ltd.
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {contactInfo.slice(0, 1).map((info, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <info.icon className="w-3 h-3 text-gold-primary" />
                  <span className="opacity-90 font-medium">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Enlarged for mobile */}
      <header
        className={`
          fixed left-0 right-0 z-40 transition-all duration-300
          top-11 md:top-10
          ${
            scrolled
              ? "bg-gold-primary/95 backdrop-blur-lg shadow-xl py-0"
              : "bg-gold-primary py-0"
          }
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

        <nav className="section-container relative">
          <div className="flex items-center justify-between h-18 md:h-16 lg:h-18"> {/* Increased from h-14 to h-18 for mobile */}
            {/* Logo - Now appears larger due to increased header height */}
            <Link
              href="/"
              className="flex items-center group z-10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative">
                <Image
                  src="/images/daqin-logo.png"
                  alt="Daqin Auto - Premium Chinese Vehicle Exporter"
                  width={220}
                  height={70}
                  className="h-16 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110" 
                  priority
                />
                <div className="absolute -inset-3 bg-white/0 group-hover:bg-white/10 rounded-lg blur transition-all duration-300" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-1.5 px-3 py-2.5 rounded-lg
                      transition-all duration-200
                      ${
                        scrolled
                          ? "text-white hover:text-gray-900 hover:bg-white/20"
                          : "text-white hover:text-gray-900 hover:bg-white/20"
                      }
                      ${activeDropdown === item.id ? "bg-white/15" : ""}
                    `}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    <span className="text-sm font-medium tracking-wide">
                      {item.name}
                    </span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.dropdown && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1.5 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden animate-fadeIn">
                      <div className="py-1.5">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            href={dropdownItem.href}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gold-primary/10 transition-colors group"
                          >
                            <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-gold-primary transition-all duration-200 group-hover:w-2" />
                            <span className="text-sm font-medium text-gray-800 group-hover:text-gold-primary transition-colors">
                              {dropdownItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search - Fixed for mobile */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`
                    p-2 md:p-2 rounded-full transition-all duration-200
                    hover:bg-white/20 active:scale-95
                    ${searchOpen ? "bg-white/20" : ""}
                  `}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 md:w-5 md:h-5 text-white" /> {/* Increased from w-4 h-4 to w-5 h-5 for mobile */}
                </button>

                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-[90vw] max-w-sm bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-3 animate-fadeIn">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search vehicles, brands, models..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white/50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent text-sm"
                        autoFocus
                      />
                    </div>
                    <div className="mt-2">
                      <span className="text-xs text-gray-500 font-medium px-1">
                        Quick Links:
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        <Link
                          href="/models?category=electric"
                          className="px-2.5 py-1 bg-gold-primary/10 text-gold-primary text-xs font-medium rounded-lg hover:bg-gold-primary/20 transition-colors"
                        >
                          Electric
                        </Link>
                        <Link
                          href="/models?status=new"
                          className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          New
                        </Link>
                        <Link
                          href="/brands"
                          className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Brands
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Language Switcher - Desktop with ChevronDown */}
              <div className="hidden md:block relative" ref={languageRef}>
                <button
                  onClick={() => setLanguagePopupOpen(!languagePopupOpen)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg
                    transition-all duration-200
                    hover:bg-white/20 active:scale-95
                    ${languagePopupOpen ? "bg-white/20" : ""}
                  `}
                  aria-label="Select language"
                >
                  <Globe className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">
                    {currentLanguage?.code.toUpperCase()}
                  </span>
                  {/* Desktop: ChevronDown */}
                  <ChevronDown
                    className={`w-3 h-3 text-white transition-transform duration-200 ${
                      languagePopupOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Language Popup */}
                {languagePopupOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden animate-fadeIn z-50">
                    <div className="p-2">
                      {languageOptions.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLanguagePopupOpen(false);
                          }}
                          className={`
                            flex items-center justify-between w-full px-4 py-3
                            transition-all duration-200 rounded-lg
                            ${
                              language === lang.code
                                ? "bg-gold-primary/10 text-gold-primary"
                                : "text-gray-700 hover:bg-gray-50"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{lang.flag}</span>
                            <div className="flex flex-col items-start">
                              <span className="font-medium">{lang.name}</span>
                              <span className="text-xs text-gray-500">
                                {lang.code.toUpperCase()}
                              </span>
                            </div>
                          </div>
                          {language === lang.code && (
                            <div className="w-5 h-5 rounded-full bg-gold-primary flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Button - COMPLETELY REMOVED on mobile, only show on desktop */}
              <div className="hidden md:block relative group">
                <a
                  href={`tel:${t.common.phone}`}
                  className={`
                    flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full
                    text-xs md:text-sm font-bold transition-all duration-200
                    bg-black text-white shadow-lg hover:shadow-xl hover:shadow-black/30
                    hover:scale-105 active:scale-95
                    relative overflow-hidden
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10" />
                  <span className="relative z-10 whitespace-nowrap">
                    Contact
                  </span>
                </a>
              </div>

              {/* Mobile Menu Button - Enlarged for mobile */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`
                  lg:hidden p-2 md:p-2 rounded-lg transition-all duration-200
                  hover:bg-white/20 active:scale-95
                `}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 md:w-6 md:h-6 text-white" /> {/* Increased from w-5 h-5 to w-6 h-6 for mobile */}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gold-primary/90 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Side Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-xs bg-gold-primary shadow-2xl animate-slideInRight overflow-hidden">
            {/* Panel Header - Enlarged for mobile */}
            <div className="sticky top-0 z-10 bg-gold-primary border-b border-white/20 p-5"> {/* Increased from p-4 to p-5 */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 -m-1"
                  >
                    {/* Logo in side panel - increased size due to larger header */}
                    <Image
                      src="/images/daqin-logo.png"
                      alt="Daqin Auto"
                      width={120} 
                      height={40}  
                      className="h-9 w-auto" 
                    />
                  </Link>
                  <span className="text-sm text-white/90 font-medium truncate max-w-[150px]">
                    Xi'an Daqin Daorui
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors active:scale-95"
                >
                  <X className="w-6 h-6 text-white" /> {/* Increased from w-5 h-5 to w-6 h-6 */}
                </button>
              </div>
            </div>

            {/* Navigation Content */}
            <div className="p-4 overflow-y-auto h-[calc(100vh-160px)] scrollbar-hide"> {/* Increased height calculation from 140px to 160px */}
              <div className="space-y-0.5">
                {navigation.map((item) => (
                  <div key={item.id} className="mb-0.5">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-white/20 active:bg-white/30 transition-colors text-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-white/20 rounded-lg">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-white">
                          {item.name}
                        </span>
                      </div>
                      {item.dropdown && (
                        <ChevronDown className="w-5 h-5 text-white/70" />
                      )}
                    </Link>

                    {item.dropdown && (
                      <div className="ml-11 pl-4 border-l border-white/30 space-y-1 mt-0.5">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            href={dropdownItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 py-2 text-base text-white/80 hover:text-white transition-colors"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Language Switcher - Popup Button with ChevronUp */}
              <div className="mt-6 relative" ref={languageRef}>
                <button
                  onClick={() => setLanguagePopupOpen(!languagePopupOpen)}
                  className={`
                    flex items-center justify-between w-full px-4 py-4
                    rounded-lg transition-all duration-200 text-lg
                    bg-white/10 text-white hover:bg-white/20
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Language</span>
                      <span className="text-sm opacity-75">
                        {currentLanguage?.name}
                      </span>
                    </div>
                  </div>
                  {/* Mobile: ChevronUp */}
                  <ChevronUp
                    className={`w-5 h-5 transition-transform duration-200 ${
                      languagePopupOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Language Popup */}
                {languagePopupOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden animate-fadeIn z-10">
                    <div className="p-2">
                      {languageOptions.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLanguagePopupOpen(false);
                          }}
                          className={`
                            flex items-center justify-between w-full px-4 py-3
                            transition-all duration-200 rounded-lg text-base
                            ${
                              language === lang.code
                                ? "bg-gold-primary/10 text-gold-primary"
                                : "text-gray-700 hover:bg-gray-50"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{lang.flag}</span>
                            <div className="flex flex-col items-start">
                              <span className="font-medium">{lang.name}</span>
                              <span className="text-xs text-gray-500">
                                {lang.code.toUpperCase()}
                              </span>
                            </div>
                          </div>
                          {language === lang.code && (
                            <div className="w-5 h-5 rounded-full bg-gold-primary flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer - Increased for mobile */}
      <div className="h-20 md:h-20" /> {/* Increased from h-16 to h-20 for mobile */}

      {/* Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Mobile-specific font size increases */
        @media (max-width: 768px) {
          .mobile-text-lg {
            font-size: 1.125rem !important; /* 18px */
            line-height: 1.5 !important;
          }
          
          .mobile-text-base {
            font-size: 1rem !important; /* 16px */
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </>
  );
}