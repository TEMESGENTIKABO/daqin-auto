"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useRef } from "react";
import {
  Zap,
  Battery,
  Fuel,
  Settings,
  ChevronRight,
  ChevronDown,
  X,
  Check,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Vehicle types data - now using translations
const getVehicleTypes = (t: any) => [
  {
    id: "ev",
    name: t.vehicles.ev.name,
    fullName: t.vehicles.ev.fullName,
    description: t.vehicles.ev.description,
    features: t.vehicles.ev.features,
    specifications: t.vehicles.ev.specifications,
    icon: Zap,
    color: "emerald",
  },
  {
    id: "phev",
    name: t.vehicles.phev.name,
    fullName: t.vehicles.phev.fullName,
    description: t.vehicles.phev.description,
    features: t.vehicles.phev.features,
    specifications: t.vehicles.phev.specifications,
    icon: Battery,
    color: "blue",
  },
  {
    id: "reev",
    name: t.vehicles.reev.name,
    fullName: t.vehicles.reev.fullName,
    description: t.vehicles.reev.description,
    features: t.vehicles.reev.features,
    specifications: t.vehicles.reev.specifications,
    icon: Fuel,
    color: "amber",
  },
  {
    id: "petrol",
    name: t.vehicles.petrol.name,
    fullName: t.vehicles.petrol.fullName,
    description: t.vehicles.petrol.description,
    features: t.vehicles.petrol.features,
    specifications: t.vehicles.petrol.specifications,
    icon: Settings,
    color: "gray",
  },
];

const colorClasses = {
  emerald: {
    bg: "bg-emerald-500",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    hover: "hover:border-emerald-300",
  },
  blue: {
    bg: "bg-blue-500",
    light: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    hover: "hover:border-blue-300",
  },
  amber: {
    bg: "bg-amber-500",
    light: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
    hover: "hover:border-amber-300",
  },
  gray: {
    bg: "bg-gray-600",
    light: "bg-gray-50",
    text: "text-gray-600",
    border: "border-gray-100",
    hover: "hover:border-gray-300",
  },
};

export default function VehiclesSection() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showMobileDetails, setShowMobileDetails] = useState(false);
  const detailsPanelRef = useRef<HTMLDivElement>(null);

  const vehicleTypes = getVehicleTypes(t);

  // Handle mobile details panel
  useEffect(() => {
    if (activeId && window.innerWidth < 1024) {
      setShowMobileDetails(true);
    } else if (!activeId) {
      setShowMobileDetails(false);
    }
  }, [activeId]);

  // Close mobile details when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        detailsPanelRef.current &&
        !detailsPanelRef.current.contains(event.target as Node) &&
        showMobileDetails &&
        window.innerWidth < 1024
      ) {
        setShowMobileDetails(false);
        setActiveId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMobileDetails]);

  const selectedVehicle = vehicleTypes.find((v) => v.id === activeId);
  const colors = selectedVehicle
    ? colorClasses[selectedVehicle.color as keyof typeof colorClasses]
    : null;

  return (
    <section
      id="vehicles"
      className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white"
      aria-label="Vehicle Types"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 px-2">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-gradient-to-r from-transparent to-gold-primary"></div>
            <span className="text-sm font-medium text-gold-primary uppercase tracking-wider">
              {t.vehicles.portfolio}
            </span>
            <div className="h-px w-6 bg-gradient-to-l from-transparent to-gold-primary"></div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t.vehicles.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.vehicles.subtitle}
          </p>
        </div>

        {/* Mobile Details Panel Overlay */}
        <AnimatePresence>
          {showMobileDetails && selectedVehicle && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              />

              {/* Details Panel */}
              <motion.div
                ref={detailsPanelRef}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 lg:hidden max-h-[85vh] overflow-y-auto"
              >
                {/* Drag Handle */}
                <div className="pt-4 px-4">
                  <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto"></div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setShowMobileDetails(false);
                    setActiveId(null);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Details Content */}
                <div className="p-6">
                  <div
                    className={`${colors?.light} rounded-xl p-5 mb-6 border ${colors?.border}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl ${colors?.bg} flex items-center justify-center`}
                      >
                        {selectedVehicle.icon && (
                          <selectedVehicle.icon className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900">
                          {selectedVehicle.fullName}
                        </h2>
                        <p className={`text-sm font-medium ${colors?.text}`}>
                          {selectedVehicle.name}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedVehicle.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t.vehicles.keySpecifications}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedVehicle.specifications.map(
                        (spec: any, index: number) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-3 text-center"
                          >
                            <div className="text-xs font-medium text-gray-500 mb-1">
                              {spec.label}
                            </div>
                            <div className="text-sm font-bold text-gray-900">
                              {spec.value}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t.vehicles.mainFeatures}
                    </h3>
                    <ul className="space-y-2.5">
                      {selectedVehicle.features.map(
                        (feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <div
                              className={`flex-shrink-0 w-6 h-6 rounded-full ${colors?.light} flex items-center justify-center mt-0.5`}
                            >
                              <Check className={`w-3 h-3 ${colors?.text}`} />
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button
                      className="w-full py-3.5 bg-gradient-to-r from-gold-primary to-gold-primary/90 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-gold-primary focus:ring-offset-2"
                      onClick={() => {
                        console.log(`Inquire about ${selectedVehicle.name}`);
                        setShowMobileDetails(false);
                      }}
                      aria-label={`Inquire about ${selectedVehicle.fullName}`}
                    >
                      {t.vehicles.requestDetails.replace(
                        "{name}",
                        selectedVehicle.name,
                      )}
                    </button>

                    <button
                      className="w-full py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors duration-300 active:scale-[0.98]"
                      onClick={() => {
                        setShowMobileDetails(false);
                        setActiveId(null);
                      }}
                    >
                      {t.vehicles.viewAllVehicles}
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {vehicleTypes.map((vehicle, index) => {
            const Icon = vehicle.icon;
            const vehicleColors =
              colorClasses[vehicle.color as keyof typeof colorClasses];
            const isActive = activeId === vehicle.id;

            return (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <button
                  onClick={() => {
                    setActiveId(vehicle.id);
                    if (window.innerWidth < 1024) {
                      setShowMobileDetails(true);
                    }
                  }}
                  className={`w-full h-full text-left p-5 sm:p-6 rounded-xl border-2 transition-all duration-300 active:scale-[0.98] ${
                    isActive
                      ? `${vehicleColors.border} bg-white shadow-lg scale-[1.02]`
                      : `${vehicleColors.border} bg-white hover:shadow-md`
                  } ${vehicleColors.hover} touch-manipulation`}
                  aria-expanded={isActive}
                  aria-label={`View details for ${vehicle.fullName}`}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gold-primary rounded-full flex items-center justify-center z-10"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg ${vehicleColors.bg} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                            {vehicle.name}
                          </h3>
                          <p className="text-sm text-gray-500 truncate">
                            {vehicle.fullName}
                          </p>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-2 ${
                            isActive ? "text-gold-primary" : ""
                          }`}
                        />
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {vehicle.description}
                      </p>

                      {/* Quick Specs (Mobile) */}
                      <div className="mt-3 flex flex-wrap gap-2 sm:hidden">
                        {vehicle.specifications
                          .slice(0, 2)
                          .map((spec: any, idx: number) => (
                            <div
                              key={idx}
                              className="px-2 py-1 bg-gray-100 rounded-md"
                            >
                              <span className="text-xs font-medium text-gray-600">
                                {spec.label}:{" "}
                                <span className="font-bold">{spec.value}</span>
                              </span>
                            </div>
                          ))}
                      </div>

                      {/* Desktop Quick View */}
                      <div className="hidden sm:block">
                        <div className="mt-4 flex items-center text-sm font-medium text-gold-primary">
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Details Panel */}
        <AnimatePresence>
          {activeId && selectedVehicle && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block mt-8"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Header Section */}
                  <div
                    className={`md:col-span-1 ${colors?.light} p-8 border-r ${colors?.border}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-20 h-20 rounded-xl ${colors?.bg} flex items-center justify-center`}
                      >
                        {selectedVehicle.icon && (
                          <selectedVehicle.icon className="w-10 h-10 text-white" />
                        )}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {selectedVehicle.fullName}
                        </h2>
                        <p className={`text-base font-medium ${colors?.text}`}>
                          {selectedVehicle.name}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {selectedVehicle.description}
                    </p>

                    <button
                      className="w-full py-3 bg-gradient-to-r from-gold-primary to-gold-primary/90 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:ring-offset-2"
                      onClick={() =>
                        console.log(`Inquire about ${selectedVehicle.name}`)
                      }
                      aria-label={`Inquire about ${selectedVehicle.fullName}`}
                    >
                      {t.vehicles.requestQuote}
                    </button>
                  </div>

                  {/* Specifications & Features */}
                  <div className="md:col-span-2 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Specifications */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-gold-primary" />
                          {t.vehicles.keySpecifications}
                        </h3>
                        <div className="space-y-4">
                          {selectedVehicle.specifications.map(
                            (spec: any, index: number) => (
                              <div
                                key={index}
                                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                              >
                                <span className="text-gray-600">
                                  {spec.label}
                                </span>
                                <span className="font-semibold text-gray-900">
                                  {spec.value}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Check className="w-5 h-5 text-gold-primary" />
                          {t.vehicles.mainFeatures}
                        </h3>
                        <ul className="space-y-3">
                          {selectedVehicle.features.map(
                            (feature: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div
                                  className={`flex-shrink-0 w-6 h-6 rounded-full ${colors?.light} flex items-center justify-center mt-0.5`}
                                >
                                  <Check
                                    className={`w-3 h-3 ${colors?.text}`}
                                  />
                                </div>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Instructions */}
        {!showMobileDetails && (
          <div className="mt-6 text-center lg:hidden">
            <p className="text-sm text-gray-500 px-4">
              {t.vehicles.mobileInstructions}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
