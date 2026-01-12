"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { brands } from "@/data/brands";
import Link from "next/link";

export default function BrandsGrid() {
  // Combine Chinese and International brands into one array
  const allBrands = [...brands.chinese, ...brands.international];

  // Sort alphabetically
  const sortedBrands = allBrands.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {sortedBrands.map((brand) => (
          <Link
            key={brand.name}
            href={`/models?brand=${encodeURIComponent(brand.name)}`}
            className="group relative bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-gold-primary hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-36 sm:h-40 md:h-44 lg:h-48 active:scale-95 touch-manipulation"
            aria-label={`View ${brand.name} models`}
          >
            {/* Category Badge */}
            <div
              className={`absolute top-1.5 right-1.5 sm:top-2 sm:right-2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                brands.chinese.includes(brand)
                  ? "bg-red-50 text-red-600 border border-red-100"
                  : "bg-blue-50 text-blue-600 border border-blue-100"
              }`}
            >
              {brands.chinese.includes(brand) ? "CN" : "INT"}
            </div>

            {/* Logo Container - Enhanced for mobile */}
            <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mb-2 sm:mb-3 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                  priority={sortedBrands.indexOf(brand) < 12} // Prioritize first 12 images
                />
              </div>
            </div>

            {/* Brand Name - Responsive text sizing */}
            <h4 className="text-sm sm:text-base font-semibold text-black text-center mb-1 line-clamp-2 px-1">
              {brand.name}
            </h4>

            {/* Year Established (if available) */}
            {(brand as any).yearEstablished && (
              <div className="text-xs text-gray-500 mb-1">
                Est. {(brand as any).yearEstablished}
              </div>
            )}

            {/* CTA - Better mobile visibility */}
            <div className="mt-auto pt-1 sm:pt-2 flex items-center space-x-1 text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium whitespace-nowrap">
                View Models
              </span>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
            </div>

            {/* Mobile Touch Overlay */}
            <div className="absolute inset-0 bg-black/0 group-active:bg-black/5 transition-colors rounded-xl pointer-events-none" />
          </Link>
        ))}
      </div>

      {/* Empty State (in case no brands) */}
      {sortedBrands.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
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
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
            No brands available
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-sm mx-auto">
            We'll be adding more brands soon. Please check back later.
          </p>
        </div>
      )}

      {/* Mobile Performance Optimizations */}
      <style jsx global>{`
        /* Enhanced touch feedback */
        .touch-manipulation {
          touch-action: manipulation;
        }

        .active\:scale-95:active {
          transform: scale(0.95);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Prevent layout shift on image load */
        .brand-logo-container {
          position: relative;
          overflow: hidden;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .brand-card {
            min-height: 144px;
          }
        }

        /* Improve tap targets on mobile */
        @media (max-width: 768px) {
          a {
            min-height: 44px;
          }
        }

        /* Smooth hover effects for desktop */
        @media (hover: hover) {
          .brand-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .transition-transform,
          .transition-opacity,
          .transition-colors {
            transition-duration: 0.01ms !important;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .brand-card {
            background-color: #1f2937;
            border-color: #374151;
          }

          .brand-card h4 {
            color: #f9fafb;
          }

          .category-badge {
            background-color: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </>
  );
}
