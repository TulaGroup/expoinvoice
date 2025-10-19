import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Zorg dat /Login of /inloggen naar /login gaat
  if (
    url.pathname.toLowerCase() === '/login' ||
    url.pathname.toLowerCase() === '/inloggen'
  ) {
    url.pathname = '/login';
    return NextResponse.rewrite(url);
  }

  if (url.pathname === '/Login') {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // fallback → standaard laten doorgaan
  return NextResponse.next();
}

// Activeer middleware op de juiste routes
export const config = {
  matcher: ['/Login', '/login', '/inloggen'],
};
