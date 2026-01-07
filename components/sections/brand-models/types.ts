// ===== FILE: C:\Users\TEMEsgen\Desktop\Boru\daqin-auto\components\sections\brand-models\types.ts =====

export type VehicleCategory = 'SUV' | 'Sedan' | 'MPV' | 'Hatchback' | 'Electric' | 'Commercial';
export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
export type VehicleStatus = 'New' | 'In Stock' | 'Coming Soon' | 'Limited Edition';
export type SortOption = 'price-low' | 'price-high' | 'year-new' | 'year-old' | 'name-a' | 'name-z';
export type ViewMode = 'grid' | 'list';

export interface VehicleModel {
  id: string;
  brand: string;
  model: string;
  category: VehicleCategory;
  year: number;
  priceUSD: number;
  images: string[];
  specs: {
    engine: string;
    power: string;
    transmission: string;
    fuelType: FuelType;
    seats: number;
    doors: number;
    fuelConsumption?: string;
    range?: string;
  };
  features: string[];
  description: string;
  available: boolean;
  featured?: boolean;
  status?: VehicleStatus;
  tagline?: string;
  detailsLink?: string;
}

// Removed Category interface since we're not using the intermediate step
export interface FilterState {
  selectedCategory: string;
  selectedBrands: string[];
  priceRange: [number, number];
  searchQuery: string;
  sortBy: SortOption;
  viewMode: ViewMode;
}