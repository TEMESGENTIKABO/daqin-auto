export interface VehicleType {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  features: string[];
}

export const vehicleTypes: VehicleType[] = [
  {
    id: "ev",
    name: "EV",
    fullName: "Electric Vehicles",
    description:
      "Zero-emission electric vehicles with advanced battery technology",
    icon: "⚡",
    features: [
      "Zero emissions",
      "Low operating costs",
      "Instant torque",
      "Advanced technology",
    ],
  },
  {
    id: "phev",
    name: "PHEV",
    fullName: "Plug-in Hybrid Electric Vehicles",
    description: "Combine electric and gasoline power for maximum efficiency",
    icon: "🔌",
    features: [
      "Electric + Gasoline",
      "Longer range",
      "Flexible charging",
      "Reduced emissions",
    ],
  },
  {
    id: "reev",
    name: "REEV",
    fullName: "Range Extended Electric Vehicles",
    description: "Electric vehicles with range-extending generators",
    icon: "🔄",
    features: [
      "Electric primary",
      "Range extender",
      "No range anxiety",
      "Efficient",
    ],
  },
  {
    id: "petrol",
    name: "Petrol",
    fullName: "Traditional Fuel Vehicles",
    description: "Reliable gasoline-powered vehicles with proven technology",
    icon: "⛽",
    features: [
      "Proven technology",
      "Wide availability",
      "Quick refueling",
      "Lower upfront cost",
    ],
  },
];

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Vehicle Sourcing",
    description:
      "Access to extensive network of manufacturers and dealers across China",
    icon: "🔍",
  },
  {
    title: "Quality Inspection",
    description:
      "Comprehensive pre-shipment inspection ensuring vehicle quality",
    icon: "✅",
  },
  {
    title: "Export Documentation",
    description: "Complete handling of all export paperwork and compliance",
    icon: "📄",
  },
  {
    title: "Shipping & Logistics",
    description: "Door-to-door shipping with tracking and insurance",
    icon: "🚢",
  },
  {
    title: "Customs Clearance",
    description: "Assistance with customs procedures in destination country",
    icon: "🛃",
  },
  {
    title: "After-Sales Support",
    description: "Comprehensive support including warranty and parts supply",
    icon: "🛠️",
  },
];
