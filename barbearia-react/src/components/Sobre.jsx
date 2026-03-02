function Sobre() {
  return (
    <section id="sobre" style={{background:"var(--gray-dark)"}}>
      <h2 className="title fade-in">Sobre Nós</h2>
      <p className="fade-in" style={{
        maxWidth:"850px",
        margin:"0 auto",
        fontSize:"18px",
        color:"var(--gray-light)"
      }}>
        Nossa barbearia foi pensada para oferecer não só um corte
        impecável, mas uma experiência completa de relaxamento,
        conforto e estilo. Ambiente premium, atendimento diferenciado
        e espaço moderno para cuidar de você. :contentReference[oaicite:2]{index=2}
      </p>
    </section>
  );
}

export default Sobre;