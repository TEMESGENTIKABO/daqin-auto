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
  Calendar,
  Gauge,
  Shield,
  Package,
} from "lucide-react";
import { VehicleModel } from "@/data/Models/ModelProvider";
import { useLanguage } from "@/context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";

// Price formatting helper function
const formatPrice = (priceUSD: number, t: any): string => {
  if (priceUSD === 0) {
    return t.featuredModels.negotiable || "Negotiable";
  }
  return `$${priceUSD.toLocaleString()}`;
};

// Check if price is negotiable
const isNegotiablePrice = (priceUSD: number): boolean => {
  return priceUSD === 0;
};

interface VehicleDetailModalProps {
  vehicle: VehicleModel;
  onClose: () => void;
}

export default function VehicleDetailModal({
  vehicle,
  onClose,
}: VehicleDetailModalProps) {
  const { t } = useLanguage();
  const isNegotiable = isNegotiablePrice(vehicle.priceUSD);

  // Status translation mapping
  const getStatusTranslation = (status: string) => {
    const statusMap: Record<string, string> = {
      New: t.featuredModels.statusNew || "New",
      "In Stock": t.featuredModels.statusInStock || "In Stock",
      "Coming Soon": t.featuredModels.statusSoon || "Soon",
      "Best Seller": t.featuredModels.statusBest || "Best",
      "Limited Edition": t.featuredModels.statusLimited || "Limited",
      "Pre-Order": t.featuredModels.statusPreOrder || "Pre-Order",
      "Special Edition": t.featuredModels.statusSpecial || "Special",
    };
    return statusMap[status] || status;
  };

  // Get shortened status for display
  const getShortStatus = (status: string) => {
    if (status === "Limited Edition")
      return t.featuredModels.statusLimited || "Limited";
    if (status === "Coming Soon") return t.featuredModels.statusSoon || "Soon";
    return getStatusTranslation(status);
  };

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
                            : vehicle.status === "Best Seller"
                              ? "bg-orange-100 text-orange-800"
                              : vehicle.status === "Limited Edition"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {getShortStatus(vehicle.status)}
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
          <div
            className={`mb-4 p-3 rounded-md border ${
              isNegotiable
                ? "bg-white border-gray-200"
                : "bg-gray-50 border-transparent"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-600 mb-1">
                  {isNegotiable
                    ? t.vehicles.requestQuote || "Price"
                    : t.featuredModels.fobChina || "FOB Price"}
                </p>
                <div className="flex items-center gap-2">
                  <p
                    className={`text-xl font-bold ${
                      isNegotiable ? "text-gray-900" : "text-gold-primary"
                    }`}
                  >
                    {formatPrice(vehicle.priceUSD, t)}
                  </p>
                  {vehicle.discount &&
                    vehicle.discount > 0 &&
                    !isNegotiable && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">
                        -{vehicle.discount}%
                      </span>
                    )}
                </div>
                {isNegotiable && vehicle.promotion && (
                  <p className="text-xs text-gray-600 mt-1 italic">
                    {vehicle.promotion}
                  </p>
                )}
              </div>
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  vehicle.available
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {vehicle.available
                  ? t.featuredModels.filterInStock || "Available"
                  : t.featuredModels.noModelsFound || "Sold Out"}
              </div>
            </div>
          </div>

          {/* Details Grid - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Specifications */}
            <div>
              <h3 className="text-base font-semibold text-black mb-3 flex items-center gap-1.5">
                <Cog className="w-4 h-4 text-gold-primary" />
                {t.vehicles.keySpecifications || "Specifications"}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {t.models.specs?.year || "Year"}
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.year}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5" />
                    {t.models.specs?.engine || "Engine"}
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.engine}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    {t.models.specs?.power || "Power"}
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.power}
                  </span>
                </div>
                {vehicle.specs.torque && (
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-xs text-gray-600 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5" />
                      {t.models.specs?.torque || "Torque"}
                    </span>
                    <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                      {vehicle.specs.torque}
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Cog className="w-3.5 h-3.5" />
                    {t.models.specs?.transmission || "Transmission"}
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.transmission}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Fuel className="w-3.5 h-3.5" />
                    {t.models.specs?.fuelType || "Fuel Type"}
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.fuelType}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-xs text-gray-600 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {t.models.specs?.seats || "Seats"}
                  </span>
                  <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                    {vehicle.specs.seats}
                  </span>
                </div>
                {vehicle.specs.fuelConsumption && (
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-xs text-gray-600">
                      {t.models.specs?.fuelConsumption || "Fuel Consumption"}
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
                      {t.models.specs?.range || "Range"}
                    </span>
                    <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                      {vehicle.specs.range}
                    </span>
                  </div>
                )}
                {vehicle.specs.warranty && (
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-xs text-gray-600 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      {t.models.specs?.warranty || "Warranty"}
                    </span>
                    <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                      {vehicle.specs.warranty}
                    </span>
                  </div>
                )}
                {vehicle.specs.payload && (
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-xs text-gray-600 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5" />
                      {t.models.specs?.payload || "Payload"}
                    </span>
                    <span className="text-sm font-medium truncate ml-2 max-w-[140px]">
                      {vehicle.specs.payload}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Features & Description */}
            <div>
              <h3 className="text-base font-semibold text-black mb-3">
                {t.vehicles.mainFeatures || "Key Features"}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {vehicle.features.slice(0, 8).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
                {vehicle.features.length > 8 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    +{vehicle.features.length - 8} more
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold text-black mb-2">
                {t.vehicles.portfolio || "Description"}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-5">
                {vehicle.description}
              </p>

              {/* Additional Info - Only colors remain */}
              <div className="mt-4">
                {vehicle.colors && vehicle.colors.length > 0 && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-600">
                      {t.models.specs?.colors || "Available colors"}:
                    </span>
                    <div className="flex gap-1">
                      {vehicle.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{
                            backgroundColor:
                              color.toLowerCase() === "white"
                                ? "#ffffff"
                                : color.toLowerCase(),
                          }}
                          title={color}
                        />
                      ))}
                      {vehicle.colors.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{vehicle.colors.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact CTA - Compact */}
          <div className="mt-4 bg-gradient-to-r from-gold-primary/5 to-transparent rounded-lg p-3">
            <h4 className="font-semibold text-black mb-2 text-sm">
              {isNegotiable
                ? t.vehicles.requestQuote || "Request Custom Quote"
                : t.contact.preferToSpeakDirectly ||
                  "Interested in this vehicle?"}
            </h4>
            <p className="text-gray-600 mb-3 text-xs">
              {isNegotiable
                ? t.models.whatsappMessage
                    ?.replace("{brand}", vehicle.brand)
                    .replace("{model}", vehicle.model)
                    .replace("{year}", vehicle.year.toString())
                    .replace("{price}", formatPrice(vehicle.priceUSD, t)) ||
                  "Contact us for custom pricing, configurations, and bulk order discounts."
                : t.contact.salesTeamAvailable ||
                  "Contact us for pricing, availability, and shipping details."}
            </p>

            {/* Mobile Action Buttons */}
            <div className="md:hidden flex flex-col gap-2">
              <a
                href={`https://wa.me/+8615594634955?text=Hi, I'm interested in the ${vehicle.brand} ${vehicle.model} (${vehicle.year}). ${isNegotiable ? "Please provide pricing details and available configurations." : "Please send me more details."}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md hover:opacity-90 transition-colors text-sm ${
                  isNegotiable
                    ? "bg-gray-800 text-white hover:bg-gray-900"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                <FaWhatsapp className="w-4 h-4" />
                <span className="font-medium">
                  {isNegotiable
                    ? t.featuredModels.getQuote || "Get Quote"
                    : t.contact.whatsapp || "WhatsApp"}
                </span>
              </a>
              <a
                href={`tel:+8615594634955`}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">
                  {t.contact.callNow || "Call Now"}
                </span>
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex flex-col sm:flex-row gap-2">
              <a
                href={`https://wa.me/+8615594634955?text=Hi, I'm interested in the ${vehicle.brand} ${vehicle.model} (${vehicle.year}). ${isNegotiable ? "Please provide pricing details and available configurations." : "Please send me more details."}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md hover:opacity-90 transition-colors text-sm ${
                  isNegotiable
                    ? "bg-gray-800 text-white hover:bg-gray-900"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                <FaWhatsapp className="w-4 h-4" />
                <span className="font-medium">
                  {isNegotiable
                    ? t.featuredModels.getQuote || "Get Custom Quote"
                    : t.contact.whatsapp + " " + t.featuredModels.inquire ||
                      "WhatsApp Inquiry"}
                </span>
              </a>
              <a
                href={`tel:+8615594634955`}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">
                  {t.contact.callNow || "Call Now"}
                </span>
              </a>
              <a
                href="mailto:mamushjebessa@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium">
                  {t.contact.email + " " + t.featuredModels.inquire ||
                    "Email Inquiry"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
