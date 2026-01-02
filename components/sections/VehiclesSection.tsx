"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Zap, Battery, Fuel, Settings } from "lucide-react";
import { vehicleTypes } from "@/data/vehicles";

const icons = {
  ev: Zap,
  phev: Battery,
  reev: Fuel,
  petrol: Settings,
};

export default function VehiclesSection() {
  const { t } = useLanguage();

  return (
    <section id="vehicles" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t.vehicles?.title || "Vehicle Types"}
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            {t.vehicles?.subtitle ||
              "We supply all types of vehicles to meet diverse market needs"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicleTypes.map((vehicle) => {
            const Icon = icons[vehicle.id as keyof typeof icons] || Settings;
            return (
              <div
                key={vehicle.id}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-gold-primary hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform"></div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-baseline space-x-2 mb-3">
                    <span className="text-3xl font-bold text-black">
                      {vehicle.name}
                    </span>
                    <span className="text-sm text-gray-dark">
                      {vehicle.fullName}
                    </span>
                  </div>

                  <p className="text-gray-dark mb-6">{vehicle.description}</p>

                  <ul className="space-y-2">
                    {vehicle.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-gold-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-black to-gray-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gold-primary mb-6">
                {t.vehicles?.custom?.title || "Need Custom Vehicle Solutions?"}
              </h3>
              <p className="text-gray-300 mb-6">
                {t.vehicles?.custom?.description ||
                  "We can source specific vehicle models, configurations, and modifications to meet your exact requirements and market demands."}
              </p>
              <a
                href="#contact"
                className="btn-primary bg-white text-black hover:bg-gray-100 inline-flex items-center space-x-2"
              >
                <span>
                  {t.vehicles?.custom?.button || "Discuss Requirements"}
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label:
                    t.vehicles?.options?.handDrive || "Left/Right Hand Drive",
                  value: "Available",
                },
                {
                  label: t.vehicles?.options?.specs || "Custom Specifications",
                  value: "Supported",
                },
                {
                  label: t.vehicles?.options?.bulk || "Bulk Orders",
                  value: "Discounts",
                },
                {
                  label: t.vehicles?.options?.warranty || "Warranty",
                  value: "Included",
                },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-gray-300">{item.label}</div>
                  <div className="text-lg font-semibold text-gold-primary">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
