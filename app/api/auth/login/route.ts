export default function AdminHome(){
  return (
    <main style={{padding:32,fontFamily:'Inter, system-ui'}}>
      <h1>Admin – Onderhoud</h1>
      <p style={{color:'#64748b'}}>Hier beheer je de administratieve handleiding en instellingen.</p>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/crm/clients">Klanten</a></li>
        <li><a href="/admin/manual">Handleiding bewerken</a></li>
      </ul>
    </main>
  );
}
