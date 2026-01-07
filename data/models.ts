// ===== FILE: C:\Users\TEMEsgen\Desktop\Boru\daqin-auto\data\models.ts =====

export interface VehicleModel {
  id: string;
  brand: string;
  model: string;
  category: 'SUV' | 'Sedan' | 'MPV' | 'Hatchback' | 'Electric' | 'Commercial';
  year: number;
  priceUSD: number;
  images: string[];
  specs: {
    engine: string;
    power: string;
    transmission: string;
    fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
    seats: number;
    doors: number;
    fuelConsumption?: string;
    range?: string; // for EVs
  };
  features: string[];
  description: string;
  available: boolean;
  // NEW PROPERTIES:
  featured?: boolean; // Whether to show in featured section
  status?: 'New' | 'In Stock' | 'Coming Soon' | 'Limited Edition'; // Promotional status
  tagline?: string; // Short promotional tag
  detailsLink?: string; // Optional link to detailed page
}

export const vehicleModels: VehicleModel[] = [
  {
    id: 'byd-sealion-07',
    brand: 'BYD',
    model: 'Sealion 07',
    category: 'SUV',
    year: 2024,
    priceUSD: 35000,
    images: ['/images/models/byd-sealion-07-1.jpg', '/images/models/byd-sealion-07-2.jpg'],
    specs: {
      engine: '1.5L + Electric Motor',
      power: '218 HP',
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      seats: 5,
      doors: 5,
      fuelConsumption: '1.8L/100km'
    },
    features: ['360 Camera', 'Panoramic Sunroof', 'Adaptive Cruise', 'Wireless Charging'],
    description: 'Premium PHEV SUV with advanced technology and luxury features',
    available: true,
    featured: true,
    status: 'New',
    tagline: 'Comprehensive Guide to Models and Technologies'
  },
  {
    id: 'geely-coolray',
    brand: 'Geely',
    model: 'Coolray',
    category: 'SUV',
    year: 2024,
    priceUSD: 22000,
    images: ['/images/models/geely-coolray-1.jpg'],
    specs: {
      engine: '1.5L Turbo',
      power: '177 HP',
      transmission: '7-Speed DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '6.4L/100km'
    },
    features: ['LED Headlights', '10.25" Touchscreen', 'Apple CarPlay', 'Keyless Entry'],
    description: 'Compact SUV with sporty design and modern features',
    available: true,
    featured: false
  },
  {
    id: 'chery-tiggo-8-pro',
    brand: 'Chery',
    model: 'Tiggo 8 Pro',
    category: 'SUV',
    year: 2024,
    priceUSD: 28000,
    images: ['/images/models/chery-tiggo-8-1.jpg'],
    specs: {
      engine: '1.6L Turbo',
      power: '197 HP',
      transmission: '7-Speed DCT',
      fuelType: 'Petrol',
      seats: 7,
      doors: 5,
      fuelConsumption: '7.2L/100km'
    },
    features: ['Dual Screen Display', 'Panoramic Sunroof', 'Leather Seats', 'Wireless Charging'],
    description: '7-seater family SUV with premium interior',
    available: true,
    featured: false
  },
  {
    id: 'jetour-x70',
    brand: 'Jetour',
    model: 'X70',
    category: 'SUV',
    year: 2024,
    priceUSD: 21000,
    images: ['/images/models/jetour-x70-1.jpg'],
    specs: {
      engine: '1.5L Turbo',
      power: '156 HP',
      transmission: '6-Speed DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '7.1L/100km'
    },
    features: ['10.1" Touchscreen', '360 Camera', 'Android Auto', 'Climate Control'],
    description: 'Affordable SUV with great value for money',
    available: true,
    featured: false
  },
  {
    id: 'byd-han-ev',
    brand: 'BYD',
    model: 'Han EV',
    category: 'Sedan',
    year: 2024,
    priceUSD: 45000,
    images: ['/images/models/byd-han-1.jpg'],
    specs: {
      engine: 'Dual Motor',
      power: '517 HP',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      range: '610 km'
    },
    features: ['Nappa Leather', '15.6" Rotating Screen', 'Heated Seats', 'Brembo Brakes'],
    description: 'Luxury electric sedan with exceptional performance',
    available: true,
    featured: false
  },
  {
    id: 'zeekr-001',
    brand: 'Zeekr',
    model: '001',
    category: 'Electric',
    year: 2024,
    priceUSD: 52000,
    images: ['/images/models/zeekr-001-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '536 HP',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '640 km'
    },
    features: ['Air Suspension', 'Yamaha Audio', 'Massage Seats', 'Autonomous Driving'],
    description: 'Premium electric shooting brake with outstanding range',
    available: true,
    featured: true,
    status: 'New',
    tagline: 'Your Ultimate Guide to Premium Electric Mobility'
  },
  {
    id: 'wuling-hongguang-mini-ev',
    brand: 'Wuling',
    model: 'Hongguang Mini EV',
    category: 'Electric',
    year: 2024,
    priceUSD: 8000,
    images: ['/images/models/wuling-mini-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '41 HP',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 4,
      doors: 3,
      range: '200 km'
    },
    features: ['Air Conditioning', 'Digital Display', 'Rear Camera', 'Multiple Colors'],
    description: 'Ultra-compact city EV perfect for urban commuting',
    available: true,
    featured: true,
    status: 'In Stock',
    tagline: 'Smart & Efficient Urban Electric Vehicle'
  },
  {
    id: 'changan-uni-v',
    brand: 'Changan',
    model: 'UNI-V',
    category: 'Sedan',
    year: 2024,
    priceUSD: 23000,
    images: ['/images/models/changan-uni-v-1.jpg'],
    specs: {
      engine: '1.5L Turbo',
      power: '188 HP',
      transmission: '7-Speed DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      fuelConsumption: '6.2L/100km'
    },
    features: ['Electric Spoiler', 'Dual Screen', 'Sport Seats', 'Exhaust Sound'],
    description: 'Sporty sedan with coupe-like design',
    available: true,
    featured: true,
    status: 'Coming Soon',
    tagline: 'Ultimate Sport Sedan Experience'
  },
  {
    id: 'mg-5',
    brand: 'MG',
    model: 'MG 5',
    category: 'Sedan',
    year: 2024,
    priceUSD: 18000,
    images: ['/images/models/mg-5-1.jpg'],
    specs: {
      engine: '1.5L',
      power: '120 HP',
      transmission: 'CVT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      fuelConsumption: '5.7L/100km'
    },
    features: ['10" Touchscreen', 'Apple CarPlay', 'Cruise Control', 'LED Lights'],
    description: 'Affordable sedan with modern features',
    available: true,
    featured: false
  },
  // New featured models added for the Featured Models section
  {
    id: 'foton-aumark',
    brand: 'Foton',
    model: 'AUMARK Truck',
    category: 'Commercial',
    year: 2024,
    priceUSD: 28000,
    images: ['/images/models/foton-aumark-1.jpg'],
    specs: {
      engine: '2.8L Diesel',
      power: '150 HP',
      transmission: '6-Speed Manual',
      fuelType: 'Diesel',
      seats: 3,
      doors: 2,
      fuelConsumption: '10.5L/100km'
    },
    features: ['Heavy Duty Chassis', 'Power Steering', 'ABS', 'Air Conditioning'],
    description: 'Reliable commercial truck for urban logistics and delivery',
    available: true,
    featured: true,
    status: 'In Stock',
    tagline: 'Your Ultimate Partner for Reliable Urban Logistics'
  },
  {
    id: 'jetour-x70-plus',
    brand: 'Jetour',
    model: 'X70 Plus',
    category: 'SUV',
    year: 2024,
    priceUSD: 25000,
    images: ['/images/models/jetour-x70-plus-1.jpg'],
    specs: {
      engine: '1.6L Turbo',
      power: '197 HP',
      transmission: '7-Speed DCT',
      fuelType: 'Petrol',
      seats: 7,
      doors: 5,
      fuelConsumption: '7.5L/100km'
    },
    features: ['Digital Cockpit', 'Panoramic Sunroof', 'Leather Seats', '360 Camera'],
    description: '7-seater family SUV with premium features and spacious interior',
    available: true,
    featured: true,
    status: 'New',
    tagline: 'Comprehensive Guide to Smart Family SUVs'
  },
  {
    id: 'haval-h6',
    brand: 'Great Wall',
    model: 'Haval H6',
    category: 'SUV',
    year: 2024,
    priceUSD: 26000,
    images: ['/images/models/haval-h6-1.jpg'],
    specs: {
      engine: '1.5L Turbo',
      power: '184 HP',
      transmission: '7-Speed DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '7.3L/100km'
    },
    features: ['Intelligent AWD', 'Panoramic Sunroof', 'Leather Interior', 'Wireless Charging'],
    description: 'Popular SUV with advanced safety features and comfortable ride',
    available: true,
    featured: false
  },
  {
    id: 'nio-et7',
    brand: 'NIO',
    model: 'ET7',
    category: 'Sedan',
    year: 2024,
    priceUSD: 68000,
    images: ['/images/models/nio-et7-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '653 HP',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      range: '1000 km'
    },
    features: ['Battery Swap Tech', 'LiDAR System', 'Air Suspension', 'Nappa Leather'],
    description: 'Luxury electric sedan with industry-leading range and technology',
    available: true,
    featured: false
  },
  {
    id: 'x-peng-p7',
    brand: 'Xpeng',
    model: 'P7',
    category: 'Sedan',
    year: 2024,
    priceUSD: 42000,
    images: ['/images/models/xpeng-p7-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '430 HP',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      range: '706 km'
    },
    features: ['XPILOT 3.5', 'Premium Audio', 'Panoramic Glass Roof', 'Fast Charging'],
    description: 'High-performance electric sedan with advanced autonomous driving',
    available: true,
    featured: false
  }
];

