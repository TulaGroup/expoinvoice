'use client';
import Link from 'next/link';

export default function LoginChooser() {
  return (
    <main style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#f7f8fa',fontFamily:'Inter, system-ui'}}>
      <div style={{width:'100%',maxWidth:860,display:'grid',gap:24}}>
        <header style={{textAlign:'center'}}>
          <h1 style={{margin:0,color:'#0c2340'}}>ExpoInvoice</h1>
          <p style={{marginTop:8,color:'#475569'}}>Kies je inlogtype</p>
        </header>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:24}}>
          <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:16,padding:24,boxShadow:'0 8px 24px rgba(16,24,40,.06)'}}>
            <h2 style={{marginTop:0}}>Login voor klanten</h2>
            <p style={{color:'#64748b'}}>Bekijk facturen en status.</p>
            <Link href="/registratie" style={{display:'inline-block',marginTop:8,padding:'12px 16px',borderRadius:12,background:'#0c2340',color:'#fff',fontWeight:800,textDecoration:'none'}}>Klant inloggen</Link>
          </div>

          <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:16,padding:24,boxShadow:'0 8px 24px rgba(16,24,40,.06)'}}>
            <h2 style={{marginTop:0}}>Admin / Beheer</h2>
            <p style={{color:'#64748b'}}>Onderhoud administratie & CRM.</p>
            <Link href="/login/admin" style={{display:'inline-block',marginTop:8,padding:'12px 16px',borderRadius:12,background:'#0c2340',color:'#fff',fontWeight:800,textDecoration:'none'}}>Admin inloggen</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
