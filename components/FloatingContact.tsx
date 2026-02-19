"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  Facebook,
  Send,
  X,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(true); // Start open
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Contact information
  const contacts = {
    phone: "+86-15594634955",
    telegram: "+8615594634955",
    whatsapp: "+8615594634955",
    email: "mamushjebessa@gmail.com",
    facebook: "daqinautoexports",
    tiktok: "@daqin_auto_china",
  };
  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Contact Container - Top Right Edge */}
      <div className="fixed right-0 top-6 z-50 flex flex-col items-end">
        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            w-9 h-9 rounded-full flex items-center justify-center shadow-xl
            transform hover:scale-110 active:scale-95 transition-all duration-200
            bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
            mr-4 mb-2
          "
          aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        >
          {isOpen ? (
            <X className="w-4 h-4 text-white" />
          ) : (
            <MessageCircle className="w-4 h-4 text-white" />
          )}
        </button>

        {/* Contact Buttons */}
        <div
          className={`
            flex flex-col gap-1.5 mb-2 transition-all duration-300
            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          {/* Phone Call */}
          <a
            href={`tel:${contacts.phone}`}
            className="group relative flex items-center justify-end"
            title={`Call us: ${contacts.phone}`}
          >
            <span className="absolute right-full mr-2 bg-gray-900 text-white px-2 py-1 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Call Us
            </span>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hover:bg-green-600">
              <Phone className="w-3.5 h-3.5 text-white" />
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${contacts.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-end"
            title={`WhatsApp: ${contacts.whatsapp}`}
          >
            <span className="absolute right-full mr-2 bg-gray-900 text-white px-2 py-1 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              WhatsApp
            </span>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hover:bg-green-700">
              <svg
                className="w-3.5 h-3.5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.04 20.33C10.55 20.33 9.09 19.94 7.79 19.2L7.48 19.02L4.36 19.88L5.23 16.9L5.04 16.58C4.24 15.25 3.8 13.74 3.8 12.2C3.8 7.66 7.5 3.96 12.04 3.96C16.58 3.96 20.28 7.66 20.28 12.2C20.28 16.74 16.58 20.33 12.04 20.33ZM16.69 13.88C16.44 13.75 15.34 13.21 15.11 13.13C14.88 13.05 14.71 13.01 14.54 13.26C14.37 13.51 13.93 14 13.78 14.17C13.63 14.34 13.48 14.36 13.23 14.23C12.98 14.1 12.27 13.85 11.43 13.1C10.76 12.51 10.31 11.78 10.16 11.53C10.01 11.28 10.14 11.15 10.27 11.02C10.39 10.9 10.54 10.7 10.67 10.55C10.8 10.4 10.84 10.29 10.92 10.12C11 9.95 10.96 9.81 10.9 9.68C10.84 9.55 10.39 8.45 10.2 8.02C10.01 7.6 9.82 7.66 9.68 7.65C9.54 7.64 9.38 7.64 9.22 7.64C9.06 7.64 8.8 7.7 8.58 7.94C8.36 8.18 7.8 8.71 7.8 9.79C7.8 10.87 8.58 11.91 8.69 12.06C8.8 12.21 10.29 14.53 12.57 15.53C13.23 15.82 13.74 16 14.14 16.13C14.8 16.34 15.4 16.3 15.87 16.2C16.39 16.09 17.49 15.62 17.71 15.1C17.93 14.58 17.93 14.14 17.87 14.04C17.81 13.94 17.64 13.87 17.39 13.74L16.69 13.88Z" />
              </svg>
            </div>
          </a>

          {/* Telegram */}
          <a
            href={`https://t.me/${contacts.telegram.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-end"
            title={`Telegram: ${contacts.telegram}`}
          >
            <span className="absolute right-full mr-2 bg-gray-900 text-white px-2 py-1 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Telegram
            </span>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hover:bg-blue-600">
              <Send className="w-3.5 h-3.5 text-white" />
            </div>
          </a>

          {/* Facebook */}
          <a
            href={`https://facebook.com/${contacts.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-end"
            title={`Facebook: ${contacts.facebook}`}
          >
            <span className="absolute right-full mr-2 bg-gray-900 text-white px-2 py-1 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Facebook
            </span>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hover:bg-blue-700">
              <Facebook className="w-3.5 h-3.5 text-white" />
            </div>
          </a>

          {/* TikTok */}
          <a
            href={`https://tiktok.com/@${contacts.tiktok.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-end"
            title={`TikTok: ${contacts.tiktok}`}
          >
            <span className="absolute right-full mr-2 bg-gray-900 text-white px-2 py-1 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              TikTok
            </span>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hover:bg-gray-900">
              <svg
                className="w-3.5 h-3.5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.24a6.34 6.34 0 0 0 10.86-4.23v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${contacts.email}`}
            className="group relative flex items-center justify-end"
            title={`Email: ${contacts.email}`}
          >
            <span className="absolute right-full mr-2 bg-gray-900 text-white px-2 py-1 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Email Us
            </span>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hover:bg-red-600">
              <Mail className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
        </div>
      </div>

      {/* Scroll to Top Button - Left Corner */}
      <button
        onClick={scrollToTop}
        className={`
          fixed left-4 bottom-6 z-50
          w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center shadow-lg
          transform transition-all duration-300 hover:bg-gray-700 hover:scale-110 active:scale-95
          ${showScrollTop ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}
        `}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-3.5 h-3.5 text-white" />
      </button>
    </>
  );
}