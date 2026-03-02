function Contato() {
  return (
    <section id="contato" style={{background:"var(--gray-dark)"}}>
      <h2 className="title fade-in">Contato & Localização</h2>

      <div className="fade-in" style={{maxWidth:"800px", margin:"0 auto", fontSize:"18px"}}>
        <p>📍 Rua Exemplo, 123 – São Paulo/SP</p>
        <p>📞 (11) 99999-9999</p>
        <p>✉ contato@seubarbeiro.com</p>
        <div style={{marginTop:"25px"}}>
          <iframe
            title="Mapa"
            src="https://maps.google.com/maps?q=Sao%20Paulo&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{border:"none", borderRadius:"8px"}}
          />
        </div>
      </div>
    </section>
  );
}

export default Contato;