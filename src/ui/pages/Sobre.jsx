export default function Sobre() {
  return (
    <section className="sobre">
      <h1>Sobre</h1>

      <p className="muted" style={{ maxWidth: '760px', fontSize: '1.1rem' }}>
        A <strong>Sutil Arte</strong> atua com comunicação visual completa —
        produzindo adesivos, recortes, fachadas em ACM e impressos com qualidade.
        Nosso compromisso é oferecer atendimento ágil, criativo e acabamento
        profissional em cada projeto.
      </p>

      <div className="valores">
        <div className="valor">
          <span>🎯</span>
          <h3>Qualidade</h3>
          <p>Materiais e acabamentos de alto padrão, garantindo durabilidade e impacto visual.</p>
        </div>
        <div className="valor">
          <span>⚡</span>
          <h3>Prazos ágeis</h3>
          <p>Entrega eficiente sem comprometer o resultado final de cada produção.</p>
        </div>
        <div className="valor">
          <span>🤝</span>
          <h3>Atendimento humano</h3>
          <p>Suporte próximo e personalizado para cada cliente e necessidade.</p>
        </div>
      </div>
    </section>
  )
}
