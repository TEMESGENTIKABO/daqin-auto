"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import type { VehicleModel } from "@/data/models";
import { ViewMode } from "./types";

interface VehicleCardProps {
  vehicle: VehicleModel;
  viewMode: ViewMode;
  onSelectModel: (modelId: string) => void;
  onWhatsApp: (vehicle: VehicleModel) => void;
}

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

export default function VehicleCard({
  vehicle,
  viewMode,
  onSelectModel,
  onWhatsApp,
}: VehicleCardProps) {
  const isGrid = viewMode === "grid";
  const isNegotiable = isNegotiablePrice(vehicle.priceUSD);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWhatsApp(vehicle);
  };

  const handleDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectModel(vehicle.id);
  };

  // Status badge configuration
  const statusConfig = {
    New: {
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      label: "New",
    },
    "In Stock": {
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      label: "In Stock",
    },
    "Coming Soon": {
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      label: "Soon",
    },
    "Limited Edition": {
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      label: "Limited",
    },
    "Best Seller": {
      bgColor: "bg-orange-100",
      textColor: "text-orange-800",
      label: "Best",
    },
    "Pre-Order": {
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800",
      label: "Pre-Order",
    },
    "Special Edition": {
      bgColor: "bg-pink-100",
      textColor: "text-pink-800",
      label: "Special",
    },
  };

  const status = statusConfig[vehicle.status as keyof typeof statusConfig] || statusConfig["In Stock"];

  return (
    <div
      className={`group bg-white rounded-md overflow-hidden border border-gray-200 hover:border-gold-primary hover:shadow-md transition-all duration-200 ${isGrid ? "" : "flex"} cursor-pointer`}
      onClick={handleDetails}
    >
      {/* Image Section */}
      <div className={`relative ${isGrid ? "h-44" : "w-1/3"}`}>
        <Image
          src={vehicle.images[0] || "/images/placeholder.jpg"}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover group-hover:scale-102 transition-transform duration-300"
          sizes={isGrid ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "33vw"}
        />

        {/* Status Badge */}
        <div className="absolute top-2 left-2">
          <div
            className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full ${status.bgColor} ${status.textColor} text-xs font-medium`}
          >
            <span className="text-[11px]">{status.label}</span>
          </div>
        </div>

        {/* Price Tag - Professional Style */}
        <div className={`absolute bottom-2 right-2 px-2 py-1.5 rounded-md border ${
          isNegotiable 
            ? "bg-white/95 border-gray-300 text-gray-800 shadow-sm" 
            : "bg-black/90 text-white border-transparent"
        }`}>
          <div className={`text-sm font-bold ${isNegotiable ? "text-gray-900" : ""}`}>
            {formatPrice(vehicle.priceUSD)}
          </div>
          <div className={`text-[10px] ${isNegotiable ? "text-gray-600" : "opacity-90"}`}>
            {isNegotiable ? "Contact for quote" : "FOB China"}
          </div>
        </div>

        {/* Discount Badge if available */}
        {vehicle.discount && vehicle.discount > 0 && !isNegotiable && (
          <div className="absolute top-2 left-12 bg-red-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
            -{vehicle.discount}%
          </div>
        )}

        {/* Featured Badge for featured models */}
        {vehicle.featured && (
          <div className="absolute top-2 right-2 bg-gold-primary text-white px-2 py-0.5 rounded-md text-[10px] font-bold">
            Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={`p-3 ${isGrid ? "" : "w-2/3 flex flex-col justify-between"}`}>
        {/* Brand & Model */}
        <div className="mb-2">
          <h3 className="text-sm font-bold text-gray-900 truncate leading-tight">
            {vehicle.brand} {vehicle.model}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-xs text-gray-600">
              {vehicle.year}
            </span>
            <span className="text-[10px] text-gray-400">•</span>
            <span className="text-xs text-gray-600">
              {vehicle.specs?.fuelType || "Petrol"}
            </span>
            {vehicle.rating && (
              <>
                <span className="text-[10px] text-gray-400">•</span>
                <span className="flex items-center text-xs text-amber-600">
                  ★ {vehicle.rating.toFixed(1)}
                </span>
              </>
            )}
          </div>
          
          {/* Category & Features */}
          <div className="mt-1.5 flex flex-wrap gap-1">
            <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-[11px] rounded">
              {vehicle.category}
            </span>
            
            {/* Show key feature if available */}
            {vehicle.features && vehicle.features.length > 0 && (
              <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] rounded truncate max-w-[120px]">
                {vehicle.features[0]}
              </span>
            )}
          </div>

          {/* Promotional message for negotiable prices */}
          {isNegotiable && vehicle.promotion && (
            <div className="mt-1.5 text-[11px] text-gray-600 italic">
              {vehicle.promotion}
            </div>
          )}

          {/* Tagline if available */}
          {vehicle.tagline && !isNegotiable && (
            <div className="mt-1 text-xs text-gray-600 truncate">
              {vehicle.tagline}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1.5">
          <button
            onClick={handleDetails}
            className="flex-1 px-2 py-1.5 bg-gold-primary text-white rounded-md hover:bg-gold-primary/90 transition-colors flex items-center justify-center gap-1 text-xs font-medium"
          >
            Details
          </button>
          <button
            onClick={handleWhatsApp}
            className={`flex-1 px-2 py-1.5 rounded-md hover:opacity-90 transition-colors flex items-center justify-center gap-1 text-xs font-medium ${
              isNegotiable 
                ? "bg-gray-800 text-white hover:bg-gray-900" 
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            <FaWhatsapp className="w-3 h-3" />
            <span>{isNegotiable ? "Get Quote" : "Inquire"}</span>
          </button>
        </div>

        {/* Quick specs for list view */}
        {!isGrid && vehicle.specs && (
          <div className="mt-2 pt-2 border-t border-gray-100 grid grid-cols-2 gap-1 text-[11px] text-gray-600">
            <div className="truncate">
              <span className="font-medium">Engine:</span> {vehicle.specs.engine?.split(" ")[0] || "N/A"}
            </div>
            <div className="truncate">
              <span className="font-medium">Power:</span> {vehicle.specs.power || "N/A"}
            </div>
            <div className="truncate">
              <span className="font-medium">Seats:</span> {vehicle.specs.seats || "N/A"}
            </div>
            <div className="truncate">
              <span className="font-medium">Trans:</span> {vehicle.specs.transmission?.substring(0, 4) || "N/A"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}