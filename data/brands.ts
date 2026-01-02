export const brands = {
  chinese: [
    { name: 'BYD', logo: '/images/brands/byd.png', description: 'World\'s leading EV manufacturer' },
    { name: 'Geely', logo: '/images/brands/geely.png', description: 'Innovative automotive technology' },
    { name: 'Chery', logo: '/images/brands/chery.png', description: 'Global automotive brand' },
    { name: 'Jetour', logo: '/images/brands/jetour.jpg', description: 'Youth-focused SUV brand' },
    { name: 'Zeekr', logo: '/images/brands/zeekr.jpg', description: 'Premium electric mobility' },
    { name: 'Avatr', logo: '/images/brands/avatr.png', description: 'Huawei-backed EV brand' },
    { name: 'Xiaomi', logo: '/images/brands/xiaomi.png', description: 'Tech giant entering EV market' },
    { name: 'Wuling', logo: '/images/brands/wuling.png', description: 'Affordable electric vehicles' }
  ],
  international: [
    { name: 'BMW', logo: '/images/brands/bmw.png', description: 'German luxury automotive' },
    { name: 'Volkswagen', logo: '/images/brands/vw1.png', description: 'European automotive leader' },
    { name: 'Hyundai', logo: '/images/brands/hyundai.png', description: 'Korean automotive excellence' },
    { name: 'Kia', logo: '/images/brands/kia.png', description: 'Innovative Korean brand' },
    { name: 'Volvo', logo: '/images/brands/volvo.jpg', description: 'Swedish safety and luxury' },
    { name: 'Mazda', logo: '/images/brands/mazda.png', description: 'Japanese engineering excellence' }
  ]
};

export type Brand = {
  name: string;
  logo: string;
  description: string;
};
