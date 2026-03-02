function Home() {
  return (
    <section id="home" style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div style={{ maxWidth: "600px" }}>
        <h2 style={{
          fontFamily: "Playfair Display",
          fontSize: "64px",
          lineHeight: "1.1",
          marginBottom: "25px"
        }}>
          Estilo é mais que aparência.
          <br />
          <span style={{ color: "#a30000" }}>É identidade.</span>
        </h2>

        <p style={{
          color: "#b5b5b5",
          marginBottom: "40px"
        }}>
          Cortes clássicos e modernos com precisão,
          técnica e atendimento premium.
        </p>

        <button style={{
          backgroundColor: "#a30000",
          color: "#ffffff",
          padding: "16px 48px",
          fontSize: "14px",
          fontWeight: "600",
          border: "2px solid #a30000",
          cursor: "pointer",
          letterSpacing: "2px",
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          borderRadius: "2px",
          textTransform: "uppercase",
          boxShadow: "0 4px 15px rgba(163, 0, 0, 0.3)",
          position: "relative",
          overflow: "hidden"
        }} 
        className="botao" 
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#8b0000";
          e.target.style.borderColor = "#8b0000";
          e.target.style.boxShadow = "0 8px 25px rgba(139, 0, 0, 0.5)";
          e.target.style.transform = "translateY(-2px)";
        }} 
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#a30000";
          e.target.style.borderColor = "#a30000";
          e.target.style.boxShadow = "0 4px 15px rgba(163, 0, 0, 0.3)";
          e.target.style.transform = "translateY(0)";
        }}>
          AGENDAR HORÁRIO
        </button>
      </div>
    </section>
  );
}

export default Home;