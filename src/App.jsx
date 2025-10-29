import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="shell">
      <header className="topbar">
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16}}>
          <div className="brand">Sutil Arte</div>
          <nav className="menu">
            <NavLink to="/" end>Início</NavLink>
            <NavLink to="/produtos">Produtos</NavLink>
            <NavLink to="/trabalhos">Trabalhos</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </nav>
        </div>
      </header>

      <main className="content">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p><strong>Endereço:</strong> Av. João Kehrle, 2670 - Várzea / IPSEP, Serra Talhada - PE, 56912-060</p>
          <p><strong>Telefone:</strong> (87) 99975-6222</p>
          <p>© {new Date().getFullYear()} Sutil Arte — Comunicação Visual</p>
        </div>
      </footer>
    </div>
  )
}
