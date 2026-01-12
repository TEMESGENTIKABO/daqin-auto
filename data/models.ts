export interface VehicleModel {
  id: string;
  brand: string;
  model: string;
  category: 'SUV' | 'Sedan' | 'MPV' | 'Hatchback' | 'Electric' | 'Commercial' | 'Pickup' | 'Crossover' | 'Sports' | 'Minivan';
  year: number;
  priceUSD: number;
  images: string[];
  specs: {
    engine: string;
    power: string;
    torque?: string;
    transmission: string;
    fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'PHEV' | 'CNG' | 'Hydrogen';
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
    driveType?: 'FWD' | 'RWD' | 'AWD' | '4WD';
    chargingTime?: string;
    warranty?: string;
    payload?: string;
  };
  features: string[];
  description: string;
  available: boolean;
  featured?: boolean;
  status?: 'New' | 'In Stock' | 'Coming Soon' | 'Limited Edition' | 'Best Seller' | 'Pre-Order' | 'Discontinued' | 'Special Edition';
  tagline?: string;
  detailsLink?: string;
  promotion?: string;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  colors?: string[];
}

export const vehicleModels: VehicleModel[] = [
  // ========== BYD MODELS (8 models) ==========
  {
    id: 'byd-sealion-07',
    brand: 'BYD',
    model: 'Sealion 07',
    category: 'SUV',
    year: 2024,
    priceUSD: 38900,
    images: ['/images/models/byd/sealion-07-1.jpg', '/images/models/byd/sealion-07-2.jpg', '/images/models/byd/sealion-07-3.jpg', '/images/models/byd/sealion-07-4.jpg'],
    specs: {
      engine: '1.5L DM-i Hybrid',
      power: '218 HP',
      torque: '325 Nm',
      transmission: 'E-CVT',
      fuelType: 'PHEV',
      seats: 5,
      doors: 5,
      length: '4775 mm',
      width: '1890 mm',
      height: '1670 mm',
      wheelbase: '2765 mm',
      fuelConsumption: '1.5L/100km',
      batteryCapacity: '18.3 kWh',
      range: '120 km (EV)',
      acceleration: '7.9s',
      topSpeed: '180 km/h',
      driveType: 'FWD',
      warranty: '6 years/150,000 km'
    },
    features: [
      '15.6" Rotating Touchscreen',
      'DiPilot Advanced Driving Assistance',
      'Panoramic Sunroof',
      'V2L Vehicle-to-Load',
      'Heated & Ventilated Seats',
      '360° Camera System',
      'Wireless Charging (15W)',
      'NFC Digital Key',
      'Smart Voice Assistant',
      'OTA Updates'
    ],
    description: 'BYD Sealion 07 represents the next generation of PHEV SUVs with BYD\'s DM-i super hybrid technology. It offers pure electric range up to 120km, making it perfect for daily commutes without charging.',
    available: true,
    featured: true,
    status: 'New',
    tagline: 'The Intelligent Hybrid SUV',
    promotion: 'Free home charger + installation',
    discount: 5,
    rating: 4.8,
    reviewCount: 124,
    colors: ['Arctic Blue', 'Crystal White', 'Space Grey', 'Ruby Red']
  },

  {
    id: 'byd-han-ev',
    brand: 'BYD',
    model: 'Han EV',
    category: 'Sedan',
    year: 2024,
    priceUSD: 45900,
    images: ['/images/models/byd/han-ev-1.jpg', '/images/models/byd/han-ev-2.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '517 HP',
      torque: '700 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      length: '4995 mm',
      width: '1910 mm',
      height: '1495 mm',
      range: '610 km',
      batteryCapacity: '85.4 kWh',
      acceleration: '3.9s',
      topSpeed: '250 km/h',
      driveType: 'AWD',
      chargingTime: '30 min (10-80%)'
    },
    features: [
      '15.6" Rotating Screen',
      'DiSus-C Active Suspension',
      'Brembo Performance Brakes',
      'Nappa Leather Interior',
      'Dynaudio Premium Audio (12 speakers)',
      '5G Connectivity',
      'Face Recognition',
      'Gesture Control',
      'Massage Seats',
      'Heat Pump System'
    ],
    description: 'BYD Han EV is a luxury electric sedan that combines performance with elegance. Featuring BYD\'s blade battery technology and intelligent all-wheel drive system.',
    available: true,
    featured: true,
    status: 'Best Seller',
    tagline: 'Performance Luxury Sedan',
    rating: 4.9,
    reviewCount: 89
  },

  {
    id: 'byd-dolphin',
    brand: 'BYD',
    model: 'Dolphin',
    category: 'Hatchback',
    year: 2024,
    priceUSD: 19900,
    images: ['/images/models/byd/dolphin-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '95 HP',
      torque: '180 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '405 km',
      batteryCapacity: '44.9 kWh',
      acceleration: '10.9s',
      topSpeed: '150 km/h',
      driveType: 'FWD',
      chargingTime: '30 min (30-80%)'
    },
    features: [
      '12.8" Rotating Screen',
      'VTOL Mobile Power Station',
      'Wireless Phone Charging',
      'Keyless Entry & Start',
      'Electronic Parking Brake',
      'Auto Hold',
      'Voice Control',
      'OTA Updates'
    ],
    description: 'BYD Dolphin is a compact electric hatchback designed for urban mobility. It features ocean-inspired design elements and practical technology.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.5,
    reviewCount: 156
  },

  {
    id: 'byd-seagull',
    brand: 'BYD',
    model: 'Seagull',
    category: 'Hatchback',
    year: 2024,
    priceUSD: 11900,
    images: ['/images/models/byd/seagull-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '75 HP',
      torque: '135 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 4,
      doors: 5,
      range: '305 km',
      batteryCapacity: '30.7 kWh',
      acceleration: '13.0s',
      topSpeed: '130 km/h',
      driveType: 'FWD'
    },
    features: [
      '10.1" Rotating Screen',
      'VTOL Function',
      'LED Headlights',
      'Reverse Camera',
      'Smartphone App Control',
      'Four-speaker Audio',
      'Multiple Driving Modes',
      'Regenerative Braking'
    ],
    description: 'BYD Seagull is an affordable city EV perfect for daily commuting. Its compact size makes it easy to park in crowded urban environments.',
    available: true,
    featured: true,
    status: 'Best Seller',
    tagline: 'Urban Electric Mobility',
    discount: 8,
    rating: 4.6,
    reviewCount: 203
  },

  {
    id: 'byd-tang-ev',
    brand: 'BYD',
    model: 'Tang EV',
    category: 'SUV',
    year: 2024,
    priceUSD: 51900,
    images: ['/images/models/byd/tang-ev-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '517 HP',
      torque: '700 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 7,
      doors: 5,
      range: '730 km',
      batteryCapacity: '108.8 kWh',
      acceleration: '4.3s',
      topSpeed: '180 km/h',
      driveType: 'AWD'
    },
    features: [
      '15.6" Rotating Screen',
      'DiSus-C Active Suspension',
      'Brembo Brakes',
      'Panoramic Sunroof',
      'Nappa Leather Seats',
      '12-speaker Dynaudio',
      'Tri-zone Climate Control',
      'Captain Seats (2nd row)'
    ],
    description: 'BYD Tang EV is a seven-seat electric SUV offering exceptional range and performance. Perfect for families needing space without compromising on eco-credentials.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.7,
    reviewCount: 67
  },

  {
    id: 'byd-frigate-07',
    brand: 'BYD',
    model: 'Frigate 07',
    category: 'SUV',
    year: 2024,
    priceUSD: 42900,
    images: ['/images/models/byd/frigate-07-1.jpg'],
    specs: {
      engine: 'DM-p PHEV',
      power: '490 HP',
      torque: '675 Nm',
      transmission: 'E-CVT',
      fuelType: 'PHEV',
      seats: 5,
      doors: 5,
      range: '200 km (EV)',
      batteryCapacity: '36.7 kWh',
      acceleration: '4.7s',
      topSpeed: '220 km/h',
      driveType: 'AWD'
    },
    features: [
      'DiSus-P Active Suspension',
      'Performance Brake System',
      'Sports Seats',
      'Heads-up Display',
      '5G Connectivity',
      'Premium Audio System',
      'Ambient Lighting',
      'Smart Parking Assist'
    ],
    description: 'BYD Frigate 07 is a performance-oriented PHEV SUV targeting enthusiasts who want both efficiency and thrilling acceleration.',
    available: true,
    featured: false,
    status: 'New',
    rating: 4.8,
    reviewCount: 42
  },

  {
    id: 'byd-e2',
    brand: 'BYD',
    model: 'E2',
    category: 'Hatchback',
    year: 2024,
    priceUSD: 15900,
    images: ['/images/models/byd/e2-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '95 HP',
      torque: '180 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '401 km',
      batteryCapacity: '43.2 kWh',
      acceleration: '12.5s',
      topSpeed: '130 km/h',
      driveType: 'FWD'
    },
    features: [
      '10.1" Touchscreen',
      'Smartphone Connectivity',
      'LED Lighting',
      'Reverse Camera',
      'Electronic Parking Brake',
      'Voice Control',
      'App Remote Control',
      'Fast Charging'
    ],
    description: 'BYD E2 is a practical electric hatchback focused on efficiency and reliability. Popular with ride-hailing drivers and urban commuters.',
    available: true,
    featured: false,
    status: 'In Stock',
    discount: 10,
    rating: 4.4,
    reviewCount: 189
  },

  {
    id: 'byd-e6',
    brand: 'BYD',
    model: 'E6',
    category: 'MPV',
    year: 2024,
    priceUSD: 38900,
    images: ['/images/models/byd/e6-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '122 HP',
      torque: '450 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '520 km',
      batteryCapacity: '71.7 kWh',
      acceleration: '10.0s',
      topSpeed: '130 km/h',
      driveType: 'FWD',
      cargoVolume: '850L'
    },
    features: [
      'Large Cargo Space',
      'Durable Interior',
      'Commercial Grade Build',
      'Low Maintenance',
      'Fast Charging',
      'Simple Controls',
      'High Ground Clearance',
      'Robust Suspension'
    ],
    description: 'BYD E6 is a versatile electric MPV designed for both passenger and commercial use. Known for its durability and large cargo capacity.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.3,
    reviewCount: 56
  },

  // ========== GEELY MODELS (6 models) ==========
  {
    id: 'geely-coolray',
    brand: 'Geely',
    model: 'Coolray',
    category: 'SUV',
    year: 2024,
    priceUSD: 24500,
    images: ['/images/models/geely/coolray-1.jpg'],
    specs: {
      engine: '1.5L Turbo G-Power',
      power: '181 HP',
      torque: '290 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '6.4L/100km',
      acceleration: '7.9s',
      topSpeed: '200 km/h',
      driveType: 'FWD'
    },
    features: [
      '12.3" Dual Screen Display',
      'GKUI Smart Ecosystem',
      '540° Transparent Chassis',
      'Sport Mode with Exhaust Sound',
      'LED Matrix Headlights',
      'Wireless Apple CarPlay',
      'Ambient Lighting',
      'Smart Parking Assist'
    ],
    description: 'Geely Coolray offers sporty design with advanced technology at an affordable price. Features Geely\'s latest connectivity system.',
    available: true,
    featured: true,
    status: 'Best Seller',
    tagline: 'Youthful Spirit Meets Advanced Tech',
    discount: 8,
    rating: 4.6,
    reviewCount: 312
  },

  {
    id: 'geely-boyue-l',
    brand: 'Geely',
    model: 'Boyue L',
    category: 'SUV',
    year: 2024,
    priceUSD: 28900,
    images: ['/images/models/geely/boyue-l-1.jpg'],
    specs: {
      engine: '2.0TD Turbo',
      power: '238 HP',
      torque: '350 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      length: '4670 mm',
      fuelConsumption: '7.8L/100km',
      acceleration: '7.4s',
      driveType: 'FWD'
    },
    features: [
      '13.2" Vertical Touchscreen',
      '10.25" Digital Instrument Cluster',
      'HUD Display',
      'Premium Sound System',
      'Panoramic Sunroof',
      'Leather Seats with Ventilation',
      'Smart Voice Control',
      'OTA Updates'
    ],
    description: 'Geely Boyue L is a premium compact SUV featuring Geely\'s CMA architecture. Offers spacious interior and advanced digital cockpit.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.7,
    reviewCount: 145
  },

  {
    id: 'geely-emgrand',
    brand: 'Geely',
    model: 'Emgrand',
    category: 'Sedan',
    year: 2024,
    priceUSD: 18900,
    images: ['/images/models/geely/emgrand-1.jpg'],
    specs: {
      engine: '1.5L Naturally Aspirated',
      power: '114 HP',
      torque: '147 Nm',
      transmission: 'CVT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      fuelConsumption: '6.2L/100km',
      acceleration: '12.0s',
      topSpeed: '175 km/h'
    },
    features: [
      '12.3" Touchscreen',
      'GKUI Smart System',
      'Automatic Climate Control',
      'Electronic Parking Brake',
      'TPMS',
      'Rear AC Vents',
      'LED Daytime Lights',
      'Cruise Control'
    ],
    description: 'Geely Emgrand offers exceptional value in the compact sedan segment. With spacious interior and modern features.',
    available: true,
    featured: false,
    status: 'In Stock',
    discount: 10,
    rating: 4.3,
    reviewCount: 267
  },

  {
    id: 'geely-xingyue-l',
    brand: 'Geely',
    model: 'Xingyue L',
    category: 'SUV',
    year: 2024,
    priceUSD: 32900,
    images: ['/images/models/geely/xingyue-l-1.jpg'],
    specs: {
      engine: '2.0TD High Power',
      power: '238 HP',
      torque: '350 Nm',
      transmission: '8AT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '8.1L/100km',
      acceleration: '7.7s',
      driveType: 'AWD'
    },
    features: [
      'Triple 12.3" Screens',
      'AR Navigation',
      'Bose Premium Audio',
      'Matrix LED Headlights',
      'Advanced Driver Assistance',
      'Wireless Charging',
      'Memory Seats',
      'Hands-free Tailgate'
    ],
    description: 'Geely Xingyue L is a premium SUV offering three-screen digital cockpit and advanced driver assistance systems.',
    available: true,
    featured: true,
    status: 'New',
    rating: 4.8,
    reviewCount: 89
  },

  {
    id: 'geely-geometry-c',
    brand: 'Geely',
    model: 'Geometry C',
    category: 'SUV',
    year: 2024,
    priceUSD: 27900,
    images: ['/images/models/geely/geometry-c-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '204 HP',
      torque: '310 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '550 km',
      batteryCapacity: '70 kWh',
      acceleration: '6.9s',
      topSpeed: '150 km/h'
    },
    features: [
      '12.3" Touchscreen',
      'Smart Cabin System',
      'Heat Pump Air Conditioning',
      'Fast Charging (30 min)',
      'L2+ Autonomous Driving',
      'Panoramic Sunroof',
      'Voice Control',
      'OTA Updates'
    ],
    description: 'Geometry C is Geely\'s pure electric SUV brand focusing on modern design and efficient electric powertrains.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.5,
    reviewCount: 123
  },

  {
    id: 'geely-haoyue',
    brand: 'Geely',
    model: 'Haoyue',
    category: 'MPV',
    year: 2024,
    priceUSD: 28900,
    images: ['/images/models/geely/haoyue-1.jpg'],
    specs: {
      engine: '1.8TD Turbo',
      power: '184 HP',
      torque: '300 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 7,
      doors: 5,
      fuelConsumption: '8.1L/100km',
      cargoVolume: '2360L'
    },
    features: [
      '12.3" Touchscreen',
      'Captain Seats (2nd row)',
      'Tri-zone Climate Control',
      'Panoramic Sunroof',
      'Power Sliding Doors',
      '360° Camera',
      'Wireless Charging',
      'Keyless Entry'
    ],
    description: 'Geely Haoyue is a family MPV offering flexible seating arrangements and comfortable ride for large families.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.4,
    reviewCount: 98
  },

  // ========== CHERY MODELS (5 models) ==========
  {
    id: 'chery-tiggo-8-pro',
    brand: 'Chery',
    model: 'Tiggo 8 Pro',
    category: 'SUV',
    year: 2024,
    priceUSD: 32900,
    images: ['/images/models/chery/tiggo-8-pro-1.jpg'],
    specs: {
      engine: '2.0TGDI Turbo',
      power: '254 HP',
      torque: '390 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 7,
      doors: 5,
      fuelConsumption: '8.2L/100km',
      acceleration: '8.2s',
      driveType: 'AWD'
    },
    features: [
      '24.6" Curved Dual Screen',
      'Sony 10-Speaker System',
      'Massage Captain Seats',
      'AR Navigation',
      'Smart Voice Control',
      'Hands-free Tailgate',
      'Night Vision System',
      'Remote Parking'
    ],
    description: 'Chery Tiggo 8 Pro is a full-size intelligent SUV offering three-row seating with premium comfort.',
    available: true,
    featured: true,
    status: 'New',
    tagline: 'Intelligent Luxury for Modern Families',
    rating: 4.7,
    reviewCount: 134
  },

  {
    id: 'chery-tiggo-7-pro',
    brand: 'Chery',
    model: 'Tiggo 7 Pro',
    category: 'SUV',
    year: 2024,
    priceUSD: 25900,
    images: ['/images/models/chery/tiggo-7-pro-1.jpg'],
    specs: {
      engine: '1.6TGDI Turbo',
      power: '197 HP',
      torque: '290 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '6.9L/100km',
      acceleration: '8.8s'
    },
    features: [
      'Dual 10.25" Screens',
      'Apple CarPlay/Android Auto',
      '360° Camera',
      'Panoramic Sunroof',
      'LED Headlights',
      'Keyless Entry & Start',
      'Wireless Charging',
      'Cruise Control'
    ],
    description: 'Chery Tiggo 7 Pro is a compact SUV offering great value with modern features and efficient powertrain.',
    available: true,
    featured: false,
    status: 'In Stock',
    discount: 7,
    rating: 4.5,
    reviewCount: 189
  },

  {
    id: 'chery-arrizo-8',
    brand: 'Chery',
    model: 'Arrizo 8',
    category: 'Sedan',
    year: 2024,
    priceUSD: 24900,
    images: ['/images/models/chery/arrizo-8-1.jpg'],
    specs: {
      engine: '1.6TGDI Turbo',
      power: '197 HP',
      torque: '290 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      fuelConsumption: '6.5L/100km',
      acceleration: '8.0s',
      topSpeed: '210 km/h'
    },
    features: [
      'Dual 12.3" Screens',
      'Sony Audio System',
      'Ambient Lighting',
      'Leather Interior',
      'Smart Voice Control',
      'Wireless Connectivity',
      'Driver Assistance',
      'Memory Seats'
    ],
    description: 'Chery Arrizo 8 is a premium sedan featuring sporty design and advanced technology at competitive price.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.6,
    reviewCount: 112
  },

  {
    id: 'chery-omoda-5',
    brand: 'Chery',
    model: 'Omoda 5',
    category: 'SUV',
    year: 2024,
    priceUSD: 27900,
    images: ['/images/models/chery/omoda-5-1.jpg'],
    specs: {
      engine: '1.6TGDI Turbo',
      power: '197 HP',
      torque: '290 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '7.0L/100km',
      acceleration: '7.8s'
    },
    features: [
      'Dual 10.25" Screens',
      'Futuristic Design',
      'Ambient Lighting',
      'Wireless Charging',
      'Sport Seats',
      '360° Camera',
      'Panoramic Sunroof',
      'Smart Key'
    ],
    description: 'Chery Omoda 5 targets young buyers with its futuristic design and sporty characteristics.',
    available: true,
    featured: true,
    status: 'New',
    tagline: 'Future-Ready Crossover',
    rating: 4.5,
    reviewCount: 76
  },

  {
    id: 'chery-jaecoo-j7',
    brand: 'Chery',
    model: 'Jaecoo J7',
    category: 'SUV',
    year: 2024,
    priceUSD: 36900,
    images: ['/images/models/chery/jaecoo-j7-1.jpg'],
    specs: {
      engine: '2.0TGDI Turbo',
      power: '261 HP',
      torque: '400 Nm',
      transmission: '8AT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '8.5L/100km',
      driveType: '4WD'
    },
    features: [
      'Premium Interior Materials',
      'Advanced 4WD System',
      'Terrain Selection',
      'Premium Audio',
      'Massage Seats',
      'HUD Display',
      'Night Vision',
      'Advanced Safety'
    ],
    description: 'Chery Jaecoo J7 is a premium off-road SUV designed for adventurous lifestyles with luxury interior.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.7,
    reviewCount: 45
  },

  // ========== NIO MODELS (4 models) ==========
  {
    id: 'nio-es8',
    brand: 'NIO',
    model: 'ES8',
    category: 'SUV',
    year: 2024,
    priceUSD: 78900,
    images: ['/images/models/nio/es8-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '653 HP',
      torque: '850 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 6,
      doors: 5,
      range: '580 km',
      batteryCapacity: '100 kWh',
      acceleration: '4.1s',
      topSpeed: '200 km/h',
      driveType: 'AWD'
    },
    features: [
      'Battery Swap Technology',
      'NOMI AI Assistant',
      'Air Suspension',
      'Panoramic Sunroof',
      'Massage Seats All Rows',
      '23-speaker Dolby Atmos',
      '5G Connectivity',
      'Lidar-based ADAS'
    ],
    description: 'NIO ES8 is a premium six-seat electric SUV featuring NIO\'s innovative battery swap system and luxury amenities.',
    available: true,
    featured: true,
    status: 'New',
    tagline: 'Intelligent Electric SUV',
    promotion: 'Free battery swap membership (1 year)',
    rating: 4.9,
    reviewCount: 67
  },

  {
    id: 'nio-et5',
    brand: 'NIO',
    model: 'ET5',
    category: 'Sedan',
    year: 2024,
    priceUSD: 55900,
    images: ['/images/models/nio/et5-1.jpg'],
    specs: {
      engine: 'Dual Motor',
      power: '489 HP',
      torque: '700 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      range: '560 km',
      batteryCapacity: '75 kWh',
      acceleration: '4.0s',
      topSpeed: '200 km/h'
    },
    features: [
      'Battery Swap Compatible',
      'Aquila Super Sensing',
      'AR HUD',
      'Digital Cockpit',
      'Ambient Lighting',
      'Premium Sound System',
      '5G Connectivity',
      'Advanced Driver Assistance'
    ],
    description: 'NIO ET5 is a premium electric sedan with sporty performance and advanced autonomous driving capabilities.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.8,
    reviewCount: 89
  },

  {
    id: 'nio-ec7',
    brand: 'NIO',
    model: 'EC7',
    category: 'SUV',
    year: 2024,
    priceUSD: 85900,
    images: ['/images/models/nio/ec7-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '653 HP',
      torque: '850 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '635 km',
      batteryCapacity: '150 kWh',
      acceleration: '3.8s',
      topSpeed: '200 km/h',
      driveType: 'AWD'
    },
    features: [
      'Active Rear Spoiler',
      'Electrochromic Glass Roof',
      'Premium Interior',
      'Advanced Sound System',
      'Massage Seats',
      'HUD with AR',
      '5G V2X',
      'Lidar ADAS'
    ],
    description: 'NIO EC7 is a coupe-style electric SUV featuring active aerodynamics and ultra-long range capability.',
    available: true,
    featured: true,
    status: 'Limited Edition',
    tagline: 'The Ultimate Electric Coupe SUV',
    rating: 4.9,
    reviewCount: 34
  },

  {
    id: 'nio-et7',
    brand: 'NIO',
    model: 'ET7',
    category: 'Sedan',
    year: 2024,
    priceUSD: 68900,
    images: ['/images/models/nio/et7-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '653 HP',
      torque: '850 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      range: '1000 km',
      batteryCapacity: '150 kWh',
      acceleration: '3.8s',
      topSpeed: '200 km/h'
    },
    features: [
      'Battery Swap Technology',
      'Aquila Super Sensing',
      'ADAM Super Computing',
      '7.1.4 Dolby Atmos',
      'Air Suspension',
      'Soft-close Doors',
      'AR HUD',
      '5G V2X'
    ],
    description: 'NIO ET7 is a flagship luxury sedan with industry-leading range and advanced autonomous driving hardware.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.9,
    reviewCount: 56
  },

  // ========== Xpeng MODELS (4 models) ==========
  {
    id: 'xpeng-g9',
    brand: 'Xpeng',
    model: 'G9',
    category: 'SUV',
    year: 2024,
    priceUSD: 56900,
    images: ['/images/models/xpeng/g9-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '551 HP',
      torque: '717 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '702 km',
      batteryCapacity: '98 kWh',
      acceleration: '3.9s',
      topSpeed: '200 km/h',
      chargingTime: '5 min (200km range)'
    },
    features: [
      'XNGP Advanced ADAS',
      '800V Fast Charging Platform',
      '5D Music Cabin',
      'Air Suspension',
      'Double Orin-X Chip',
      '5G Connectivity',
      'Massage Seats',
      'Premium Audio'
    ],
    description: 'Xpeng G9 is a flagship SUV featuring 800V ultra-fast charging and advanced XNGP autonomous driving system.',
    available: true,
    featured: true,
    status: 'Best Seller',
    tagline: 'The Fast-Charging Intelligent SUV',
    rating: 4.8,
    reviewCount: 78
  },

  {
    id: 'xpeng-p7i',
    brand: 'Xpeng',
    model: 'P7i',
    category: 'Sedan',
    year: 2024,
    priceUSD: 42900,
    images: ['/images/models/xpeng/p7i-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '430 HP',
      torque: '655 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      range: '706 km',
      batteryCapacity: '86.2 kWh',
      acceleration: '4.1s',
      topSpeed: '200 km/h'
    },
    features: [
      'XPILOT 3.5',
      'Premium Audio System',
      'Panoramic Glass Roof',
      'Fast Charging',
      'Digital Key',
      'Voice Control',
      'OTA Updates',
      'Sport Mode'
    ],
    description: 'Xpeng P7i is the updated version of the popular P7 sedan with improved range and enhanced autonomous driving capabilities.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.7,
    reviewCount: 156
  },

  {
    id: 'xpeng-g6',
    brand: 'Xpeng',
    model: 'G6',
    category: 'SUV',
    year: 2024,
    priceUSD: 34900,
    images: ['/images/models/xpeng/g6-1.jpg'],
    specs: {
      engine: 'Rear Motor',
      power: '296 HP',
      torque: '440 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '755 km',
      batteryCapacity: '87.5 kWh',
      acceleration: '6.6s',
      topSpeed: '202 km/h',
      driveType: 'RWD'
    },
    features: [
      'XNGP Advanced ADAS',
      '800V Fast Charging',
      '14.96" Touchscreen',
      'Heat Pump System',
      'Voice Control Everything',
      'Front Trunk Storage',
      'Nappa Leather Seats',
      '360° Camera'
    ],
    description: 'Xpeng G6 features the next-generation XNGP autonomous driving system and 800V ultra-fast charging platform.',
    available: true,
    featured: true,
    status: 'Best Seller',
    discount: 3,
    rating: 4.7,
    reviewCount: 112
  },

  {
    id: 'xpeng-p5',
    brand: 'Xpeng',
    model: 'P5',
    category: 'Sedan',
    year: 2024,
    priceUSD: 28900,
    images: ['/images/models/xpeng/p5-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '211 HP',
      torque: '310 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      range: '550 km',
      batteryCapacity: '66.2 kWh',
      acceleration: '7.5s',
      topSpeed: '170 km/h'
    },
    features: [
      'XPILOT 3.0',
      'In-car Bed Mode',
      '15.6" Touchscreen',
      'Premium Audio',
      'Voice Control',
      'Smart Cabin',
      'Wireless Charging',
      'Advanced Safety'
    ],
    description: 'Xpeng P5 is a family-oriented electric sedan featuring unique "bed mode" for resting and advanced driver assistance.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.5,
    reviewCount: 189
  },

  // ========== LI AUTO MODELS (3 models) ==========
  {
    id: 'li-auto-l9',
    brand: 'Li Auto',
    model: 'L9',
    category: 'SUV',
    year: 2024,
    priceUSD: 72900,
    images: ['/images/models/li-auto/l9-1.jpg'],
    specs: {
      engine: '1.5T Range Extender + Dual Motor',
      power: '449 HP',
      torque: '620 Nm',
      transmission: 'Automatic',
      fuelType: 'PHEV',
      seats: 6,
      doors: 5,
      fuelConsumption: '7.1L/100km',
      batteryCapacity: '44.5 kWh',
      range: '215 km (EV)',
      acceleration: '5.3s',
      topSpeed: '180 km/h'
    },
    features: [
      'Triple 15.7" OLED Screens',
      '5G Connectivity',
      'Massage Seats All Rows',
      'Refrigerator & Warmer',
      'Air Suspension',
      'HUD with AR Navigation',
      'Dolby Atmos 21-Speaker',
      'Voice Control'
    ],
    description: 'Li Auto L9 is a full-size luxury family SUV with six comfortable seats and extended-range electric technology.',
    available: true,
    featured: true,
    status: 'Best Seller',
    tagline: 'Ultimate Family Mobility Solution',
    rating: 4.9,
    reviewCount: 234
  },

  {
    id: 'li-auto-l8',
    brand: 'Li Auto',
    model: 'L8',
    category: 'SUV',
    year: 2024,
    priceUSD: 59900,
    images: ['/images/models/li-auto/l8-1.jpg'],
    specs: {
      engine: '1.5T Range Extender + Dual Motor',
      power: '449 HP',
      torque: '620 Nm',
      transmission: 'Automatic',
      fuelType: 'PHEV',
      seats: 6,
      doors: 5,
      range: '210 km (EV)',
      batteryCapacity: '42.8 kWh',
      acceleration: '5.5s'
    },
    features: [
      'Dual 15.7" Screens',
      '5G Connectivity',
      'Massage Seats',
      'Air Suspension',
      'HUD Display',
      'Premium Audio',
      'Smart Voice Control',
      'Wireless Charging'
    ],
    description: 'Li Auto L8 offers similar luxury features to L9 in a slightly more compact package, ideal for smaller families.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.8,
    reviewCount: 167
  },

  {
    id: 'li-auto-l7',
    brand: 'Li Auto',
    model: 'L7',
    category: 'SUV',
    year: 2024,
    priceUSD: 45900,
    images: ['/images/models/li-auto/l7-1.jpg'],
    specs: {
      engine: '1.5T Range Extender + Dual Motor',
      power: '449 HP',
      torque: '620 Nm',
      transmission: 'Automatic',
      fuelType: 'PHEV',
      seats: 5,
      doors: 5,
      range: '210 km (EV)',
      batteryCapacity: '40.9 kWh',
      acceleration: '5.3s'
    },
    features: [
      '15.7" Touchscreen',
      'Queen-size Rear Seat',
      'Air Suspension',
      'HUD Display',
      'Premium Audio',
      'Smart Cabin',
      'Voice Control',
      'Advanced Safety'
    ],
    description: 'Li Auto L7 is a five-seat SUV focusing on comfort and luxury, featuring a unique "queen seat" in the second row.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.7,
    reviewCount: 145
  },

  // ========== ZEEKR MODELS (3 models) ==========
  {
    id: 'zeekr-001',
    brand: 'Zeekr',
    model: '001',
    category: 'Electric',
    year: 2024,
    priceUSD: 52000,
    images: ['/images/models/zeekr/001-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '536 HP',
      torque: '686 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '640 km',
      batteryCapacity: '100 kWh',
      acceleration: '3.8s',
      topSpeed: '200 km/h'
    },
    features: [
      'Air Suspension',
      'Yamaha Audio System',
      'Massage Seats',
      'Autonomous Driving',
      'Panoramic Sunroof',
      'Digital Cockpit',
      '5G Connectivity',
      'V2L Function'
    ],
    description: 'Zeekr 001 is a premium electric shooting brake with outstanding range and performance characteristics.',
    available: true,
    featured: true,
    status: 'New',
    tagline: 'Premium Electric Shooting Brake',
    rating: 4.8,
    reviewCount: 112
  },

  {
    id: 'zeekr-009',
    brand: 'Zeekr',
    model: '009',
    category: 'MPV',
    year: 2024,
    priceUSD: 86900,
    images: ['/images/models/zeekr/009-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '536 HP',
      torque: '686 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 6,
      doors: 5,
      range: '702 km',
      batteryCapacity: '140 kWh',
      acceleration: '4.5s',
      topSpeed: '190 km/h'
    },
    features: [
      'Executive Captain Seats',
      '15.6" Rear Screens',
      'Premium Audio System',
      'Air Suspension',
      'Privacy Glass',
      'Smart Climate Control',
      'Wireless Connectivity',
      'Advanced Safety'
    ],
    description: 'Zeekr 009 is a luxury electric MPV designed for executive transport with premium amenities throughout.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.9,
    reviewCount: 56
  },

  {
    id: 'zeekr-x',
    brand: 'Zeekr',
    model: 'X',
    category: 'SUV',
    year: 2024,
    priceUSD: 38900,
    images: ['/images/models/zeekr/x-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '428 HP',
      torque: '543 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '560 km',
      batteryCapacity: '66 kWh',
      acceleration: '3.7s',
      topSpeed: '185 km/h'
    },
    features: [
      'Sliding Console',
      'Moving Glove Box',
      '14.6" Touchscreen',
      'Smart Cabin',
      'Premium Audio',
      'Ambient Lighting',
      'Voice Control',
      'OTA Updates'
    ],
    description: 'Zeekr X is a compact electric SUV with innovative interior features and sporty performance.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.6,
    reviewCount: 89
  },

  // ========== WULING MODELS (3 models) ==========
  {
    id: 'wuling-hongguang-mini-ev',
    brand: 'Wuling',
    model: 'Hongguang Mini EV',
    category: 'Electric',
    year: 2024,
    priceUSD: 8000,
    images: ['/images/models/wuling/mini-ev-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '41 HP',
      torque: '110 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 4,
      doors: 3,
      length: '2920 mm',
      width: '1493 mm',
      height: '1621 mm',
      range: '200 km',
      batteryCapacity: '17.3 kWh',
      acceleration: '19.2s',
      topSpeed: '100 km/h',
      chargingTime: '6.5 hours'
    },
    features: [
      'Air Conditioning',
      'Digital Display',
      'Rear Camera',
      'Multiple Color Options',
      'Keyless Entry',
      'LED Daytime Lights',
      'App Connectivity',
      'Low Speed Warning'
    ],
    description: 'Ultra-compact city EV perfect for urban commuting. Best-selling EV in China with over 1 million units sold.',
    available: true,
    featured: true,
    status: 'Best Seller',
    tagline: 'Smart & Efficient Urban Electric Vehicle',
    discount: 5,
    rating: 4.4,
    reviewCount: 456,
    colors: ['Pink', 'Blue', 'White', 'Green', 'Yellow']
  },

  {
    id: 'wuling-bingo',
    brand: 'Wuling',
    model: 'Bingo',
    category: 'Hatchback',
    year: 2024,
    priceUSD: 11900,
    images: ['/images/models/wuling/bingo-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '68 HP',
      torque: '150 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '333 km',
      batteryCapacity: '31.9 kWh',
      acceleration: '13.8s',
      topSpeed: '130 km/h'
    },
    features: [
      '10.25" Dual Screen',
      'Ling OS Smart System',
      'Fast DC Charging',
      'Automatic Climate Control',
      'Keyless Entry & Start',
      'Four-Speaker Audio',
      'Multiple Driving Modes',
      'Mobile App Control'
    ],
    description: 'Wuling Bingo offers exceptional value in the micro EV segment with cute design and practical features.',
    available: true,
    featured: true,
    status: 'Best Seller',
    promotion: 'Free first-year insurance',
    discount: 7,
    rating: 4.5,
    reviewCount: 289
  },

  {
    id: 'wuling-journey',
    brand: 'Wuling',
    model: 'Journey',
    category: 'MPV',
    year: 2024,
    priceUSD: 15900,
    images: ['/images/models/wuling/journey-1.jpg'],
    specs: {
      engine: '1.5L Naturally Aspirated',
      power: '105 HP',
      torque: '135 Nm',
      transmission: '5MT/CVT',
      fuelType: 'Petrol',
      seats: 7,
      doors: 5,
      fuelConsumption: '7.2L/100km',
      cargoVolume: '1620L'
    },
    features: [
      'Spacious Interior',
      'Fold-flat Seats',
      'Basic Infotainment',
      'Air Conditioning',
      'Power Windows',
      'Reverse Sensor',
      'Durable Materials',
      'Low Maintenance'
    ],
    description: 'Wuling Journey is an affordable MPV focusing on practicality and reliability for large families or commercial use.',
    available: true,
    featured: false,
    status: 'In Stock',
    discount: 8,
    rating: 4.2,
    reviewCount: 178
  },

  // ========== GREAT WALL/HAVAL MODELS (3 models) ==========
  {
    id: 'haval-h6',
    brand: 'Great Wall',
    model: 'Haval H6',
    category: 'SUV',
    year: 2024,
    priceUSD: 26000,
    images: ['/images/models/haval/h6-1.jpg'],
    specs: {
      engine: '1.5T Turbo',
      power: '184 HP',
      torque: '275 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '7.3L/100km',
      acceleration: '9.0s'
    },
    features: [
      'Intelligent AWD',
      'Panoramic Sunroof',
      'Leather Interior',
      'Wireless Charging',
      '12.3" Touchscreen',
      '360° Camera',
      'Keyless Entry',
      'Cruise Control'
    ],
    description: 'Haval H6 is one of China\'s best-selling SUVs, offering balanced performance and features at competitive price.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.5,
    reviewCount: 345
  },

  {
    id: 'haval-dargo',
    brand: 'Great Wall',
    model: 'Haval Dargo',
    category: 'SUV',
    year: 2024,
    priceUSD: 32900,
    images: ['/images/models/haval/dargo-1.jpg'],
    specs: {
      engine: '2.0T Turbo',
      power: '211 HP',
      torque: '325 Nm',
      transmission: '9DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '8.5L/100km',
      driveType: '4WD'
    },
    features: [
      'Tough Off-road Design',
      'Terrain Response System',
      'Front & Rear Diff Locks',
      '360° Camera',
      'Panoramic Sunroof',
      'Premium Audio',
      'Wireless Charging',
      'Advanced Safety'
    ],
    description: 'Haval Dargo is a rugged off-road SUV designed for adventurous lifestyles with proper 4WD capability.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.6,
    reviewCount: 89
  },

  {
    id: 'great-wall-poer',
    brand: 'Great Wall',
    model: 'Poer Pickup',
    category: 'Pickup',
    year: 2024,
    priceUSD: 28900,
    images: ['/images/models/great-wall/poer-1.jpg'],
    specs: {
      engine: '2.0T Diesel',
      power: '163 HP',
      torque: '400 Nm',
      transmission: '8AT',
      fuelType: 'Diesel',
      seats: 5,
      doors: 4,
      payload: '1000 kg',
      fuelConsumption: '9.8L/100km',
      driveType: '4WD'
    },
    features: [
      'Electronic 4WD System',
      'Heavy-duty Chassis',
      'Towing Package',
      'Touchscreen Infotainment',
      'Reverse Camera',
      'Cruise Control',
      'Bed Liner',
      'Fog Lights'
    ],
    description: 'Great Wall Poer is a modern pickup truck offering both work capability and passenger comfort.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.4,
    reviewCount: 112
  },

  // ========== CHANGAN MODELS (3 models) ==========
  {
    id: 'changan-uni-v',
    brand: 'Changan',
    model: 'UNI-V',
    category: 'Sedan',
    year: 2024,
    priceUSD: 23000,
    images: ['/images/models/changan/uni-v-1.jpg'],
    specs: {
      engine: '1.5L Turbo',
      power: '188 HP',
      torque: '300 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      fuelConsumption: '6.2L/100km',
      acceleration: '7.3s',
      topSpeed: '205 km/h'
    },
    features: [
      'Electric Rear Spoiler',
      'Dual 10.3" Screens',
      'Sport Seats',
      'Exhaust Sound System',
      '360° Camera',
      'Panoramic Sunroof',
      'Wireless Charging',
      'Sport Mode'
    ],
    description: 'Changan UNI-V is a sporty sedan with coupe-like design and performance-oriented features.',
    available: true,
    featured: true,
    status: 'Coming Soon',
    tagline: 'Ultimate Sport Sedan Experience',
    rating: 4.7,
    reviewCount: 189
  },

  {
    id: 'changan-uni-k',
    brand: 'Changan',
    model: 'UNI-K',
    category: 'SUV',
    year: 2024,
    priceUSD: 28900,
    images: ['/images/models/changan/uni-k-1.jpg'],
    specs: {
      engine: '2.0T Turbo',
      power: '233 HP',
      torque: '390 Nm',
      transmission: '8AT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '8.4L/100km',
      acceleration: '8.6s'
    },
    features: [
      'Space-themed Interior',
      '12.3" + 10.25" Screens',
      'Sony Audio System',
      'Zero-gravity Seats',
      'AR Navigation',
      'Smart Voice Control',
      'Ambient Lighting',
      'Advanced Safety'
    ],
    description: 'Changan UNI-K is a futuristic SUV with space-inspired design and advanced technology features.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.6,
    reviewCount: 134
  },

  {
    id: 'changan-shenlan-sl03',
    brand: 'Changan',
    model: 'Shenlan SL03',
    category: 'Sedan',
    year: 2024,
    priceUSD: 26900,
    images: ['/images/models/changan/shenlan-sl03-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '258 HP',
      torque: '320 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      range: '515 km',
      batteryCapacity: '58.1 kWh',
      acceleration: '5.9s',
      topSpeed: '170 km/h'
    },
    features: [
      '14.6" Touchscreen',
      'AR-HUD',
      'Premium Audio',
      'Panoramic Sunroof',
      'Smart Cabin',
      'Voice Control',
      'Fast Charging',
      'OTA Updates'
    ],
    description: 'Changan Shenlan SL03 is an electric sedan with hydrogen fuel cell range extender option available.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.5,
    reviewCount: 98
  },

  // ========== MG MODELS (3 models) ==========
  {
    id: 'mg-5',
    brand: 'MG',
    model: 'MG 5',
    category: 'Sedan',
    year: 2024,
    priceUSD: 18000,
    images: ['/images/models/mg/mg5-1.jpg'],
    specs: {
      engine: '1.5L',
      power: '120 HP',
      torque: '150 Nm',
      transmission: 'CVT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      fuelConsumption: '5.7L/100km',
      acceleration: '11.5s',
      topSpeed: '180 km/h'
    },
    features: [
      '10" Touchscreen',
      'Apple CarPlay/Android Auto',
      'Cruise Control',
      'LED Lights',
      'Reverse Camera',
      'Keyless Entry',
      'Automatic Climate',
      'Steering Controls'
    ],
    description: 'MG 5 is an affordable sedan with modern features and British-inspired design heritage.',
    available: true,
    featured: false,
    status: 'In Stock',
    discount: 12,
    rating: 4.3,
    reviewCount: 234
  },

  {
    id: 'mg-zs',
    brand: 'MG',
    model: 'ZS',
    category: 'SUV',
    year: 2024,
    priceUSD: 21900,
    images: ['/images/models/mg/zs-1.jpg'],
    specs: {
      engine: '1.5L Naturally Aspirated',
      power: '120 HP',
      torque: '150 Nm',
      transmission: 'CVT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 5,
      fuelConsumption: '6.6L/100km'
    },
    features: [
      '10.1" Touchscreen',
      'MG Pilot Safety Suite',
      'Apple CarPlay/Android Auto',
      'Keyless Entry',
      'Auto Climate',
      'Cruise Control',
      'LED Headlights',
      'Roof Rails'
    ],
    description: 'MG ZS compact SUV offers European design with competitive pricing and comprehensive safety features.',
    available: true,
    featured: false,
    status: 'In Stock',
    discount: 8,
    rating: 4.4,
    reviewCount: 189
  },

  {
    id: 'mg4-ev',
    brand: 'MG',
    model: 'MG4 EV',
    category: 'Hatchback',
    year: 2024,
    priceUSD: 29900,
    images: ['/images/models/mg/mg4-ev-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '170 HP',
      torque: '250 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '450 km',
      batteryCapacity: '64 kWh',
      acceleration: '7.7s',
      topSpeed: '160 km/h'
    },
    features: [
      '10.25" Touchscreen',
      'MG iSMART System',
      'One-pedal Driving',
      'Fast Charging',
      'Connected Car Tech',
      'Wireless Charging',
      'Voice Control',
      'OTA Updates'
    ],
    description: 'MG4 EV is a global electric hatchback designed for European markets with competitive range and features.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.5,
    reviewCount: 145
  },

  // ========== DENZA MODELS (2 models) ==========
  {
    id: 'denza-d9',
    brand: 'Denza',
    model: 'D9',
    category: 'MPV',
    year: 2024,
    priceUSD: 65900,
    images: ['/images/models/denza/d9-1.jpg'],
    specs: {
      engine: 'DM-i Hybrid System',
      power: '299 HP',
      torque: '681 Nm',
      transmission: 'E-CVT',
      fuelType: 'PHEV',
      seats: 7,
      doors: 5,
      fuelConsumption: '6.7L/100km',
      batteryCapacity: '40.7 kWh',
      range: '190 km (EV)',
      acceleration: '9.5s'
    },
    features: [
      'Captain Seats with Massage',
      'Dual 12.8" Rear Screens',
      '15.6" Rotating Front Screen',
      'Refrigerator & Warmer',
      'Tri-zone Climate Control',
      'Electric Sliding Doors',
      '14-Speaker Dynaudio System',
      'Wireless Charging Pads'
    ],
    description: 'Denza D9 redefines luxury MPV standards with BYD\'s DM-i technology and executive-level comfort.',
    available: true,
    featured: true,
    status: 'New',
    tagline: 'Luxury Business MPV Revolution',
    rating: 4.8,
    reviewCount: 78
  },

  {
    id: 'denza-n7',
    brand: 'Denza',
    model: 'N7',
    category: 'SUV',
    year: 2024,
    priceUSD: 46900,
    images: ['/images/models/denza/n7-1.jpg'],
    specs: {
      engine: 'Dual Motor AWD',
      power: '530 HP',
      torque: '670 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '702 km',
      batteryCapacity: '91.3 kWh',
      acceleration: '3.9s',
      topSpeed: '180 km/h'
    },
    features: [
      'AR-HUD',
      'Premium Audio System',
      'Massage Seats',
      'Air Suspension',
      'Smart Cabin',
      '5G Connectivity',
      'Advanced Safety',
      'Fast Charging'
    ],
    description: 'Denza N7 is a luxury electric SUV focusing on comfort and intelligent driving experience.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.7,
    reviewCount: 56
  },

  // ========== SPECIALIZED/OTHER BRANDS (5 models) ==========
  {
    id: 'jac-n55-ev',
    brand: 'JAC',
    model: 'N55 EV',
    category: 'Commercial',
    year: 2024,
    priceUSD: 42900,
    images: ['/images/models/jac/n55-ev-1.jpg'],
    specs: {
      engine: 'Electric Motor',
      power: '163 HP',
      torque: '1000 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 3,
      doors: 2,
      range: '320 km',
      batteryCapacity: '96.8 kWh',
      payload: '2495 kg',
      acceleration: '25.0s',
      topSpeed: '90 km/h',
      driveType: 'RWD'
    },
    features: [
      'Fast DC Charging',
      'Regenerative Braking',
      'Telematics System',
      'Cargo Management',
      'Low Maintenance Cost',
      'Quiet Operation',
      'Zero Emissions',
      'Battery Warranty'
    ],
    description: 'JAC N55 EV is an all-electric light truck designed for urban logistics with significant fuel cost savings.',
    available: true,
    featured: false,
    status: 'New',
    promotion: 'Government subsidy available',
    rating: 4.4,
    reviewCount: 34
  },

  {
    id: 'foton-aumark-s1',
    brand: 'Foton',
    model: 'AUMARK S1',
    category: 'Commercial',
    year: 2024,
    priceUSD: 28000,
    images: ['/images/models/foton/aumark-s1-1.jpg'],
    specs: {
      engine: '2.8L Diesel',
      power: '150 HP',
      torque: '360 Nm',
      transmission: '6MT',
      fuelType: 'Diesel',
      seats: 3,
      doors: 2,
      payload: '1995 kg',
      fuelConsumption: '10.5L/100km'
    },
    features: [
      'Heavy Duty Chassis',
      'Power Steering',
      'ABS Brakes',
      'Air Conditioning',
      'Digital Instrumentation',
      'Durable Interior',
      'Large Mirrors',
      'Towing Hitch'
    ],
    description: 'Foton AUMARK S1 is a reliable commercial truck for urban logistics and delivery operations.',
    available: true,
    featured: true,
    status: 'In Stock',
    tagline: 'Reliable Partner for Urban Logistics',
    discount: 5,
    rating: 4.3,
    reviewCount: 89
  },

  {
    id: 'hongqi-h9',
    brand: 'Hongqi',
    model: 'H9',
    category: 'Sedan',
    year: 2024,
    priceUSD: 68900,
    images: ['/images/models/hongqi/h9-1.jpg'],
    specs: {
      engine: '3.0T V6',
      power: '283 HP',
      torque: '400 Nm',
      transmission: '7DCT',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      length: '5137 mm',
      fuelConsumption: '9.0L/100km',
      acceleration: '7.8s',
      topSpeed: '245 km/h'
    },
    features: [
      'Executive Luxury Interior',
      'Premium Audio System',
      'Massage Seats',
      'Advanced Safety Systems',
      'Ambient Lighting',
      'Handcrafted Details',
      'Executive Rear Seats',
      'Premium Materials'
    ],
    description: 'Hongqi H9 is China\'s flagship luxury sedan with traditional Chinese design elements and premium features.',
    available: true,
    featured: true,
    status: 'Limited Edition',
    tagline: 'Chinese Luxury Redefined',
    rating: 4.8,
    reviewCount: 45
  },

  {
    id: 'voyah-free',
    brand: 'Voyah',
    model: 'Free',
    category: 'SUV',
    year: 2024,
    priceUSD: 52900,
    images: ['/images/models/voyah/free-1.jpg'],
    specs: {
      engine: 'Dual Motor',
      power: '490 HP',
      torque: '720 Nm',
      transmission: 'Automatic',
      fuelType: 'Electric',
      seats: 5,
      doors: 5,
      range: '505 km',
      batteryCapacity: '106.7 kWh',
      acceleration: '4.5s',
      topSpeed: '200 km/h'
    },
    features: [
      'Air Suspension',
      'Triple Screen Dashboard',
      'Premium Audio System',
      'Massage Seats',
      'Advanced Safety',
      '5G Connectivity',
      'Smart Cabin',
      'Fast Charging'
    ],
    description: 'Voyah Free is a premium electric SUV focusing on luxury and intelligent driving experience.',
    available: true,
    featured: false,
    status: 'In Stock',
    rating: 4.7,
    reviewCount: 67
  },

  {
    id: 'maxus-g10',
    brand: 'Maxus',
    model: 'G10',
    category: 'MPV',
    year: 2024,
    priceUSD: 32900,
    images: ['/images/models/maxus/g10-1.jpg'],
    specs: {
      engine: '2.0T Turbo Diesel',
      power: '163 HP',
      torque: '375 Nm',
      transmission: '6AT',
      fuelType: 'Diesel',
      seats: 9,
      doors: 5,
      fuelConsumption: '8.5L/100km',
      cargoVolume: '2500L'
    },
    features: [
      'Spacious Interior',
      'Flexible Seating',
      'Touchscreen Infotainment',
      'Rear Camera',
      'Cruise Control',
      'Power Sliding Doors',
      'Tri-zone Climate',
      'Roof Rails'
    ],
    description: 'Maxus G10 is a versatile MPV suitable for both passenger transport and commercial applications.',
    available: true,
    featured: false,
    status: 'In Stock',
    discount: 7,
    rating: 4.3,
    reviewCount: 112
  }
];

