// app/api/redirect/route.ts
export const dynamic = 'force-static';
export const revalidate = false;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '';
  const locale = 'en'; // Get locale from cookie if needed
  
  // Return the redirect URL as JSON
  return Response.json({
    redirectUrl: `/${locale}${path}`
  });
}