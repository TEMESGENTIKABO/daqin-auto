"use client";

import Image from "next/image";
import {
  X,
  Phone,
  MessageCircle,
  Car,
  Users,
  Fuel,
  Cog,
  Battery,
  Zap,
} from "lucide-react";
import { VehicleModel } from "@/data/models";
import { useLanguage } from "@/context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";

interface VehicleDetailModalProps {
  vehicle: VehicleModel;
  onClose: () => void;
  compareList: string[]; // Keep this if you still need it for other components
  onToggleCompare: (modelId: string) => void;
}

export default function VehicleDetailModal({
  vehicle,
  onClose,
  compareList,
  onToggleCompare,
}: VehicleDetailModalProps) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-1 md:p-2">
      <div className="bg-white rounded-lg md:rounded-xl max-w-3xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto">
        {/* Mobile Header - Sticky */}
        <div className="sticky top-0 bg-white z-10 border-b p-3 md:hidden">
          <div className="flex justify-between items-center">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-black truncate">
                {vehicle.brand} {vehicle.model}
              </h2>
              <p className="text-xs text-gray-600 truncate">
                {vehicle.year} • {vehicle.category}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-3 md:p-4">
          {/* Desktop Header */}
          <div className="hidden md:flex justify-between items-start mb-4">
            <div className="min-w-0">
              <h2 className="text-xl md:text-2xl font-bold text-black truncate">
                {vehicle.brand} {vehicle.model}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm text-gray-600 truncate">
                  {vehicle.year} • {vehicle.category}
                </p>
                {vehicle.status && (
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${
                      vehicle.status === "New"
                        ? "bg-green-100 text-green-800"
                        : vehicle.status === "In Stock"
                        ? "bg-blue-100 text-blue-800"
                        : vehicle.status === "Coming Soon"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {vehicle.status === "Limited Edition"
                      ? "Limited"
                      : vehicle.status}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Gallery - Compact */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {vehicle.images.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="relative h-32 md:h-40 rounded-md overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${vehicle.brand} ${vehicle.model} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
            {vehicle.images.length > 3 && (
              <div className="relative h-32 md:h-40 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  +{vehicle.images.length - 3} more
                </span>
              </div>
            )}
          </div>

          {/* Tagline - Compact */}
          {vehicle.tagline && (
            <div className="mb-4 p-3 bg-gradient-to-r from-gold-primary/5 to-transparent rounded-md">
              <p className="text-sm font-semibold text-gold-primary">
                {vehicle.tagline}
              </p>
            </div>
          )}

          {/* Price Display - Compact */}
          <div className="mb-4 p-3 bg-gray-50 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-600 mb-1">FOB Price</p>
                <p className="text-xl font-bold text-gold-primary">
                  ${vehicle.priceUSD.toLocaleString()}
                </p>
              </div>
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  vehicle.available
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {vehicle.available ? "Available" : "Sold Out"}
              </div>
            </div>
          </div>

          {/* Compare Button - Compact */}
          <div className="mb-4">
            <button
              onClick={() => onToggleCompare(vehicle.id)}
              className={`w-full py-2 rounded-md text-sm font-medium transition-colors ${
                compareList.includes(vehicle.id)
                  ? "bg-gold-primary text-white hover:bg-gold-primary/90"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {compareList.includes(vehicle.id)
                ? "✓ Added to Compare"
                : "Add to Compare"}
            </button>
          </div>

          {/* Details Grid - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Specifications */}
            <div>
              <h3 className="text-base font-semibold text-black mb-3 flex items-center gap-1.5">
                <Cog className="w-4 h-4 text-gold-primary" />
                Specifications
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5" />
                    Engine
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.engine}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    Power
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.power}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Cog className="w-3.5 h-3.5" />
                    Transmission
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.transmission}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Fuel className="w-3.5 h-3.5" />
                    Fuel Type
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.fuelType}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    Seats
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.seats}
                  </span>
                </div>
                {vehicle.specs.fuelConsumption && (
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-xs text-gray-600">
                      Fuel Consumption
                    </span>
                    <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                      {vehicle.specs.fuelConsumption}
                    </span>
                  </div>
                )}
                {vehicle.specs.range && (
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-xs text-gray-600 flex items-center gap-1.5">
                      <Battery className="w-3.5 h-3.5" />
                      Range
                    </span>
                    <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                      {vehicle.specs.range}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Features & Description */}
            <div>
              <h3 className="text-base font-semibold text-black mb-3">
                Key Features
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {vehicle.features.slice(0, 6).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
                {vehicle.features.length > 6 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    +{vehicle.features.length - 6} more
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold text-black mb-2">
                Description
              </h3>
              <p className="text-gray-600 text-sm line-clamp-5">
                {vehicle.description}
              </p>
            </div>
          </div>

          {/* Contact CTA - Compact */}
          <div className="mt-4 bg-gradient-to-r from-gold-primary/5 to-transparent rounded-lg p-3">
            <h4 className="font-semibold text-black mb-2 text-sm">
              Interested in this vehicle?
            </h4>
            <p className="text-gray-600 mb-3 text-xs">
              Contact us for pricing, availability, and shipping details.
            </p>

            {/* Mobile Action Buttons */}
            <div className="md:hidden flex flex-col gap-2">
              <a
                href={`https://wa.me/+8615594634955?text=Hi, I'm interested in the ${vehicle.brand} ${vehicle.model} (${vehicle.year}). Please send me more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href={`tel:${t.common.phone}`}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Now</span>
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex flex-col sm:flex-row gap-2">
              <a
                href={`https://wa.me/+8615594634955?text=Hi, I'm interested in the ${vehicle.brand} ${vehicle.model} (${vehicle.year}). Please send me more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href={`tel:${t.common.phone}`}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Now</span>
              </a>
              <a
                href="mailto:sales@daqinauto.com"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
