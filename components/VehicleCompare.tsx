// ===== FILE: C:\Users\TEMEsgen\Desktop\Boru\daqin-auto\components\VehicleCompare.tsx =====

"use client";

import { useState } from 'react';
import { vehicleModels } from '@/data/models';
import { X, ChevronRight } from 'lucide-react';

interface VehicleCompareProps {
  selectedModels: string[];
  onRemoveModel: (modelId: string) => void;
  onClearAll: () => void;
}

export default function VehicleCompare({ 
  selectedModels, 
  onRemoveModel, 
  onClearAll 
}: VehicleCompareProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedVehicles = selectedModels.map(id => 
    vehicleModels.find(model => model.id === id)
  ).filter(Boolean) as Exclude<ReturnType<typeof vehicleModels['find']>, undefined>[];

  if (selectedVehicles.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-light rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-black">Compare Vehicles</h3>
          <p className="text-gray-dark mt-1">Select up to 4 vehicles to compare features</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gold-primary transition-colors"
          >
            <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
          <button
            onClick={onClearAll}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Selected Vehicles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {selectedVehicles.map(vehicle => (
          <div key={vehicle.id} className="bg-white rounded-xl p-4 border border-gray-200 relative">
            <button
              onClick={() => onRemoveModel(vehicle.id)}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
              title="Remove from comparison"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
            
            <div className="text-center">
              <h4 className="font-bold text-lg text-black">{vehicle.brand} {vehicle.model}</h4>
              <p className="text-gold-primary font-semibold">${vehicle.priceUSD.toLocaleString()}</p>
              <p className="text-sm text-gray-dark mt-1">{vehicle.year} • {vehicle.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table (only show when expanded) */}
      {isExpanded && (
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full">
            <thead className="bg-white">
              <tr>
                <th className="text-left p-4 border-b font-semibold text-black">Specification</th>
                {selectedVehicles.map(vehicle => (
                  <th key={vehicle.id} className="text-left p-4 border-b">
                    <div className="text-center">
                      <div className="font-bold text-black">{vehicle.brand} {vehicle.model}</div>
                      <div className="text-gold-primary font-medium">${vehicle.priceUSD.toLocaleString()}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Year */}
              <tr className="bg-white">
                <td className="p-4 border-b font-medium">Year</td>
                {selectedVehicles.map(vehicle => (
                  <td key={vehicle.id} className="p-4 border-b text-center">{vehicle.year}</td>
                ))}
              </tr>
              
              {/* Category */}
              <tr className="bg-gray-50">
                <td className="p-4 border-b font-medium">Category</td>
                {selectedVehicles.map(vehicle => (
                  <td key={vehicle.id} className="p-4 border-b text-center">{vehicle.category}</td>
                ))}
              </tr>
              
              {/* Engine */}
              <tr className="bg-white">
                <td className="p-4 border-b font-medium">Engine</td>
                {selectedVehicles.map(vehicle => (
                  <td key={vehicle.id} className="p-4 border-b text-center">{vehicle.specs.engine}</td>
                ))}
              </tr>
              
              {/* Power */}
              <tr className="bg-gray-50">
                <td className="p-4 border-b font-medium">Power</td>
                {selectedVehicles.map(vehicle => (
                  <td key={vehicle.id} className="p-4 border-b text-center">{vehicle.specs.power}</td>
                ))}
              </tr>
              
              {/* Transmission */}
              <tr className="bg-white">
                <td className="p-4 border-b font-medium">Transmission</td>
                {selectedVehicles.map(vehicle => (
                  <td key={vehicle.id} className="p-4 border-b text-center">{vehicle.specs.transmission}</td>
                ))}
              </tr>
              
              {/* Fuel Type */}
              <tr className="bg-gray-50">
                <td className="p-4 border-b font-medium">Fuel Type</td>
                {selectedVehicles.map(vehicle => (
                  <td key={vehicle.id} className="p-4 border-b text-center">{vehicle.specs.fuelType}</td>
                ))}
              </tr>
              
              {/* Seats */}
              <tr className="bg-white">
                <td className="p-4 border-b font-medium">Seats</td>
                {selectedVehicles.map(vehicle => (
                  <td key={vehicle.id} className="p-4 border-b text-center">{vehicle.specs.seats}</td>
                ))}
              </tr>
              
              {/* Top Features */}
              <tr className="bg-gray-50">
                <td className="p-4 border-b font-medium">Top Features</td>
                {selectedVehicles.map(vehicle => (
                  <td key={vehicle.id} className="p-4 border-b">
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      {vehicle.features.slice(0, 3).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => {
            // Here you could implement export or share functionality
            alert(`Comparing ${selectedVehicles.length} vehicles`);
          }}
          className="btn-primary"
        >
          Export Comparison
        </button>
        <a
          href="#contact"
          className="btn-secondary"
        >
          Get Quote for Selected
        </a>
      </div>
    </div>
  );
}