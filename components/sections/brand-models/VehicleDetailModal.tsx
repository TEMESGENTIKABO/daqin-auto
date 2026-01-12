// ===== FILE: C:\Users\TEMEsgen\Desktop\Boru\daqin-auto\components\sections\brand-models\VehicleDetailModal.tsx =====

"use client";

import Image from 'next/image';
import { X, Phone, MessageCircle, Car, Users, Fuel, Cog, Battery, Zap } from 'lucide-react';
import { VehicleModel } from '@/data/models';
import { useLanguage } from '@/context/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';

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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 md:p-4">
      <div className="bg-white rounded-xl md:rounded-2xl max-w-4xl w-full max-h-[90vh] md:max-h-[95vh] overflow-y-auto">
        {/* Mobile Header - Sticky */}
        <div className="sticky top-0 bg-white z-10 border-b p-4 md:hidden">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-black truncate">
                {vehicle.brand} {vehicle.model}
              </h2>
              <p className="text-sm text-gray-600">
                {vehicle.year} • {vehicle.category}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 md:p-6">
          {/* Desktop Header */}
          <div className="hidden md:flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                {vehicle.brand} {vehicle.model}
              </h2>
              <p className="text-gray-600">
                {vehicle.year} Model • {vehicle.category}
                {vehicle.status && (
                  <span className={`ml-3 px-2 py-1 rounded text-xs md:text-sm ${
                    vehicle.status === 'New' ? 'bg-green-100 text-green-800' :
                    vehicle.status === 'In Stock' ? 'bg-blue-100 text-blue-800' :
                    vehicle.status === 'Coming Soon' ? 'bg-purple-100 text-purple-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {vehicle.status}
                  </span>
                )}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
            {vehicle.images.map((image, index) => (
              <div key={index} className="relative h-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden">
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
            <div className="mb-6 p-4 bg-gradient-to-r from-gold-primary/10 to-transparent rounded-lg md:rounded-xl">
              <p className="text-base md:text-lg font-semibold text-gold-primary">{vehicle.tagline}</p>
            </div>
          )}

          {/* Price Display */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">FOB Price</p>
                <p className="text-2xl md:text-3xl font-bold text-gold-primary">
                  ${vehicle.priceUSD.toLocaleString()}
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${vehicle.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {vehicle.available ? 'Available Now' : 'Sold Out'}
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Specifications */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-black mb-4 flex items-center gap-2">
                <Cog className="w-5 h-5 text-gold-primary" />
                Specifications
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    Engine
                  </span>
                  <span className="font-medium">{vehicle.specs.engine}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Power
                  </span>
                  <span className="font-medium">{vehicle.specs.power}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Cog className="w-4 h-4" />
                    Transmission
                  </span>
                  <span className="font-medium">{vehicle.specs.transmission}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Fuel className="w-4 h-4" />
                    Fuel Type
                  </span>
                  <span className="font-medium">{vehicle.specs.fuelType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Seats
                  </span>
                  <span className="font-medium">{vehicle.specs.seats}</span>
                </div>
                {vehicle.specs.fuelConsumption && (
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Fuel Consumption</span>
                    <span className="font-medium">{vehicle.specs.fuelConsumption}</span>
                  </div>
                )}
                {vehicle.specs.range && (
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Battery className="w-4 h-4" />
                      Range
                    </span>
                    <span className="font-medium">{vehicle.specs.range}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features & Description */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-black mb-4">Key Features</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {vehicle.features.slice(0, 6).map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs md:text-sm"
                  >
                    {feature}
                  </span>
                ))}
                {vehicle.features.length > 6 && (
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs">
                    +{vehicle.features.length - 6} more
                  </span>
                )}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-black mb-4">Description</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">{vehicle.description}</p>
            </div>
          </div>

          {/* Contact CTA - Mobile Bottom Sheet */}
          <div className="mt-8 bg-gradient-to-r from-gold-primary/5 to-transparent rounded-xl p-4 md:p-6">
            <h4 className="font-semibold text-black mb-3">Interested in this vehicle?</h4>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Contact us for pricing, availability, and shipping details.
            </p>
            
            {/* Mobile Action Buttons */}
            <div className="md:hidden flex flex-col gap-3">
              <a
                href={`https://wa.me/+8615594634955?text=Hi, I'm interested in the ${vehicle.brand} ${vehicle.model} (${vehicle.year}). Please send me more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${t.common.phone}`}
                className="flex items-center justify-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Call Now</span>
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/+8615594634955?text=Hi, I'm interested in the ${vehicle.brand} ${vehicle.model} (${vehicle.year}). Please send me more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${t.common.phone}`}
                className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Call Now</span>
              </a>
              <a
                href="mailto:sales@daqinauto.com"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Email Inquiry</span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
              <p>• Response within 24 hours • Free consultation • Worldwide shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}