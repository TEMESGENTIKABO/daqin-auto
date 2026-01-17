"use client";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import ModelsGrid from "@/components/sections/brand-models/ModelsGrid";
import VehicleDetailModal from "@/components/sections/brand-models/VehicleDetailModal";
import {
  Search,
  Car,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import type { VehicleModel } from "@/data/models";

interface ModelsUIProps {
  initialModels: VehicleModel[];
}

export default function ModelsUI({ initialModels }: ModelsUIProps) {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const brandParam = searchParams.get("brand");
  const searchQueryParam = searchParams.get("search");

  // State Management
  const [selectedBrand, setSelectedBrand] = useState<string>("All Vehicles");
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [brandError, setBrandError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const [searchQuery, setSearchQuery] = useState<string>(
    searchQueryParam || ""
  );
  const [isSearching, setIsSearching] = useState<boolean>(!!searchQueryParam);

  // Get ALL unique brands from the actual vehicle data
  const allModelBrands = useMemo(() => {
    return Array.from(new Set(initialModels.map((model) => model.brand))).sort(
      (a, b) => a.localeCompare(b)
    );
  }, [initialModels]);

  // Initialize selected brand from URL parameter
  useEffect(() => {
    if (brandParam) {
      // Check if the brand exists in our vehicle data (case-insensitive)
      const brandExists = allModelBrands.some(
        (brand) => brand.toLowerCase() === brandParam.toLowerCase()
      );

      if (brandExists) {
        // Find the exact brand name (case-sensitive match)
        const exactBrand =
          allModelBrands.find(
            (brand) => brand.toLowerCase() === brandParam.toLowerCase()
          ) || brandParam;

        setSelectedBrand(exactBrand);
        setBrandError("");
        setCurrentPage(1);
      } else {
        // Brand doesn't exist in vehicle data
        setSelectedBrand("All Vehicles");
        setBrandError(
          `No vehicles found for brand "${brandParam}". Showing all vehicles instead.`
        );
        setCurrentPage(1);

        // Optional: Remove the invalid brand from URL
        setTimeout(() => {
          router.replace("/models");
        }, 3000);
      }
    } else {
      setSelectedBrand("All Vehicles");
      setBrandError("");
      setCurrentPage(1);
    }
  }, [brandParam, allModelBrands, router]);

  // Initialize search from URL parameter
  useEffect(() => {
    if (searchQueryParam) {
      setSearchQuery(searchQueryParam);
      setIsSearching(true);
      setSelectedBrand("All Vehicles");
    } else {
      setSearchQuery("");
      setIsSearching(false);
    }
  }, [searchQueryParam]);

  // Filter models based on selected brand AND search query
  const filteredModels = useMemo(() => {
    let filtered = initialModels;

    // Apply brand filter
    if (selectedBrand !== "All Vehicles") {
      filtered = filtered.filter((model) => model.brand === selectedBrand);
    }

    // Apply search filter if there's a search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((model) => {
        return (
          model.brand.toLowerCase().includes(query) ||
          model.model.toLowerCase().includes(query) ||
          model.category.toLowerCase().includes(query) ||
          model.description.toLowerCase().includes(query) ||
          model.tagline?.toLowerCase().includes(query) ||
          model.specs.fuelType.toLowerCase().includes(query) ||
          model.features.some((feature) =>
            feature.toLowerCase().includes(query)
          )
        );
      });
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }

    return filtered;
  }, [initialModels, selectedBrand, searchQuery]);

  // Get count of vehicles per brand for display
  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    initialModels.forEach((model) => {
      counts[model.brand] = (counts[model.brand] || 0) + 1;
    });
    return counts;
  }, [initialModels]);

  // Pagination logic
  const totalItems = filteredModels.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate paginated models
  const paginatedModels = useMemo(() => {
    // For single brand view with no search, show all models (no pagination)
    if (selectedBrand !== "All Vehicles" && !isSearching) {
      return filteredModels;
    }

    // For All Brands view OR when searching, use pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredModels.slice(startIndex, endIndex);
  }, [filteredModels, currentPage, itemsPerPage, selectedBrand, isSearching]);

  // Reset to page 1 when brand changes or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrand, searchQuery]);

  // Handle brand selection
  const handleBrandSelect = (brand: string) => {
    // Set the selected brand
    setSelectedBrand(brand);
    setBrandError("");
    setCurrentPage(1);

    // Update URL with brand parameter
    const params = new URLSearchParams(searchParams.toString());

    if (brand === "All Vehicles") {
      params.delete("brand");
    } else {
      params.set("brand", brand);
      params.delete("search"); // Clear search when selecting a brand
    }

    router.push(`/models?${params.toString()}`, { scroll: false });
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Update URL with search parameter
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set("search", value.trim());
      params.delete("brand"); // Clear brand filter when searching
    } else {
      params.delete("search");
      // If a brand was previously selected, restore it
      if (selectedBrand !== "All Vehicles") {
        params.set("brand", selectedBrand);
      }
    }
    router.push(`/models?${params.toString()}`, { scroll: false });
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);

    // Update URL - preserve brand if one is selected
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");

    // If a brand is selected, keep it in the URL
    if (selectedBrand !== "All Vehicles") {
      params.set("brand", selectedBrand);
    }

    router.push(`/models?${params.toString()}`, { scroll: false });
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Already handled by handleSearchChange
    }
  };

  // WhatsApp handler
  const handleWhatsApp = useCallback((vehicle: VehicleModel) => {
    // Format the message
    const message = `Hello! I'm interested in the ${vehicle.brand} ${vehicle.model} (${vehicle.year}).\n\nPrice: ${vehicle.priceUSD === 0 ? "Negotiable" : `$${vehicle.priceUSD.toLocaleString()}`}\n\nCould you provide more details?`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp phone number
    const phoneNumber = "+8615594634955";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  }, []);

  const selectedVehicle = selectedModel
    ? initialModels.find((model) => model.id === selectedModel)
    : null;

  // Page change handlers
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  // Get search results message
  const getSearchMessage = () => {
    if (!isSearching) return null;

    if (filteredModels.length === 0) {
      return `No results found for "${searchQuery}"`;
    } else {
      return `${filteredModels.length} result${
        filteredModels.length !== 1 ? "s" : ""
      } found for "${searchQuery}"`;
    }
  };

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

          {/* Search Bar - Now functional */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-600" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by brand, model, category, features..."
                className="block w-full pl-9 pr-10 py-2.5 border-0 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-sm shadow-lg"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </form>
            {isSearching && (
              <p className="text-white text-xs mt-2 text-center">
                Search across brands, models, categories, and features
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Search Results Message */}
      {isSearching && (
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Search className="h-5 w-5 text-blue-500 mr-2" />
                <p className="text-blue-700 font-medium">
                  {getSearchMessage()}
                </p>
              </div>
              <button
                onClick={clearSearch}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Search
              </button>
            </div>
            {filteredModels.length > 0 && (
              <p className="text-blue-600 text-sm mt-1">
                Showing {Math.min(paginatedModels.length, itemsPerPage)} of{" "}
                {filteredModels.length} matching vehicles
              </p>
            )}
          </div>
        </div>
      )}

      {/* Brand Error Alert */}
      {brandError && !isSearching && (
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
              <p className="text-sm text-yellow-700">{brandError}</p>
            </div>
          </div>
        </div>
      )}

      {/* Vehicle Categories Grid - Hide when searching */}
      {!isSearching && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            {/* Title with Icon */}
            <div className="flex items-center mb-3">
              <Car className="w-5 h-5 text-gold-primary mr-2" />
              <h2 className="text-lg font-bold text-gold-primary">
                Vehicle Brands ({allModelBrands.length})
              </h2>
            </div>

            {/* Compact Grid of vehicle brands */}
            <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11 xl:grid-cols-13 gap-1.5">
              <button
                key="All Vehicles"
                onClick={() => handleBrandSelect("All Vehicles")}
                className={`
                  px-2 py-1.5 rounded-md text-xs font-medium transition-all duration-200 
                  whitespace-nowrap overflow-hidden text-ellipsis text-center 
                  transform hover:scale-[1.02] active:scale-[0.98]
                  ${
                    selectedBrand === "All Vehicles"
                      ? "bg-gold-primary text-white shadow-md ring-2 ring-gold-primary/30"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                  }
                `}
                title="All Vehicles"
              >
                <span className="block truncate">All Brands</span>
              </button>

              {allModelBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandSelect(brand)}
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
                  title={`${brand} (${brandCounts[brand] || 0} models)`}
                >
                  <span className="block truncate">{brand}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Compact */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Current Selection Header */}
        <div className="mb-4 px-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {isSearching
                  ? `Search Results (${totalItems})`
                  : selectedBrand === "All Vehicles"
                    ? `All Vehicle Models (${totalItems})`
                    : `${selectedBrand} (${filteredModels.length} Models)`}
              </h3>

              {/* Additional info line */}
              {(selectedBrand === "All Vehicles" || isSearching) &&
                totalPages > 1 && (
                  <p className="text-sm text-gray-600 mt-1">
                    {isSearching
                      ? `Page ${currentPage} of ${totalPages} • Showing ${paginatedModels.length} matching vehicles`
                      : `Page ${currentPage} of ${totalPages} • Showing ${paginatedModels.length} of ${totalItems} vehicles`}
                  </p>
                )}
            </div>

            {/* Items Per Page Selector (for All Brands view or search) */}
            {(selectedBrand === "All Vehicles" || isSearching) &&
              totalItems > 12 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Show:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gold-primary"
                  >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                    <option value="60">60</option>
                  </select>
                </div>
              )}
          </div>
        </div>

        {/* Models Grid */}
        <ModelsGrid
          vehicles={paginatedModels}
          onSelectModel={setSelectedModel}
          onWhatsApp={handleWhatsApp}
          viewMode={"grid"}
        />

        {/* Pagination - Show for All Brands view OR search results with multiple pages */}
        {(selectedBrand === "All Vehicles" || isSearching) &&
          totalPages > 1 && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-medium">
                  {(currentPage - 1) * itemsPerPage + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, totalItems)}
                </span>{" "}
                of <span className="font-medium">{totalItems}</span> vehicles
              </div>

              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md border ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gold-primary"
                  }`}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                  {getPageNumbers().map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => goToPage(pageNumber)}
                      className={`w-8 h-8 rounded-md text-sm font-medium ${
                        currentPage === pageNumber
                          ? "bg-gold-primary text-white"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  {/* Ellipsis for many pages */}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <span className="px-2 text-gray-500">...</span>
                  )}

                  {/* Last page button */}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <button
                      onClick={() => goToPage(totalPages)}
                      className={`w-8 h-8 rounded-md text-sm font-medium ${
                        currentPage === totalPages
                          ? "bg-gold-primary text-white"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {totalPages}
                    </button>
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md border ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gold-primary"
                  }`}
                  aria-label="Next page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

        {/* Compact Empty State */}
        {filteredModels.length === 0 && (
          <div className="text-center py-8 bg-white rounded-lg border border-gray-200 mt-6">
            <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {isSearching ? "No search results found" : "No vehicles found"}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {isSearching
                ? `No vehicles found for "${searchQuery}". Try different keywords.`
                : selectedBrand === "All Vehicles"
                  ? "No vehicles available at the moment."
                  : `No ${selectedBrand} vehicles available.`}
            </p>
            <div className="flex gap-2 justify-center">
              {isSearching && (
                <button
                  onClick={clearSearch}
                  className="px-3 py-1.5 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors text-sm"
                >
                  Clear Search
                </button>
              )}
              {selectedBrand !== "All Vehicles" && !isSearching && (
                <button
                  onClick={() => handleBrandSelect("All Vehicles")}
                  className="px-3 py-1.5 bg-gold-primary text-white font-medium rounded-md hover:bg-gold-primary/90 transition-colors text-sm"
                >
                  View All Brands
                </button>
              )}
            </div>
          </div>
        )}

        {/* Brands Summary (when viewing all vehicles and not searching) */}
        {selectedBrand === "All Vehicles" &&
          !isSearching &&
          filteredModels.length > 0 && (
            <div className="mt-8 bg-white rounded-lg border border-gray-200 p-4">
              <h4 className="font-semibold text-gray-900 mb-3">
                Brands Available ({allModelBrands.length})
              </h4>
              <div className="flex flex-wrap gap-2">
                {allModelBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleBrandSelect(brand)}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gold-primary rounded-full text-sm transition-colors"
                  >
                    {brand}{" "}
                    <span className="text-gray-500 text-xs ml-1">
                      ({brandCounts[brand] || 0})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
      </div>

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedModel(null)}
        />
      )}
    </main>
  );
}