export const categories = [
  { id: 'all', name: 'All Vehicles', count: vehicleModels.length },
  { id: 'suv', name: 'SUV', count: vehicleModels.filter(m => m.category === 'SUV').length },
  { id: 'sedan', name: 'Sedan', count: vehicleModels.filter(m => m.category === 'Sedan').length },
  { id: 'electric', name: 'Electric', count: vehicleModels.filter(m => m.category === 'Electric').length },
  { id: 'mpv', name: 'MPV', count: vehicleModels.filter(m => m.category === 'MPV').length },
  { id: 'hatchback', name: 'Hatchback', count: vehicleModels.filter(m => m.category === 'Hatchback').length },
  { id: 'commercial', name: 'Commercial', count: vehicleModels.filter(m => m.category === 'Commercial').length },
  { id: 'pickup', name: 'Pickup Trucks', count: vehicleModels.filter(m => m.category === 'Pickup').length },
  { id: 'sports', name: 'Sports', count: vehicleModels.filter(m => m.category === 'Sports').length },
  { id: 'minivan', name: 'Minivan', count: vehicleModels.filter(m => m.category === 'Minivan').length }
];

export const brandsList = [
  'BYD', 'Geely', 'Chery', 'NIO', 'Xpeng', 'Li Auto', 
  'Zeekr', 'Wuling', 'Great Wall', 'Changan', 'MG', 
  'Denza', 'JAC', 'Foton', 'Hongqi', 'Voyah', 'Maxus',
  'Ora', 'Aiways', 'Exeed', 'Jetour', 'Seres'
];

