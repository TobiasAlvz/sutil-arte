export default function Contato() {
  return (
    <>
      <h1>Contato</h1>
      <p className="muted">
        Entre em contato com a equipe da <strong>Sutil Arte</strong> pelos canais oficiais abaixo.
      </p>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '20px',
          lineHeight: '1.8',
          fontSize: '1rem',
        }}
      >
        <li>
          <strong>Telefone:</strong> (87) 99975-6222
        </li>
        <li>
          <strong>Endereço:</strong> Av. João Kehrle, 2670 - Várzea / IPSEP,
          Serra Talhada - PE, 56912-060
        </li>
      </ul>

      <p
        className="muted"
        style={{
          marginTop: '24px',
          maxWidth: '700px',
        }}
      >
        Você pode entrar em contato por telefone, WhatsApp ou visitar nossa
        sede pessoalmente. 
      </p>
    </>
  )
}
