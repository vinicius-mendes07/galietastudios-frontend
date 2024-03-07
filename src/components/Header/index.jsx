import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

// arrumar o href

export default function Header() {
  const [showMenu, setShowMenu] = useState('');

  function handleToggleMenu() {
    setShowMenu((prevState) => (prevState === '' ? 'show-menu' : ''));
  }

  return (
    <Container>
      <Link to="/" className="logo logo-pc"><img src={logo} alt="logo" /></Link>

      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Galeria</Link>
            </li>

            <li>
              <Link to="/">Sobre nós</Link>
            </li>
          </div>

          <Link to="/" className="logo logo-mobile"><img src={logo} alt="logo" /></Link>

          <div>
            <li>
              <Link to="/">Promoções</Link>
            </li>

            <li>
              <Link to="/schedule">Agendar</Link>
            </li>
          </div>
        </ul>
      </nav>
      {/*
        <div className="close-hamburguer" />
      <div className={`hamburguer ${showMenu}`} onClick={handleToggleMenu}>
        <div className="line line1" />
        <div className="line line2" />
        <div className="line line3" />
      </div> */}
    </Container>
  );
}
