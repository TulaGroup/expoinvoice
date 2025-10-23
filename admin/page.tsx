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
    </main>
  );
}
