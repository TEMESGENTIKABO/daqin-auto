"use client";

import { useLanguage } from "@/context/LanguageContext";
import BrandsGrid from "./BrandsGrid";
import { ShieldCheck, Car } from "lucide-react";
import Link from "next/link";

export default function BrandsModelsSection() {
  const { t } = useLanguage();

  return (
    <section id="brands" className="py-8 md:py-12 bg-gray-50">
      <div className="section-container">
        {/* Header with title left and button right - Always horizontal */}
        <div className="flex justify-between items-center mb-8 gap-4">
          {/* Left side: Title */}
          <div className="flex items-center gap-3 flex-1">
            <div className="p-2 bg-gold-primary/10 rounded-lg">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-gold-primary" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gold-primary">
              Premium Vehicle Brands
            </h2>
          </div>
          
          {/* Right side: All Models button */}
          <div className="flex-shrink-0">
            <Link
              href="/models"
              className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-gold-primary text-white rounded-lg hover:bg-gold-primary/90 transition-colors whitespace-nowrap text-xs md:text-sm font-medium shadow-sm"
            >
              <Car className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="hidden sm:inline">All Models</span>
              <span className="sm:hidden">Models</span>
            </Link>
          </div>
        </div>

        {/* Brands Grid - Always shows all brands now */}
        <BrandsGrid />
      </div>
    </section>
  );
}