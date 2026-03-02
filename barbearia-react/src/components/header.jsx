import React from 'react';
import './style.css';

function Header() {
  return (
    <header className="header-premium fade-in">
      <div className="logo">
        BARBEARIA <span>ELITE</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#agendamento">Agendamento</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <button className="btn-premium">Reservar</button>
    </header>
  );
}

export default Header;