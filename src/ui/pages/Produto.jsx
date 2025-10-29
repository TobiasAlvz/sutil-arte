import { Link, useParams } from 'react-router-dom'
import { SETTINGS, PRODUCTS } from '../../data'

export default function Produto() {
  const { slug } = useParams()
  const p = PRODUCTS.find(x => x.slug === slug)
  if (!p) return <p className="muted">Produto não encontrado.</p>

  return (
    <div className="product">
      <img className="product-img" src={p.images[0]} alt={p.title} />
      <div className="product-info">
        <h1>{p.title}</h1>
        <p className="muted">{p.shortDescription}</p>
        <div className="row" style={{marginTop:8}}>
          <a className="btn" href={`https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent('Tenho interesse no produto: ' + p.title)}`} target="_blank">Pedir no WhatsApp</a>
          <Link className="btn ghost" to="/produtos">Voltar</Link>
        </div>
      </div>
    </div>
  )
}
