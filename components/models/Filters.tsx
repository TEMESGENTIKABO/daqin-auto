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
  Settings,
  Sparkles,
  Grid,
  ListFilter,
  RefreshCw,
  Tag,
  Search,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
type SortOption =
  | "default"
  | "price-low"
  | "price-high"
  | "year-new"
  | "year-old"
  | "name-a"
  | "name-z";
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
  pricePresets: Array<{
    id: PricePreset;
    label: string;
    range: [number, number];
  }>;
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
  onApply,
}: FiltersProps) {
  const { t } = useLanguage();
  const [activeFilterTab, setActiveFilterTab] = useState<FilterTab>("brands");
  const [brandsExpanded, setBrandsExpanded] = useState(false);
  const [brandSearch, setBrandSearch] = useState("");
  const filtersRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", name: t.filters.categories.all, icon: <Grid className="w-4 h-4" /> },
    { id: "electric", name: t.filters.categories.electric, icon: <Zap className="w-4 h-4" /> },
    { id: "hybrid", name: t.filters.categories.hybrid, icon: <Battery className="w-4 h-4" /> },
    { id: "suv", name: t.filters.categories.suv, icon: <Car className="w-4 h-4" /> },
    { id: "sedan", name: t.filters.categories.sedan, icon: <Settings className="w-4 h-4" /> },
  ];

  // Filter brands based on search
  const filteredBrands = brandsList.filter((brand) =>
    brand.toLowerCase().includes(brandSearch.toLowerCase()),
  );

  const visibleBrands = brandsExpanded ? brandsList : brandsList.slice(0, 6);

  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, onClose]);

  useEffect(() => {
    if (!isMobile) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobile, onClose]);

  const resetFilters = () => {
    brandsList.forEach((brand) => {
      if (selectedBrands.includes(brand)) {
        onToggleBrand(brand);
      }
    });
    onSelectCategory("all");
    onPricePresetChange("all");
    onSortChange("default");
  };

  // Mobile Filter Sheet
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 lg:hidden">
        {/* Minimal Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Compact Filter Sheet */}
        <div
          ref={filtersRef}
          className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg max-h-[80vh] overflow-hidden"
        >
          {/* Slim Drag Handle */}
          <div className="pt-3 pb-2 px-4">
            <div className="w-10 h-1 bg-gray-400 rounded-full mx-auto"></div>
          </div>

          {/* Compact Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ListFilter className="w-4 h-4 text-gold-primary" />
                <h2 className="text-base font-semibold text-gray-900">
                  {t.filters.title}
                </h2>
                {selectedBrands.length > 0 && (
                  <span className="text-xs font-medium bg-gold-primary text-white px-1.5 py-0.5 rounded-full">
                    {selectedBrands.length}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={resetFilters}
                  className="text-xs text-gray-500 hover:text-red-500 px-2 py-1"
                >
                  {t.filters.clear}
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Compact Filter Tabs */}
          <div className="px-3 flex overflow-x-auto border-b border-gray-100 no-scrollbar">
            {[
              {
                id: "brands" as FilterTab,
                label: t.filters.tabs.brands,
                icon: <Hash className="w-3.5 h-3.5" />,
              },
              {
                id: "categories" as FilterTab,
                label: t.filters.tabs.type,
                icon: <Grid className="w-3.5 h-3.5" />,
              },
              {
                id: "price" as FilterTab,
                label: t.filters.tabs.price,
                icon: <DollarSign className="w-3.5 h-3.5" />,
              },
              {
                id: "sort" as FilterTab,
                label: t.filters.tabs.sort,
                icon: <Sparkles className="w-3.5 h-3.5" />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilterTab(tab.id)}
                className={`flex-shrink-0 px-3 py-2.5 flex items-center gap-2 transition-colors relative ${
                  activeFilterTab === tab.id
                    ? "text-gold-primary font-medium"
                    : "text-gray-600"
                }`}
              >
                {tab.icon}
                <span className="text-xs whitespace-nowrap">{tab.label}</span>
                {activeFilterTab === tab.id && (
                  <div className="absolute bottom-0 left-1 right-1 h-0.5 bg-gold-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 transition-all duration-200">
              {activeFilterTab === "brands" && (
                <div className="space-y-3">
                  {/* Brand Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t.filters.searchPlaceholder}
                      value={brandSearch}
                      onChange={(e) => setBrandSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md"
                    />
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        brandsList.forEach((brand) => {
                          if (!selectedBrands.includes(brand)) {
                            onToggleBrand(brand);
                          }
                        });
                      }}
                      className="flex-1 py-2 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                      {t.filters.selectAll}
                    </button>
                    <button
                      onClick={() => {
                        brandsList.forEach((brand) => {
                          if (selectedBrands.includes(brand)) {
                            onToggleBrand(brand);
                          }
                        });
                      }}
                      className="flex-1 py-2 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                      {t.filters.clearAll}
                    </button>
                  </div>

                  {/* Brands Grid */}
                  <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                    {filteredBrands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => onToggleBrand(brand)}
                        className={`p-2 rounded-md flex items-center justify-between ${
                          selectedBrands.includes(brand)
                            ? "bg-gold-primary/10 border border-gold-primary/30"
                            : "bg-gray-50 border border-gray-200"
                        }`}
                      >
                        <span
                          className={`text-xs font-medium ${selectedBrands.includes(brand) ? "text-gold-primary" : "text-gray-700"}`}
                        >
                          {brand}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedBrands.includes(brand)
                              ? "bg-gold-primary border-gold-primary"
                              : "bg-white border-gray-300"
                          }`}
                        >
                          {selectedBrands.includes(brand) && (
                            <Check className="w-2.5 h-2.5 text-white" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeFilterTab === "categories" && (
                <CategoriesFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={onSelectCategory}
                  isMobile={true}
                  t={t}
                />
              )}

              {activeFilterTab === "price" && (
                <PriceFilter
                  pricePreset={pricePreset}
                  pricePresets={pricePresets}
                  onPricePresetChange={onPricePresetChange}
                  isMobile={true}
                  t={t}
                />
              )}

              {activeFilterTab === "sort" && (
                <SortFilter
                  sortBy={sortBy}
                  onSortChange={(sort) => {
                    onSortChange(sort);
                    onApply?.();
                  }}
                  isMobile={true}
                  t={t}
                />
              )}
            </div>
          </div>

          {/* Apply Button */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <button
              onClick={onApply}
              className="w-full py-2.5 text-sm bg-gold-primary text-white font-semibold rounded-lg hover:bg-gold-primary/90 transition-colors"
            >
              {t.filters.showResults}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Filters - Compact Version
  return (
    <div className="space-y-3">
      {/* Categories - Compact */}
      <div className="bg-white rounded-lg border border-gray-200 p-3">
        <div className="flex items-center gap-1.5 mb-2">
          <Grid className="w-4 h-4 text-gold-primary" />
          <h3 className="text-sm font-semibold text-gray-900">{t.filters.sections.type}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`p-2 text-xs rounded-md flex flex-col items-center gap-1 transition-colors ${
                selectedCategory === category.id
                  ? "bg-gold-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brands - Compact */}
      <div className="bg-white rounded-lg border border-gray-200 p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Hash className="w-4 h-4 text-gold-primary" />
            <h3 className="text-sm font-semibold text-gray-900">{t.filters.sections.brands}</h3>
          </div>
          <button
            onClick={() => {
              if (selectedBrands.length === brandsList.length) {
                brandsList.forEach((brand) => onToggleBrand(brand));
              } else {
                brandsList.forEach((brand) => {
                  if (!selectedBrands.includes(brand)) {
                    onToggleBrand(brand);
                  }
                });
              }
            }}
            className="text-xs text-gold-primary hover:text-amber-600"
          >
            {selectedBrands.length === brandsList.length ? t.filters.clear : t.filters.all}
          </button>
        </div>

        <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
          {visibleBrands.map((brand) => (
            <button
              key={brand}
              onClick={() => onToggleBrand(brand)}
              className={`w-full p-2 rounded-md flex items-center justify-between text-sm ${
                selectedBrands.includes(brand)
                  ? "bg-gold-primary/10 text-gold-primary"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span className="font-medium">{brand}</span>
              <div
                className={`w-4 h-4 rounded border flex items-center justify-center ${
                  selectedBrands.includes(brand)
                    ? "bg-gold-primary border-gold-primary"
                    : "border-gray-300"
                }`}
              >
                {selectedBrands.includes(brand) && (
                  <Check className="w-2.5 h-2.5 text-white" />
                )}
              </div>
            </button>
          ))}

          {brandsList.length > 6 && (
            <button
              onClick={() => setBrandsExpanded(!brandsExpanded)}
              className="w-full text-xs text-gray-500 hover:text-gray-700 py-1.5 flex items-center justify-center gap-1"
            >
              {brandsExpanded ? t.filters.showLess : t.filters.showMore}
              {brandsExpanded ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Price Range - Compact */}
      <div className="bg-white rounded-lg border border-gray-200 p-3">
        <div className="flex items-center gap-1.5 mb-2">
          <DollarSign className="w-4 h-4 text-gold-primary" />
          <h3 className="text-sm font-semibold text-gray-900">{t.filters.sections.price}</h3>
        </div>
        <div className="space-y-1.5">
          {pricePresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onPricePresetChange(preset.id)}
              className={`w-full p-2 text-xs rounded-md text-left ${
                pricePreset === preset.id
                  ? "bg-gold-primary text-white font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sort - Compact */}
      <div className="bg-white rounded-lg border border-gray-200 p-3">
        <div className="flex items-center gap-1.5 mb-2">
          <Sparkles className="w-4 h-4 text-gold-primary" />
          <h3 className="text-sm font-semibold text-gray-900">{t.filters.sections.sort}</h3>
        </div>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full p-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-primary"
        >
          <option value="default">{t.filters.sortOptions.default}</option>
          <option value="price-low">{t.filters.sortOptions.priceLow}</option>
          <option value="price-high">{t.filters.sortOptions.priceHigh}</option>
          <option value="year-new">{t.filters.sortOptions.yearNew}</option>
          <option value="year-old">{t.filters.sortOptions.yearOld}</option>
          <option value="name-a">{t.filters.sortOptions.nameA}</option>
          <option value="name-z">{t.filters.sortOptions.nameZ}</option>
        </select>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="w-full py-2 text-sm text-gray-500 hover:text-red-500 flex items-center justify-center gap-1.5"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        {t.filters.resetAll}
      </button>
    </div>
  );
}

// Compact Sub-components
function CategoriesFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  isMobile,
  t,
}: {
  categories: Array<{ id: string; name: string; icon: React.ReactNode }>;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  isMobile: boolean;
  t: any;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-900">{t.filters.sections.vehicleType}</h3>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`p-2.5 rounded-md text-xs flex flex-col items-center gap-1.5 ${
              selectedCategory === category.id
                ? "bg-gold-primary text-white"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            {category.icon}
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function PriceFilter({
  pricePreset,
  pricePresets,
  onPricePresetChange,
  isMobile,
  t,
}: {
  pricePreset: PricePreset;
  pricePresets: Array<{
    id: PricePreset;
    label: string;
    range: [number, number];
  }>;
  onPricePresetChange: (preset: PricePreset) => void;
  isMobile: boolean;
  t: any;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-900">{t.filters.sections.priceRange}</h3>
      <div className="grid grid-cols-2 gap-2">
        {pricePresets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onPricePresetChange(preset.id)}
            className={`p-2.5 rounded-md text-xs ${
              pricePreset === preset.id
                ? "bg-gold-primary text-white font-medium"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SortFilter({
  sortBy,
  onSortChange,
  isMobile,
  t,
}: {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  isMobile: boolean;
  t: any;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-900">{t.filters.sections.sortBy}</h3>
      <div className="space-y-1.5">
        {[
          {
            id: "default" as SortOption,
            label: t.filters.sortOptions.default,
            icon: <Sparkles className="w-4 h-4" />,
          },
          {
            id: "price-low" as SortOption,
            label: t.filters.sortOptions.priceLow,
            icon: <DollarSign className="w-4 h-4" />,
          },
          {
            id: "price-high" as SortOption,
            label: t.filters.sortOptions.priceHigh,
            icon: <DollarSign className="w-4 h-4" />,
          },
          {
            id: "year-new" as SortOption,
            label: t.filters.sortOptions.yearNew,
            icon: <Clock className="w-4 h-4" />,
          },
          {
            id: "year-old" as SortOption,
            label: t.filters.sortOptions.yearOld,
            icon: <Clock className="w-4 h-4" />,
          },
          {
            id: "name-a" as SortOption,
            label: t.filters.sortOptions.nameA,
            icon: <Hash className="w-4 h-4" />,
          },
          {
            id: "name-z" as SortOption,
            label: t.filters.sortOptions.nameZ,
            icon: <Hash className="w-4 h-4" />,
          },
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => onSortChange(option.id)}
            className={`w-full p-2.5 rounded-md flex items-center justify-between text-sm ${
              sortBy === option.id
                ? "bg-gold-primary/10 text-gold-primary"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2">
              {option.icon}
              <span
                className={`font-medium ${sortBy === option.id ? "text-gold-primary" : "text-gray-700"}`}
              >
                {option.label}
              </span>
            </div>
            {sortBy === option.id && (
              <Check className="w-4 h-4 text-gold-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}