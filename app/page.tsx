"use client";
import Hero from "@/components/home/Hero";
import VehiclesSection from "@/components/sections/VehiclesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import { useLanguage } from "@/context/LanguageContext";
import BrandsModelsSection from "@/components/sections/brand-models/BrandsModelsSection";
import FeaturedModelsSection from "@/components/sections/FeaturedModelsSection";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <BrandsModelsSection />
        <FeaturedModelsSection />
        {/* About section removed */}
        <VehiclesSection />
        <ServicesSection />
        <ProcessSection />
      </main>
    </>
  );
}