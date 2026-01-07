// ===== FILE: C:\Users\TEMEsgen\Desktop\Boru\daqin-auto\components\sections\brand-models\ModelsGrid.tsx =====

"use client";

import Image from "next/image";
import { Check, GitCompare } from "lucide-react";
import { VehicleModel, ViewMode } from "./types";
import VehicleCard from "./VehicleCard";

interface ModelsGridProps {
  vehicles: VehicleModel[];
  viewMode: ViewMode;
  compareList: string[];
  onToggleCompare: (modelId: string) => void;
  onSelectModel: (modelId: string) => void;
  onClearCompare: () => void;
}

export default function ModelsGrid({
  vehicles,
  viewMode,
  compareList,
  onToggleCompare,
  onSelectModel,
  onClearCompare,
}: ModelsGridProps) {
  if (vehicles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-light rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🚗</span>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">No vehicles found</h3>
        <p className="text-gray-dark mb-6">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results Count */}
      <div className="flex justify-between items-center">
        <p className="text-gray-dark">
          Showing <span className="font-semibold text-black">{vehicles.length}</span> vehicles
          {compareList.length > 0 && (
            <span className="ml-4 text-gold-primary font-medium">
              {compareList.length} selected for compare
            </span>
          )}
        </p>
        {compareList.length > 0 && (
          <button
            onClick={onClearCompare}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Clear Compare
          </button>
        )}
      </div>

      {/* Vehicles Grid/List */}
      <div className={viewMode === 'grid' 
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
        : 'space-y-6'
      }>
        {vehicles.map((vehicle) => {
          const isInCompare = compareList.includes(vehicle.id);
          const isCompareFull = compareList.length >= 4;
          
          return (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              viewMode={viewMode}
              isInCompare={isInCompare}
              isCompareFull={isCompareFull}
              onToggleCompare={onToggleCompare}
              onSelectModel={onSelectModel}
            />
          );
        })}
      </div>
    </div>
  );
}