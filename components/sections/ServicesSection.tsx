"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { Truck, FileCheck, Package } from "lucide-react";

const WHATSAPP_NUMBER = "+8615594634955"; // ← replace with your WhatsApp number

const filteredServices = [
  {
    title: "Vehicle Sourcing",
    icon: <Truck className="w-6 h-6 text-gold-primary" />,
  },
  {
    title: "Quality Inspection",
    icon: <FileCheck className="w-6 h-6 text-gold-primary" />,
  },
  {
    title: "Export Processing",
    icon: <Package className="w-6 h-6 text-gold-primary" />,
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="py-20 bg-gray-100 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="h-24 w-full max-w-3xl bg-gray-200 rounded-xl mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-white rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      aria-label="Services Section"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/services.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-center mb-14">
          <div className="w-full max-w-3xl bg-white/85 backdrop-blur-md border border-white/40 rounded-2xl px-6 py-6 sm:px-8 shadow-xl shadow-black/10">
            <div className="flex flex-col items-center text-center gap-3">
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide text-gold-primary bg-gold-primary/15 rounded-full">
                {t.common.services}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {t.services.title}
              </h2>

              <p className="text-sm sm:text-base text-gray-600">
                {t.services.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const message = encodeURIComponent(
              `Hello, I would like to learn more about ${service.title}.`
            );

            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            return (
              <article
                key={service.title}
                className="group bg-white/90 border border-gray-200/60 rounded-2xl p-8 shadow-md shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold-primary/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gold-primary transition-colors">
                  {t.services.items[index].title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t.services.items[index].description}
                </p>

                {/* WhatsApp CTA */}
                <div className="pt-4 border-t border-gray-200/70">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact us on WhatsApp about ${service.title}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold-primary hover:text-gold-primary/80 transition"
                  >
                    {t.common.learnMore}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
