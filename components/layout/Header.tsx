"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  Mail,
  ChevronDown,
  Globe,
  Search,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show/hide header based on scroll direction
          if (currentScrollY > 100) {
            setIsVisible(currentScrollY < lastScrollY.current);
          } else {
            setIsVisible(true);
          }
          
          setScrolled(currentScrollY > 10);
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Search outside click
      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
      
      // Language outside click
      if (
        languageOpen &&
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen, languageOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navigation = [
    { id: "home", name: t.header.nav.home, href: "/", icon: Home },
    { id: "services", name: t.header.nav.services, href: "/#services", icon: Briefcase },
    { id: "about", name: t.header.nav.about, href: "/about", icon: Users },
    { id: "contact", name: t.header.nav.contact, href: "/contact", icon: Mail },
  ];

  const languageOptions = [
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "ar" as const, name: "العربية", flag: "🇸🇦" },
    { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
    { code: "zh" as const, name: "中文", flag: "🇨🇳" },
  ];

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/models?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  const handleQuickSearch = (query: string) => {
    router.push(`/models?search=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setSearchQuery("");
    setMobileMenuOpen(false);
  };

  // Calculate header height for proper positioning
  const topBarHeight = 48; // h-12 = 48px on mobile, h-10 = 40px on desktop
  const mainHeaderHeight = 64; // h-16 = 64px on mobile, h-18 = 72px on desktop

  return (
    <>
      {/* Top Utility Bar */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black to-gray-900 text-white transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12 md:h-10">
            <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gold-primary/20 rounded-full">
                <CheckCircle className="w-4 h-4 text-gold-primary flex-shrink-0" />
                <span className="text-sm font-medium opacity-90 truncate text-base sm:text-sm">
                  {t.header.companyFull}
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-primary flex-shrink-0" />
                <span className="text-sm font-medium opacity-90 whitespace-nowrap">
                  {t.common.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`
          fixed left-0 right-0 z-40 transition-all duration-300 bg-gold-primary
          ${scrolled ? "shadow-xl" : ""}
          ${isVisible ? "top-12 md:top-10" : "top-0"}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

        <nav className="container mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo with Company Name */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 group z-10 flex-shrink-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative">
                <Image
                  src="/images/daqin-logo.png"
                  alt="Daqin Auto Export"
                  width={280}
                  height={90}
                  className="h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105 md:h-16"
                  priority
                  quality={100}
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                />
              </div>
              <span className="text-white font-bold text-xl md:text-2xl leading-tight tracking-tight">
                {t.header.brandTitle}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-white hover:text-gray-900 hover:bg-white/20 transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wide">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <button
                ref={searchButtonRef}
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-lg text-white hover:bg-white/20 transition-all duration-200 active:scale-95 relative z-50"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Language Button - Desktop */}
              <div className="relative hidden md:block" ref={languageRef}>
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
                  aria-label="Select language"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${languageOpen ? "rotate-180" : ""}`} />
                </button>

                {languageOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden animate-fadeIn z-50">
                    <div className="p-2">
                      {languageOptions.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLanguageOpen(false);
                          }}
                          className={`
                            flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors
                            ${language === lang.code 
                              ? "bg-gold-primary/10 text-gold-primary" 
                              : "text-gray-700 hover:bg-gray-50"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{lang.flag}</span>
                            <div className="flex flex-col items-start">
                              <span className="font-medium text-base">{lang.name}</span>
                              <span className="text-xs text-gray-500">{lang.code.toUpperCase()}</span>
                            </div>
                          </div>
                          {language === lang.code && (
                            <CheckCircle className="w-4 h-4" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-lg text-white hover:bg-white/20 transition-all duration-200 active:scale-95"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* Search Dropdown - IMPROVED POPUP POSITIONING */}
        {searchOpen && (
          <div 
            ref={searchRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl mt-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-4 animate-fadeIn z-[100]"
            style={{ 
              top: 'calc(100% + 0.5rem)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.header?.searchPlaceholder || "Search vehicles..."}
                  className="w-full pl-11 pr-14 py-3 bg-white/50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-primary/50 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gold-primary text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gold-primary/90 transition-colors"
                >
                  {t.header?.searchButton || "Search"}
                </button>
              </div>
            </form>
            
            {/* Quick Searches */}
            <div className="mt-3">
              <span className="text-xs text-gray-500 font-medium px-1">
                {t.hero?.quickSearches || "Quick searches"}
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["electric", "SUV", "BYD", "Tesla"].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleQuickSearch(term)}
                    className="px-3 py-1.5 bg-gold-primary/10 text-gold-primary text-sm font-medium rounded-lg hover:bg-gold-primary/20 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gold-primary shadow-2xl animate-slideInRight overflow-hidden">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gold-primary p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src="/images/daqin-logo.png"
                      alt="Daqin Auto"
                      width={200}
                      height={65}
                      className="h-14 w-auto object-contain"
                      quality={100}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-base md:text-lg leading-tight tracking-tight">
                      {t.header.brandTitle}
                    </span>
                    <span className="text-white/80 text-xs">
                      {t.header.premiumVehicleExporter}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Search in Menu */}
              <div className="mt-4">
                <form onSubmit={handleSearchSubmit}>
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t.header?.searchPlaceholder || "Search vehicles..."}
                      className="w-full pl-11 pr-12 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-primary text-sm"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-gold-primary text-white p-1.5 rounded-md"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="overflow-y-auto h-[calc(100vh-200px)] bg-gold-primary">
              <div className="p-5">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl text-white hover:bg-white/20 transition-colors mb-1"
                  >
                    <div className="p-2 bg-white/20 rounded-lg">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-base">{item.name}</span>
                  </Link>
                ))}

                {/* Language Selector */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <span className="text-white/80 text-sm font-medium px-4 block mb-2">
                    {t.header.language}
                  </span>
                  <div className="space-y-1">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setMobileMenuOpen(false);
                        }}
                        className={`
                          flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors
                          ${language === lang.code 
                            ? "bg-white/20 text-white" 
                            : "text-white/80 hover:bg-white/10"
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <div className="flex flex-col items-start">
                            <span className="font-medium text-base">{lang.name}</span>
                            <span className="text-xs text-white/60">{lang.code.toUpperCase()}</span>
                          </div>
                        </div>
                        {language === lang.code && (
                          <CheckCircle className="w-5 h-5" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REMOVED SPACER - No more extra space between header and hero */}

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.15s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
        
        /* Ensure hero section starts directly below header */
        main, .hero-section, [class*="hero"] {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
      `}</style>
    </>
  );
}