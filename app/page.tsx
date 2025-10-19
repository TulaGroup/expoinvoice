'use client';
import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string|null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: any) {
    e.preventDefault();
    setBusy(true); setErr(null);
    const r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await r.json();
    setBusy(false);
    if (!r.ok) { setErr(data.error || 'Login mislukt'); return; }
    window.location.href = '/dashboard';
  }

  return (
    <main style={{display:'grid', placeItems:'center', minHeight:'70vh', padding:24}}>
      <form onSubmit={submit} style={{maxWidth:420, width:'100%', border:'1px solid #e5e7eb', borderRadius:16, padding:24}}>
        <h1>Inloggen</h1>
        <label>E-mail</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required style={{width:'100%', padding:10, border:'1px solid #e5e7eb', borderRadius:10}} />
        <label style={{marginTop:12, display:'block'}}>Wachtwoord</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required style={{width:'100%', padding:10, border:'1px solid #e5e7eb', borderRadius:10}} />
        {err && <div style={{color:'#b91c1c', marginTop:10}}>{err}</div>}
        <button disabled={busy} style={{marginTop:16, width:'100%', padding:12, borderRadius:12, border:'none', background:'#0c2340', color:'#fff', fontWeight:800}}>
          {busy ? 'Bezig…' : 'Inloggen'}
        </button>
      </form>
    </main>
  );
}
