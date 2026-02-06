"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { VehicleModel } from '.';
import { useLanguage } from '@/context/LanguageContext';
import { vehicleModels as enModels } from './en';
import { vehicleModels as zhModels } from './zh';
import { vehicleModels as arModels } from './ar';
import { vehicleModels as ruModels } from './ru';

// Type assertion to ensure all models conform to the base VehicleModel type
const typedEnModels: VehicleModel[] = enModels as VehicleModel[];
const typedZhModels: VehicleModel[] = zhModels as unknown as VehicleModel[];
const typedArModels: VehicleModel[] = arModels as unknown as VehicleModel[];
const typedRuModels: VehicleModel[] = ruModels as unknown as VehicleModel[];

interface ModelContextType {
  models: VehicleModel[];
  getModelById: (id: string) => VehicleModel | undefined;
  getModelsByBrand: (brand: string) => VehicleModel[];
  getModelsByCategory: (category: string) => VehicleModel[];
  getFeaturedModels: (limit?: number) => VehicleModel[];
  getNewestModels: (limit?: number) => VehicleModel[];
  searchModels: (query: string) => VehicleModel[];
  isLoading: boolean; // Add this
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export function ModelProvider({ children }: { children: React.ReactNode }) {
  const { language, isInitialized } = useLanguage(); // Get isInitialized
  
  // Select model data based on language
  const models = useMemo(() => {
    // Return default models until language is initialized
    if (!isInitialized) {
      return typedEnModels;
    }
    
    switch (language) {
      case 'zh':
        return typedZhModels;
      case 'ar':
        return typedArModels;
      case 'ru':
        return typedRuModels;
      case 'en':
      default:
        return typedEnModels;
    }
  }, [language, isInitialized]);
  
  // Helper functions
  const getModelById = (id: string): VehicleModel | undefined => {
    return models.find((model) => model.id === id);
  };
  
  const getModelsByBrand = (brand: string): VehicleModel[] => {
    return models.filter(
      (model) => model.brand.toLowerCase() === brand.toLowerCase(),
    );
  };
  
  const getModelsByCategory = (category: string): VehicleModel[] => {
    if (category === 'all') return models;
    if (category === 'commercial') {
      return models.filter(
        (model) => model.category === "Commercial" || model.category === "Pickup",
      );
    }
    return models.filter(
      (model) => model.category.toLowerCase() === category.toLowerCase(),
    );
  };
  
  const getFeaturedModels = (limit?: number): VehicleModel[] => {
    const featured = models.filter((model) => model.featured);
    return limit ? featured.slice(0, limit) : featured;
  };
  
  const getNewestModels = (limit: number = 6): VehicleModel[] => {
    return [...models].sort((a, b) => b.year - a.year).slice(0, limit);
  };
  
  const searchModels = (query: string): VehicleModel[] => {
    const searchTerm = query.toLowerCase();
    return models.filter(
      (model) =>
        model.brand.toLowerCase().includes(searchTerm) ||
        model.model.toLowerCase().includes(searchTerm) ||
        model.description.toLowerCase().includes(searchTerm) ||
        model.category.toLowerCase().includes(searchTerm) ||
        model.tagline?.toLowerCase().includes(searchTerm),
    );
  };
  
  const value = {
    models,
    getModelById,
    getModelsByBrand,
    getModelsByCategory,
    getFeaturedModels,
    getNewestModels,
    searchModels,
    isLoading: !isInitialized, // Add loading state
  };
  
  return (
    <ModelContext.Provider value={value}>
      {children}
    </ModelContext.Provider>
  );
}

export function useModels() {
  const context = useContext(ModelContext);
  if (context === undefined) {
    throw new Error('useModels must be used within a ModelProvider');
  }
  return context;
}

export type { VehicleModel };