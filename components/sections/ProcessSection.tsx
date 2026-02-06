"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, Shield, Clock, Globe, ArrowRight } from "lucide-react";

const defaultSteps = [
  {
    title: "Initial Consultation",
    description: "We understand your requirements, budget, and timeline",
    icon: <Clock className="w-7 h-7" />,
  },
  {
    title: "Vehicle Selection",
    description:
      "We source suitable vehicles and provide detailed specifications",
    icon: <Shield className="w-7 h-7" />,
  },
  {
    title: "Quality Inspection",
    description: "Comprehensive pre-shipment inspection with detailed report",
    icon: <CheckCircle className="w-7 h-7" />,
  },
  {
    title: "Shipping & Delivery",
    description: "Door-to-door delivery",
    icon: <Globe className="w-7 h-7" />,
  },
];

export default function ProcessSection() {
  const { t } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-12 md:py-20 bg-white animate-pulse relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-4" />
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-6 h-48" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const steps = t.process?.steps || defaultSteps;

  return (
    <section
      className="py-12 md:py-20 relative overflow-hidden"
      aria-label="Export Process Section"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: 'url("/images/process.png")' }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* ✅ MODERN BOXED HEADER */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div
            className="
              relative text-center
              bg-white/70 backdrop-blur-xl
              border border-white/40
              rounded-2xl
              px-6 py-6 sm:px-8 sm:py-7
              max-w-3xl
              shadow-xl shadow-black/10
            "
          >
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-gold-primary bg-gold-primary/15 rounded-full mb-4 border border-gold-primary/20">
              {t.common.process}
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3 tracking-tight">
              {t.process.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
              {t.process.subtitle}
            </p>

            <div className="absolute inset-x-16 -bottom-px h-px bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" />
          </div>
        </div>

        {/* Desktop Steps */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-gold-primary/20 via-gold-primary/40 to-gold-primary/20" />

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step: any, index: number) => (
                <div
                  key={step.title}
                  className="relative group"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(0)}
                >
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        activeStep === index
                          ? "border-gold-primary bg-gold-primary/20 scale-110"
                          : "border-white/80 bg-white/50"
                      }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          activeStep === index
                            ? "bg-gold-primary text-white"
                            : "bg-white/80 text-gold-primary"
                        }`}
                      >
                        {React.cloneElement(defaultSteps[index].icon, {
                          className: "w-8 h-8",
                        })}
                      </div>
                    </div>

                    <div
                      className={`absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border ${
                        activeStep === index
                          ? "bg-gold-primary text-white scale-125 border-gold-primary"
                          : "bg-white/80 text-gray-700 border-white/50"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div
                    className={`text-center p-6 rounded-xl border transition-all ${
                      activeStep === index
                        ? "border-gold-primary/30 bg-gold-primary/10 shadow-lg"
                        : "border-white/50 bg-white/60"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-800">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute top-10 right-0 translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-gold-primary/70" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step: any, index: number) => (
            <div
              key={step.title}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50"
              onClick={() => setActiveStep(activeStep === index ? -1 : index)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-primary/10 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>

              {activeStep === index && (
                <p className="mt-4 text-sm text-gray-800">{step.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://wa.me/+8615594634955"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-primary to-gold-primary/90 text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            {t.common.getStarted}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
