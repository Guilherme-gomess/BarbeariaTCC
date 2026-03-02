function Agendamento() {
  return (
    <section id="agendamento">
      <h2 className="title fade-in">Agende Seu Horário</h2>

      <form className="fade-in" style={{
        display:"flex", flexDirection:"column", gap:"20px", maxWidth:"600px", margin:"0 auto"
      }}>
        <input placeholder="Nome Completo" />
        <input placeholder="Telefone" />
        <input type="date" />
        <button type="submit" className="btn">Confirmar Agendamento</button>
      </form>
    </section>
  );
}

export default Agendamento;