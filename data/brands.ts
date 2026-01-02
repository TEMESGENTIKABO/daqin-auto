export const brands = {
  chinese: [
    { name: 'BYD', logo: '/images/brands/byd.svg', description: 'World\'s leading EV manufacturer' },
    { name: 'Geely', logo: '/images/brands/geely.svg', description: 'Innovative automotive technology' },
    { name: 'Chery', logo: '/images/brands/chery.svg', description: 'Global automotive brand' },
    { name: 'Jetour', logo: '/images/brands/jetour.svg', description: 'Youth-focused SUV brand' },
    { name: 'Zeekr', logo: '/images/brands/zeekr.svg', description: 'Premium electric mobility' },
    { name: 'Avatr', logo: '/images/brands/avatr.svg', description: 'Huawei-backed EV brand' },
    { name: 'Xiaomi', logo: '/images/brands/xiaomi.svg', description: 'Tech giant entering EV market' },
    { name: 'Wuling', logo: '/images/brands/wuling.svg', description: 'Affordable electric vehicles' }
  ],
  international: [
    { name: 'BMW', logo: '/images/brands/bmw.svg', description: 'German luxury automotive' },
    { name: 'Volkswagen', logo: '/images/brands/vw.svg', description: 'European automotive leader' },
    { name: 'Hyundai', logo: '/images/brands/hyundai.svg', description: 'Korean automotive excellence' },
    { name: 'Kia', logo: '/images/brands/kia.svg', description: 'Innovative Korean brand' },
    { name: 'Volvo', logo: '/images/brands/volvo.svg', description: 'Swedish safety and luxury' },
    { name: 'Mazda', logo: '/images/brands/mazda.svg', description: 'Japanese engineering excellence' }
  ]
};

export type Brand = {
  name: string;
  logo: string;
  description: string;
};
