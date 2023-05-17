import "./Footer.css";
import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <p>© {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por <a href="https://tonnytg.com.br" target="_blank" rel="noopener noreferrer">tonnytg.com.br</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