export const priceRanges = [
  { id: 'budget', name: 'Under $20,000', min: 0, max: 20000, count: vehicleModels.filter(m => m.priceUSD <= 20000).length },
  { id: 'economy', name: '$20,000 - $30,000', min: 20000, max: 30000, count: vehicleModels.filter(m => m.priceUSD > 20000 && m.priceUSD <= 30000).length },
  { id: 'mid', name: '$30,000 - $50,000', min: 30000, max: 50000, count: vehicleModels.filter(m => m.priceUSD > 30000 && m.priceUSD <= 50000).length },
  { id: 'premium', name: '$50,000 - $80,000', min: 50000, max: 80000, count: vehicleModels.filter(m => m.priceUSD > 50000 && m.priceUSD <= 80000).length },
  { id: 'luxury', name: 'Over $80,000', min: 80000, max: 1000000, count: vehicleModels.filter(m => m.priceUSD > 80000).length }
];

export const fuelTypes = [
  { id: 'all', name: 'All Fuel Types', count: vehicleModels.length },
  { id: 'electric', name: 'Electric', count: vehicleModels.filter(m => m.specs.fuelType === 'Electric').length },
  { id: 'hybrid', name: 'Hybrid', count: vehicleModels.filter(m => m.specs.fuelType === 'Hybrid').length },
  { id: 'phev', name: 'Plug-in Hybrid', count: vehicleModels.filter(m => m.specs.fuelType === 'PHEV').length },
  { id: 'petrol', name: 'Petrol', count: vehicleModels.filter(m => m.specs.fuelType === 'Petrol').length },
  { id: 'diesel', name: 'Diesel', count: vehicleModels.filter(m => m.specs.fuelType === 'Diesel').length }
];
// ===== FILE: C:\Users\TEMEsgen\Desktop\Boru\daqin-auto\data\models.ts =====

