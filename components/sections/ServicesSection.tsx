"use client";

import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/vehicles";
import { Package, Truck, FileCheck, Headphones } from "lucide-react";

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-light">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t.services?.title || "Comprehensive Services"}
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            {t.services?.subtitle ||
              "End-to-end solutions from sourcing to after-sales support"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gold-primary hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-primary/10 to-transparent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">{service.icon}</span>
              </div>

              <h3 className="text-xl font-semibold text-black mb-4">
                {(t.services?.items?.[index]?.title as string) || service.title}
              </h3>

              <p className="text-gray-dark mb-6">
                {(t.services?.items?.[index]?.description as string) ||
                  service.description}
              </p>

              <div className="pt-6 border-t border-gray-100">
                <span className="text-sm font-medium text-gold-primary">
                  {t.common?.learnMore || "Learn more"} →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              {t.services?.process?.title || "Our Export Process"}
            </h3>
            <p className="text-gray-dark max-w-2xl mx-auto">
              {t.services?.process?.description ||
                "Streamlined process ensuring smooth delivery from factory to your location"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {(
              t.services?.process?.steps || [
                {
                  title: "Consultation",
                  description: "Understand your requirements",
                },
                {
                  title: "Sourcing",
                  description: "Find perfect vehicle match",
                },
                {
                  title: "Inspection",
                  description: "Quality and compliance check",
                },
                {
                  title: "Delivery",
                  description: "Shipping and customs clearance",
                },
              ]
            ).map((item: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-black mb-2">{item.title}</h4>
                <p className="text-sm text-gray-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
