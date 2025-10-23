'use client';
import { useState } from 'react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string | null>(null);

  function submit(e: any) {
    e.preventDefault();
    const okEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@expoinvoice.nl';
    const okPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

    if (email === okEmail && password === okPass) {
      window.location.href = '/admin';
    } else {
      setErr('Ongeldige inloggegevens');
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#f7f8fa' }}>
      <form
        onSubmit={submit}
        style={{
          width: '100%',
          maxWidth: 400,
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
        }}
      >
        <h1 style={{ color: '#0c2340' }}>Admin inloggen</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@expoinvoice.nl"
          style={{ width: '100%', padding: 10, marginTop: 10 }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="•••••••"
          style={{ width: '100%', padding: 10, marginTop: 10 }}
        />
        {err && <div style={{ color: '#b91c1c', marginTop: 10 }}>{err}</div>}
        <button
          style={{
            marginTop: 16,
            width: '100%',
            padding: 12,
            background: '#0c2340',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            fontWeight: 600,
          }}
        >
          Inloggen
        </button>
      </form>
    </main>
  );
}