// (All your previous code remains the same until the helper functions section...)

// ========== HELPER FUNCTIONS (EXPORTED) ==========

// Helper function to get featured models (for homepage showcase)
export const getFeaturedModels = (limit?: number): VehicleModel[] => {
  const featured = vehicleModels.filter(model => model.featured);
  return limit ? featured.slice(0, limit) : featured;
};

// Helper function to get models by status
export const getModelsByStatus = (status: VehicleModel['status']): VehicleModel[] => {
  return vehicleModels.filter(model => model.status === status);
};

// Helper function to get models by brand
export const getModelsByBrand = (brand: string): VehicleModel[] => {
  return vehicleModels.filter(model => model.brand.toLowerCase() === brand.toLowerCase());
};

// Helper function to get models by category
export const getModelsByCategory = (category: string): VehicleModel[] => {
  if (category === 'all') return vehicleModels;
  if (category === 'commercial') {
    return vehicleModels.filter(model => 
      model.category === 'Commercial' || model.category === 'Pickup'
    );
  }
  return vehicleModels.filter(model => 
    model.category.toLowerCase() === category.toLowerCase()
  );
};

// Helper function to get models by price range
export const getModelsByPriceRange = (min: number, max: number): VehicleModel[] => {
  return vehicleModels.filter(model => 
    model.priceUSD >= min && model.priceUSD <= max
  );
};

