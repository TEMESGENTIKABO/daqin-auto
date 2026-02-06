// Common interface for all languages
export interface VehicleModel {
  id: string;
  brand: string;
  model: string;
  category:
    | "SUV"
    | "Sedan"
    | "MPV"
    | "Hatchback"
    | "Electric"
    | "Commercial"
    | "Pickup"
    | "Crossover"
    | "Sports"
    | "Minivan";
  year: number;
  priceUSD: number;
  images: string[];
  specs: {
    engine: string;
    power: string;
    torque?: string;
    transmission: string;
    fuelType:
      | "Petrol"
      | "Diesel"
      | "Electric"
      | "Hybrid"
      | "PHEV"
      | "CNG"
      | "REEV"
      | "Hydrogen";
    seats: number;
    doors: number;
    length?: string;
    width?: string;
    height?: string;
    wheelbase?: string;
    cargoVolume?: string;
    fuelConsumption?: string;
    range?: string;
    batteryCapacity?: string;
    acceleration?: string;
    topSpeed?: string;
    driveType?: "FWD" | "RWD" | "AWD" | "4WD";
    chargingTime?: string;
    warranty?: string;
    payload?: string;
  };
  features: string[];
  description: string;
  available: boolean;
  featured?: boolean;
  status?:
    | "New"
    | "In Stock"
    | "Coming Soon"
    | "Limited Edition"
    | "Best Seller"
    | "Pre-Order"
    | "Discontinued"
    | "Special Edition";
  tagline?: string;
  detailsLink?: string;
  promotion?: string;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  colors?: string[];
}