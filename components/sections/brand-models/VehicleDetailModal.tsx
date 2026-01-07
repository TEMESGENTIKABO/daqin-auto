// ===== FILE: C:\Users\TEMEsgen\Desktop\Boru\daqin-auto\components\sections\brand-models\VehicleDetailModal.tsx =====

"use client";

import Image from 'next/image';
import { X, Check, GitCompare, Phone, MessageSquare } from 'lucide-react';
import { VehicleModel } from './types';
import { useLanguage } from '@/context/LanguageContext';

interface VehicleDetailModalProps {
  vehicle: VehicleModel;
  onClose: () => void;
  compareList: string[];
  onToggleCompare: (modelId: string) => void;
}

export default function VehicleDetailModal({
  vehicle,
  onClose,
  compareList,
  onToggleCompare,
}: VehicleDetailModalProps) {
  const { t } = useLanguage();
  const isInCompare = compareList.includes(vehicle.id);
  const isCompareFull = compareList.length >= 4 && !isInCompare;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-black">
                {vehicle.brand} {vehicle.model}
              </h2>
              <p className="text-gray-dark">
                {vehicle.year} Model • {vehicle.category}
                {vehicle.status && (
                  <span className={`ml-3 px-2 py-1 rounded text-sm ${
                    vehicle.status === 'New' ? 'bg-green-100 text-green-800' :
                    vehicle.status === 'In Stock' ? 'bg-blue-100 text-blue-800' :
                    vehicle.status === 'Coming Soon' ? 'bg-purple-100 text-purple-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {vehicle.status}
                  </span>
                )}
              </p>
              
              {/* Compare button */}
              <div className="mt-4">
                <button
                  onClick={() => onToggleCompare(vehicle.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                    isInCompare
                      ? 'bg-gold-primary text-white border-gold-primary'
                      : 'border-gray-300 text-gray-700 hover:border-gold-primary hover:text-gold-primary'
                  } ${isCompareFull ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isCompareFull}
                >
                  {isInCompare ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Compare</span>
                    </>
                  ) : (
                    <>
                      <GitCompare className="w-4 h-4" />
                      <span>Add to Compare</span>
                    </>
                  )}
                </button>
                {isCompareFull && !isInCompare && (
                  <p className="text-sm text-red-500 mt-1">
                    Maximum 4 vehicles for comparison
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {vehicle.images.map((image, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={`${vehicle.brand} ${vehicle.model} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {/* Tagline */}
          {vehicle.tagline && (
            <div className="mb-8 p-4 bg-gradient-to-r from-gold-primary/10 to-transparent rounded-xl">
              <p className="text-lg font-semibold text-gold-primary">{vehicle.tagline}</p>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-dark">Price:</span>
                  <span className="font-semibold text-gold-primary text-lg">
                    ${vehicle.priceUSD.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-dark">Engine:</span>
                  <span className="font-medium">{vehicle.specs.engine}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-dark">Power:</span>
                  <span className="font-medium">{vehicle.specs.power}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-dark">Transmission:</span>
                  <span className="font-medium">{vehicle.specs.transmission}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-dark">Fuel Type:</span>
                  <span className="font-medium">{vehicle.specs.fuelType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-dark">Seats:</span>
                  <span className="font-medium">{vehicle.specs.seats}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-dark">Doors:</span>
                  <span className="font-medium">{vehicle.specs.doors}</span>
                </div>
                {vehicle.specs.fuelConsumption && (
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-dark">Fuel Consumption:</span>
                    <span className="font-medium">{vehicle.specs.fuelConsumption}</span>
                  </div>
                )}
                {vehicle.specs.range && (
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-dark">Range:</span>
                    <span className="font-medium">{vehicle.specs.range}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-dark">Availability:</span>
                  <span className={`font-medium ${vehicle.available ? 'text-green-600' : 'text-red-600'}`}>
                    {vehicle.available ? 'Available' : 'Sold Out'}
                  </span>
                </div>
              </div>
            </div>

            {/* Features & Description */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Features</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {vehicle.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-light rounded-lg text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-black mb-4">Description</h3>
              <p className="text-gray-dark mb-6">{vehicle.description}</p>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-gold-primary/10 to-transparent rounded-xl p-6">
                <h4 className="font-semibold text-black mb-3">Interested in this model?</h4>
                <p className="text-gray-dark mb-4">
                  Contact us for pricing, availability, and shipping details.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a
                    href={`tel:${t.common.phone}`}
                    className="btn-primary flex-1 text-center flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/+8615594634955?text=Interested in ${vehicle.brand} ${vehicle.model}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 text-center flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={() => onToggleCompare(vehicle.id)}
                    className={`flex-1 text-center px-6 py-3 rounded-lg border flex items-center justify-center space-x-2 ${
                      isInCompare
                        ? 'bg-gold-primary text-white border-gold-primary'
                        : 'border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white'
                    } transition-colors ${isCompareFull ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isCompareFull}
                  >
                    <GitCompare className="w-4 h-4" />
                    <span>{isInCompare ? '✓ In Compare' : 'Add to Compare'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}