// Helper function to get models by fuel type
export const getModelsByFuelType = (fuelType: string): VehicleModel[] => {
  if (fuelType === 'all') return vehicleModels;
  return vehicleModels.filter(model => 
    model.specs.fuelType.toLowerCase() === fuelType.toLowerCase()
  );
};

// Helper function to get newest models
export const getNewestModels = (limit: number = 6): VehicleModel[] => {
  return [...vehicleModels]
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
};

// Helper function to get best value models (price/features ratio)
export const getBestValueModels = (limit: number = 4): VehicleModel[] => {
  return vehicleModels
    .filter(model => model.priceUSD <= 30000 && model.rating && model.rating >= 4.0)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
};

// Helper function to get premium models
export const getPremiumModels = (limit: number = 4): VehicleModel[] => {
  return vehicleModels
    .filter(model => model.priceUSD >= 50000)
    .sort((a, b) => b.priceUSD - a.priceUSD)
    .slice(0, limit);
};

// Helper function to get models with discounts
export const getDiscountedModels = (): VehicleModel[] => {
  return vehicleModels.filter(model => model.discount && model.discount > 0);
};

// Helper function to search models
export const searchModels = (query: string): VehicleModel[] => {
  const searchTerm = query.toLowerCase();
  return vehicleModels.filter(model => 
    model.brand.toLowerCase().includes(searchTerm) ||
    model.model.toLowerCase().includes(searchTerm) ||
    model.description.toLowerCase().includes(searchTerm) ||
    model.category.toLowerCase().includes(searchTerm) ||
    model.tagline?.toLowerCase().includes(searchTerm)
  );
};

