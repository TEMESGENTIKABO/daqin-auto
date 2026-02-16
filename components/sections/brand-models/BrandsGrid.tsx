"use client";

import Image from "next/image";
import { brands } from "@/data/brands";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BrandsGrid() {
  const { language } = useLanguage();

  // Define Chinese brands list
  const chineseBrands = [
    "Xiaomi",
    "BYD",
    "Xpeng",
    "ZEEKR",
    "Avatr",
    "AITO",
    "Li Auto",
    "Lynk & Co",
    "Geely",
    "Chery",
    "Changan",
    "fangchengbao",
    "Deepal",
    "Wuling",
    "Yangwang",
    "MG",
    "Nio",
    "voyah",
    "Foton",
  ];

  // Define non-Chinese brands in desired order
  const nonChineseBrands = [
    "BMW",
    "Mercedes-Benz",
    "Nissan",
    "Volkswagen",
    "Toyota",
    "Honda",
  ];

  // Combine the lists - Chinese brands first, then non-Chinese
  const priorityOrder = [...chineseBrands, ...nonChineseBrands];

  const allBrands = [...brands];

  const sortedBrands = allBrands.sort((a, b) => {
    const aPriorityIndex = priorityOrder.indexOf(a.name.en);
    const bPriorityIndex = priorityOrder.indexOf(b.name.en);

    // If both are in priority order, sort by that order
    if (aPriorityIndex !== -1 && bPriorityIndex !== -1) {
      return aPriorityIndex - bPriorityIndex;
    }

    // If only A is in priority order, it comes first
    if (aPriorityIndex !== -1) {
      return -1;
    }

    // If only B is in priority order, it comes first
    if (bPriorityIndex !== -1) {
      return 1;
    }

    // If neither is in priority order, sort alphabetically by current language
    const aName = a.name[language] || a.name.en;
    const bName = b.name[language] || b.name.en;
    return aName.localeCompare(bName);
  });

  return (
    <>
      {/* Brands Grid - 8 columns on large screens */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {sortedBrands.map((brand) => {
          const brandName = brand.name[language] || brand.name.en;
          const brandDescription =
            brand.description[language] || brand.description.en;

          return (
            <Link
              key={brand.name.en}
              href={`/models?brand=${encodeURIComponent(brandName)}`}
              className="group relative bg-white p-3 rounded-lg border border-gray-200 hover:border-gold-primary hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center h-32"
              aria-label={`View ${brandName} models`}
              title={brandDescription}
            >
              {/* Logo Container */}
              <div className="h-12 w-12 mb-2 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brandName}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-200"
                    sizes="(max-width: 640px) 48px, 48px"
                    priority={sortedBrands.indexOf(brand) < 16}
                  />
                </div>
              </div>

              {/* Brand Name */}
              <h4 className="text-xs font-medium text-black text-center line-clamp-2 px-1">
                {brandName}
              </h4>

              {/* Year Established */}
              {(brand as any).yearEstablished && (
                <div className="text-xs text-gray-500 mt-1">
                  Est. {(brand as any).yearEstablished}
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Empty State */}
      {sortedBrands.length === 0 && (
        <div className="text-center py-6">
          <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            No brands available
          </h3>
          <p className="text-gray-600 text-sm max-w-xs mx-auto">
            More brands coming soon.
          </p>
        </div>
      )}
    </>
  );
}