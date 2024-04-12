import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  const [showMenu, setShowMenu] = useState('');
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  function handleToggleMenu() {
    setShowMenu((prevState) => (prevState === '' ? 'show-menu' : ''));
  }

  function closeMenu() {
    setShowMenu('');
  }

  const handleClick = (event, sectionId) => {
    if (!isHomePage) {
      event.preventDefault();
      window.location.href = `/#${sectionId}`;
    }
    closeMenu();
  };

  useEffect(() => {
    if (isHomePage) {
      const { hash } = window.location;
      if (hash) {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView();
        }
      }
    }
  }, [isHomePage]);

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
        <div className="line line2" />
      </button>
      <nav>
        <ul>
          <div>
            <li>
              <a
                href={isHomePage ? '#visit-us' : '/#visit-us'}
                onClick={(event) => handleClick(event, 'visit-us')}
              >
                Visite-nos
              </a>
            </li>

            <li>
              <a
                href={isHomePage ? '#about' : '/#about'}
                onClick={(event) => handleClick(event, 'about')}
              >
                Sobre Nós
              </a>
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
              <a
                href={isHomePage ? '#services' : '/#services'}
                onClick={(event) => handleClick(event, 'services')}
              >
                Serviços
              </a>
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
