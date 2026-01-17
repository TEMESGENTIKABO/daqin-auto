"use client";

import VehicleCard from "./VehicleCard";
import { VehicleModel } from "@/data/models"; // Import from data/models
import { ViewMode } from "./types"; // Only import ViewMode from types

interface ModelsGridProps {
  vehicles: VehicleModel[];
  viewMode: ViewMode;
  onSelectModel: (modelId: string) => void;
  onWhatsApp: (vehicle: VehicleModel) => void;
}

export default function ModelsGrid({
  vehicles,
  viewMode,
  onSelectModel,
  onWhatsApp,
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
        </p>
      </div>

      {/* Vehicles Grid/List */}
      <div className={viewMode === 'grid' 
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
        : 'space-y-6'
      }>
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            viewMode={viewMode}
            isInCompare={false}
            isCompareFull={false}
            onToggleCompare={() => {}} // Empty function for compatibility
            onSelectModel={onSelectModel}
            onWhatsApp={onWhatsApp}
          />
        ))}
      </div>
    </div>
  );
}