// Helper function to get unique brands with counts
export const getBrandsWithCounts = () => {
  const brandMap = new Map();
  vehicleModels.forEach(model => {
    const count = brandMap.get(model.brand) || 0;
    brandMap.set(model.brand, count + 1);
  });
  
  return Array.from(brandMap.entries()).map(([brand, count]) => ({
    brand,
    count,
    logo: `/images/brands/${brand.toLowerCase().replace(/\s+/g, '-')}.png`
  }));
};

// Helper function to get model by ID
export const getModelById = (id: string): VehicleModel | undefined => {
  return vehicleModels.find(model => model.id === id);
};

// Helper function to get similar models (by category or brand)
export const getSimilarModels = (currentModel: VehicleModel, limit: number = 4): VehicleModel[] => {
  return vehicleModels
    .filter(model => 
      model.id !== currentModel.id && 
      (model.category === currentModel.category || model.brand === currentModel.brand)
    )
    .slice(0, limit);
};

// Helper function to get models sorted by price (asc/desc)
export const getModelsSortedByPrice = (order: 'asc' | 'desc' = 'asc'): VehicleModel[] => {
  return [...vehicleModels].sort((a, b) => 
    order === 'asc' ? a.priceUSD - b.priceUSD : b.priceUSD - a.priceUSD
  );
};

