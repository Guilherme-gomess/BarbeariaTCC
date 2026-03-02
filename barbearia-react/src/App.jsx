import { useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Servicos from "./components/Servicos"
import Agendamento from "./components/Agendamento"
import Sobre from "./components/Sobre"
import Contato from "./components/Contato"

function App() {
  const [pagina, setPagina] = useState("home")

  const renderPage = () => {
    switch (pagina) {
      case "home": return <Home />
      case "servicos": return <Servicos />
      case "agendamento": return <Agendamento />
      case "sobre": return <Sobre />
      case "contato": return <Contato />
      default: return <Home />
    }
  }

  return (
    <>
      <Header setPagina={setPagina} />
      {renderPage()}
    </>
  )
}

export default App