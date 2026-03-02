function Servicos() {
  const servicos = [
    {title:"Corte Masculino", desc:"Cortes clássicos e modernos com técnica refinada."},
    {title:"Barba Premium", desc:"Design & acabamento com precisão profissional."},
    {title:"Sobrancelha", desc:"Modelagem facial para realçar o estilo."},
    {title:"Pacote VIP", desc:"Combo completo com serviços de luxo."}
  ];

  return (
    <section id="servicos">
      <h2 className="title fade-in">Nossos Serviços</h2>
      <div style={{
        display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))",
        gap:"40px"
      }}>
        {servicos.map((s,i) => (
          <div key={i} className="fade-in" style={{
            background:"var(--gray-dark)", padding:"30px", borderRadius:"8px"
          }}>
            <h3 style={{color:"var(--primary)", fontWeight:"600"}}>{s.title}</h3>
            <p style={{marginTop:"12px", color:"var(--gray-light)"}}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;