// Helper function to get models sorted by rating
export const getModelsSortedByRating = (): VehicleModel[] => {
  return [...vehicleModels].sort((a, b) => 
    (b.rating || 0) - (a.rating || 0)
  );
};

// Helper function to get electric models with range > 500km
export const getLongRangeEVs = (): VehicleModel[] => {
  return vehicleModels.filter(model => 
    model.specs.fuelType === 'Electric' && 
    model.specs.range && 
    parseInt(model.specs.range.split(' ')[0]) > 500
  );
};

// Helper function to get family models (7-seaters)
export const getFamilyModels = (): VehicleModel[] => {
  return vehicleModels.filter(model => model.specs.seats >= 7);
};

// Helper function to get sport models (acceleration < 6s)
export const getSportModels = (): VehicleModel[] => {
  return vehicleModels.filter(model => 
    model.specs.acceleration && 
    parseFloat(model.specs.acceleration.split('s')[0]) < 6
  );
};

// Helper function to get best selling models
export const getBestSellingModels = (): VehicleModel[] => {
  return vehicleModels.filter(model => model.status === 'Best Seller');
};

// Helper function to get coming soon models
export const getComingSoonModels = (): VehicleModel[] => {
  return vehicleModels.filter(model => model.status === 'Coming Soon');
};

// Helper function to get limited edition models
export const getLimitedEditionModels = (): VehicleModel[] => {
  return vehicleModels.filter(model => model.status === 'Limited Edition');
};

// Stats functions
export const getTotalModelsCount = (): number => vehicleModels.length;

export const getAveragePrice = (): number => {
  const total = vehicleModels.reduce((sum, model) => sum + model.priceUSD, 0);
  return Math.round(total / vehicleModels.length);
};

export const getAvailableModelsCount = (): number => {
  return vehicleModels.filter(model => model.available).length;
};

export const getEVCount = (): number => {
  return vehicleModels.filter(model => model.specs.fuelType === 'Electric').length;
};

export const getHybridCount = (): number => {
  return vehicleModels.filter(model => 
    model.specs.fuelType === 'Hybrid' || 
    model.specs.fuelType === 'PHEV'
  ).length;
};
// Additional helper functions remain the same as before...
// [All helper functions from previous code remain unchanged]