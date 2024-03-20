import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Sidebar from '../Sidebar';
import { Container } from './styles';

export default function PanelLayout() {
  return (
    <Container>
      <Header />
      <div className="content">
        <Sidebar />
        <Outlet />
      </div>
    </Container>
  );
}
