// components/models/Filters.tsx - CLIENT COMPONENT
"use client";

import { useState, useRef, useEffect } from "react";
import {
  X,
  Filter,
  Car,
  Hash,
  DollarSign,
  SlidersHorizontal,
  Clock,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  Zap,
  Battery,
  Settings
} from "lucide-react";

type SortOption = "default" | "price-low" | "price-high" | "year-new" | "year-old" | "name-a" | "name-z";
type PricePreset = "all" | "under-30k" | "30k-60k" | "60k-100k" | "100k-plus";
type FilterTab = "brands" | "categories" | "price" | "sort";

interface FiltersProps {
  brandsList: string[];
  selectedBrands: string[];
  onToggleBrand: (brand: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  pricePreset: PricePreset;
  onPricePresetChange: (preset: PricePreset) => void;
  pricePresets: Array<{ id: PricePreset; label: string; range: [number, number] }>;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  isMobile?: boolean;
  onClose?: () => void;
  onApply?: () => void;
}

export default function Filters({
  brandsList,
  selectedBrands,
  onToggleBrand,
  selectedCategory,
  onSelectCategory,
  pricePreset,
  onPricePresetChange,
  pricePresets,
  sortBy,
  onSortChange,
  isMobile = false,
  onClose,
  onApply
}: FiltersProps) {
  const [activeFilterTab, setActiveFilterTab] = useState<FilterTab>("brands");
  const filtersRef = useRef<HTMLDivElement>(null);

  // Extract unique categories from brandsList context (in real app, you'd pass this as prop)
  const categories = [
    { id: "all", name: "All Types", icon: <Car className="w-4 h-4" /> },
    { id: "electric", name: "Electric", icon: <Zap className="w-4 h-4" /> },
    { id: "hybrid", name: "Hybrid", icon: <Battery className="w-4 h-4" /> },
    { id: "suv", name: "SUV", icon: <Car className="w-4 h-4" /> },
    { id: "sedan", name: "Sedan", icon: <Settings className="w-4 h-4" /> },
  ];

  // Get icon for category
  function getCategoryIcon(category: string) {
    switch(category.toLowerCase()) {
      case "electric": return <Zap className="w-4 h-4" />;
      case "hybrid": return <Battery className="w-4 h-4" />;
      case "suv": return <Car className="w-4 h-4" />;
      case "sedan": return <Settings className="w-4 h-4" />;
      default: return <Car className="w-4 h-4" />;
    }
  }

  // Close filter sheet when clicking outside on mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, onClose]);

  // Handle escape key for mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobile, onClose]);

  // Reset function for mobile
  const resetFilters = () => {
    onToggleBrand("reset-all"); // Special case - you might want to handle this differently
    onSelectCategory("all");
    onPricePresetChange("all");
    onSortChange("default");
  };

  // Mobile Filter Sheet
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 lg:hidden">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
        
        {/* Filter Sheet */}
        <div 
          ref={filtersRef}
          className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden animate-slideUp"
        >
          {/* Drag Handle */}
          <div className="pt-4 px-4">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto"></div>
          </div>

          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetFilters}
                  className="px-3 py-1.5 text-sm text-red-500 hover:bg-red-50 rounded-lg"
                >
                  Reset
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Tabs - Horizontal scroll for mobile */}
          <div className="flex overflow-x-auto border-b border-gray-200 no-scrollbar">
            {[
              { id: "brands" as FilterTab, label: "Brands", icon: <Hash className="w-4 h-4" /> },
              { id: "categories" as FilterTab, label: "Type", icon: <Car className="w-4 h-4" /> },
              { id: "price" as FilterTab, label: "Price", icon: <DollarSign className="w-4 h-4" /> },
              { id: "sort" as FilterTab, label: "Sort", icon: <SlidersHorizontal className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilterTab(tab.id)}
                className={`flex-shrink-0 px-4 py-3 flex items-center gap-2 transition-colors ${
                  activeFilterTab === tab.id 
                    ? 'text-gold-primary border-b-2 border-gold-primary font-semibold' 
                    : 'text-gray-600'
                }`}
              >
                {tab.icon}
                <span className="text-sm whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Filter Content */}
          <div className="p-4 overflow-y-auto max-h-[55vh]">
            {activeFilterTab === "brands" && (
              <BrandsFilter
                brandsList={brandsList}
                selectedBrands={selectedBrands}
                onToggleBrand={onToggleBrand}
              />
            )}

            {activeFilterTab === "categories" && (
              <CategoriesFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
              />
            )}

            {activeFilterTab === "price" && (
              <PriceFilter
                pricePreset={pricePreset}
                pricePresets={pricePresets}
                onPricePresetChange={onPricePresetChange}
              />
            )}

            {activeFilterTab === "sort" && (
              <SortFilter
                sortBy={sortBy}
                onSortChange={(sort) => {
                  onSortChange(sort);
                  onApply?.();
                }}
              />
            )}
          </div>

          {/* Apply Button */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <button
              onClick={onApply}
              className="w-full py-3 bg-gold-primary text-white font-semibold rounded-lg hover:bg-gold-primary/90 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Filters
  return (
    <>
      {/* Categories */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Vehicle Type</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full p-3 rounded-lg flex items-center gap-3 transition-colors ${
                selectedCategory === category.id
                  ? "bg-gold-primary/10 text-gold-primary"
                  : "hover:bg-gray-100"
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Brands</h3>
          <button
            onClick={() => {
              if (selectedBrands.length === brandsList.length) {
                // Clear all brands
                selectedBrands.forEach(brand => onToggleBrand(brand));
              } else {
                // Select all brands
                brandsList.forEach(brand => {
                  if (!selectedBrands.includes(brand)) {
                    onToggleBrand(brand);
                  }
                });
              }
            }}
            className="text-sm text-gold-primary"
          >
            {selectedBrands.length === brandsList.length ? "Clear All" : "Select All"}
          </button>
        </div>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {brandsList.map((brand) => (
            <button
              key={brand}
              onClick={() => onToggleBrand(brand)}
              className={`w-full p-2 rounded-lg flex items-center justify-between ${
                selectedBrands.includes(brand)
                  ? "bg-gold-primary/10 text-gold-primary"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="font-medium">{brand}</span>
              <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                selectedBrands.includes(brand) 
                  ? "bg-gold-primary border-gold-primary" 
                  : "border-gray-300"
              }`}>
                {selectedBrands.includes(brand) && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-3">
          {pricePresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onPricePresetChange(preset.id)}
              className={`w-full p-2 rounded-lg text-left ${
                pricePreset === preset.id
                  ? "bg-gold-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
        >
          <option value="default">Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="year-new">Newest First</option>
          <option value="year-old">Oldest First</option>
          <option value="name-a">Name: A to Z</option>
          <option value="name-z">Name: Z to A</option>
        </select>
      </div>
    </>
  );
}

// Sub-components for mobile filter sections
function BrandsFilter({ brandsList, selectedBrands, onToggleBrand }: {
  brandsList: string[];
  selectedBrands: string[];
  onToggleBrand: (brand: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Select Brands</h3>
        <button
          onClick={() => {
            if (selectedBrands.length === brandsList.length) {
              brandsList.forEach(brand => onToggleBrand(brand));
            } else {
              brandsList.forEach(brand => {
                if (!selectedBrands.includes(brand)) {
                  onToggleBrand(brand);
                }
              });
            }
          }}
          className="text-sm text-gold-primary font-medium"
        >
          {selectedBrands.length === brandsList.length ? "Clear All" : "Select All"}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {brandsList.map((brand) => (
          <button
            key={brand}
            onClick={() => onToggleBrand(brand)}
            className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
              selectedBrands.includes(brand)
                ? "bg-gold-primary/10 border-gold-primary"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <span className={`font-medium text-sm ${selectedBrands.includes(brand) ? "text-gold-primary" : "text-gray-700"}`}>
              {brand}
            </span>
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
              selectedBrands.includes(brand) 
                ? "bg-gold-primary border-gold-primary" 
                : "bg-white border-gray-300"
            }`}>
              {selectedBrands.includes(brand) && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function CategoriesFilter({ categories, selectedCategory, onSelectCategory }: {
  categories: Array<{ id: string; name: string; icon: React.ReactNode }>;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Vehicle Type</h3>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`p-3 rounded-lg border transition-all flex flex-col items-center gap-2 ${
              selectedCategory === category.id
                ? "bg-gold-primary text-white border-gold-primary"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className={`p-2 rounded-lg ${
              selectedCategory === category.id ? "bg-white/20" : "bg-gray-200"
            }`}>
              {category.icon}
            </div>
            <span className="font-medium text-sm text-center">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function PriceFilter({ pricePreset, pricePresets, onPricePresetChange }: {
  pricePreset: PricePreset;
  pricePresets: Array<{ id: PricePreset; label: string; range: [number, number] }>;
  onPricePresetChange: (preset: PricePreset) => void;
}) {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-gray-900">Price Range</h3>
      
      {/* Quick Price Presets */}
      <div className="grid grid-cols-2 gap-2">
        {pricePresets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onPricePresetChange(preset.id)}
            className={`p-3 rounded-lg border transition-all ${
              pricePreset === preset.id
                ? "bg-gold-primary text-white border-gold-primary"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <span className="font-medium text-sm">{preset.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SortFilter({ sortBy, onSortChange }: {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Sort By</h3>
      <div className="space-y-2">
        {[
          { id: "default" as SortOption, label: "Recommended", icon: <Star className="w-4 h-4" /> },
          { id: "price-low" as SortOption, label: "Price: Low to High", icon: <DollarSign className="w-4 h-4" /> },
          { id: "price-high" as SortOption, label: "Price: High to Low", icon: <DollarSign className="w-4 h-4" /> },
          { id: "year-new" as SortOption, label: "Newest First", icon: <Clock className="w-4 h-4" /> },
          { id: "year-old" as SortOption, label: "Oldest First", icon: <Clock className="w-4 h-4" /> },
          { id: "name-a" as SortOption, label: "Name: A to Z", icon: <Hash className="w-4 h-4" /> },
          { id: "name-z" as SortOption, label: "Name: Z to A", icon: <Hash className="w-4 h-4" /> },
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => onSortChange(option.id)}
            className={`w-full p-3 rounded-lg border transition-all flex items-center justify-between ${
              sortBy === option.id
                ? "bg-gold-primary/10 border-gold-primary"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              {option.icon}
              <span className={`font-medium ${sortBy === option.id ? "text-gold-primary" : "text-gray-700"}`}>
                {option.label}
              </span>
            </div>
            {sortBy === option.id && <Check className="w-4 h-4 text-gold-primary" />}
          </button>
        ))}
      </div>
    </div>
  );
}