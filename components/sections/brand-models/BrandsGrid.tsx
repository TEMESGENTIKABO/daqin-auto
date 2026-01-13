"use client";

import Image from "next/image";
import { brands } from "@/data/brands";
import Link from "next/link";

export default function BrandsGrid() {
  // Use all brands as a single array (16 brands from your image)
  const allBrands = brands;

  // Sort alphabetically
  const sortedBrands = allBrands.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {/* Brands Grid - More compact */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2">
        {sortedBrands.map((brand) => (
          <Link
            key={brand.name}
            href={`/models?brand=${encodeURIComponent(brand.name)}`}
            className="group relative bg-white p-2 rounded-lg border border-gray-200 hover:border-gold-primary hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center h-28 sm:h-32"
            aria-label={`View ${brand.name} models`}
          >
            {/* Logo Container - ENLARGED */}
            <div className="h-12 w-12 sm:h-14 sm:w-14 mb-1.5 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                  sizes="(max-width: 640px) 48px, 56px"
                  priority={sortedBrands.indexOf(brand) < 16}
                />
              </div>
            </div>

            {/* Brand Name - Compact */}
            <h4 className="text-xs sm:text-sm font-medium text-black text-center line-clamp-2 px-0.5">
              {brand.name}
            </h4>

            {/* Year Established - Smaller */}
            {(brand as any).yearEstablished && (
              <div className="text-[10px] text-gray-500 mt-0.5">
                Est. {(brand as any).yearEstablished}
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Empty State - Compact */}
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