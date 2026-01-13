"use client";

import { useLanguage } from "@/context/LanguageContext";
import BrandsGrid from "./BrandsGrid";
import { ShieldCheck, Car } from "lucide-react";
import Link from "next/link";

export default function BrandsModelsSection() {
  const { t } = useLanguage();

  return (
    <section id="brands" className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Full-width header container */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-4">
          <div className="max-w-7xl mx-auto px-4">
            {/* Compact Header */}
            <div className="flex justify-between items-center pb-2">
              {/* Left side: Title */}
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-primary/10 rounded-md">
                  <ShieldCheck className="w-4 h-4 text-gold-primary" />
                </div>
                <h2 className="text-base md:text-lg font-bold text-gold-primary">
                  Vehicle Brands
                </h2>
              </div>
              
              {/* Right side: All Models button */}
              <div>
                <Link
                  href="/models"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gold-primary text-white rounded-md hover:bg-gold-primary/90 transition-colors text-xs font-medium shadow-sm"
                >
                  <Car className="w-3 h-3" />
                  <span>All Models</span>
                </Link>
              </div>
            </div>
            
            {/* Full-width horizontal line */}
            <div className="border-b border-gray-200 w-full"></div>
          </div>
        </div>

        {/* Brands Grid */}
        <BrandsGrid />
      </div>
    </section>
  );
}