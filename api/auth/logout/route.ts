import { NextResponse } from 'next/server';

export async function GET() {
  const res = NextResponse.redirect(new URL('/login/admin', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
  res.cookies.set('expoinvoice_session', '', { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 0 });
  return res;
}
