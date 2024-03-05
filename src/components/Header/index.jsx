import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

// trocar de a para Link
// arrumar o href
// adicionar classe de acordo com pathname para todos os links

export default function Header() {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState('');

  function handleToggleMenu() {
    setShowMenu((prevState) => (prevState === '' ? 'show-menu' : ''));
  }

  return (
    <Container>
      <a href="/" className="logo logo-pc"><img src={logo} alt="logo" /></a>

      <nav>
        <ul>
          <div>
            <li>
              <a href="/" className={pathname === '/' ? 'active' : ''}>Galeria</a>
            </li>

            <li>
              <a href="/">Sobre nós</a>
            </li>
          </div>

          <a href="/" className="logo logo-mobile"><img src={logo} alt="logo" /></a>

          <div>
            <li>
              <a href="/">Promoções</a>
            </li>

            <li>
              <a href="/">Agendar</a>
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
