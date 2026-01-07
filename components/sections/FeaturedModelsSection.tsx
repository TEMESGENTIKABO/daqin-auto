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

  // Filter models based on active filter
  const filteredModels = featuredModels.filter((model) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "new") return model.status === "New";
    if (activeFilter === "stock") return model.status === "In Stock";
    if (activeFilter === "coming") return model.status === "Coming Soon";
    return true;
  });

  // Status badge configuration
  const statusConfig = {
    New: {
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      icon: <Zap className="w-3 h-3" />,
      label: "New Arrival",
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
      label: "Limited Edition",
    },
  };

  const toggleCompare = (modelId: string) => {
    if (compareList.includes(modelId)) {
      setCompareList(compareList.filter((id) => id !== modelId));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, modelId]);
    }
  };

  return (
    <>
      <section id="models" className="py-8 md:py-16 bg-gray-light">
        <div className="section-container px-4">
          {/* Header with title left and button right - Always horizontal */}
          <div className="flex justify-between items-center mb-6 md:mb-8 gap-3 md:gap-4">
            {/* Left side: Title with icon */}
            <div className="flex items-center gap-2 md:gap-3 flex-1">
              <div className="p-1.5 md:p-2 bg-gold-primary/10 rounded-lg">
                <Star className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gold-primary" />
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gold-primary">
                Featured Elite Models
              </h2>
            </div>

            {/* Right side: View All Models button */}
            <div className="flex-shrink-0">
              <a
                href="/models"
                className="flex items-center justify-center gap-1 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2.5 bg-gold-primary text-white rounded-lg hover:bg-gold-primary/90 transition-colors whitespace-nowrap text-xs md:text-sm font-medium shadow-sm"
              >
                <span className="hidden sm:inline">View All Models</span>
                <span className="sm:hidden">All</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>
          </div>

          {/* Filter Tabs - Horizontal scroll on mobile */}
          <div className="mb-8 md:mb-10">
            <div className="flex md:flex-wrap gap-1.5 md:gap-2 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 md:px-5 py-1.5 rounded-lg text-xs md:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
                  activeFilter === "all"
                    ? "bg-gold-primary text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gold-primary hover:text-gold-primary"
                }`}
              >
                All Models
              </button>
              <button
                onClick={() => setActiveFilter("new")}
                className={`px-3 md:px-5 py-1.5 rounded-lg text-xs md:text-sm transition-all whitespace-nowrap flex items-center space-x-1 md:space-x-1.5 flex-shrink-0 ${
                  activeFilter === "new"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-green-500 hover:text-green-600"
                }`}
              >
                <Zap className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>New Arrivals</span>
              </button>
              <button
                onClick={() => setActiveFilter("stock")}
                className={`px-3 md:px-5 py-1.5 rounded-lg text-xs md:text-sm transition-all whitespace-nowrap flex items-center space-x-1 md:space-x-1.5 flex-shrink-0 ${
                  activeFilter === "stock"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>In Stock</span>
              </button>
              <button
                onClick={() => setActiveFilter("coming")}
                className={`px-3 md:px-5 py-1.5 rounded-lg text-xs md:text-sm transition-all whitespace-nowrap flex items-center space-x-1 md:space-x-1.5 flex-shrink-0 ${
                  activeFilter === "coming"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-purple-500 hover:text-purple-600"
                }`}
              >
                <Clock className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>Coming Soon</span>
              </button>
            </div>
          </div>

          {/* Models Grid - Smaller cards on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredModels.map((model) => {
              const status =
                statusConfig[model.status as keyof typeof statusConfig] ||
                statusConfig["In Stock"];

              return (
                <div
                  key={model.id}
                  className="group bg-white rounded-lg md:rounded-xl overflow-hidden border border-gray-200 hover:border-gold-primary hover:shadow-md md:hover:shadow-lg transition-all duration-300"
                >
                  {/* Image Section - Smaller on mobile */}
                  <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
                    <Image
                      src={model.images[0] || "/images/placeholder.jpg"}
                      alt={`${model.brand} ${model.model}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Status Badge - Smaller on mobile */}
                    <div className="absolute top-2 left-2 md:top-3 md:left-3">
                      <div
                        className={`flex items-center space-x-1 px-2 py-1 md:px-2.5 md:py-1 rounded-full ${status.bgColor} ${status.textColor} text-xs font-medium`}
                      >
                        <span className="hidden sm:inline">{status.icon}</span>
                        <span className="text-xs">{status.label}</span>
                      </div>
                    </div>

                    {/* Price Tag - Smaller on mobile */}
                    <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-black/80 text-white px-2 py-1 md:px-3 md:py-1.5 rounded-lg backdrop-blur-sm">
                      <div className="text-base md:text-lg font-bold">
                        ${model.priceUSD.toLocaleString()}
                      </div>
                      <div className="text-xs opacity-80">FOB China</div>
                    </div>

                    {/* Category Badge - Smaller on mobile */}
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs">
                      {model.category}
                    </div>
                  </div>

                  {/* Content Section - Smaller padding on mobile */}
                  <div className="p-3 md:p-4 lg:p-5">
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-baseline justify-between mb-1 md:mb-2">
                        <h3 className="text-base md:text-lg font-bold text-black truncate">
                          {model.brand} {model.model}
                        </h3>
                        <span className="text-xs md:text-sm text-gray-500 flex-shrink-0 ml-2">
                          {model.year}
                        </span>
                      </div>

                      <p className="text-gold-primary text-xs md:text-sm font-medium mb-2 md:mb-3 line-clamp-1">
                        {model.tagline}
                      </p>

                      <p className="text-gray-dark text-xs md:text-sm line-clamp-2 mb-3 md:mb-4">
                        {model.description}
                      </p>
                    </div>

                    {/* Action Buttons - Both buttons same size now */}
                    <div className="flex space-x-1.5 md:space-x-2">
                      <button
                        onClick={() => setSelectedModel(model)}
                        className="flex-1 px-2.5 py-1.5 md:px-3 md:py-2 bg-gold-primary text-white rounded-lg hover:bg-gold-primary/90 transition-colors flex items-center justify-center space-x-1 md:space-x-1.5 text-xs md:text-sm"
                      >
                        <span>Details</span>
                      </button>
                      <a
                        href={`https://wa.me/+8615594634955?text=Interested in ${model.brand} ${model.model}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-2.5 py-1.5 md:px-3 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-1 md:space-x-1.5 text-xs md:text-sm"
                      >
                        <FaWhatsapp className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
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

      {/* Add CSS for scrollbar hiding on mobile filters */}
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