import { NextResponse } from 'next/server';
import crypto from 'crypto';

function sign(payload: any, secret: string){
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64');
  const sig = crypto.createHmac('sha256', secret).update(payloadB64).digest('hex');
  return `${payloadB64}.${sig}`;
}

export async function POST(req: Request){
  const body = await req.json();
  const email = (body?.email || '').toLowerCase().trim();
  const pass = body?.password || '';

  const adminEmail = (process.env.ADMIN_EMAIL || '').toLowerCase();
  const adminPass = process.env.ADMIN_PASSWORD || '';
  const secret = process.env.APP_SESSION_SECRET || '';

  if(!adminEmail || !adminPass || !secret){
    return NextResponse.json({ error: 'Server niet geconfigureerd' }, { status: 500 });
  }
  if(email !== adminEmail || pass !== adminPass){
    return NextResponse.json({ error: 'Ongeldige inloggegevens' }, { status: 401 });
  }
  const token = sign({ email, ts: Date.now() }, secret);
  const res = NextResponse.json({ ok: true });
  res.cookies.set('session', token, { httpOnly: true, sameSite: 'lax', secure: true, path: '/', maxAge: 60*60*8 });
  return res;
}
