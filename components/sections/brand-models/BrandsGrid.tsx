"use client";

import Image from "next/image";
import { brands } from "@/data/brands";
import Link from "next/link";

export default function BrandsGrid() {
  // Define priority order - Chinese brands first, then famous international brands
  const priorityOrder = [
    "Xiaomi",
    "BYD",
    "Xpeng",
    "ZEEKR",
    "BMW",
    "Mercedes-Benz",
    "Nissan",
    "NIO",
    "Volkswagen",
    "Toyota",
    "Foton",
    "MG",
    "Lynk & Co",
    "Tesla",
    "Honda",
    "Avatr",
    "AITO",
    "Li Auto",
  ];
  const allBrands = [...brands];

  const sortedBrands = allBrands.sort((a, b) => {
    const aPriorityIndex = priorityOrder.indexOf(a.name);
    const bPriorityIndex = priorityOrder.indexOf(b.name);

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

    // If neither is in priority order, sort alphabetically
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      {/* Brands Grid - 8 columns on large screens with larger items */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {sortedBrands.map((brand) => (
          <Link
            key={brand.name}
            href={`/models?brand=${encodeURIComponent(brand.name)}`}
            className="group relative bg-white p-4 rounded-lg border border-gray-200 hover:border-gold-primary hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center h-40"
            aria-label={`View ${brand.name} models`}
          >
            {/* Logo Container - MUCH LARGER */}
            <div className="h-20 w-20 mb-3 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                  sizes="(max-width: 640px) 80px, 80px"
                  priority={sortedBrands.indexOf(brand) < 16}
                />
              </div>
            </div>

            {/* Brand Name - Larger */}
            <h4 className="text-sm font-medium text-black text-center line-clamp-2 px-1">
              {brand.name}
            </h4>

            {/* Year Established */}
            {(brand as any).yearEstablished && (
              <div className="text-xs text-gray-500 mt-1">
                Est. {(brand as any).yearEstablished}
              </div>
            )}
          </Link>
        ))}
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
