import { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav">
      <a href="#hero" className="nav-logo" onClick={closeMenu}>
        <img src={`${import.meta.env.BASE_URL}docs/LibreUFOP_logo.jpeg`} alt="Logo LibreUFOP" />
        <span>Libre<strong>UFOP</strong></span>
      </a>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        {['sobre', 'canais', 'eventos', 'formacao'].map((section) => (
          <a key={section} href={`#${section}`} onClick={closeMenu}>
            {section === 'formacao' ? 'Formação' : section[0].toUpperCase() + section.slice(1)}
          </a>
        ))}
        <a href="#contato" className="nav-cta" onClick={closeMenu}>Contato</a>
      </div>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}

export default Navigation;
