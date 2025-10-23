import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const okEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@expoinvoice.nl';
  const okPass  = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';
  const ok = email===okEmail && password===okPass;
  return NextResponse.json({ ok });
}
