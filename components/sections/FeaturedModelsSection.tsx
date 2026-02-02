"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getFeaturedModels } from "@/data/models";
import { Clock, CheckCircle, Zap, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import VehicleDetailModal from "./brand-models/VehicleDetailModal";
import { VehicleModel as VehicleModelType } from "@/data/models";

// Price formatting helper function
const formatPrice = (priceUSD: number): string => {
  if (priceUSD === 0) {
    return "Negotiable";
  }
  return `$${priceUSD.toLocaleString()}`;
};

// Check if price is negotiable
const isNegotiablePrice = (priceUSD: number): boolean => {
  return priceUSD === 0;
};

export default function FeaturedModelsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "new" | "stock" | "coming"
  >("all");
  const [selectedModel, setSelectedModel] = useState<VehicleModelType | null>(
    null
  );

  const featuredModels = getFeaturedModels();

  // Status badge configuration - Compact
  const statusConfig = {
    New: {
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      icon: <Zap className="w-2.5 h-2.5" />,
      label: "New",
    },
    "In Stock": {
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      icon: <CheckCircle className="w-2.5 h-2.5" />,
      label: "In Stock",
    },
    "Coming Soon": {
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      icon: <Clock className="w-2.5 h-2.5" />,
      label: "Soon",
    },
    "Limited Edition": {
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      icon: <Zap className="w-2.5 h-2.5" />,
      label: "Limited",
    },
    "Best Seller": {
      bgColor: "bg-orange-100",
      textColor: "text-orange-800",
      icon: <Star className="w-2.5 h-2.5" />,
      label: "Best",
    },
    "Pre-Order": {
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800",
      icon: <Clock className="w-2.5 h-2.5" />,
      label: "Pre-Order",
    },
    "Special Edition": {
      bgColor: "bg-pink-100",
      textColor: "text-pink-800",
      icon: <Star className="w-2.5 h-2.5" />,
      label: "Special",
    },
  };

  // Filter models based on active filter
  const getFilteredModels = () => {
    const filtered = featuredModels.filter((model) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "new") return model.status === "New";
      if (activeFilter === "stock") return model.status === "In Stock";
      if (activeFilter === "coming") return model.status === "Coming Soon";
      return true;
    });

    if (activeFilter === "all") {
      return filtered.slice(0, 9);
    }

    return filtered;
  };

  const filteredModels = getFilteredModels();

  return (
    <>
      <section id="models" className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Compact Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="relative mb-4">
              {/* Floating Badge with Title */}
              <div className="relative pl-12 pb-4">
                <div className="absolute left-0 top-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold-primary/20 rounded-full animate-ping"></div>
                    <div className="relative w-10 h-10 bg-gradient-to-br from-gold-primary to-yellow-400 rounded-full flex items-center justify-center shadow-md">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title and Subtitle */}
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-gold-primary">
                    Featured Models
                  </h2>
                  <p className="text-xs text-gray-600 mt-0.5 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gold-primary rounded-full"></span>
                    Premium selection from inventory
                  </p>
                </div>
              </div>

              {/* Thicker solid line across screen */}
              <div className="w-screen ml-[calc(-50vw+50%)] border-t-2 border-gray-300"></div>
            </div>

            {/* View All Models Link - Compact */}
            <a
              href="/models"
              className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-gold-primary text-white rounded-md hover:bg-gold-primary/90 transition-colors text-xs font-medium"
            >
              All Models
            </a>
          </div>

          {/* Compact Filter Tabs */}
          <div className="mb-4">
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-2.5 py-1.5 rounded-md text-xs transition-all whitespace-nowrap ${
                  activeFilter === "all"
                    ? "bg-gold-primary text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter("new")}
                className={`px-2.5 py-1.5 rounded-md text-xs transition-all whitespace-nowrap flex items-center gap-1 ${
                  activeFilter === "new"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-green-500 hover:text-green-600"
                }`}
              >
                <Zap className="w-3 h-3" />
                <span>New</span>
              </button>
              <button
                onClick={() => setActiveFilter("stock")}
                className={`px-2.5 py-1.5 rounded-md text-xs transition-all whitespace-nowrap flex items-center gap-1 ${
                  activeFilter === "stock"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                <CheckCircle className="w-3 h-3" />
                <span>In Stock</span>
              </button>
              <button
                onClick={() => setActiveFilter("coming")}
                className={`px-2.5 py-1.5 rounded-md text-xs transition-all whitespace-nowrap flex items-center gap-1 ${
                  activeFilter === "coming"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-purple-500 hover:text-purple-600"
                }`}
              >
                <Clock className="w-3 h-3" />
                <span>Soon</span>
              </button>
            </div>
          </div>

          {/* Models Grid - Compact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredModels.map((model) => {
              const status =
                statusConfig[model.status as keyof typeof statusConfig] ||
                statusConfig["In Stock"];
              
              const isNegotiable = isNegotiablePrice(model.priceUSD);

              return (
                <div
                  key={model.id}
                  className="group bg-white rounded-md overflow-hidden border border-gray-200 hover:border-gold-primary hover:shadow-md transition-all duration-200 cursor-pointer"
                  onClick={() => setSelectedModel(model)}
                >
                  {/* Image Section - Keep original size */}
                  <div className="relative h-52 md:h-56 overflow-hidden">
                    <Image
                      src={model.images[0] || "/images/placeholder.jpg"}
                      alt={`${model.brand} ${model.model}`}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Status Badge - Compact */}
                    <div className="absolute top-2 left-2">
                      <div
                        className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-full ${status.bgColor} ${status.textColor} text-[11px] font-medium`}
                      >
                        {status.icon}
                        <span>{status.label}</span>
                      </div>
                    </div>

                    {/* Price Tag - Professional Style */}
                    <div className={`absolute bottom-2 right-2 px-2 py-1.5 rounded-md border ${
                      isNegotiable 
                        ? "bg-white/95 border-gray-300 text-gray-800 shadow-sm" 
                        : "bg-black/90 text-white border-transparent"
                    }`}>
                      <div className={`text-sm font-bold ${isNegotiable ? "text-gray-900" : ""}`}>
                        {formatPrice(model.priceUSD)}
                      </div>
                      <div className={`text-[10px] ${isNegotiable ? "text-gray-600" : "opacity-90"}`}>
                        {isNegotiable ? "Contact for quote" : "FOB China"}
                      </div>
                    </div>

                    {/* Discount Badge if available */}
                    {model.discount && model.discount > 0 && !isNegotiable && (
                      <div className="absolute top-2 left-12 bg-red-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                        -{model.discount}%
                      </div>
                    )}

                    {/* Featured Badge */}
                    {model.featured && (
                      <div className="absolute top-2 right-2 bg-gold-primary text-white px-2 py-0.5 rounded-md text-[10px] font-bold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content Section - Compact */}
                  <div className="p-3">
                    {/* Brand & Model Name - Compact */}
                    <div className="mb-2">
                      <h3 className="text-sm font-bold text-gray-900 truncate">
                        {model.brand} {model.model}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-xs text-gray-600">
                          {model.year}
                        </span>
                        <span className="text-[10px] text-gray-400">•</span>
                        <span className="text-xs text-gray-600">
                          {model.specs.fuelType}
                        </span>
                        {model.rating && (
                          <>
                            <span className="text-[10px] text-gray-400">•</span>
                            <span className="flex items-center text-xs text-amber-600">
                              ★ {model.rating.toFixed(1)}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Category & Features - Compact */}
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-[11px] rounded">
                          {model.category}
                        </span>
                        
                        {/* Show key feature if available */}
                        {model.features && model.features.length > 0 && (
                          <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] rounded truncate max-w-[120px]">
                            {model.features[0]}
                          </span>
                        )}
                      </div>

                      {/* Promotional message for negotiable prices */}
                      {isNegotiable && model.promotion && (
                        <div className="mt-1.5 text-[11px] text-gray-600 italic truncate">
                          {model.promotion}
                        </div>
                      )}

                      {/* Tagline if available */}
                      {model.tagline && !isNegotiable && (
                        <div className="mt-1 text-xs text-gray-600 truncate">
                          {model.tagline}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons - Compact */}
                    <div className="flex gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedModel(model);
                        }}
                        className="flex-1 px-2 py-1.5 bg-gold-primary text-white rounded-md hover:bg-gold-primary/90 transition-colors flex items-center justify-center gap-1 text-xs font-medium"
                      >
                        Details
                      </button>
                      <a
                        href={`https://wa.me/+8615594634955?text=Hi, I'm interested in the ${model.brand} ${model.model} (${model.year}). ${isNegotiable ? 'Please provide pricing details.' : 'Can you tell me more about this model?'}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 px-2 py-1.5 rounded-md hover:opacity-90 transition-colors flex items-center justify-center gap-1 text-xs font-medium ${
                          isNegotiable 
                            ? "bg-gray-800 text-white hover:bg-gray-900" 
                            : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                      >
                        <FaWhatsapp className="w-3 h-3" />
                        <span>{isNegotiable ? "Get Quote" : "Inquire"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results Message - Compact */}
          {filteredModels.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-300 mb-3">
                <Zap className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-base font-semibold text-gray-700 mb-1">
                No Models Found
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                No models match current filter.
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="px-3 py-1.5 bg-gold-primary text-white rounded-md hover:bg-gold-primary/90 transition-colors text-xs font-medium"
              >
                Show All Models
              </button>
            </div>
          )}

          {/* Mobile View All Button - Compact */}
          <div className="mt-4 text-center">
            <a
              href="/models"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-gold-primary text-white rounded-md hover:bg-gold-primary/90 transition-colors text-xs font-medium"
            >
              View All Models
            </a>
          </div>
        </div>
      </section>

      {/* Vehicle Detail Modal */}
      {selectedModel && (
        <VehicleDetailModal
          vehicle={selectedModel}
          onClose={() => setSelectedModel(null)}
        />
      )}

      {/* CSS */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Custom hover scale */
        .group-hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        /* Animation for ping effect */
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}