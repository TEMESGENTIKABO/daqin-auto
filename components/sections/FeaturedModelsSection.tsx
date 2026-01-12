"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getFeaturedModels } from "@/data/models";
import { Clock, CheckCircle, Zap, Star, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import VehicleDetailModal from "./brand-models/VehicleDetailModal";
import { VehicleModel as VehicleModelType } from "@/data/models";

export default function FeaturedModelsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "new" | "stock" | "coming"
  >("all");
  const [selectedModel, setSelectedModel] = useState<VehicleModelType | null>(
    null
  );
  const [compareList, setCompareList] = useState<string[]>([]);

  const featuredModels = getFeaturedModels();

  // Status badge configuration
  const statusConfig = {
    New: {
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      icon: <Zap className="w-3 h-3" />,
      label: "New",
    },
    "In Stock": {
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      icon: <CheckCircle className="w-3 h-3" />,
      label: "In Stock",
    },
    "Coming Soon": {
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      icon: <Clock className="w-3 h-3" />,
      label: "Coming Soon",
    },
    "Limited Edition": {
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      icon: <Zap className="w-3 h-3" />,
      label: "Limited",
    },
    "Best Seller": {
      bgColor: "bg-orange-100",
      textColor: "text-orange-800",
      icon: <Star className="w-3 h-3" />,
      label: "Best Seller",
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

    // If filter is "all", show only 6 models initially
    // If user selects specific filter, show ALL models in that category
    if (activeFilter === "all") {
      return filtered.slice(0, 6);
    }
    
    return filtered;
  };

  const filteredModels = getFilteredModels();

  const toggleCompare = (modelId: string) => {
    if (compareList.includes(modelId)) {
      setCompareList(compareList.filter((id) => id !== modelId));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, modelId]);
    }
  };

  return (
    <>
      <section id="models" className="py-8 md:py-12 bg-gray-light">
        <div className="section-container px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold-primary/10 rounded-lg">
                <Star className="w-5 h-5 lg:w-6 lg:h-6 text-gold-primary" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Featured Models
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Premium selection from our inventory
                </p>
              </div>
            </div>

            {/* View All Models Link */}
            <a
              href="/models"
              className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-gold-primary text-white rounded-lg hover:bg-gold-primary/90 transition-colors text-sm font-medium"
            >
              View All Models
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Filter Tabs */}
          <div className="mb-8 md:mb-10">
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              <button
                onClick={() => setActiveFilter("new")}
                className={`px-4 py-2 rounded-lg text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeFilter === "new"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-green-500 hover:text-green-600"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>New Arrivals</span>
              </button>
              <button
                onClick={() => setActiveFilter("stock")}
                className={`px-4 py-2 rounded-lg text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeFilter === "stock"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>In Stock</span>
              </button>
              <button
                onClick={() => setActiveFilter("coming")}
                className={`px-4 py-2 rounded-lg text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeFilter === "coming"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-purple-500 hover:text-purple-600"
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Coming Soon</span>
              </button>
            </div>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredModels.map((model) => {
              const status =
                statusConfig[model.status as keyof typeof statusConfig] ||
                statusConfig["In Stock"];

              return (
                <div
                  key={model.id}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gold-primary hover:shadow-lg transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-52 md:h-56 overflow-hidden">
                    <Image
                      src={model.images[0] || "/images/placeholder.jpg"}
                      alt={`${model.brand} ${model.model}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <div
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-full ${status.bgColor} ${status.textColor} text-xs font-medium`}
                      >
                        {status.icon}
                        <span>{status.label}</span>
                      </div>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3 bg-black/90 text-white px-3 py-1.5 rounded-lg">
                      <div className="text-lg font-bold">
                        ${model.priceUSD.toLocaleString()}
                      </div>
                      <div className="text-xs opacity-90">FOB China</div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-full text-xs font-medium">
                      {model.category}
                    </div>
                  </div>

                  {/* Content Section - Minimal */}
                  <div className="p-4">
                    {/* Brand & Model Name Only */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-base font-bold text-gray-900 truncate">
                          {model.brand} {model.model}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-600">
                            {model.year}
                          </span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-sm text-gray-600">
                            {model.specs.fuelType}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedModel(model)}
                        className="flex-1 px-3 py-2.5 bg-gold-primary text-white rounded-lg hover:bg-gold-primary/90 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        View Details
                      </button>
                      <a
                        href={`https://wa.me/+8615594634955?text=Interested in ${model.brand} ${model.model}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results Message */}
          {filteredModels.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-300 mb-4">
                <Zap className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No Models Found
              </h3>
              <p className="text-gray-600 mb-4">
                No featured models match your current filter.
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="px-5 py-2.5 bg-gold-primary text-white rounded-lg hover:bg-gold-primary/90 transition-colors text-sm font-medium"
              >
                Show All Models
              </button>
            </div>
          )}

          {/* Mobile View All Button */}
          <div className="mt-8 md:hidden text-center">
            <a
              href="/models"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-primary text-white rounded-lg hover:bg-gold-primary/90 transition-colors text-sm font-medium"
            >
              View All Models
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Vehicle Detail Modal */}
      {selectedModel && (
        <VehicleDetailModal
          vehicle={selectedModel}
          onClose={() => setSelectedModel(null)}
          compareList={compareList}
          onToggleCompare={toggleCompare}
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
      `}</style>
    </>
  );
}