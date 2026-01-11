"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const languages = [
  { code: 'en' as const, name: 'English', flag: '🇺🇸' },
  { code: 'ar' as const, name: 'العربية', flag: '🇸🇦' },
  { code: 'ru' as const, name: 'Русский', flag: '🇷🇺' },
  { code: 'zh' as const, name: '中文', flag: '🇨🇳' }
];

interface LanguageSwitcherProps {
  className?: string;
  arrowIcon?: React.ReactNode;
  variant?: 'default' | 'footer';
}

export default function LanguageSwitcher({ 
  className = "", 
  arrowIcon = <ChevronDown className="w-4 h-4" />,
  variant = 'default'
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: 'en' | 'ar' | 'ru' | 'zh') => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  // Different styles for different variants
  const getButtonStyles = () => {
    switch(variant) {
      case 'footer':
        return "flex items-center space-x-2 px-3 py-1.5 border border-gray-700 rounded-lg hover:border-gold-primary hover:bg-gray-800 transition-colors text-white bg-transparent";
      default:
        return "flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gold-primary hover:bg-gray-50 transition-colors";
    }
  };

  const getDropdownStyles = () => {
    switch(variant) {
      case 'footer':
        return "absolute bottom-full right-0 mb-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50";
      default:
        return "absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50";
    }
  };

  const getItemStyles = (isSelected: boolean) => {
    switch(variant) {
      case 'footer':
        return `w-full text-left px-4 py-3 hover:bg-gray-800 transition-colors flex items-center space-x-3
          ${isSelected ? 'bg-gold-primary/10 text-gold-primary' : 'text-gray-300'}`;
      default:
        return `w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center space-x-3
          ${isSelected ? 'bg-gold-primary/5 text-gold-primary' : 'text-gray-700'}`;
    }
  };

  // Determine if we should rotate the arrow based on isOpen
  const getArrowRotation = () => {
    if (variant === 'footer') {
      // For footer: arrow points down by default, rotates up when open
      return isOpen ? '' : 'rotate-180';
    } else {
      // For default: arrow points down by default, rotates up when open
      return isOpen ? 'rotate-180' : '';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonStyles()}
      >
        <Globe className={`w-4 h-4 ${variant === 'footer' ? 'text-gray-400' : 'text-gray-600'}`} />
        <span className="font-medium">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <span className={`transition-transform ${getArrowRotation()}`}>
          {arrowIcon}
        </span>
      </button>

      {isOpen && (
        <div className={getDropdownStyles()}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={getItemStyles(language === lang.code)}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && (
                <span className={`ml-auto ${variant === 'footer' ? 'text-gold-primary' : 'text-gold-primary'}`}>
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}