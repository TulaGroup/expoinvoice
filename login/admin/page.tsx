'use client';
import { useState } from 'react';

export default function AdminLogin() {
  const [email,setEmail]=useState(''); 
  const [password,setPassword]=useState(''); 
  const [err,setErr]=useState<string|null>(null);
  const [busy,setBusy]=useState(false);

  async function submit(e:any){
    e.preventDefault();
    setBusy(true); setErr(null);
    try {
      const res = await fetch('/api/auth/login', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ email, password })
      });
      if (res.ok) { window.location.href='/admin'; return; }
      const data = await res.json().catch(()=>({}));
      setErr(data?.message || 'Ongeldige inloggegevens');
    } catch (e:any) {
      setErr('Er ging iets mis. Probeer opnieuw.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#f7f8fa',fontFamily:'Inter, system-ui'}}>
      <form onSubmit={submit} style={{width:'100%',maxWidth:420,background:'#fff',border:'1px solid #e5e7eb',borderRadius:16,padding:24,boxShadow:'0 8px 24px rgba(16,24,40,.06)'}}>
        <h1 style={{margin:'0 0 8px',color:'#0c2340'}}>Admin inloggen</h1>

        <label style={{display:'block',fontSize:14,marginTop:12}}>E-mail</label>
        <input type="email" required value={email} onChange={e=>setEmail(e.target.value)}
               placeholder="admin@expoinvoice.nl"
               style={{width:'100%',padding:10,border:'1px solid #e5e7eb',borderRadius:10}}/>

        <label style={{display:'block',fontSize:14,marginTop:12}}>Wachtwoord</label>
        <input type="password" required value={password} onChange={e=>setPassword(e.target.value)}
               placeholder="••••••••"
               style={{width:'100%',padding:10,border:'1px solid #e5e7eb',borderRadius:10}}/>

        {err && <div style={{color:'#b91c1c',marginTop:10}}>{err}</div>}

        <button disabled={busy}
          style={{marginTop:16,width:'100%',padding:12,borderRadius:12,border:'none',background:'#0c2340',color:'#fff',fontWeight:800}}>
          {busy?'Bezig…':'Inloggen'}
        </button>
      </form>
    </main>
  );
}
