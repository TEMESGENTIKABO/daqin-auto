// ===== FILE: C:\Users\TEMEsgen\Desktop\Boru\daqin-auto\components\sections\brand-models\VehicleCard.tsx =====

"use client";

import Image from "next/image";
import { Check, GitCompare } from "lucide-react";
import { VehicleModel, ViewMode } from "./types";

interface VehicleCardProps {
  vehicle: VehicleModel;
  viewMode: ViewMode;
  isInCompare: boolean;
  isCompareFull: boolean;
  onToggleCompare: (modelId: string) => void;
  onSelectModel: (modelId: string) => void;
}

export default function VehicleCard({
  vehicle,
  viewMode,
  isInCompare,
  isCompareFull,
  onToggleCompare,
  onSelectModel,
}: VehicleCardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gold-primary hover:shadow-xl transition-all relative cursor-pointer ${
        viewMode === 'list' ? 'flex' : ''
      } ${isInCompare ? 'ring-2 ring-gold-primary' : ''}`}
      onClick={() => onSelectModel(vehicle.id)}
    >
      {/* Compare Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleCompare(vehicle.id);
        }}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all ${
          isInCompare
            ? 'bg-gold-primary text-white'
            : isCompareFull
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-white/90 text-gray-700 hover:bg-gray-100'
        }`}
        title={isCompareFull ? "Maximum 4 vehicles for comparison" : "Add to compare"}
        disabled={isCompareFull && !isInCompare}
      >
        {isInCompare ? (
          <Check className="w-4 h-4" />
        ) : (
          <GitCompare className="w-4 h-4" />
        )}
      </button>

      {/* Image */}
      <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'h-48'}`}>
        <Image
          src={vehicle.images[0] || '/images/placeholder.jpg'}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover"
          sizes={viewMode === 'list' ? '33vw' : '(max-width: 768px) 100vw, 33vw'}
        />
        <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
          {vehicle.category}
        </div>
        {!vehicle.available && (
          <div className="absolute top-3 right-16 bg-red-500 text-white px-2 py-1 rounded text-sm">
            Sold Out
          </div>
        )}
        {vehicle.status === 'New' && (
          <div className="absolute top-3 right-16 bg-green-500 text-white px-2 py-1 rounded text-sm">
            New
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-black">
              {vehicle.brand} {vehicle.model}
            </h3>
            <p className="text-gray-dark">{vehicle.year} Model</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gold-primary">
              ${vehicle.priceUSD.toLocaleString()}
            </div>
            <p className="text-sm text-gray-dark">FOB China</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-sm">
            <span className="text-gray-dark">Engine:</span>
            <span className="font-medium ml-1">{vehicle.specs.engine}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-dark">Power:</span>
            <span className="font-medium ml-1">{vehicle.specs.power}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-dark">Transmission:</span>
            <span className="font-medium ml-1">{vehicle.specs.transmission}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-dark">Fuel:</span>
            <span className="font-medium ml-1">{vehicle.specs.fuelType}</span>
          </div>
        </div>

        <p className="text-gray-dark text-sm mb-4 line-clamp-2">
          {vehicle.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-1">
            {vehicle.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-light text-xs rounded"
              >
                {feature}
              </span>
            ))}
            {vehicle.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-light text-xs rounded">
                +{vehicle.features.length - 3} more
              </span>
            )}
          </div>
          <button className="text-gold-primary hover:text-gold-dark font-medium flex items-center space-x-1">
            <span>View Details</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}