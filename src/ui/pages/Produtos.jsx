import { Link, useSearchParams } from 'react-router-dom'
import { SETTINGS, PRODUCTS } from '../../data'

const FALLBACK_CATEGORIES = [
  { slug: 'adesivos', title: 'Adesivos' },
  { slug: 'fachadas', title: 'Fachadas / ACM' },
  { slug: 'impressos', title: 'Impressos' },
]

export default function Produtos() {
  const cats = (SETTINGS?.categories?.length ? SETTINGS.categories : FALLBACK_CATEGORIES)
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') || 'all'

  const filtered = cat === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === cat)

  const handleSet = (slug) => {
    const next = new URLSearchParams(params)
    if (slug === 'all') next.delete('cat')
    else next.set('cat', slug)
    setParams(next, { replace: true })
  }

  return (
    <>
      <h1>Produtos</h1>

      {/* Filtros (chips) */}
      <div className="filters">
        <button
          className={`chip ${cat === 'all' ? 'active' : ''}`}
          onClick={() => handleSet('all')}
        >
          Todas
        </button>
        {cats.map((c) => (
          <button
            key={c.slug}
            className={`chip ${cat === c.slug ? 'active' : ''}`}
            onClick={() => handleSet(c.slug)}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* Lista / Estado vazio */}
      {filtered.length === 0 ? (
        <div className="empty">
          <h3>Catálogo em preparação</h3>
          <p className="muted">
            Os itens serão adicionados após validação com a Sutil Arte.
          </p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((p) => {
            const hasImg = Array.isArray(p.images) && p.images.length > 0
            return (
              <article className={`card ${!hasImg ? 'no-img' : ''}`} key={p.slug}>
                {hasImg && <img src={p.images[0]} alt={p.title} />}
                <div className="body">
                  <h3>{p.title}</h3>
                  {p.shortDescription && (
                    <p className="muted">{p.shortDescription}</p>
                  )}
                  <div className="row" style={{ marginTop: 8 }}>
                    {/* deixe só “Detalhes” por enquanto; WhatsApp fica pra depois */}
                    <Link className="btn" style={{ background:'#fff', color:'#1D2330', border:'1px solid var(--line)' }} to={`/produtos/${p.slug}`}>
                      Detalhes
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </>
  )
}
