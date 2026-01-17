// @/data/brands.ts - Updated to match vehicle data
export const brands = [
  { name: 'Mercedes-Benz', logo: '/images/brands/mercedes.png', description: 'German luxury and commercial vehicles' },
  { name: 'BMW', logo: '/images/brands/bmw.png', description: 'German luxury automotive' },
  { name: 'Foton', logo: '/images/brands/foton.png', description: 'Chinese commercial vehicle manufacturer' },
  { name: 'Xiaomi', logo: '/images/brands/xiaomi.png', description: 'Tech giant entering EV market' },
  { name: 'Xpeng', logo: '/images/brands/xpeng.png', description: 'Chinese smart EV company' },
  { name: 'AITO', logo: '/images/brands/aito.png', description: 'Huawei-Seres joint EV brand' },
  { name: 'BYD', logo: '/images/brands/byd.png', description: 'World\'s leading EV manufacturer' },
  { name: 'Toyota', logo: '/images/brands/toyota.png', description: 'Japanese automotive manufacturer' },
  { name: 'Honda', logo: '/images/brands/honda.png', description: 'Japanese automotive and motorcycle manufacturer' },
  { name: 'Volkswagen', logo: '/images/brands/vw1.png', description: 'European automotive leader' },
  { name: 'Nissan', logo: '/images/brands/nissan.png', description: 'Japanese automotive manufacturer' },
  { name: 'MG', logo: '/images/brands/mg.png', description: 'British-born, now Chinese-owned automotive brand' },
  { name: 'Li Auto', logo: '/images/brands/li.png', description: 'Chinese premium EV brand' },
  { name: 'Avatr', logo: '/images/brands/avatr.png', description: 'Huawei-backed EV brand' },
  { name: 'ZEEKR', logo: '/images/brands/zeekr.jpg', description: 'Premium electric mobility' },
  { name: 'Lynk & Co', logo: '/images/brands/lingke.png', description: 'Geely\'s premium brand' }
];

export type Brand = {
  name: string;
  logo: string;
  description: string;
};