export default function AdminHome(){
  return (
    <main style={{padding:32,fontFamily:'Inter, system-ui'}}>
      <h1>Admin – Beheer</h1>
      <p style={{color:'#64748b'}}>Welkom! Kies een onderdeel:</p>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/crm/clients">Klanten</a></li>
        <li><a href="/support">Support</a></li>
      </ul>
      <div style={{marginTop:24}}>
        <a href="/api/auth/logout" style={{padding:'8px 12px',borderRadius:10,background:'#e11d48',color:'#fff',textDecoration:'none'}}>Uitloggen</a>
      </div>
    </main>
  );
}
