import { Link } from 'react-router-dom'
import { SETTINGS, PRODUCTS } from '../../data'

export default function Home() {
  return (
    <>
      {/* HERO vibrante */}
      <section className="hero">
        <div>
          <h1>Comunicação visual que destaca sua marca.</h1>
          <p>Placas, fachadas em ACM, adesivos e impressos com acabamento profissional.</p>
          <div className="row">
            <a
              className="btn"
              href={`https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent('Olá! Quero um orçamento.')}`}
              target="_blank"
            >
              Pedir orçamento
            </a>
            <Link className="btn ghost" to="/produtos">Ver produtos</Link>
          </div>
        </div>
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1571988840298-3b5301ef8c84?q=80&w=1600&auto=format&fit=crop"
          alt="Vitrine"
        />
      </section>

      {/* Destaques */}
      <section>
        <h2 className="section-title">Destaques</h2>
        <div className="grid">
          {PRODUCTS.slice(0,3).map(p => (
            <article className="card" key={p.slug}>
              <img src={p.images[0]} alt={p.title} />
              <div className="body">
                <h3>{p.title}</h3>
                <p className="muted">{p.shortDescription}</p>
                <div className="row">
                  <a
                    className="btn"
                    href={`https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent('Tenho interesse no produto: ' + p.title)}`}
                    target="_blank"
                  >WhatsApp</a>
                  <Link className="btn" style={{background:'#fff',color:'#1D2330',border:'1px solid #E6ECF4'}}
                        to={`/produtos/${p.slug}`}>Detalhes</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section>
        <h2 className="section-title">Instagram</h2>
        <div className="embed">
          <div>
            <p>
              Siga <a href={`https://instagram.com/${SETTINGS.instagram}`} target="_blank">@{SETTINGS.instagram}</a>
            </p>
            <p className="muted">(...)</p>
          </div>
        </div>
      </section>
    </>
  )
}
