// app/api/redirect/route.ts
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '';
  const locale = 'en';
  
  return Response.redirect(new URL(`/${locale}${path}`, request.url), 302);
}