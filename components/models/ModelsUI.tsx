// components/models/ModelsUI.tsx - CLIENT COMPONENT
"use client";

import { useState, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import ModelsGrid from "@/components/sections/brand-models/ModelsGrid";
import VehicleDetailModal from "@/components/sections/brand-models/VehicleDetailModal";
import VehicleCompare from "@/components/sections/brand-models/VehicleCompare";
import { Search, Car } from "lucide-react";

import type { VehicleModel as SharedVehicleModel } from "@/components/sections/brand-models/types";

type VehicleModel = SharedVehicleModel & {
  price?: number;
  priceUSD?: number;
};

type ViewMode = "grid" | "list";

interface ModelsUIProps {
  initialModels: VehicleModel[];
  initialBrands: string[];
}

export default function ModelsUI({
  initialModels,
  initialBrands,
}: ModelsUIProps) {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const brandParam = searchParams.get("brand");

  // State Management
  const [selectedBrand, setSelectedBrand] = useState<string>(
    brandParam || "All Vehicles"
  );
  const [compareList, setCompareList] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  // Brand categories from your image
  const brandCategories = [
    "All Vehicles",
    "Alon",
    "Aito",
    "Arcfox",
    "Audi",
    "AVATR",
    "BMW",
    "BYD",
    "Cadillac",
    "Changan",
    "Chery",
    "Deepal",
    "Denza",
    "FOTON",
    "Geely",
    "GWM",
    "Honda",
    "HONGQI",
    "IM",
    "Lexus",
    "LI",
    "LING KE",
    "M-Hero",
    "Mazda",
    "Mercedes",
    "MG",
    "NIO",
    "Nissan",
    "Smart",
    "Tesla",
    "TOYOTA",
    "volkswagen",
    "Voyah",
    "Wuling",
    "Xiaomi",
    "Xpeng",
    "ZEEKR",
  ];

  // Use the brand categories directly
  const brands = brandCategories;

  // Filter models based on selected brand
  const filteredModels = useMemo(() => {
    if (selectedBrand === "All Vehicles") {
      return initialModels;
    }
    return initialModels.filter((model) => model.brand === selectedBrand);
  }, [initialModels, selectedBrand]);

  const toggleCompare = useCallback((modelId: string) => {
    setCompareList((prev) => {
      if (prev.includes(modelId)) {
        return prev.filter((id) => id !== modelId);
      }
      return prev.length < 4 ? [...prev, modelId] : prev;
    });
  }, []);

  const selectedVehicle = selectedModel
    ? initialModels.find((model) => model.id === selectedModel)
    : null;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Compact & Gold */}
      <div
        className="relative bg-gradient-to-br from-gold-primary/90 via-gold-primary to-yellow-600 text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(184, 134, 11, 0.9) 0%, rgba(218, 165, 32, 0.9) 50%, rgba(184, 134, 11, 0.9) 100%), url('/images/bg413.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Quality Vehicles
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base mb-6">
              Explore luxury vehicles for exceptional driving
            </p>
          </div>

          {/* Compact Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-600" />
              </div>
              <input
                type="text"
                placeholder="Search vehicles..."
                className="block w-full pl-9 pr-3 py-2.5 border-0 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Categories Grid - Compact */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Title with Icon */}
          <div className="flex items-center mb-3">
            <Car className="w-5 h-5 text-gold-primary mr-2" />
            <h2 className="text-lg font-bold text-gold-primary">
              Vehicle Categories
            </h2>
          </div>

          {/* Compact Grid of vehicle brands */}
          <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11 xl:grid-cols-13 gap-1.5">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`
                  px-2 py-1.5 rounded-md text-xs font-medium transition-all duration-200 
                  whitespace-nowrap overflow-hidden text-ellipsis text-center 
                  transform hover:scale-[1.02] active:scale-[0.98]
                  ${
                    selectedBrand === brand
                      ? "bg-gold-primary text-white shadow-md ring-2 ring-gold-primary/30"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                  }
                `}
                title={brand}
              >
                <span className="block truncate">{brand}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Compact */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Models Grid */}
        <ModelsGrid
          vehicles={filteredModels}
          viewMode={viewMode}
          compareList={compareList}
          onToggleCompare={toggleCompare}
          onSelectModel={setSelectedModel}
          onClearCompare={() => setCompareList([])}
          onWhatsApp={function (vehicle: SharedVehicleModel): void {
            throw new Error("Function not implemented.");
          }}
        />

        {/* Compare Section */}
        {compareList.length > 0 && (
          <div className="mt-6">
            <VehicleCompare
              selectedModels={compareList}
              onRemoveModel={toggleCompare}
              onClearAll={() => setCompareList([])}
            />
          </div>
        )}

        {/* Compact Empty State */}
        {filteredModels.length === 0 && (
          <div className="text-center py-8 bg-white rounded-lg border border-gray-200 mt-6">
            <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No vehicles found
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              No {selectedBrand === "All Vehicles" ? "" : selectedBrand + " "}
              vehicles available.
            </p>
            {selectedBrand !== "All Vehicles" && (
              <button
                onClick={() => setSelectedBrand("All Vehicles")}
                className="px-3 py-1.5 bg-gold-primary text-white font-medium rounded-md hover:bg-gold-primary/90 transition-colors text-sm"
              >
                View All Brands
              </button>
            )}
          </div>
        )}
      </div>

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedModel(null)}
          compareList={compareList}
          onToggleCompare={toggleCompare}
        />
      )}
    </main>
  );
}
