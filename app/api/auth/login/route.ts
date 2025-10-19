import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

function sign(payload: any, secret: string){
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64');
  const sig = crypto.createHmac('sha256', secret).update(payloadB64).digest('hex');
  return `${payloadB64}.${sig}`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).end();
  const { email = '', password = '' } = req.body || {};
  const adminEmail = (process.env.ADMIN_EMAIL || '').toLowerCase();
  const adminPass = process.env.ADMIN_PASSWORD || '';
  const secret = process.env.APP_SESSION_SECRET || '';
  if(!adminEmail || !adminPass || !secret) return res.status(500).json({ error:'Server niet geconfigureerd' });
  if(email.toLowerCase() !== adminEmail || password !== adminPass) return res.status(401).json({ error:'Ongeldige inloggegevens' });

  const token = sign({ email, ts: Date.now() }, secret);
  res.setHeader('Set-Cookie', `session=${token}; HttpOnly; Path=/; Max-Age=${60*60*8}; SameSite=Lax; Secure`);
  res.status(200).json({ ok:true });
}
