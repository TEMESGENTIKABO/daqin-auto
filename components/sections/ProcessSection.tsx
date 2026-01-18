"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { CheckCircle, Shield, Clock, Globe, ArrowRight } from "lucide-react";

const defaultSteps = [
  {
    title: "Initial Consultation",
    description: "We understand your requirements, budget, and timeline",
    icon: <Clock className="w-7 h-7" />,
  },
  {
    title: "Vehicle Selection",
    description: "We source suitable vehicles and provide detailed specifications",
    icon: <Shield className="w-7 h-7" />,
  },
  {
    title: "Quality Inspection",
    description: "Comprehensive pre-shipment inspection with detailed report",
    icon: <CheckCircle className="w-7 h-7" />,
  },
  {
    title: "Shipping & Delivery",
    description: "Door-to-door delivery with customs clearance support",
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 backdrop-blur-sm z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-6 h-48"></div>
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
      {/* Background Image with Subtle Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("/images/process.png")', // Change this to your image path
        }}
      >
        {/* Light overlay for better text contrast without hiding the image */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Very subtle blur to soften the image */}
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gold-primary bg-gold-primary/10 rounded-full mb-4 backdrop-blur-sm border border-gold-primary/20">
            {t.common?.process || "How It Works"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-sm">
            {t.process?.title || "Streamlined Export Process"}
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-3xl mx-auto px-4 backdrop-blur-sm bg-white/40 rounded-lg py-2 border border-white/50">
            {t.process?.subtitle ||
              "A transparent, step-by-step approach ensuring quality and timely delivery"}
          </p>
        </div>

        {/* Process Steps - Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-gold-primary/20 via-gold-primary/40 to-gold-primary/20 backdrop-blur-sm"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step: any, index: number) => (
                <div
                  key={step.title}
                  className="relative group"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(0)}
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center border-2 transition-all duration-300 backdrop-blur-sm ${
                      activeStep === index 
                        ? 'border-gold-primary bg-gold-primary/20 scale-110' 
                        : 'border-white/80 bg-white/50'
                    }`}>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                        activeStep === index 
                          ? 'bg-gold-primary text-white' 
                          : 'bg-white/80 text-gold-primary'
                      }`}>
                        <span className="sr-only">Step {index + 1}</span>
                        {React.cloneElement(defaultSteps[index].icon, {
                          className: `w-8 h-8 ${activeStep === index ? 'text-white' : 'text-gold-primary'}`
                        })}
                      </div>
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 backdrop-blur-sm border ${
                      activeStep === index 
                        ? 'bg-gold-primary text-white scale-125 border-gold-primary' 
                        : 'bg-white/80 text-gray-700 border-white/50'
                    }`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`text-center p-6 rounded-xl border transition-all duration-300 backdrop-blur-sm ${
                    activeStep === index 
                      ? 'border-gold-primary/30 bg-gold-primary/10 shadow-lg' 
                      : 'border-white/50 bg-white/60'
                  }`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 transition-colors duration-300 drop-shadow-sm">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Arrow (except last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 right-0 transform translate-x-1/2">
                      <ArrowRight className={`w-6 h-6 transition-all duration-300 backdrop-blur-sm ${
                        activeStep === index 
                          ? 'text-gold-primary opacity-100' 
                          : 'text-gray-500/70 opacity-70'
                      }`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile & Tablet Layout */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {steps.map((step: any, index: number) => (
              <div
                key={step.title}
                className="relative bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm"
                role="button"
                tabIndex={0}
                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveStep(activeStep === index ? -1 : index);
                  }
                }}
                aria-expanded={activeStep === index}
                aria-label={`Step ${index + 1}: ${step.title}. Click to ${activeStep === index ? 'collapse' : 'expand'} details`}
              >
                {/* Step Header */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gold-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold-primary/20">
                      <div className="w-10 h-10 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold backdrop-blur-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900 drop-shadow-sm">
                        {step.title}
                      </h3>
                      <div className={`transition-transform duration-300 ${
                        activeStep === index ? 'rotate-180' : ''
                      }`}>
                        <ArrowRight className="w-5 h-5 text-gold-primary transform rotate-90 drop-shadow-sm" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      {React.cloneElement(defaultSteps[index].icon, {
                        className: "w-4 h-4 text-gold-primary"
                      })}
                      <span className="text-sm text-gray-700">Step {index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Step Description (Collapsible) */}
                <div 
                  className={`mt-4 pl-16 overflow-hidden transition-all duration-300 ${
                    activeStep === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  aria-hidden={activeStep !== index}
                >
                  <p className="text-gray-800 text-sm leading-relaxed pb-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-gold-primary/15 to-gold-primary/25 rounded-2xl p-6 md:p-8 border border-gold-primary/30 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-2 drop-shadow-sm">
                {t.process?.ctaTitle || "Ready to Start Your Export Journey?"}
              </h3>
              <p className="text-gray-800 text-sm">
                {t.process?.ctaDescription || "Contact our experts for a personalized consultation"}
              </p>
            </div>
            <button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-primary to-gold-primary/90 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:ring-offset-2 whitespace-nowrap backdrop-blur-sm"
              onClick={() => {
                // Add your CTA action here
                console.log("Get started clicked");
              }}
              aria-label="Start your vehicle export process"
            >
              <span className="text-sm sm:text-base">
                {t.common?.getStarted || "Start Today"}
              </span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to handle React.cloneElement safely
const React = {
  cloneElement: (element: React.ReactElement, props: any) => {
    return { ...element, props: { ...element.props, ...props } };
  }
};