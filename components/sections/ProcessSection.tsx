"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, Shield, Clock, Globe } from "lucide-react";

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t.process?.title || "Simple & Transparent Process"}
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            {t.process?.subtitle ||
              "We make importing vehicles from China straightforward and risk-free"}
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {(
            t.process?.steps || [
              {
                title: "Initial Consultation",
                description:
                  "We understand your requirements, budget, and timeline",
              },
              {
                title: "Vehicle Selection",
                description:
                  "We source suitable vehicles and provide detailed specifications",
              },
              {
                title: "Quality Inspection",
                description:
                  "Comprehensive pre-shipment inspection with detailed report",
              },
              {
                title: "Shipping & Delivery",
                description:
                  "Door-to-door delivery with customs clearance support",
              },
            ]
          ).map((step: any, index: number) => (
            <div
              key={step.title}
              className="bg-gradient-to-br from-gray-light to-white rounded-xl p-6 border border-gray-200 hover:border-gold-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center mb-4">
                  {index === 0 && (
                    <Clock className="w-8 h-8 text-gold-primary" />
                  )}
                  {index === 1 && (
                    <Shield className="w-8 h-8 text-gold-primary" />
                  )}
                  {index === 2 && (
                    <CheckCircle className="w-8 h-8 text-gold-primary" />
                  )}
                  {index === 3 && (
                    <Globe className="w-8 h-8 text-gold-primary" />
                  )}
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gold-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-black">
                    {step.title}
                  </h4>
                </div>
                
                <p className="text-gray-dark text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}