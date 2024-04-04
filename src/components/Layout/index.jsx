import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout() {
  return (
    <>
      <div style={{
        backgroundColor: '#212121',
        padding: '14px 32px',
      }}
      >
        <Link
          to="/schedule"
          style={{
            display: 'block',
            margin: '0 auto',
            color: '#fff',
            width: 'fit-content',
            textAlign: 'center',
          }}
        >🌟Agende já e receba um upgrade nas sobrancelhas grátis!
        </Link>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
