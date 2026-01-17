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
import { useRouter } from "next/navigation";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [languagePopupOpen, setLanguagePopupOpen] = useState(false);
  const [utilityVisible, setUtilityVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const lastScrollY = useRef(0);

  // Handle scroll for utility title hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide utility title based on scroll direction
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setUtilityVisible(false);
        } else {
          // Scrolling up
          setUtilityVisible(true);
        }
      } else {
        setUtilityVisible(true);
      }

      // Update scrolled state for header background
      setScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside for search and language popups
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

  // Focus search input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

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
      icon: Mail,
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

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to models page with search parameter
      router.push(`/models?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Handle quick search link click
  const handleQuickSearch = (query: string) => {
    router.push(`/models?search=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setSearchQuery("");
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Handle Enter key press for search
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      handleSearchSubmit(e as any);
    }
  };

  // Toggle search open state
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black to-gray-900 text-white transition-all duration-300 ${
          utilityVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12 md:h-10">
            <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gold-primary/20 rounded-full">
                <CheckCircle className="w-4 h-4 text-gold-primary flex-shrink-0" />
                <span className="text-sm font-medium opacity-90 truncate text-base sm:text-sm">
                  Xi'an Daqin Daorui International Trade Co., Ltd.
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
          ${scrolled ? "top-0 shadow-xl" : "top-12 md:top-10"}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

        <nav className="container mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo with Company Name */}
            <div className="flex-1 md:flex-none">
              <Link
                href="/"
                className="flex items-center gap-2 md:gap-3 group z-10 flex-shrink-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="relative">
                  <Image
                    src="/images/daqin-logo.png"
                    alt="Daqin Auto "
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
                <div className="hidden md:flex flex-col">
                  <span className="text-white font-bold text-2xl md:text-3xl leading-tight tracking-tight">
                    Daqin Auto
                  </span>
                </div>
                <div className="md:hidden flex flex-col">
                  <span className="text-white font-bold text-lg md:text-xl leading-tight tracking-tight">
                    Daqin Auto
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const showIconOnly = ["home", "contact", "brands"].includes(
                  item.id
                );

                return (
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
                        text-white hover:text-gray-900 hover:bg-white/20
                        ${activeDropdown === item.id ? "bg-white/15" : ""}
                        ${showIconOnly ? "px-2.5" : ""}
                      `}
                      title={showIconOnly ? item.name : ""}
                    >
                      <item.icon className="w-5 h-5" />
                      {!showIconOnly && (
                        <span className="text-sm font-medium tracking-wide">
                          {item.name}
                        </span>
                      )}
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          } ${showIconOnly ? "hidden" : ""}`}
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
                );
              })}

              {/* Search Icon Only Button */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={toggleSearch}
                  className="flex items-center gap-2 px-2.5 py-2.5 rounded-lg transition-all duration-200 hover:bg-white/20 active:scale-95"
                  aria-label="Search"
                  title="Search"
                >
                  <Search className="w-5 h-5 text-white" />
                </button>

                {/* Search dropdown */}
                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-[90vw] max-w-sm bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-4 animate-fadeIn z-50">
                    <form onSubmit={handleSearchSubmit}>
                      <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          onKeyPress={handleKeyPress}
                          placeholder="Search vehicles, brands, models..."
                          className="w-full pl-11 pr-14 py-3 bg-white/50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent text-sm sm:text-base"
                          autoFocus
                        />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={clearSearch}
                            className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            aria-label="Clear search"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          type="submit"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gold-primary text-white px-3 py-1.5 rounded-md font-medium text-sm hover:bg-gold-primary/90 transition-colors"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    <div className="mt-3">
                      <span className="text-xs text-gray-500 font-medium px-1">
                        Quick Searches:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => handleQuickSearch("electric")}
                          className="px-3 py-1.5 bg-gold-primary/10 text-gold-primary text-sm font-medium rounded-lg hover:bg-gold-primary/20 transition-colors"
                        >
                          Electric Vehicles
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickSearch("SUV")}
                          className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          SUVs
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickSearch("BYD")}
                          className="px-3 py-1.5 bg-green-50 text-green-600 text-sm font-medium rounded-lg hover:bg-green-100 transition-colors"
                        >
                          BYD
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickSearch("Tesla")}
                          className="px-3 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors"
                        >
                          Tesla
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search - Mobile */}
              <div className="relative lg:hidden" ref={searchRef}>
                <button
                  onClick={toggleSearch}
                  className="md:hidden p-2.5 rounded-lg transition-all duration-200 hover:bg-white/20 active:scale-95"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 text-white" />
                </button>

                {/* Search dropdown for mobile */}
                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-[90vw] max-w-sm bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-4 animate-fadeIn z-50">
                    <form onSubmit={handleSearchSubmit}>
                      <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          onKeyPress={handleKeyPress}
                          placeholder="Search vehicles, brands, models..."
                          className="w-full pl-11 pr-14 py-3 bg-white/50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent text-sm sm:text-base"
                          autoFocus
                        />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={clearSearch}
                            className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            aria-label="Clear search"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          type="submit"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gold-primary text-white px-3 py-1.5 rounded-md font-medium text-sm hover:bg-gold-primary/90 transition-colors"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    <div className="mt-3">
                      <span className="text-xs text-gray-500 font-medium px-1">
                        Quick Searches:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => handleQuickSearch("electric")}
                          className="px-3 py-1.5 bg-gold-primary/10 text-gold-primary text-sm font-medium rounded-lg hover:bg-gold-primary/20 transition-colors"
                        >
                          Electric
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickSearch("SUV")}
                          className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          SUVs
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickSearch("BYD")}
                          className="px-3 py-1.5 bg-green-50 text-green-600 text-sm font-medium rounded-lg hover:bg-green-100 transition-colors"
                        >
                          BYD
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Language Switcher - Desktop */}
              <div className="hidden md:block relative" ref={languageRef}>
                <button
                  onClick={() => setLanguagePopupOpen(!languagePopupOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/20 active:scale-95"
                  aria-label="Select language"
                >
                  <Globe className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">
                    {currentLanguage?.code.toUpperCase()}
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 text-white transition-transform duration-200 ${
                      languagePopupOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

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
                              <span className="font-medium text-base">
                                {lang.name}
                              </span>
                              <span className="text-sm text-gray-500">
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

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-lg transition-all duration-200 hover:bg-white/20 active:scale-95"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-white" />
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
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Side Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gold-primary shadow-2xl animate-slideInRight overflow-hidden">
            {/* Panel Header */}
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
                    <span className="text-white font-bold text-xl leading-tight">
                      Daqin Auto
                    </span>
                    <span className="text-white/80 text-xs">
                      Premium Vehicle Exporter
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg hover:bg-white/20 transition-colors active:scale-95"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Mobile Search in Menu */}
              <div className="mt-4">
                <form onSubmit={handleSearchSubmit}>
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Search vehicles, brands..."
                      className="w-full pl-11 pr-12 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-transparent text-sm"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        aria-label="Clear search"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gold-primary text-white p-1.5 rounded-md"
                      aria-label="Search"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Navigation Content */}
            <div className="overflow-y-auto h-[calc(100vh-200px)] bg-gold-primary">
              <div className="p-5">
                <div className="space-y-1">
                  {/* Home, Services, About, Contact */}
                  {navigation.slice(0, 4).map((item) => (
                    <div key={item.id} className="mb-1">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-white/20 active:bg-white/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-white text-base">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}

                  {/* Language Switcher */}
                  <div className="my-4 pt-4 border-t border-white/20">
                    <div className="relative" ref={languageRef}>
                      <button
                        onClick={() => setLanguagePopupOpen(!languagePopupOpen)}
                        className="flex items-center justify-between w-full px-4 py-4 rounded-lg transition-all duration-200 bg-white/10 hover:bg-white/20"
                      >
                        <div className="flex items-center gap-3">
                          <Globe className="w-6 h-6 text-white" />
                          <div className="flex flex-col items-start">
                            <span className="font-bold text-white text-base">
                              Language
                            </span>
                            <span className="text-sm text-white/80">
                              {currentLanguage?.name}
                            </span>
                          </div>
                        </div>
                        <ChevronUp
                          className={`w-5 h-5 text-white transition-transform duration-200 ${
                            languagePopupOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {languagePopupOpen && (
                        <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-xl shadow-2xl border border-white/20 overflow-hidden animate-fadeIn">
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
                                  <span className="text-2xl">{lang.flag}</span>
                                  <div className="flex flex-col items-start">
                                    <span className="font-medium text-base">
                                      {lang.name}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                      {lang.code.toUpperCase()}
                                    </span>
                                  </div>
                                </div>
                                {language === lang.code && (
                                  <div className="w-6 h-6 rounded-full bg-gold-primary flex items-center justify-center">
                                    <svg
                                      className="w-3.5 h-3.5 text-white"
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

                  {/* Brands & Models Sections */}
                  {navigation.slice(4).map((item) => (
                    <div key={item.id} className="mb-1">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-white/20 active:bg-white/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-white text-base">
                            {item.name}
                          </span>
                        </div>
                        {item.dropdown && (
                          <ChevronDown className="w-5 h-5 text-white/70" />
                        )}
                      </Link>

                      {item.dropdown && (
                        <div className="ml-14 pl-4 border-l border-white/30 space-y-1 mt-1">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <Link
                              key={idx}
                              href={dropdownItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 py-3 text-white/80 hover:text-white transition-colors text-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                              <span className="font-medium">
                                {dropdownItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div
        className={`h-20 md:h-20 transition-all duration-300 ${
          utilityVisible ? "" : "mt-0"
        }`}
      />

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

        html {
          font-size: 16px;
        }

        @media (min-width: 640px) {
          html {
            font-size: 16px;
          }
        }

        @media (min-width: 768px) {
          html {
            font-size: 16px;
          }
        }

        @media (min-width: 1024px) {
          html {
            font-size: 17px;
          }
        }

        @media (min-width: 1280px) {
          html {
            font-size: 18px;
          }
        }

        button,
        a {
          touch-action: manipulation;
        }

        @media (max-width: 768px) {
          input,
          textarea,
          select {
            font-size: 16px !important;
          }
        }

        @media (max-width: 768px) {
          header .logo-container {
            min-width: 180px;
          }
        }
      `}</style>
    </>
  );
}