// app/api/redirect/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '';
  
  // Get locale from cookie or default to 'en'
  const locale = 'en';
  
  return NextResponse.redirect(new URL(`/${locale}${path}`, request.url));
}
