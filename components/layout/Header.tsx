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
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Constants
const TOP_BAR_HEIGHT = 48;
const MAIN_HEADER_HEIGHT = 64;
const TOTAL_HEADER_HEIGHT = TOP_BAR_HEIGHT + MAIN_HEADER_HEIGHT;
const SCROLL_THRESHOLD = 100;
const SCROLL_VISIBILITY_THRESHOLD = 10;

// Types
type LanguageCode = "en" | "ar" | "ru" | "zh";

interface NavigationItem {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
}

interface LanguageOption {
  code: LanguageCode;
  name: string;
  flag: string;
}

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const router = useRouter();
  
  // State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  
  // Refs
  const searchRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const rafId = useRef<number>();

  // Memoized data
  const navigation = useMemo<NavigationItem[]>(
    () => [
      { id: "home", name: t.header.nav.home, href: "/", icon: Home },
      { id: "services", name: t.header.nav.services, href: "/#services", icon: Briefcase },
      { id: "about", name: t.header.nav.about, href: "/about", icon: Users },
      { id: "contact", name: t.header.nav.contact, href: "/contact", icon: Mail },
    ],
    [t.header.nav]
  );

  const languageOptions = useMemo<LanguageOption[]>(
    () => [
      { code: "en", name: "English", flag: "🇺🇸" },
      { code: "ar", name: "العربية", flag: "🇸🇦" },
      { code: "ru", name: "Русский", flag: "🇷🇺" },
      { code: "zh", name: "中文", flag: "🇨🇳" },
    ],
    []
  );

  const currentLanguage = useMemo(
    () => languageOptions.find((lang) => lang.code === language) || languageOptions[0],
    [language, languageOptions]
  );

  // Optimized scroll handler with RAF throttling
  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Update visibility based on scroll direction
      if (currentScrollY > SCROLL_THRESHOLD) {
        setIsVisible(currentScrollY < lastScrollY.current);
      } else {
        setIsVisible(true);
      }
      
      // Update scrolled state for styling
      setScrolled(currentScrollY > SCROLL_VISIBILITY_THRESHOLD);
      
      lastScrollY.current = currentScrollY;
    });
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(target) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(target)
      ) {
        setSearchOpen(false);
      }

      if (
        languageOpen &&
        languageRef.current &&
        !languageRef.current.contains(target)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen, languageOpen]);

  // Focus management
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Scroll event listener with cleanup
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  // Handlers
  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        router.push(`/models?search=${encodeURIComponent(searchQuery.trim())}`);
        setSearchOpen(false);
        setSearchQuery("");
        setMobileMenuOpen(false);
      }
    },
    [router, searchQuery]
  );

  const handleQuickSearch = useCallback(
    (query: string) => {
      router.push(`/models?search=${encodeURIComponent(query)}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileMenuOpen(false);
    },
    [router]
  );

  const handleLanguageChange = useCallback(
    (code: LanguageCode) => {
      setLanguage(code);
      setLanguageOpen(false);
      setMobileMenuOpen(false);
    },
    [setLanguage]
  );

  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleSearchClear = useCallback(() => {
    setSearchQuery("");
    searchInputRef.current?.focus();
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-50 
          bg-gradient-to-r from-black to-gray-900 text-white
          transition-transform duration-300 will-change-transform
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            {/* Company name */}
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 bg-gold-primary/20 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium opacity-90 truncate max-w-[150px] sm:max-w-none">
                  {t.header.companyFull}
                </span>
              </div>
            </div>

            {/* Phone - desktop */}
            <div className="hidden sm:flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-primary shrink-0" />
              <a
                href={`tel:${t.common.phone.replace(/\s/g, "")}`}
                className="text-xs sm:text-sm font-medium opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {t.common.phone}
              </a>
            </div>

            {/* Phone - mobile */}
            <div className="sm:hidden">
              <a
                href={`tel:${t.common.phone.replace(/\s/g, "")}`}
                className="block p-2 -m-2"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4 text-gold-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className={`
          fixed left-0 right-0 z-40 
          bg-gold-primary
          transition-all duration-300 will-change-transform
          ${scrolled ? "shadow-xl" : "shadow-md"}
          ${isVisible ? "top-12" : "top-0"}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

        <nav className="container mx-auto px-3 sm:px-6 relative" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1 sm:gap-2 md:gap-3 group shrink-0 max-w-[60%] sm:max-w-none"
              onClick={handleMobileMenuClose}
              aria-label="Go to homepage"
            >
              <div className="relative shrink-0">
                <Image
                  src="/images/daqin-logo.png"
                  alt="Daqin Auto Export"
                  width={200}
                  height={65}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 200px"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                />
              </div>
              <span className="text-white font-bold text-sm sm:text-base md:text-xl lg:text-2xl leading-tight tracking-tight truncate">
                {t.header.brandTitle}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-white hover:text-gray-900 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                  <span className="text-sm font-medium tracking-wide">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search Button */}
              <button
                ref={searchButtonRef}
                onClick={() => setSearchOpen((prev) => !prev)}
                className="p-2 sm:p-2.5 rounded-lg text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 active:scale-95"
                aria-label="Search"
                aria-expanded={searchOpen}
                aria-controls="search-dropdown"
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Language Selector - Desktop */}
              <div className="relative hidden md:block" ref={languageRef}>
                <button
                  onClick={() => setLanguageOpen((prev) => !prev)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Select language"
                  aria-expanded={languageOpen}
                  aria-haspopup="true"
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown
                    className={`
                      w-3 h-3 transition-transform duration-200
                      ${languageOpen ? "rotate-180" : ""}
                    `}
                    aria-hidden="true"
                  />
                </button>

                {languageOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden animate-fadeIn z-50"
                    role="menu"
                    aria-label="Language options"
                  >
                    <div className="p-2">
                      {languageOptions.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`
                            flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors
                            ${language === lang.code
                              ? "bg-gold-primary/10 text-gold-primary"
                              : "text-gray-700 hover:bg-gray-50 focus:bg-gray-50"
                            }
                            focus:outline-none focus:ring-2 focus:ring-gold-primary/50
                          `}
                          role="menuitem"
                          aria-current={language === lang.code ? "true" : undefined}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl" aria-hidden="true">{lang.flag}</span>
                            <div className="flex flex-col items-start">
                              <span className="font-medium text-base">{lang.name}</span>
                              <span className="text-xs text-gray-500">{lang.code.toUpperCase()}</span>
                            </div>
                          </div>
                          {language === lang.code && (
                            <CheckCircle className="w-4 h-4" aria-hidden="true" />
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
                className="lg:hidden p-2 sm:p-2.5 rounded-lg text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 active:scale-95"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>

        {/* Search Dropdown */}
        {searchOpen && (
          <div
            id="search-dropdown"
            ref={searchRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-2xl mt-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-3 sm:p-4 animate-fadeIn z-50"
            style={{ top: "calc(100% + 0.5rem)" }}
            role="dialog"
            aria-label="Search panel"
          >
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.header?.searchPlaceholder || "Search vehicles..."}
                  className="w-full pl-10 pr-20 py-2.5 sm:py-3 bg-white/50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-primary/50 text-sm"
                  aria-label="Search input"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold-primary text-white px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium hover:bg-gold-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  disabled={!searchQuery.trim()}
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
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                {["electric", "SUV", "BYD", "Tesla"].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleQuickSearch(term)}
                    className="px-2.5 sm:px-3 py-1.5 bg-gold-primary/10 text-gold-primary text-xs sm:text-sm font-medium rounded-lg hover:bg-gold-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-primary/50"
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
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
            onClick={handleMobileMenuClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm sm:max-w-md bg-gold-primary shadow-2xl animate-slideInRight overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gold-primary p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative shrink-0">
                    <Image
                      src="/images/daqin-logo.png"
                      alt="Daqin Auto"
                      width={160}
                      height={52}
                      className="h-10 sm:h-12 w-auto object-contain"
                      quality={90}
                      sizes="(max-width: 640px) 80px, 120px"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight tracking-tight">
                      {t.header.brandTitle}
                    </span>
                    <span className="text-white/80 text-xs">
                      {t.header.premiumVehicleExporter}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleMobileMenuClose}
                  className="p-2 sm:p-2.5 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                </button>
              </div>

              {/* Search in Menu */}
              <div className="mt-3 sm:mt-4">
                <form onSubmit={handleSearchSubmit}>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t.header?.searchPlaceholder || "Search vehicles..."}
                      className="w-full pl-10 pr-20 py-2.5 sm:py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-primary text-sm"
                      aria-label="Search input"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={handleSearchClear}
                        className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        aria-label="Clear search"
                      >
                        <X className="w-4 h-4" aria-hidden="true" />
                      </button>
                    )}
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold-primary text-white p-1.5 rounded-md hover:bg-gold-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                      disabled={!searchQuery.trim()}
                      aria-label="Submit search"
                    >
                      <Search className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="overflow-y-auto h-[calc(100vh-140px)] sm:h-[calc(100vh-160px)] bg-gold-primary">
              <div className="p-4 sm:p-5">
                <nav aria-label="Mobile navigation">
                  {navigation.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={handleMobileMenuClose}
                      className="flex items-center gap-3 p-3 sm:p-4 rounded-xl text-white hover:bg-white/20 transition-colors mb-1 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <div className="p-2 bg-white/20 rounded-lg" aria-hidden="true">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-sm sm:text-base">{item.name}</span>
                    </Link>
                  ))}
                </nav>

                {/* Language Selector */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <span className="text-white/80 text-xs sm:text-sm font-medium px-4 block mb-2">
                    {t.header.language}
                  </span>
                  <div className="space-y-1" role="group" aria-label="Language options">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`
                          flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-colors
                          ${language === lang.code
                            ? "bg-white/20 text-white"
                            : "text-white/80 hover:bg-white/10 focus:bg-white/10"
                          }
                          focus:outline-none focus:ring-2 focus:ring-white/30
                        `}
                        aria-current={language === lang.code ? "true" : undefined}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-xl sm:text-2xl" aria-hidden="true">{lang.flag}</span>
                          <div className="flex flex-col items-start">
                            <span className="font-medium text-sm sm:text-base">{lang.name}</span>
                            <span className="text-xs text-white/60">{lang.code.toUpperCase()}</span>
                          </div>
                        </div>
                        {language === lang.code && (
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
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

      {/* Spacer */}
      <div
        className="transition-all duration-300"
        style={{ height: isVisible ? TOTAL_HEADER_HEIGHT : 0 }}
        aria-hidden="true"
      />

      {/* Global Styles */}
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
          animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Optimize for touch interactions */
        @media (hover: none) and (pointer: coarse) {
          button, a, [role="button"] {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
        }

        /* Ensure proper header offset for anchor links */
        html {
          scroll-padding-top: ${TOTAL_HEADER_HEIGHT}px;
        }

        /* Prevent content flash on load */
        .header-spacer {
          transition: height 0.3s ease;
        }
      `}</style>
    </>
  );
}