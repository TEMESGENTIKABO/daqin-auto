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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {sortedBrands.map((brand) => (
        <Link
          key={brand.name}
          href={`/models?brand=${encodeURIComponent(brand.name)}`}
          className="bg-white p-4 rounded-xl border border-gray-200 hover:border-gold-primary hover:shadow-lg transition-all group flex flex-col items-center justify-center h-40"
        >
          <div className="h-14 w-14 mb-3 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain group-hover:scale-110 transition-transform"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
          <h4 className="text-base font-semibold text-black text-center mb-1">
            {brand.name}
          </h4>
          <div className="mt-2 flex items-center space-x-1 text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs">View Models</span>
            <ChevronRight className="w-3 h-3" />
          </div>
        </Link>
      ))}
    </div>
  );
}