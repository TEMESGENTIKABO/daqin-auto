"use client";

import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";
import type { VehicleModel } from "@/data/models";
import { ViewMode } from "./types";
interface VehicleCardProps {
  vehicle: VehicleModel;
  viewMode: ViewMode;
  isInCompare: boolean;
  isCompareFull: boolean;
  onToggleCompare: (modelId: string) => void;
  onSelectModel: (modelId: string) => void;
  onWhatsApp: (vehicle: VehicleModel) => void;
}

export default function VehicleCard({
  vehicle,
  viewMode,
  isInCompare,
  isCompareFull,
  onToggleCompare,
  onSelectModel,
  onWhatsApp,
}: VehicleCardProps) {
  const isGrid = viewMode === "grid";

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWhatsApp(vehicle);
  };

  const handleDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectModel(vehicle.id);
  };

  // Status badge configuration - Compact
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
  };

  const status = statusConfig[vehicle.status as keyof typeof statusConfig] || statusConfig["In Stock"];

  return (
    <div
      className={`group bg-white rounded-md overflow-hidden border border-gray-200 hover:border-gold-primary hover:shadow-md transition-all duration-200 ${isGrid ? "" : "flex"}`}
    >
      {/* Image Section - Compact */}
      <div className={`relative ${isGrid ? "h-44" : "w-1/3"}`}>
        <Image
          src={vehicle.images[0] || "/images/placeholder.jpg"}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover group-hover:scale-102 transition-transform duration-300"
          sizes={isGrid ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "33vw"}
        />

        {/* Status Badge - Compact */}
        <div className="absolute top-2 left-2">
          <div
            className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full ${status.bgColor} ${status.textColor} text-xs font-medium`}
          >
            <span className="text-[11px]">{status.label}</span>
          </div>
        </div>

        {/* Compare Button - Compact */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(vehicle.id);
          }}
          className={`absolute top-2 right-2 z-10 p-1.5 rounded-full transition-all text-xs ${
            isInCompare
              ? "bg-gold-primary text-white"
              : isCompareFull
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-white/90 text-gray-700 hover:bg-gray-100"
          }`}
          title={isCompareFull ? "Max 4 vehicles" : "Add to compare"}
          disabled={isCompareFull && !isInCompare}
        >
          <span className="font-medium">
            {isInCompare ? '✓' : 'VS'}
          </span>
        </button>

        {/* Price Tag - Compact */}
        <div className="absolute bottom-2 right-2 bg-black/90 text-white px-2 py-1 rounded-md">
          <div className="text-sm font-bold">
            ${vehicle.priceUSD?.toLocaleString()}
          </div>
          <div className="text-[10px] opacity-90">FOB China</div>
        </div>
      </div>

      {/* Content Section - Compact */}
      <div className={`p-3 ${isGrid ? "" : "w-2/3 flex flex-col justify-between"}`}>
        {/* Brand & Model - Compact */}
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
          </div>
          
          {/* Category - Compact */}
          <div className="mt-1.5">
            <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-[11px] rounded">
              {vehicle.category}
            </span>
          </div>
        </div>

        {/* Action Buttons - Compact */}
        <div className="flex gap-1.5">
          <button
            onClick={handleDetails}
            className="flex-1 px-2 py-1.5 bg-gold-primary text-white rounded-md hover:bg-gold-primary/90 transition-colors flex items-center justify-center gap-1 text-xs font-medium"
          >
            Details
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex-1 px-2 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-1 text-xs font-medium"
          >
            <FaWhatsapp className="w-3 h-3" />
            <span>Inquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}