// components/models/ModelsUI.tsx - CLIENT COMPONENT
"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Filters from "@/components/models/Filters";
import ModelsGrid from "@/components/sections/brand-models/ModelsGrid";
import VehicleDetailModal from "@/components/sections/brand-models/VehicleDetailModal";
import VehicleCompare from "@/components/sections/brand-models/VehicleCompare";
import {
  Search,
  X,
  Grid,
  List,
  SlidersHorizontal,
  Filter,
  Hash,
  Car,
  DollarSign,
  Clock,
  Star,
  Check,
} from "lucide-react";

// Import the shared VehicleModel type from the appropriate location
import type { VehicleModel as SharedVehicleModel } from "@/components/sections/brand-models/types";
import type { VehicleCategory } from "@/components/sections/brand-models/types";

// Extend the shared VehicleModel type to include price properties
type VehicleModel = SharedVehicleModel & {
  price?: number;
  priceUSD?: number;
};

type ViewMode = "grid" | "list";
type SortOption =
  | "default"
  | "price-low"
  | "price-high"
  | "year-new"
  | "year-old"
  | "name-a"
  | "name-z";
type PricePreset = "all" | "under-30k" | "30k-60k" | "60k-100k" | "100k-plus";

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
  const searchInputRef = useRef<HTMLInputElement>(null);

  const brandParam = searchParams.get("brand");
  const categoryParam = searchParams.get("category");

  // State Management
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    brandParam ? [brandParam] : []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [compareList, setCompareList] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [pricePreset, setPricePreset] = useState<PricePreset>("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showSortSheet, setShowSortSheet] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Price presets - Fixed: use tuple type [number, number] instead of number[]
  const pricePresets = useMemo(
    () => [
      {
        id: "all" as PricePreset,
        label: "All Prices",
        range: [0, 200000] as [number, number],
      },
      {
        id: "under-30k" as PricePreset,
        label: "Under $30k",
        range: [0, 30000] as [number, number],
      },
      {
        id: "30k-60k" as PricePreset,
        label: "$30k - $60k",
        range: [30000, 60000] as [number, number],
      },
      {
        id: "60k-100k" as PricePreset,
        label: "$60k - $100k",
        range: [60000, 100000] as [number, number],
      },
      {
        id: "100k-plus" as PricePreset,
        label: "$100k+",
        range: [100000, 200000] as [number, number],
      },
    ],
    []
  );

  // Handle price preset changes
  const handlePricePreset = useCallback((preset: PricePreset) => {
    setPricePreset(preset);
    switch (preset) {
      case "under-30k":
        setPriceRange([0, 30000]);
        break;
      case "30k-60k":
        setPriceRange([30000, 60000]);
        break;
      case "60k-100k":
        setPriceRange([60000, 100000]);
        break;
      case "100k-plus":
        setPriceRange([100000, 200000]);
        break;
      default:
        setPriceRange([0, 200000]);
        break;
    }
  }, []);

  // Fix: Add proper type for onSelectCategory callback
  const handleSelectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  // Enhanced vehicle filtering with safe property access
  const filteredModels = useMemo(() => {
    let filtered = [...initialModels] as VehicleModel[];

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((model) =>
        selectedBrands.includes(model.brand)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (model) =>
          model.brand.toLowerCase().includes(query) ||
          model.model.toLowerCase().includes(query) ||
          model.description?.toLowerCase().includes(query) ||
          model.features?.some((f) => f.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (model) => model.category === selectedCategory
      );
    }

    // Filter by price range with safe access
    filtered = filtered.filter((model) => {
      const price = model.price || 0;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort vehicles with safe property access
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return (a.price || 0) - (b.price || 0);
        case "price-high":
          return (b.price || 0) - (a.price || 0);
        case "year-new":
          return (b.year || 0) - (a.year || 0);
        case "year-old":
          return (a.year || 0) - (b.year || 0);
        case "name-a":
          return a.model.localeCompare(b.model);
        case "name-z":
          return b.model.localeCompare(a.model);
        default:
          return (b.year || 0) - (a.year || 0);
      }
    });

    return filtered;
  }, [
    initialModels,
    selectedBrands,
    searchQuery,
    selectedCategory,
    priceRange,
    sortBy,
  ]);

  // Stats with safe calculations
  const stats = useMemo(() => {
    const prices = filteredModels.map((m) => m.price || 0);
    const total = initialModels.length;
    const showing = filteredModels.length;
    const brandsCount = selectedBrands.length;

    const validPrices = prices.filter((p) => p > 0);
    const minPrice = validPrices.length > 0 ? Math.min(...validPrices) : 0;
    const maxPrice = validPrices.length > 0 ? Math.max(...validPrices) : 0;
    const averagePrice =
      validPrices.length > 0
        ? Math.round(
            validPrices.reduce((sum, p) => sum + p, 0) / validPrices.length
          )
        : 0;

    return { total, showing, brandsCount, minPrice, maxPrice, averagePrice };
  }, [filteredModels, selectedBrands, initialModels.length]);

  // Toggle functions
  const toggleCompare = useCallback((modelId: string) => {
    setCompareList((prev) => {
      if (prev.includes(modelId)) {
        return prev.filter((id) => id !== modelId);
      }
      return prev.length < 4 ? [...prev, modelId] : prev;
    });
  }, []);

  const toggleBrand = useCallback((brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedBrands([]);
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange([0, 200000]);
    setPricePreset("all");
    setSortBy("default");
    setShowMobileFilters(false);
  }, []);

  const selectedVehicle = selectedModel
    ? initialModels.find((model) => model.id === selectedModel)
    : null;

  // Focus search on mount on mobile
  useEffect(() => {
    if (window.innerWidth < 768 && !brandParam) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  }, [brandParam]);

  // Mobile Sort Sheet Component
  const MobileSortSheet = useCallback(
    () => (
      <div className="fixed inset-0 z-50 lg:hidden">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowSortSheet(false)}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl animate-slideUp">
          <div className="pt-4 px-4">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto"></div>
          </div>
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Sort By</h2>
              <button
                onClick={() => setShowSortSheet(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="p-4 space-y-2">
            {[
              { id: "default" as SortOption, label: "Recommended" },
              { id: "price-low" as SortOption, label: "Price: Low to High" },
              { id: "price-high" as SortOption, label: "Price: High to Low" },
              { id: "year-new" as SortOption, label: "Newest First" },
              { id: "year-old" as SortOption, label: "Oldest First" },
              { id: "name-a" as SortOption, label: "Name: A to Z" },
              { id: "name-z" as SortOption, label: "Name: Z to A" },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setSortBy(option.id);
                  setShowSortSheet(false);
                }}
                className={`w-full p-3 rounded-lg flex items-center justify-between ${
                  sortBy === option.id
                    ? "bg-gold-primary/10 text-gold-primary"
                    : "hover:bg-gray-100"
                }`}
              >
                <span className="font-medium">{option.label}</span>
                {sortBy === option.id && (
                  <Check className="w-5 h-5 text-gold-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    ),
    [sortBy]
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Mobile Header - Always visible */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 lg:hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {brandParam ? `${brandParam} Models` : "Vehicles"}
              </h1>
              <p className="text-sm text-gray-600">
                {filteredModels.length} vehicles
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setViewMode(viewMode === "grid" ? "list" : "grid")
                }
                className="p-2.5 rounded-lg bg-gray-100"
              >
                {viewMode === "grid" ? (
                  <List className="w-5 h-5 text-gray-600" />
                ) : (
                  <Grid className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-10 pr-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block bg-white border-b border-gray-200">
        <div className="section-container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {brandParam
                  ? `${brandParam} Vehicle Models`
                  : "Vehicle Catalog"}
              </h1>
              <p className="text-gray-600">
                Browse {filteredModels.length} vehicles from our collection
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${
                  viewMode === "grid"
                    ? "bg-gold-primary text-white"
                    : "bg-gray-100"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${
                  viewMode === "list"
                    ? "bg-gold-primary text-white"
                    : "bg-gray-100"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-4 md:py-6">
        <div className="lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block space-y-6">
            {/* Search */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                />
              </div>
            </div>

            {/* Filters Component */}
            <Filters
              brandsList={initialBrands}
              selectedBrands={selectedBrands}
              onToggleBrand={toggleBrand}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              pricePreset={pricePreset}
              onPricePresetChange={handlePricePreset}
              pricePresets={pricePresets}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Mobile Filter Buttons */}
            <div className="lg:hidden flex items-center gap-2 mb-4">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg"
              >
                <Filter className="w-4 h-4" />
                <span className="font-medium">Filters</span>
                {(selectedBrands.length > 0 ||
                  selectedCategory !== "all" ||
                  pricePreset !== "all") && (
                  <span className="w-5 h-5 bg-gold-primary text-white text-xs rounded-full flex items-center justify-center">
                    !
                  </span>
                )}
              </button>
              <button
                onClick={() => setShowSortSheet(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="font-medium">Sort</span>
              </button>
            </div>

            {/* Active Filters */}
            {(selectedBrands.length > 0 ||
              selectedCategory !== "all" ||
              pricePreset !== "all") && (
              <div className="mb-4 p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-600">Active:</span>

                  {selectedCategory !== "all" && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-gold-primary/10 rounded-full">
                      <span className="text-sm text-gold-primary">
                        {selectedCategory.charAt(0).toUpperCase() +
                          selectedCategory.slice(1)}
                      </span>
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className="ml-1 p-0.5 hover:bg-gold-primary/20 rounded"
                      >
                        <X className="w-3 h-3 text-gold-primary" />
                      </button>
                    </div>
                  )}

                  {selectedBrands.map((brand) => (
                    <div
                      key={brand}
                      className="flex items-center gap-1 px-3 py-1 bg-gold-primary/10 rounded-full"
                    >
                      <span className="text-sm text-gold-primary">{brand}</span>
                      <button
                        onClick={() => toggleBrand(brand)}
                        className="ml-1 p-0.5 hover:bg-gold-primary/20 rounded"
                      >
                        <X className="w-3 h-3 text-gold-primary" />
                      </button>
                    </div>
                  ))}

                  {pricePreset !== "all" && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-gold-primary/10 rounded-full">
                      <span className="text-sm text-gold-primary">
                        {pricePresets.find((p) => p.id === pricePreset)?.label}
                      </span>
                      <button
                        onClick={() => handlePricePreset("all")}
                        className="ml-1 p-0.5 hover:bg-gold-primary/20 rounded"
                      >
                        <X className="w-3 h-3 text-gold-primary" />
                      </button>
                    </div>
                  )}

                  <button
                    onClick={resetFilters}
                    className="ml-auto text-sm text-red-500 hover:text-red-700"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}

            {/* Results Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  {filteredModels.length} Vehicles
                </h2>
                <div className="text-sm text-gray-600">
                  {stats.averagePrice > 0 &&
                    `Avg: $${stats.averagePrice.toLocaleString()}`}
                </div>
              </div>
            </div>

            {/* Models Grid */}
            <ModelsGrid
              vehicles={filteredModels}
              viewMode={viewMode}
              compareList={compareList}
              onToggleCompare={toggleCompare}
              onSelectModel={setSelectedModel}
              onClearCompare={() => setCompareList([])}
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

            {/* Empty State */}
            {filteredModels.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  No vehicles found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-gold-primary text-white font-medium rounded-lg hover:bg-gold-primary/90"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Render Mobile Sheets */}
      {showMobileFilters && (
        <Filters
          brandsList={initialBrands}
          selectedBrands={selectedBrands}
          onToggleBrand={toggleBrand}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          pricePreset={pricePreset}
          onPricePresetChange={handlePricePreset}
          pricePresets={pricePresets}
          sortBy={sortBy}
          onSortChange={setSortBy}
          isMobile
          onClose={() => setShowMobileFilters(false)}
          onApply={() => setShowMobileFilters(false)}
        />
      )}
      {showSortSheet && <MobileSortSheet />}

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedModel(null)}
          compareList={compareList}
          onToggleCompare={toggleCompare}
        />
      )}

      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}
