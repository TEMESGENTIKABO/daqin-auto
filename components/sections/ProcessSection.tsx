"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, Shield, Clock, Globe } from "lucide-react";

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t.process?.title || "Simple & Transparent Process"}
            </h2>
            <p className="text-xl text-gray-dark mb-8">
              {t.process?.subtitle ||
                "We make importing vehicles from China straightforward and risk-free"}
            </p>

            <div className="space-y-6">
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
                <div key={step.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                      {index === 0 && (
                        <Clock className="w-6 h-6 text-gold-primary" />
                      )}
                      {index === 1 && (
                        <Shield className="w-6 h-6 text-gold-primary" />
                      )}
                      {index === 2 && (
                        <CheckCircle className="w-6 h-6 text-gold-primary" />
                      )}
                      {index === 3 && (
                        <Globe className="w-6 h-6 text-gold-primary" />
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">
                      Step {index + 1}: {step.title}
                    </h4>
                    <p className="text-gray-dark">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Timeline */}
          <div className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-8">
              {t.process?.timeline?.title || "Typical Timeline"}
            </h3>

            <div className="space-y-8">
              {(
                t.process?.timeline?.phases || [
                  { phase: "Consultation & Quotation", time: "1-2 days" },
                  { phase: "Vehicle Sourcing", time: "3-7 days" },
                  { phase: "Documentation & Payment", time: "2-3 days" },
                  { phase: "Shipping Preparation", time: "5-10 days" },
                  { phase: "Sea Shipping", time: "30-45 days" },
                  { phase: "Customs & Delivery", time: "5-7 days" },
                ]
              ).map((item: any, index: number) => (
                <div
                  key={item.phase}
                  className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gold-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium text-black">{item.phase}</span>
                  </div>
                  <span className="text-gold-primary font-semibold">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gold-primary/5 rounded-xl">
              <p className="text-gray-dark">
                <span className="font-semibold text-black">Note:</span>{" "}
                {t.process?.timeline?.note ||
                  "Timeline may vary based on vehicle availability, shipping route, and destination country regulations."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
