import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import crypto from 'crypto';

function verify(token: string, secret: string){
  try{
    const [p, sig] = token.split('.');
    const expect = crypto.createHmac('sha256', secret).update(p).digest('hex');
    if (sig !== expect) return null;
    return JSON.parse(Buffer.from(p,'base64').toString('utf8'));
  }catch{ return null; }
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const protectedPaths = ['/admin', '/dashboard', '/crm'];
  const needsAuth = protectedPaths.some(p => url.pathname === p || url.pathname.startsWith(p + '/'));
  if (!needsAuth) return NextResponse.next();

  const token = req.cookies.get('session')?.value;
  const secret = process.env.APP_SESSION_SECRET || '';
  if (!token || !secret) return NextResponse.redirect(new URL('/login/admin', req.url));
  const payload = verify(token, secret);
  if (!payload?.email) return NextResponse.redirect(new URL('/login/admin', req.url));
  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*','/dashboard/:path*','/crm/:path*'] };
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Stuur automatisch alles naar /login/admin als root of /login bezocht wordt
  if (pathname === '/' || pathname === '/login') {
    return NextResponse.redirect(new URL('/login/admin', request.url));
  }

  return NextResponse.next();
}
