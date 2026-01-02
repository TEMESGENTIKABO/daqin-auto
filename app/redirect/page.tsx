// app/redirect/page.tsx
'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  useEffect(() => {
    const path = searchParams.get('path') || '';
    const locale = 'en'; // Get from cookie if needed
    const redirectUrl = `/${locale}${path}`;
    
    // Use router.replace if you don't want back navigation
    router.replace(redirectUrl);
  }, [searchParams, router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}