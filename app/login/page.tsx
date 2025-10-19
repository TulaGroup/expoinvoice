import { useState } from 'react';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string|null>(null);

  async function submit(e:any){
    e.preventDefault();
    const r = await fetch('/api/auth/login', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ email, password })
    });
    const data = await r.json();
    if(!r.ok){ setErr(data.error || 'Login mislukt'); return; }
    window.location.href = '/dashboard';
  }

  return (
    <main style={{display:'grid', placeItems:'center', minHeight:'70vh', padding:24}}>
      <form onSubmit={submit} style={{maxWidth:420, width:'100%', border:'1px solid #e5e7eb', borderRadius:16, padding:24}}>
        <h1>Inloggen</h1>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="E-mail" style={{width:'100%', padding:10, border:'1px solid #e5e7eb', borderRadius:10}} />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="Wachtwoord" style={{marginTop:12, width:'100%', padding:10, border:'1px solid #e5e7eb', borderRadius:10}} />
        {err && <div style={{color:'#b91c1c', marginTop:10}}>{err}</div>}
        <button style={{marginTop:16, width:'100%', padding:12, borderRadius:12, border:'none', background:'#0c2340', color:'#fff', fontWeight:800}}>Inloggen</button>
      </form>
    </main>
  );
}
