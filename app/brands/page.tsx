// /app/brands/page.tsx
"use client";

import BrandsModelsSection from '@/components/sections/brand-models/BrandsModelsSection';

export default function BrandsPage() {
  return (
    <main>
      {/* You can add a breadcrumb or additional content here if needed */}
      <BrandsModelsSection />
    </main>
  );
}