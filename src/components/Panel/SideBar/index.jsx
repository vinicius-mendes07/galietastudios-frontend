import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const { pathname } = useLocation();

  function handleToggleSidebar() {
    setShowSidebar((prevState) => !prevState);
  }

  function closeMenu() {
    setShowSidebar('');
  }

  return (
    <Container $showSidebar={showSidebar}>
      <div className="sidebar">
        <Link
          className={pathname === '/panel' || pathname === '/panel/confirmed' ? 'active' : ''}
          to="/panel"
          onClick={closeMenu}
        >
          Agendamentos
        </Link>
        <Link
          className={pathname === '/panel/services' ? 'active' : ''}
          to="/panel/services"
          onClick={closeMenu}
        >
          Serviços
        </Link>

      </div>

      <button
        type="button"
        className="btn-open-sidebar"
        onClick={handleToggleSidebar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
      </button>
    </Container>
  );
}
