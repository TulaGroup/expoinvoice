import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const okEmail = process.env.ADMIN_EMAIL || 'admin@expoinvoice.nl';
    const okPass  = process.env.ADMIN_PASSWORD || 'admin123';

    const isValid = email === okEmail && password === okPass;
    if (!isValid) {
      return NextResponse.json({ ok:false, message: 'Ongeldige inloggegevens' }, { status: 401 });
    }

    const token = Math.random().toString(36).slice(2) + '.' + Date.now().toString(36);
    const res = NextResponse.json({ ok:true });
    res.cookies.set('expoinvoice_session', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 dagen
    });
    return res;
  } catch (e) {
    return NextResponse.json({ ok:false, message: 'Onverwachte fout' }, { status: 400 });
  }
}
