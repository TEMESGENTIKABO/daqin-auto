// Updated to have just a single array of 16 brands as in the image
export const brands = [
  { name: 'Mercedes', logo: '/images/brands/mercedes.png', description: 'German luxury and commercial vehicles' },
  { name: 'BMW', logo: '/images/brands/bmw.png', description: 'German luxury automotive' },
  { name: 'FOTON', logo: '/images/brands/foton.png', description: 'Chinese commercial vehicle manufacturer' },
  { name: 'Xiaomi', logo: '/images/brands/xiaomi.png', description: 'Tech giant entering EV market' },
  { name: 'Xpeng', logo: '/images/brands/xpeng.png', description: 'Chinese smart EV company' },
  { name: 'Aito', logo: '/images/brands/aito.png', description: 'Huawei-Seres joint EV brand' },
  { name: 'BYD', logo: '/images/brands/byd.png', description: 'World\'s leading EV manufacturer' },
  { name: 'TOYOTA', logo: '/images/brands/toyota.png', description: 'Japanese automotive manufacturer' },
  { name: 'Honda', logo: '/images/brands/honda.png', description: 'Japanese automotive and motorcycle manufacturer' },
  { name: 'Volkswagen', logo: '/images/brands/vw1.png', description: 'European automotive leader' },
  { name: 'Nissan', logo: '/images/brands/nissan.png', description: 'Japanese automotive manufacturer' },
  { name: 'MG', logo: '/images/brands/mg.png', description: 'British-born, now Chinese-owned automotive brand' },
  { name: 'LI', logo: '/images/brands/li.png', description: 'Li Auto - Chinese premium EV brand' },
  { name: 'AVATR', logo: '/images/brands/avatr.png', description: 'Huawei-backed EV brand' },
  { name: 'ZEEKR', logo: '/images/brands/zeekr.jpg', description: 'Premium electric mobility' },
  { name: 'LING KE', logo: '/images/brands/lingke.png', description: 'Geely\'s Lynk & Co brand (Chinese name)' }
];

export type Brand = {
  name: string;
  logo: string;
  description: string;
};