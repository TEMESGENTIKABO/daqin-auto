// ===== FILE: C:\Users\TEMEsgen\Desktop\Boru\daqin-auto\components\sections\brand-models\ModelsFilter.tsx =====

"use client";

import { useState } from "react";
import { Search, Filter, Grid, List, ChevronDown, ChevronUp, Check } from "lucide-react";
import { SortOption, ViewMode } from "./types";

interface ModelsFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onResetFilters: () => void;
  availableBrands: string[];
  availableCategories: Array<{ id: string; name: string }>;
}

export default function ModelsFilter({
  searchQuery,
  onSearchChange,
  selectedBrands,
  onBrandToggle,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  onResetFilters,
  availableBrands,
  availableCategories,
}: ModelsFilterProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-4">
      {/* Search and Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by brand, model, or keyword..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-3 rounded-lg border ${
              viewMode === 'grid'
                ? 'bg-gold-primary text-white border-gold-primary'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gold-primary'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-3 rounded-lg border ${
              viewMode === 'list'
                ? 'bg-gold-primary text-white border-gold-primary'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gold-primary'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-gold-primary transition-colors"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
          {showFilters ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-gray-light rounded-xl p-6 space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-black mb-3">Vehicle Category</h3>
            <div className="flex flex-wrap gap-2">
              {availableCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gold-primary text-white border-gold-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gold-primary'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-semibold text-black mb-3">Brands</h3>
            <div className="flex flex-wrap gap-2">
              {availableBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => onBrandToggle(brand)}
                  className={`px-4 py-2 rounded-lg border transition-colors flex items-center space-x-2 ${
                    selectedBrands.includes(brand)
                      ? 'bg-gold-primary/10 text-gold-primary border-gold-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gold-primary'
                  }`}
                >
                  {selectedBrands.includes(brand) ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <div className="w-4 h-4 border border-gray-300 rounded" />
                  )}
                  <span>{brand}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-black">Price Range</h3>
              <span className="text-gold-primary font-medium">
                ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </span>
            </div>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <h3 className="font-semibold text-black mb-3">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
            >
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year-new">Year: Newest First</option>
              <option value="year-old">Year: Oldest First</option>
              <option value="name-a">Name: A to Z</option>
              <option value="name-z">Name: Z to A</option>
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex justify-end">
            <button
              onClick={onResetFilters}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}