import './App.css';
import React from 'react';
import aloagua from './assets/aloagua.png';

function App() {
  return (
    <div className="container">
      <img src={aloagua} alt="Logo Alô Água" className="logo" />

      <h1>Bem-vindo ao Alô Água!</h1>

      <h2>🚰 Produtos</h2>
      <ul className="produtos">
        <li>💧 Água da Rocha 20L — R$ 7,00</li>
        <li>💧 DaFonte 20L — R$ 8,00</li>
        <li>🚚 Entrega rápida na região</li>
      </ul>

      <h2>🕓 Horário de Funcionamento</h2>
      <p>Segunda a Sábado — 7h às 18h</p>
      <p>Domingo — 7h às 12h</p>

      <h2>📍 Onde estamos</h2>
      <iframe
        title="Localização Alô Água"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3971.4294478123816!2d-45.2393864!3d-5.5030767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92cd599017f152b9%3A0x11fc4bca9accd7f8!2zQWzDtCDDgWd1YQ!5e0!3m2!1spt-BR!2sbr!4v1744050556026!5m2!1spt-BR!2sbr"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <a
        href="https://wa.me/5599981324941?text=Olá! Gostaria de fazer um pedido de água."
        target="_blank"
        rel="noopener noreferrer"
        className="botao-whatsapp"
      >
        Pedir pelo WhatsApp
      </a>
    </div>
  );
}

export default App;
