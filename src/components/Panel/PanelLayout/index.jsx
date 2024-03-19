import { Outlet } from 'react-router-dom';

import Header from '../Header';
import SideBar from '../SideBar';
import { Container } from './styles';

export default function PanelLayout() {
  return (
    <Container>
      <Header />
      <div className="content">
        <SideBar />
        <Outlet />
      </div>
    </Container>
  );
}
