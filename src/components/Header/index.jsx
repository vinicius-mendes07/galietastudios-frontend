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

  function closeMenu() {
    setShowMenu('');
  }

  return (
    <Container>
      <Link
        to="/"
        className="logo logo-mobile"
        onClick={closeMenu}
      >
        <img src={logo} alt="logo" />
      </Link>

      <button type="button" className={`hamburguer ${showMenu}`} onClick={handleToggleMenu}>
        <div className="line line1" />
        <div className="line line3" />
      </button>
      <nav>
        <ul>
          <div>
            <li>
              <Link
                to="/"
                onClick={closeMenu}
              >
                Galeria
              </Link>
            </li>

            <li>
              <Link
                to="/"
                onClick={closeMenu}
              >
                Sobre nós
              </Link>
            </li>
          </div>

          <Link
            to="/"
            className="logo logo-pc"
            onClick={closeMenu}
          >
            <img src={logo} alt="logo" />

          </Link>

          <div>
            <li>
              <Link
                to="/"
                onClick={closeMenu}
              >
                Promoções
              </Link>
            </li>

            <li>
              <Link
                to="/schedule"
                onClick={closeMenu}
              >
                Agendar
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </Container>
  );
}