export const categories = [
  { id: 'all', name: 'All Vehicles' },
  { id: 'suv', name: 'SUV' },
  { id: 'sedan', name: 'Sedan' },
  { id: 'electric', name: 'Electric' },
  { id: 'mpv', name: 'MPV' },
  { id: 'hatchback', name: 'Hatchback' },
  { id: 'commercial', name: 'Commercial' }
];

export const brandsList = [
  'BYD', 'Geely', 'Chery', 'Jetour', 'Zeekr', 'Wuling', 
  'Changan', 'MG', 'Great Wall', 'NIO', 'Xpeng', 'Li Auto'
];

// Helper function to get featured models
export const getFeaturedModels = (): VehicleModel[] => {
  return vehicleModels.filter(model => model.featured);
};

// Helper function to get models by status
export const getModelsByStatus = (status: VehicleModel['status']): VehicleModel[] => {
  return vehicleModels.filter(model => model.status === status);
};

// Helper function to get models by brand
export const getModelsByBrand = (brand: string): VehicleModel[] => {
  return vehicleModels.filter(model => model.brand === brand);
};

// Helper function to get models by category
export const getModelsByCategory = (category: string): VehicleModel[] => {
  return vehicleModels.filter(model => 
    category === 'all' ? true : model.category.toLowerCase() === category.toLowerCase()
  );
};