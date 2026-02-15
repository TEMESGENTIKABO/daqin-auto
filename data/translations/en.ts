const enTranslations = {
  // Header
  header: {
    title: "Da Qin Auto",
    company: "Xi'an Da Qin Dao Rui International Trade Co., Ltd.",
    companyFull: "Xi'an Da Qin Dao Rui International Trade Co., Ltd.", // Same as company
    contactBtn: "+86-15594634955",
    brandTitle: "DAQIN AUTO EXPORT", // Add this
    nav: {
      home: "Home",
      about: "About",
      brands: "Brands",
      vehicles: "Vehicles",
      services: "Services",
      contact: "Contact",
      models: "Models",
    },
    // New keys for Header component
    searchPlaceholder: "Search vehicles, brands, models...",
    searchButton: "Search",
    clearSearch: "Clear search",
    language: "Language",
    premiumVehicleExporter: "Premium Vehicle Exporter",
    quickSearches: "Quick Searches:",
  },

  // Hero
  hero: {
    tagline: "Your Trusted Automobile Supplier",
    title: "Premium Chinese Automobiles",
    subtitle: "Global Delivery",
    description:
      "Xi'an Da Qin Dao Rui International Trade Co., Ltd provides high-quality gasoline, electric, and hybrid vehicles from globally leading brands.",
    stats: {
      brands: "Brands",
      vehicles: "Vehicles Exported",
      support: "Support",
    },
    cta: {
      quote: "Get Free Quote",
      brands: "View Brands",
    },
    features: {
      quality: "Quality Assurance",
      shipping: "Global Shipping",
      support: "Expert Support",
    },
    statsTitles: {
      quality: "Quality",
      supply: "Supply",
      team: "Team",
      logistics: "Logistics",
      support24: "Support",
    },
    statsDescriptions: {
      quality: "Rigorous QC: 100% Pre-shipment",
      supply: "Stable Supply: Bulk Orders Welcome",
      team: "Expert Team: Trusted Export Experience",
      logistics: "Global Logistics: Door-to-Door",
      support24: "Global Support: Dedicated Assistance",
    },
    statsNumbers: {
      quality: "100%",
      supply: "10,000+",
      team: "50,000+",
      logistics: "20+",
      support24: "24/7",
    },
    premiumExport: "Premium Auto Export",
    years: "YEARS",

    // New keys for the Hero component:
    heroTitle: "Your Trusted Automobile Supplier in China",
    rigorousQC: "Rigorous QC: 100% Pre-shipment",
    stableSupply: "Stable Supply: Bulk Orders Welcome",
    expertTeam: "Expert Team: Trusted Export Experience",
    globalLogistics: "Global Logistics: Door-to-Door",
    globalSupport: "Global Support: Dedicated Assistance",
  },
  // Services
  services: {
    title: "Comprehensive Export Solutions",
    subtitle: "Streamlined vehicle export process from sourcing to delivery",
    items: [
      {
        title: "Vehicle Sourcing",
        description: "Extensive network to find your perfect vehicle match",
      },
      {
        title: "Quality Inspection",
        description: "Comprehensive pre-shipment inspection & certification",
      },
      {
        title: "Export Processing",
        description: "Complete export documentation & logistics handling",
      },
    ],
  },
  // Process
  process: {
    title: "Streamlined Export Process",
    subtitle:
      "A transparent, step-by-step approach ensuring quality and timely delivery",
    ctaTitle: "Ready to Start Your Export Journey?",
    ctaDescription: "Contact our experts for a personalized consultation",
    steps: [
      {
        title: "Initial Consultation",
        description: "We understand your requirements, budget, and timeline",
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
        description: "Door-to-door delivery",
      },
    ],
  },
  // Vehicles
  vehicles: {
    title: "Vehicle Types",
    subtitle:
      "Comprehensive range of vehicle technologies for diverse market needs",
    portfolio: "Portfolio",
    keySpecifications: "Key Specifications",
    mainFeatures: "Main Features",
    mobileInstructions:
      "Tap on any vehicle card to view detailed specifications and features",
    requestQuote: "Request Quote",
    viewAllVehicles: "View All Vehicles",
    requestDetails: "Request {name} Details", // {name} will be replaced
    // Vehicle type specific translations
    ev: {
      name: "EV",
      fullName: "Electric Vehicle",
      description:
        "Fully electric vehicles with zero emissions and advanced technology",
      features: [
        "Zero tailpipe emissions",
        "Instant torque delivery",
        "Low operating costs",
        "Advanced connectivity",
        "Fast charging capability",
      ],
      specifications: [
        { label: "Range", value: "300-500 km" },
        { label: "Charge Time", value: "30-45 min (DC)" },
        { label: "Battery Life", value: "8-10 years" },
      ],
    },
    phev: {
      name: "PHEV",
      fullName: "Plug-in Hybrid",
      description:
        "Combines electric motor with petrol engine for maximum flexibility",
      features: [
        "Electric-only city driving",
        "Extended total range",
        "Flexible charging options",
        "Government incentives",
        "Reduced fuel consumption",
      ],
      specifications: [
        { label: "Electric Range", value: "50-80 km" },
        { label: "Total Range", value: "600-800 km" },
        { label: "Fuel Economy", value: "1.5-2.0L/100km" },
      ],
    },
    reev: {
      name: "REEV",
      fullName: "Range Extended EV",
      description:
        "Electric drive with onboard generator for extended range capabilities",
      features: [
        "Pure electric driving experience",
        "No range anxiety",
        "Lower battery cost",
        "Flexible power sources",
        "Smooth operation",
      ],
      specifications: [
        { label: "Battery Range", value: "150-200 km" },
        { label: "Extended Range", value: "500-700 km" },
        { label: "Generator Type", value: "Petrol/CNG" },
      ],
    },
    petrol: {
      name: "ICE",
      fullName: "Internal Combustion",
      description: "Traditional petrol/diesel vehicles with proven reliability",
      features: [
        "Proven reliability",
        "Widespread service network",
        "Quick refueling",
        "Lower initial cost",
        "Global infrastructure",
      ],
      specifications: [
        { label: "Fuel Types", value: "Petrol/Diesel/CNG" },
        { label: "Efficiency", value: "15-25 km/L" },
        { label: "Power Output", value: "100-300 HP" },
      ],
    },
  },
  // About
  about: {
    title: "About Da Qin Auto",
    description:
      "Your trusted partner for Chinese automotive exports with over a decade of experience",
    storyTitle: "Our Story",
    fullDescription:
      "Da Qin Auto, under Xi'an Da Qin Dao Rui International Trade Co., Ltd., is an independent automobile supplier and exporter based in China.",
    mission: {
      title: "Our Mission",
      text: "To provide quality vehicles at competitive prices with exceptional service, making automotive exports from China accessible and reliable for partners worldwide.",
    },
    vision: {
      title: "Our Vision",
      text: "To become the most trusted and innovative automotive export partner from China, recognized globally for quality, integrity, and customer satisfaction.",
    },
    values: {
      title: "Our Values",
      text: "Integrity, quality assurance, customer focus, continuous improvement, and sustainable partnerships built on trust and mutual success.",
    },
    whyChooseUs: "Why Choose Da Qin Auto",
    features: {
      experience: {
        title: "Experience",
        description:
          "Over 10 years of expertise in automotive exports, understanding market needs across different regions.",
      },
      quality: {
        title: "Quality Assurance",
        description:
          "Rigorous vehicle inspection and quality control processes to ensure only the best vehicles reach our clients.",
      },
      global: {
        title: "Global Reach",
        description:
          "Established logistics network and partnerships for seamless shipping to destinations worldwide.",
      },
      support: {
        title: "Customer Support",
        description:
          "24/7 multilingual support team dedicated to assisting clients throughout the entire process.",
      },
    },
    ctaTitle: "Ready to Partner With Us?",
    ctaDescription:
      "Join hundreds of satisfied partners worldwide who trust Da Qin Auto for their automotive needs.",
    viewModels: "View Our Models",
  },
  // Common
  common: {
    phone: "+86-15594634955",
    email: "contact@daqinauto.com",
    address: "Xi'an, Shanxi Province, China",
    available: "Available 24/7",
    learnMore: "Learn More →",
    services: "Our Services",
    process: "How It Works",
    getStarted: "Start Today",
  },
  // Featured Models
  featuredModels: {
    title: "Featured Models",
    subtitle: "Premium selection from inventory",
    viewAllModels: "All Models",
    filterAll: "All",
    filterNew: "New",
    filterInStock: "In Stock",
    filterSoon: "Soon",
    noModelsFound: "No Models Found",
    noModelsMatch: "No models match current filter.",
    showAllModels: "Show All Models",
    details: "Details",
    inquire: "Inquire",
    getQuote: "Get Quote",
    contactForQuote: "Contact for quote",
    fobChina: "FOB China",
    featured: "Featured",
    statusNew: "New",
    statusInStock: "In Stock",
    statusSoon: "Soon",
    statusLimited: "Limited",
    statusBest: "Best",
    statusPreOrder: "Pre-Order",
    statusSpecial: "Special",
    negotiable: "Negotiable",
  },
  // Contact details
  contactDetails: {
    phone: "+86-155-9463-4955",
    phoneDisplay: "+86-155-9463-4955",
    email: "contact@daqinauto.com",
    address: "Xi'an, Shanxi Province, China",
    wechatId: "daqin_auto",
    telegramId: "@daqinauto",
    whatsapp: "+86-155-9463-4955",
  },
  //filters
  filters: {
    title: "Filters",
    clear: "Clear",
    selectAll: "Select All",
    clearAll: "Clear All",
    showResults: "Show Results",
    showMore: "Show More",
    showLess: "Show Less",
    all: "All",
    resetAll: "Reset All Filters",
    searchPlaceholder: "Search brands...",

    tabs: {
      brands: "Brands",
      type: "Type",
      price: "Price",
      sort: "Sort",
    },

    sections: {
      brands: "Brands",
      type: "Type",
      price: "Price",
      sort: "Sort",
      vehicleType: "Vehicle Type",
      priceRange: "Price Range",
      sortBy: "Sort By",
    },

    categories: {
      all: "All",
      electric: "Electric",
      hybrid: "Hybrid",
      suv: "SUV",
      sedan: "Sedan",
    },

    sortOptions: {
      default: "Recommended",
      priceLow: "Price: Low to High",
      priceHigh: "Price: High to Low",
      yearNew: "Newest First",
      yearOld: "Oldest First",
      nameA: "Name: A to Z",
      nameZ: "Name: Z to A",
    },
  },
  // Contact
  contact: {
    title: "Contact Us Anytime",
    subtitle:
      "24/7 professional support for vehicle inquiries, pricing, and partnership opportunities",
    clickToContact: "Click to contact",
    clickToViewLocation: "Click to view location",
    instant: "Instant",
    location: "Location",
    directCall: "Direct Call",
    available247: "Available 24/7",
    whatsapp: "WhatsApp",
    instantMessaging: "Instant messaging",
    wechat: "WeChat",
    scanQRCode: "Scan QR code",
    telegram: "Telegram",
    secureMessaging: "Secure messaging",
    email: "Email",
    businessInquiries: "Business inquiries",
    officeAddress: "Office Address",
    visitOurShowroom: "Visit our showroom",
    preferToSpeakDirectly: "Prefer to Speak Directly?",
    salesTeamAvailable: "Our sales team is available for immediate assistance",
    callNow: "Call Now",
    businessHours: "Business Hours: 24/7 • Response Time: Within 30 minutes",
  },

  // Footer
  footer: {
    companyTagline: "Your trusted partner for Chinese automotive exports.",
    headquarters: "Headquarters",
    clickToContact: "Click any icon to contact instantly",
    contactDetails: "Contact Details",
    contactVia: "Contact via:",
    quickLinks: "Quick Links",
    whyChooseUs: "Why Choose Us",
    language: "Language:",
    copyright: "All rights reserved.",
    qualityAssurance: "Quality Assurance",
    globalShipping: "Global Shipping",
    support24_7: "24/7 Support",
    yearsExperience: "10+ Years",
  },
  models: {
    // New keys for ModelsUI
    heroTitle: "Quality Vehicles",
    heroSubtitle: "Explore luxury vehicles for exceptional driving",
    searchPlaceholder: "Search by brand, model, category, features...",
    searchHint: "Search across brands, models, categories, and features",
    clearSearch: "Clear Search",
    vehicleBrandsTitle: "Vehicle Brands ({count})",
    allBrands: "All Vehicles",
    allBrandsShort: "All Brands",
    brandTitle: "{brand} ({count} models)",
    searchResultsTitle: "Search Results ({count})",
    allModelsTitle: "All Vehicle Models ({count})",
    brandModelsTitle: "{brand} ({count} Models)",
    searchPaginationInfo:
      "Page {current} of {total} • Showing {showing} matching vehicles",
    paginationInfo:
      "Page {current} of {total} • Showing {showing} of {totalItems} vehicles",
    show: "Show",
    previousPage: "Previous page",
    nextPage: "Next page",
    showingPagination: "Showing {start} to {end} of {total} vehicles",
    noSearchResultsTitle: "No search results found",
    noVehiclesFound: "No vehicles found",
    noSearchResultsDescription:
      'No vehicles found for "{query}". Try different keywords.',
    noVehiclesAvailable: "No vehicles available at the moment.",
    noBrandVehicles: "No {brand} vehicles available.",
    viewAllBrands: "View All Brands",
    brandsAvailableTitle: "Brands Available ({count})",
    brandError:
      'No vehicles found for brand "{brand}". Showing all vehicles instead.',
    noSearchResults: 'No results found for "{query}"',
    searchResultsFound:
      '{count} result{count !== "1" ? "s" : ""} found for "{query}"',
    showingResults: "Showing {current} of {total} matching vehicles",
    whatsappMessage:
      "Hello! I'm interested in the {brand} {model} ({year}).\n\nPrice: {price}\n\nCould you provide more details?",
  specs: {
      engine: "Engine",
      power: "Power",
      seats: "Seats",
      transmission: "Transmission",
      year: "Year",
      fuelType: "Fuel Type",
      torque: "Torque",
      fuelConsumption: "Fuel Consumption",
      range: "Range",
      warranty: "Warranty",
      payload: "Payload",
      colors: "Available colors",
    },
    },
  // Dropdowns (new section for Header)
  dropdowns: {
    brands: {
      allBrands: "All Brands",
      chineseBrands: "Chinese Brands",
      internationalBrands: "International Brands",
      featuredModels: "Featured Models",
    },
    models: {
      allModels: "All Models",
      newArrivals: "New Arrivals",
      electricVehicles: "Electric Vehicles",
      suvs: "SUVs",
      sedans: "Sedans",
    },
    quickSearch: {
      electricVehicles: "Electric Vehicles",
      suvs: "SUVs",
      byd: "BYD",
      tesla: "Tesla",
    },
  },
};

export { enTranslations };
