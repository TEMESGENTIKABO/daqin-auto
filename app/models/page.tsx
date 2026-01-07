"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { vehicleModels, brandsList } from "@/data/models";
import ModelsGrid from "@/components/sections/brand-models/ModelsGrid";
import VehicleDetailModal from "@/components/sections/brand-models/VehicleDetailModal";
import VehicleCompare from "@/components/sections/brand-models/VehicleCompare";
import Link from "next/link";

export default function ModelsPage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const brandParam = searchParams.get("brand");

  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    brandParam ? [brandParam] : []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [compareList, setCompareList] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  // Filter vehicles based on selections
  const filteredModels = useMemo(() => {
    let filtered = vehicleModels;

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((model) =>
        selectedBrands.includes(model.brand)
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (model) =>
          model.brand.toLowerCase().includes(query) ||
          model.model.toLowerCase().includes(query) ||
          model.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedBrands, searchQuery]);

  const toggleCompare = (modelId: string) => {
    if (compareList.includes(modelId)) {
      setCompareList(compareList.filter((id) => id !== modelId));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, modelId]);
    }
  };

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const resetFilters = () => {
    setSelectedBrands([]);
    setSearchQuery("");
    setCompareList([]);
  };

  const selectedVehicle = selectedModel
    ? vehicleModels.find((model) => model.id === selectedModel)
    : null;

  const pageTitle = brandParam
    ? `${brandParam} Vehicle Models`
    : selectedBrands.length > 0
    ? `${selectedBrands.join(", ")} Vehicle Models`
    : "All Vehicle Models";

  return (
    <>
      <main className="min-h-screen bg-gray-light">
        {/* Further reduced padding: py-4 md:py-6 */}
        <section className="py-4 md:py-6">
          <div className="section-container">
            {/* SIMPLIFIED FILTERS SECTION - ONLY BRANDS */}
            <div className="mb-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              {/* Search Bar */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by brand, model, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Brands Filter Only */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Brands
                </label>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-1">
                  {Array.isArray(brandsList) &&
                    brandsList.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => toggleBrand(brand)}
                        className={`px-4 py-2 rounded-full border transition-colors ${
                          selectedBrands.includes(brand)
                            ? "bg-gold-primary text-white border-gold-primary"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                </div>

                {/* Reset Filters Button - moved to bottom of filter section */}
                <div className="flex justify-end mt-4 pt-3 border-t border-gray-200">
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 text-sm text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Page Header - Reduced further */}
            <div className="mb-4">
              <p className="text-gray-dark">
                {brandParam
                  ? `Browse all ${brandParam} vehicle models with detailed specifications, pricing, and availability.`
                  : "Browse our complete collection of vehicle models from all brands."}
              </p>
            </div>

            {/* Filter Summary - Only show for brands */}
            {selectedBrands.length > 0 && (
              <div className="mb-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-gray-dark">Active filters:</span>
                  {selectedBrands.map((brand) => (
                    <span
                      key={brand}
                      className="px-3 py-1 bg-gold-primary/10 text-gold-primary rounded-full text-sm flex items-center"
                    >
                      {brand}
                      <button
                        onClick={() => toggleBrand(brand)}
                        className="ml-2 text-xs"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <button
                    onClick={resetFilters}
                    className="ml-2 text-sm text-red-500 hover:text-red-700"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-3">
              <div className="flex justify-between items-center">
                <p className="text-gray-dark">
                  Found{" "}
                  <span className="font-bold text-black">
                    {filteredModels.length}
                  </span>{" "}
                  vehicle{filteredModels.length !== 1 ? "s" : ""}
                  {selectedBrands.length > 0 &&
                    ` from ${selectedBrands.join(", ")}`}
                </p>
                {compareList.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <span className="text-gold-primary font-medium text-sm">
                      {compareList.length} selected for compare
                    </span>
                    <button
                      onClick={() => setCompareList([])}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Models Grid - Removed viewMode prop since we only use grid */}
            <ModelsGrid
              vehicles={filteredModels}
              viewMode="grid"
              compareList={compareList}
              onToggleCompare={toggleCompare}
              onSelectModel={setSelectedModel}
              onClearCompare={() => setCompareList([])}
            />

            {/* Vehicle Compare Section */}
            {compareList.length > 0 && (
              <div className="mt-6">
                <VehicleCompare
                  selectedModels={compareList}
                  onRemoveModel={toggleCompare}
                  onClearAll={() => setCompareList([])}
                />
              </div>
            )}
          </div>
        </section>

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
    </>
  );
}
