// app/models/page.tsx - SERVER COMPONENT
import { Suspense } from "react";
import ModelsUI from "@/components/models/ModelsUI"; // Updated component without props

// You can still fetch data for SEO or initial props if needed
async function getInitialData() {
  // You can fetch data from your database/API here for SEO purposes
  // This will only be used for initial server-side rendering
  // The client-side context will take over for language switching
  
  return {
    // This data is not used by ModelsUI anymore, but you can keep it for other purposes
    seoTitle: "Vehicle Models",
    seoDescription: "Browse our collection of vehicles",
  };
}

export default async function ModelsPage() {
  const data = await getInitialData();

  return (
    <Suspense fallback={<ModelsLoading />}>
      {/* ModelsUI now uses context internally, no props needed */}
      <ModelsUI />
    </Suspense>
  );
}

function ModelsLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="section-container py-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="hidden lg:block space-y-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
            <div className="lg:col-span-3">
              <div className="h-96 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}