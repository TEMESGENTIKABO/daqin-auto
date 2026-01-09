"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { Truck, FileCheck, Package } from "lucide-react";

// Filtered services - removed "Custom Service" and "AfterSales Service"
const filteredServices = [
  {
    title: "Vehicle Sourcing",
    description: "Extensive network to find your perfect vehicle match",
    icon: <Truck className="w-7 h-7 text-gold-primary" />,
  },
  {
    title: "Quality Inspection",
    description: "Comprehensive pre-shipment inspection & certification",
    icon: <FileCheck className="w-7 h-7 text-gold-primary" />,
  },
  {
    title: "Export Processing",
    description: "Complete export documentation & logistics handling",
    icon: <Package className="w-7 h-7 text-gold-primary" />,
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-12 md:py-20 bg-gray-50 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-64 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 h-64"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-label="Services Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gold-primary bg-gold-primary/10 rounded-full mb-4">
            {t.common?.services || "Our Services"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {t.services?.title || "Comprehensive Export Solutions"}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {t.services?.subtitle ||
              "Streamlined vehicle export process from sourcing to delivery"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold-primary/30 hover:-translate-y-1"
              role="article"
              aria-label={`${service.title} service`}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold-primary to-transparent rounded-full blur-xl"></div>
              </div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-primary/5 to-gold-primary/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="sr-only">{service.title} icon</span>
                  {service.icon}
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-primary transition-colors duration-300">
                {(t.services?.items?.[index]?.title as string) || service.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                {(t.services?.items?.[index]?.description as string) ||
                  service.description}
              </p>

              {/* CTA */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  className="inline-flex items-center text-sm font-medium text-gold-primary hover:text-gold-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:ring-offset-2 rounded-lg px-2 py-1"
                  aria-label={`Learn more about ${service.title}`}
                  onClick={() => {
                    // Add your navigation or modal logic here
                    console.log(`Learn more about ${service.title}`);
                  }}
                >
                  <span>{t.common?.learnMore || "Learn more"}</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}