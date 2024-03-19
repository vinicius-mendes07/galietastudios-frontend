import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Container } from './styles';
import logo from '../../../assets/images/logo.svg';

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
      <div className="container">
        <img src={logo} alt="logo" />

        <div className={`user-container ${showMenu}`}>
          <button
            type="button"
            className="user"
            onClick={handleToggleMenu}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width="25px"
              height="auto"
              aria-hidden="true"
              className="x1lliihq xxk0z11 xvy4d1p x1afcbsf x174y0p0 x1a7gu1z"
              role="img"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.35 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm2.5-4.5a4.5 4.5 0 0 0-1.819 8.617c-3.809.815-6.68 3.992-6.68 8.442a1 1 0 0 0 .1.439c.634 1.296 2.146 2.143 3.624 2.665 1.543.544 3.342.837 4.922.837 1.58 0 3.38-.293 4.922-.837 1.479-.522 2.99-1.37 3.624-2.665a1 1 0 0 0 .101-.439c0-4.529-2.975-7.74-6.885-8.483A4.5 4.5 0 0 0 11.85 1.5zM7.74 19.777c-1.235-.436-2.038-.98-2.386-1.479.125-3.871 3.02-6.386 6.643-6.386 3.624 0 6.518 2.515 6.643 6.386-.348.5-1.15 1.043-2.387 1.48-1.32.465-2.894.722-4.256.722-1.361 0-2.935-.257-4.256-.723z"
              />
            </svg>
          </button>

          <div className="user-info">
            <Link
              to="/panel"
              onClick={closeMenu}
            >Meus dados
            </Link>
            <button
              type="button"
              onClick={closeMenu}
            >Sair
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
