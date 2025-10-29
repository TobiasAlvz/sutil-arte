import { GALLERIES } from '../../data'

export default function Trabalhos() {
  return (
    <>
      <h1>Trabalhos</h1>
      <div className="grid">
        {GALLERIES.map(g => (
          <article className="card" key={g.slug}>
            <img src={g.images[0]} alt={g.title} />
            <div className="body">
              <h3>{g.title}</h3>
              <p className="muted">{g.images.length} imagens</p>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
