"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";
import { brands } from "@/data/brands";

export default function BrandsSection() {
  const { t } = useLanguage();

  return (
    <section id="brands" className="py-16 md:py-24 bg-gray-light">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t.brands?.title || "Trusted Automotive Brands"}
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            {t.brands?.subtitle ||
              "We partner with leading Chinese and international manufacturers"}
          </p>
        </div>

        {/* Chinese Brands */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gold-primary mb-8 text-center">
            {t.brands?.chinese || "Chinese Brands"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.chinese.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gold-primary hover:shadow-lg transition-all group"
              >
                {/* Logo - Container reverted, image made larger */}
                <div className="h-12 mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform overflow-visible">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={80}  // Increased from 40
                      height={80} // Increased from 40
                      className="object-contain scale-125" // Added scale to zoom out
                      priority
                    />
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-black text-center mb-2">
                  {brand.name}
                </h4>
                <p className="text-sm text-gray-dark text-center">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* International Brands */}
        <div>
          <h3 className="text-2xl font-semibold text-gold-primary mb-8 text-center">
            {t.brands?.international || "International Brands"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {brands.international.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gold-primary hover:shadow-lg transition-all group"
              >
                {/* Logo - Container reverted, image made larger */}
                <div className="h-12 mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform overflow-visible">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={80}  // Increased from 40
                      height={80} // Increased from 40
                      className="object-contain scale-125" // Added scale to zoom out
                      priority
                    />
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-black text-center mb-2">
                  {brand.name}
                </h4>
                <p className="text-sm text-gray-dark text-center">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Benefits */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                {t.brands?.benefits?.title || "Why Source Through Us?"}
              </h3>

              <ul className="space-y-4">
                {(
                  t.brands?.benefits?.list || [
                    "Direct manufacturer relationships",
                    "Competitive factory prices",
                    "Quality control inspections",
                    "Export documentation handled",
                    "Customs clearance assistance",
                    "After-sales support",
                  ]
                ).map((benefit: string) => (
                  <li key={benefit} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-gold-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gold-primary/5 to-transparent rounded-xl p-6">
              <h4 className="text-lg font-semibold text-black mb-4">
                {t.brands?.catalog?.title || "Get Brand Catalog"}
              </h4>
              <p className="text-gray-dark mb-6">
                {t.brands?.catalog?.description ||
                  "Request our complete brand catalog with specifications, pricing, and availability."}
              </p>

              <a
                href="#contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>
                  {t.brands?.catalog?.button || "Request Catalog"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}